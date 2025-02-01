document.getElementById("playPauseButton").addEventListener("click", function () {
    let video = document.getElementById("myVideo");
    
    if (video.paused) {
        video.play();
        this.innerHTML = "<i class='bx bx-pause-circle play-video-icon' ></i>";
    } else {
        video.pause();
        this.innerHTML = "<i class='bx bx-play-circle play-video-icon'></i>";
    }
});
