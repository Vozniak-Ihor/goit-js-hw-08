import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this lin

console.log(galleryItems);

function createPhotoCards(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join("");
}

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createPhotoCards(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  doubleTapZoom: 1.7,
  alertErrorMessage: "Image not found, next image will be loaded",
});

gallery.on("shown.simplelightbox", function handleGalleryShown(event) {
  event.preventDefault();
  console.log("Everything works fine");
});

gallery.on("error.simplelightbox", function handleGalleryError(event) {
  console.log(event, "Something wrong");
});
