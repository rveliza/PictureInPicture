const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play.
async function selectMediaStream() {
    try {
        // something
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('whoops, error here:', error)
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})

// On Load
selectMediaStream();