import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";

formDataValueFromLocalStorage();

function onFormSubmit(event) {
    event.preventDefault();

    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
};

function onFormChange(event) {
    const formData = {
        email: email.value,
        message: message.value,
    };

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function formDataValueFromLocalStorage() {
    const formDataValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (formDataValue) {
        message.value = formDataValue.message;
        email.value = formDataValue.email;
    };
};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormChange, 500));