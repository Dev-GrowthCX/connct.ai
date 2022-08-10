const text_container = document.getElementById("toggle_link")
const img_container = document.getElementById("toggle_img")
const video_container = document.getElementById("toggle_video")
const text = ['QR code', 'URL link']

async function cycle() {
    text_container.innerText = text[0];
    img_container.classList.add('hidden')
    video_container.classList.remove('hidden')
    video_container.currentTime = 0;
    video_container.play()
    await new Promise(r => setTimeout(r, 5400));
    text_container.innerText = text[1];
    video_container.currentTime = 5.2;
    video_container.pause()
    console.log(video_container.currentTime)
    video_container.classList.add('hidden')
    img_container.classList.remove('hidden')
    await new Promise(r => setTimeout(r, 4000));
    cycle();
}
cycle();