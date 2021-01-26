/* Variable Declarations */
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const currentTime = document.querySelector(".current");
const restTime = document.querySelector('.left');
const progressBar = document.querySelector(".progressBar");
const volumeSlider = document.querySelector(".slider");
const volumeSliderContainer = document.querySelector(".sound-slider");
const volumeButton = document.querySelector(".soundbutton");
const audio = new Audio("netsky.mp3");

audio.volume = 0.5;


const songs = [
    {
      cover: "../images/netsky.png",
      artist: "Netsky",
      songName: "I see the future in your eyes",
      audio: "../songs/netsky.mp3"
    },
    {
      cover: "../images/hybridminds.PNG",
      artist: "Hybrid Minds",
      songName: "Bloodline - Hybrid Minds Remix",
      audio: "../songs/bloodline.mp3"
    }
]

/* Video Controls and Buttons */
playButton.addEventListener('click', () => {
    if (playButton.classList.contains("pause")) {
        playButton.classList.remove("pause");
        audio.pause();
    } else {
        playButton.classList.add("pause")
        audio.play();
    }
})

previousButton.addEventListener('click', () => {
    audio.currentTime = 0;
    playButton.style.display = "none";
    pauseButton.style.display = "block";
})

nextButton.addEventListener('click', () => {
    audio.currentTime = audio.currentTime + 5;
})

/* Volume Adjustments */
volumeButton.addEventListener("mouseover", () => {
    volumeSliderContainer.classList.add("show");
})

volumeSliderContainer.addEventListener("mouseleave", () => {
    volumeSliderContainer.classList.remove("show");
})

volumeSlider.addEventListener("mouseout", (e) => {
    var volume = e.target.value / 100;
    audio.volume = volume;
})

/* Time updates */
audio.addEventListener("timeupdate", () => {
    currentTime.innerHTML = currentAudio(audio.currentTime);
    restTime.innerHTML = remainingAudio();
    progressBar.style.width = audio.currentTime * 100 / audio.duration + "%";
})

const currentAudio = seconds => {
    minutes = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
}

const remainingAudio = seconds => {
    audioTimeLeft = parseInt(audio.duration) - parseInt(audio.currentTime),
        seconds = audioTimeLeft % 60;
    minutes = Math.floor(audioTimeLeft / 60) % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return "-" + minutes + ":" + seconds;
}