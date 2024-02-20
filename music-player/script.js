document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const stopBtn = document.getElementById('stopBtn');

    playBtn.addEventListener('click', function() {
        audioPlayer.play();
    });

    pauseBtn.addEventListener('click', function() {
        audioPlayer.pause();
    });

    stopBtn.addEventListener('click', function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });
});