const songName = document.getElementById('song-name');
const song = document.getElementById('audio');
const play = document.getElementById('play');

songName.innerText = 'Caminhos';

function playSong(){
    play.querySelector('.bi').classList
    song.play();
}

play.addEventListener('click', playSong);