import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
       />
    </a>
 </div>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryContainer.addEventListener("click", clickOpenModal);

function clickOpenModal(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `
	<img
      class="gallery__image"
      src="${evt.target.dataset.source}"
    />
`,
    {
      onShow: (instance) => {},
    },
    {
      onClose: (instance) => {},
    }
  );

  instance.show();
}
