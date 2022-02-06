const VIDEO_ELEMENT = document.getElementById("video");
const BUTTON_ELEMENT = document.getElementById("button");

// Prompt user to select media stream, pass to video element and then play

const selectMediaToStream  = async () => {
    try{
        const MEDIASTREAM = await navigator.mediaDevices.getDisplayMedia();
        console.log(MEDIASTREAM)
        // VIDEO_ELEMENT.setAttribute("src",MEDIASTREAM);
        VIDEO_ELEMENT.srcObject = MEDIASTREAM;
        VIDEO_ELEMENT.onloadeddata = () => {
            VIDEO_ELEMENT.play(); 
        }
    }catch(error){
        // console.error();
        console.log("Whoops error here", error);
    }
}

BUTTON_ELEMENT.addEventListener("click",async () => {
    // Disable Button
    BUTTON_ELEMENT.disabled = true;
    // Start Picture in Picture
    await VIDEO_ELEMENT.requestPictureInPicture();
    // Reset Button
    BUTTON_ELEMENT.disabled = false;
})

// Onload
selectMediaToStream();