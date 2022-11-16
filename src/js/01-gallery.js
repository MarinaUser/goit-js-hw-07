
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
galleryContainer.addEventListener('click', onGalleryClick);

function createGalleryItems(items) {
  return items
    .map(item => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function onGalleryClick(e) {
  e.preventDefault();

  const isGalleryImg = e.target.classList.contains("gallery__image");
  if (!isGalleryImg) {
    return;
  }

  
const modal = basicLightbox.create(
    `
     <img src="${e.target.dataset.source}">
`,
    {
      onShow: modal => {
        document.addEventListener('keydown', onPressEscapeBtn);
      },

      onClose: modal => {
        document.removeEventListener('keydown', onPressEscapeBtn);
      },
    },
  );

  modal.show();

  function onPressEscapeBtn(e) {
    if (e.code === 'Escape') {
      modal.close();
    }
  }
}