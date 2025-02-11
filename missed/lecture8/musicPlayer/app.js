

const playBtn = document.querySelector('#play-btn');
const progress = document.querySelector('#progress');
const songList = document.querySelector('#song-list');

let songs= [
    {
        name:'song1',
        id:1,
    },
    {
        name: 'song2',
        id:2,
    },
    {
        name: 'song3',
        id:3,
    },
    {
        name: 'song4',
        id:4,
    }
]

// constructor
const audio = new Audio('./assets/song1.mp3');

// to show songs in ul
for(let song of songs){
    const li = document.createElement('li');
    li.innerText = song.name;
    li.setAttribute('id',song.id);
    li.classList.add('song-item');//for styling purposes
    songList.appendChild(li)
}

// play button click
playBtn.addEventListener('click',function(){
    audio.paused ? audio.play() :audio.pause();
    if(playBtn.children[0].classList.contains('fa-circle-play')){
        playBtn.children[0].classList.remove('fa-circle-play');
        playBtn.children[0].classList.add('fa-circle-pause');
    }
    else{
        playBtn.children[0].classList.remove('fa-circle-pause');
        playBtn.children[0].classList.add('fa-circle-play');
    }
});

// current time ko dekho
audio.addEventListener('timeupdate',function(){
    const currentProgress = audio.currentTime * 100 / audio.duration;
    progress.value = currentProgress;

});

// input ko apne hisab se aage peeche krna
progress.addEventListener('change',function(){
    const updatedTime = progress.value * audio.duration / 100;
    audio.currentTime = updatedTime;
});

// gaana khudh se select krna
songList.addEventListener('click',function(e){
    let songId = e.target.getAttribute('id');
    audio.src = `./assets/song${songId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.remove('fa-circle-play');
    playBtn.children[0].classList.add('fa-circle-pause');
});

// next button functionality
const nextBtn = document.querySelector('#next-btn');
nextBtn.addEventListener('click',function(){
    let currentSongId = parseInt(audio.src.split('song')[1].split('.')[0]);
    let nextSongId = currentSongId === songs.length ? 1 : currentSongId + 1;
    audio.src = `./assets/song${nextSongId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.remove('fa-circle-play');
    playBtn.children[0].classList.add('fa-circle-pause');
});

// previous button functionality
const prevBtn = document.querySelector('#prev-btn');
prevBtn.addEventListener('click',function(){
    let currentSongId = parseInt(audio.src.split('song')[1].split('.')[0]);
    let prevSongId = currentSongId === 1 ? songs.length : currentSongId - 1;
    audio.src = `./assets/song${prevSongId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.remove('fa-circle-play');
    playBtn.children[0].classList.add('fa-circle-pause');
});