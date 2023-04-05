const iframeEl=document.querySelector("#vimeo-player")
import Player from '@vimeo/player';
// Створити об'єкт плеєра:
const player = Player('iframe');

// Отримати збережену позицію відео з локального сховища
const savedTime = localStorage.getItem('savedTime');

// Якщо збережена позиція відео існує, то встановити її
if (savedTime) {
  player.setCurrentTime(savedTime);
}

// Підписатись на подію "ended" для збереження позиції відео при завершенні відтворення
player.on('ended', function() {
  localStorage.removeItem('savedTime');
});

// Підписатись на подію "timeupdate" для збереження позиції відео при зміні часу відео
player.on('timeupdate', function(data) {
  localStorage.setItem('savedTime', data.seconds);
});

