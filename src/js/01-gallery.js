// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryItemsContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryItemsContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ original, description, preview }) => {
        return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    }).join('');
};


const lightboxGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

lightboxGallery.on('show.simplelightbox');