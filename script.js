const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
let currentTime = document.querySelector(".current");
let restTime = document.querySelector('.left');
const audio = new Audio("netsky.mp3");
let progressBar = document.querySelector(".progressBar");
let volumeSlider = document.querySelector(".slider");
let volumeSliderContainer = document.querySelector(".sound-slider");
const volumeButton = document.querySelector(".soundbutton");

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

volumeButton.addEventListener('click', function() {
    audio.volume = 0;
})

volumeButton.addEventListener("mouseover", function() {
    volumeSliderContainer.classList.toggle("show");
})

volumeSlider.addEventListener("mousemove", function(e) {
    var volume = e.target.value / 100;
    audio.volume = volume;
})

audio.addEventListener("timeupdate", function () {
    currentTime.innerHTML = currentAudio(audio.currentTime);
    progressBar.style.width =  audio.currentTime * 100 / audio.duration + "%";
})

function currentAudio(seconds) {
    minutes = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
}

audio.addEventListener("timeupdate", function () {
    var timeleft = document.querySelector('.left'),
        songDuration = parseInt( audio.duration ),
        currentAudioTime = parseInt( audio.currentTime ),
        audioTimeLeft = songDuration - currentAudioTime,
        seconds, minutes;
    
    seconds = audioTimeLeft % 60;
    minutes = Math.floor( audioTimeLeft / 60 ) % 60;
    seconds = seconds < 10 ? "0"+seconds : seconds;
    minutes = minutes < 10 ? "0"+minutes : minutes;
    timeleft.innerHTML = minutes+":"+seconds;
}, false);