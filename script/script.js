/* Variable Declarations */
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
let currentTime = document.querySelector(".current");
let restTime = document.querySelector('.left');
let progressBar = document.querySelector(".progressBar");
let volumeSlider = document.querySelector(".slider");
let volumeSliderContainer = document.querySelector(".sound-slider");
const volumeButton = document.querySelector(".soundbutton");
const audio = new Audio("netsky.mp3");

audio.volume = 0.5;

/* Video Controls and Buttons */
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

previousButton.addEventListener('click', function () {
    audio.currentTime = 0;
    playButton.style.display = "none";
    pauseButton.style.display = "block";
})

nextButton.addEventListener('click', function () {
    audio.currentTime = audio.currentTime + 5;
})

/* Volume Adjustments */
volumeButton.addEventListener("mouseover", function () {
    volumeSliderContainer.classList.add("show");
})

volumeSliderContainer.addEventListener("mouseleave", function () {
    volumeSliderContainer.classList.remove("show");
})

volumeSlider.addEventListener("mousemove", function (e) {
    var volume = e.target.value / 100;
    audio.volume = volume;
})

/* Time updates */
audio.addEventListener("timeupdate", function () {
    currentTime.innerHTML = currentAudio(audio.currentTime);
    restTime.innerHTML = remainingAudio();
    progressBar.style.width = audio.currentTime * 100 / audio.duration + "%";
})

function currentAudio(seconds) {
    minutes = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
}

function remainingAudio(seconds) {
    audioTimeLeft = parseInt(audio.duration) - parseInt(audio.currentTime),
        seconds = audioTimeLeft % 60;
    minutes = Math.floor(audioTimeLeft / 60) % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return "-" + minutes + ":" + seconds;
}