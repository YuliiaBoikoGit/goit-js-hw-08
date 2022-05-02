import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = currentTime => {
    localStorage.setItem('videoplayer-current-time', currentTime.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTimeValue = localStorage.getItem('videoplayer-current-time');

if (currentTimeValue) {
    player.setCurrentTime(currentTimeValue);
};
