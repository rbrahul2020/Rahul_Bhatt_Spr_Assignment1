import {images} from './data.js'

const length = images.length;
const maxTitleLength = 26;
// add id to each obj of "images" array

function giveTitle(title)
{
    const length = title.length
    if(length <= maxTitleLength) return(title);
    let shortTitle = "",prefix = maxTitleLength/2-2;
    for(let i=0;i<prefix;i++)
    {
        shortTitle += title[i];
    }
    shortTitle += "...";
    for(let i=prefix-1;i>=0;i--)
    {
        shortTitle += title[length-i-1];
    }
    return(shortTitle);
}

for(let i=0;i<length;i++)
{
   images[i].id = i;
}

const imagesListContainer = document.querySelector(".images-list-container");



// iterate all the images
const content = images.reduce(function(content, image){
    content += `<div class="image-info" id=${image.id}>
    <img class="left-image" src=${image.previewImage} />
    <h6 class="left-image-title">${giveTitle(image.title)}</h6>
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

// remove "image-info-selected" class from presently showing image
function removeSelectedClass()
{
    const rightImageTitle = document.querySelector(".right-image-title");
    const id = Number(rightImageTitle.id);

    const imageInfo = document.querySelector(`.image-info[id="${id}"]`);
    imageInfo.classList.remove("image-info-selected");
}

// give OnClick Events to all "image-info" elements
function giveOnMouseClickEvents(images)
{
    const imagesInfo = document.querySelectorAll(".image-info");
    function giveEvent(imageInfo)
    {
        const id = Number(imageInfo.id);
        imagesInfo[id].addEventListener("click",function(){
            removeSelectedClass();
            showImage(images[id]);
        });
    }

    imagesInfo.forEach(function(imageInfo){
        giveEvent(imageInfo);
    });
}

giveOnMouseClickEvents(images);


function keyDownEvent(event)
{
    const rightImageTitle = document.querySelector(".right-image-title");
    let id = Number(rightImageTitle.id);
    if(event.key === "ArrowUp" && id>=1)
    {
        id--;
        removeSelectedClass();
        showImage(images[id]);
    }
    else if(event.key === "ArrowDown" && id<(images.length-1))
    {
        id++;
        removeSelectedClass();
        showImage(images[id]);
    }
}

document.addEventListener("keydown",keyDownEvent);

const rightImageTitle = document.querySelector(".right-image-title");

rightImageTitle.addEventListener("input",function(){
    const rightImageTitle = document.querySelector(".right-image-title");
    const id = Number(rightImageTitle.id);
    const value = rightImageTitle.value;
    
    const infoImage = document.querySelector(`.image-info[id="${id}"]`);
    const leftImageTitle = infoImage.children[1];
    images[id].title = value;
    leftImageTitle.innerHTML = giveTitle(value);
});