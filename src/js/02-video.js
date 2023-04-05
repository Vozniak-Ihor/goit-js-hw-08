// import throttle from 'lodash.throttle';

// const VIDEO_PLAYER_KEY = "videoplayer-current-time";
// const videoPlayer = document.querySelector("#video-player");
// let currentTime = localStorage.getItem(VIDEO_PLAYER_KEY) || 0;

// function saveCurrentTime() {
//   localStorage.setItem(VIDEO_PLAYER_KEY, videoPlayer.currentTime);
// }

// videoPlayer.addEventListener("timeupdate", throttle(saveCurrentTime, 1000));

// videoPlayer.currentTime = currentTime;

const iframeEl = document.querySelector('#vimeo-player');
import Player from '@vimeo/player';
let throttle = require('lodash.throttle');
const player = new Player(iframeEl, {
  id: 19231868,
  width: 640,
});

player.on(
  'timeupdate',
  throttle(function (data) {
    let timeOnPlayer = data.seconds;
    if (localStorage) {
      localStorage.setItem('track video playback', timeOnPlayer);
    } else {
      console.log(
        'This browser does not track video playback, if you restart the video will start from the beginning.'
      );
    }
  }, 1000)
);

if (localStorage.getItem('track video playback')) {
  player.setCurrentTime(
    JSON.parse(localStorage.getItem('track video playback'))
  );
}
