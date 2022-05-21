import {images} from './data.js'

console.log(images);

const imagesListContainer = document.querySelector(".images-list-container");
console.log(imagesListContainer);

const length = images.length;

let content = "";
for(let i=0;i<length;i++)
{
    content += `<div class="image-info" id="2">
    <img class="left-image" src=${images[i].previewImage} />
    <h6 class="left-image-title">${images[i].title}</h6>
    </div>`
}

imagesListContainer.innerHTML = content;