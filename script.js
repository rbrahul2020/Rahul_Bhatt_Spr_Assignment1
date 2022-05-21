import {images} from './data.js'

console.log(images);

const imagesListContainer = document.querySelector(".images-list-container");
console.log(imagesListContainer);

const length = images.length;

// iterate all the images
const content = images.reduce(function(content, image){
    content += `<div class="image-info" id="2">
    <img class="left-image" src=${image.previewImage} />
    <h6 class="left-image-title">${image.title}</h6>
    </div>`;

    return(content);
},"");

// assign images-list-container data
imagesListContainer.innerHTML = content;

