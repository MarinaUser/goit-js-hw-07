import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

function createGalleryItems(items) {
  return items
    .map(item => {
      return `<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;
    })
    .join('');
}


let lightbox = new SimpleLightbox('.gallery__item', { 
    captionsData: 'alt',
    captionDelay: 250,
});