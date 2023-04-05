import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
         </a>
       </li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
galleryEl.addEventListener("click", galleryItemClick);

function galleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imgSource = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${imgSource}" width = "800"; height = "600">`
  );

  instance.show();
}
