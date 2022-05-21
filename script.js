import {images} from './data.js'

const length = images.length;

// add id to each obj of "images" array
for(let i=0;i<length;i++)
{
   images[i].id = i;
}

const imagesListContainer = document.querySelector(".images-list-container");



// iterate all the images
const content = images.reduce(function(content, image){
    content += `<div class="image-info" id=${image.id}>
    <img class="left-image" src=${image.previewImage} />
    <h6 class="left-image-title">${image.title}</h6>
    </div>`;

    return(content);
},"");

// assign images-list-container data
imagesListContainer.innerHTML = content;

const imagesInfo = document.querySelector(".images-info");

// show given "image" in right side
function showImage(image)
{
    const id = image.id;
    const previewImage = image.previewImage;
    const title = image.title;

    const imageInfo = document.querySelector(`.image-info[id="${id}"]`);
    imageInfo.classList.add("image-info-selected");
    const rightImage = document.querySelector(".right-image");
    rightImage.src = previewImage;
    const rightImageTitle = document.querySelector(".right-image-title");
    rightImageTitle.value = title;
    rightImageTitle.id = id;
}

const defaultShowImageID = 0;
showImage(images[defaultShowImageID]);