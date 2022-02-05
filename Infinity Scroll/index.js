let photosArray = [];
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
// Unsplash API
const count = 30;
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
const apiKEY = "n2D1GFO9VIFVbW5ZSsOLJhHrkMaTUGqKIZs2GnWLUZY";
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKEY}&count=${count}`;

const showLoader = () =>{
    loader.hidden = false;
    imageContainer.hidden = true;
}
const hideLoader = () => {
    loader.hidden = true;
    imageContainer.hidden = false;
}

const setAttributes = (element,attribute) => {
    for(const key in attribute){
        element.setAttribute(key,attribute[key]);
    }
}

const imageLoaded = () => {
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true;
        console.log("ready = ", ready);
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
        img.addEventListener("load",imageLoaded)
        // Put <img> inside <a> then <a> into <img container>
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
    // hideLoader();
}

const getPhotosFromUnsplash = async () => {
    // showLoader()
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
        ready = true;
        getPhotosFromUnsplash();
        console.log("loadmore");
    }
})

// Onload
getPhotosFromUnsplash();