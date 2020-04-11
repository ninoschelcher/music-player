const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const previousButton = document.querySelector('.previous');
const NextButton = document.querySelector('.next');
let currentTime = document.querySelector(".current");
let restTime = document.querySelector('.left');
const audio = new Audio("netsky.mp3");



playButton.addEventListener('click', function () {
    audio.play();
    playButton.style.display = "none";
    pauseButton.style.display = "block";
    event.preventDefault();
})

pauseButton.addEventListener('click', function () {
    audio.pause();
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    event.preventDefault();
})

audio.addEventListener("timeupdate", function () {
    let s = parseInt(audio.currentTime % 60);
    let m = parseInt((audio.currentTime / 60) % 60);
    currentTime.innerHTML = m + ':' + s;
}, false);

previousButton.addEventListener('click', function () {
    audio.currentTime = 0;
    audio.play();
})

if (audio.onended) {
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    audio.currentTime = 0;
    console.log('yup');
}