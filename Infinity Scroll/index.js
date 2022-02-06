let photosArray = [];
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let count = 5;
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
const apiKEY = "n2D1GFO9VIFVbW5ZSsOLJhHrkMaTUGqKIZs2GnWLUZY";
let apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKEY}&count=${count}`;

const setAttributes = (element,attribute) => {
    for(const key in attribute){
        element.setAttribute(key,attribute[key]);
    }
}

const imageLoaded = () => {
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true;
        count = 30;
        apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKEY}&count=${count}`;
    }
}

const displayPhotos = () => {
    totalImages = photosArray.length;
    photosArray.forEach((photo)=>{
        const item = document.createElement('a');
        setAttributes(item,{href:photo.links.html,target:"_blank"})
        const img = document.createElement("img");
        setAttributes(img,{src:photo.urls.regular,alt:photo.alt_description,title:photo.alt_description});
        // Event Listener, Check when each image is done loading
        img.addEventListener("load",imageLoaded);
        // Put <img> inside <a> then <a> into <img container>
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Unsplash API
const getPhotosFromUnsplash = async () => {
    try{
        const response = await fetch(apiURL);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhotos();
    }
    catch(error){
        console.error();
    }
}

// Scrolling

window.addEventListener("scroll",()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        imagesLoaded = 0;
        getPhotosFromUnsplash();
    }
})

// Onload
getPhotosFromUnsplash();