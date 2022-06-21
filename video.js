const playBtn = document.querySelector('.video__play-btn');
const videoPoster = document.querySelector('.video__poster');
const videoHidden = document.querySelector('.video__hidden');

playBtn.addEventListener('click', () => {
    videoPoster.style.display = 'none';
    playBtn.style.display = 'none';
    videoHidden.classList.add('video__iframe');
    videoHidden.src = "https://www.youtube.com/embed/_GvtV2bfc7Q?autoplay=1&amp;mute=1";
});