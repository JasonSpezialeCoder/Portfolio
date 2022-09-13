// media controllers
const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

// record player animation
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

// playing song
const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
const musicbox = document.querySelector("#musicbox");

// control button images
let playImg = "./assets/images/play-button.svg";
let pauseImg = "./assets/images/pause-button.svg";

// default controls
playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "Rüfüs Du Sol Innerbloom (Sasha Remix)",
        source: "./assets/music/RÜFÜS - Innerbloom (Sasha Remix).mp3",
        cover: "./assets/images/RUFUS-Innerbloom-sasha-Remix-art-work.jpg"
    },
    {
        name: "I Wish You Were Here feat Nkemdi (Stan Kolev Remix)",
        source: "./assets/music/John Creamer, Stephane K - I Wish You Were Here feat Nkemdi (Stan Kolev Remix).mp3",
        cover: "./assets/images/John-Creamer-Album-Cover.jpg"
    },
    {
        name: "As The Rush Comes Armin van Buuren's Remix",
        source: "./assets/music/As The Rush Comes (Armin van Buuren's Universal Religion Remix).mp3",
        cover: "./assets/images/As-The-Rush-Comes-Album-Cover.jpg"
    },
    {
        name: "Hurricane feat. Amy Pearson Myon & Shane 54 In Search of Sunrise Extended Mix",
        source: "./assets/music/Hurricane feat. Amy Pearson (Myon & Shane 54 In Search of Sunrise Extended Mix).mp3",
        cover: "./assets/images/Myon-Shane-54-Hurricane.jpg"
    },
    {
        name: "Make the World Go Round Deep Dish Round the World Remix",
        source: "./assets/music/Make the World Go Round_(Deep Dish Round the World Remix).mp3",
        cover: "./assets/images/Make-The-World-Go-Round-Album-Cover.jpg"
    }
];
// helper function
function createEle(ele) {
    return document.createElement(ele);
}
function append(parent, child) {
    return parent.append(child);
}
// creating track list
const ul = createEle('ul')
function createPlayList() {
    songList.forEach((song) => {
        let h4 = createEle('h4');
        let li = createEle('li');

        li.classList.add("track-item");
        h4.innerText = song.name;
        append(li,h4);
        append(ul,li)
    })
    append(musicbox, ul);
}

let songIndex = 0;
// preloaded song
loadMusic(songList[songIndex]);


function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}

function playSong() {
    playPause.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");

    audio.play();
}

function pauseSong() {
    playPause.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");

    audio.pause();
}

function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong()
}

function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong()
}
function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pauseSong() : playSong();
}


// player event 
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()