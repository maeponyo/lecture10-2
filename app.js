var playList = [
  {
    title: "title A",
    artist: "artist A",
    src: "01.mp3"
  },
  {
    title: "title B",
    artist: "artist B",
    src: "02.mp3"
  },
  {
    title: "title C",
    artist: "artist C",
    src: "03.mp3"
  },
  {
    title: "title D",
    artist: "artist D",
    src: "04.mp3"
  }  
];

var current = -1;

function nextMusic(){
  current = (current + 1) % playList.length;
  var music = playList[current];
  var player = document.querySelector("audio");
  player.src = music.src;
  return music;
}

function playNextMusic(){
  nextMusic();
  var player = document.querySelector("audio");
  player.play();
}

function createElement(music){
  var item = document.createElement("li");

  var title = document.createElement("p");
  title.textContent = music.title;

  var artist = document.createElement("p");
  artist.textContent = music.artist;

  item.appendChild(title);
  item.appendChild(artist);

  var handler = function(){
    var player = document.querySelector("audio");
    player.src = music.src;
  };

  item.addEventListener("click", handler);
  
  return item;
}

function loadPlayList(){
  var list = document.querySelector("#list");
  var i = 0;
  while(i < playList.length){
    list.appendChild(createElement(playList[i]));
    i = i + 1;
  }
  nextMusic();
}

function initialize(){
  var loadButton = document.querySelector("#load");
  loadButton.addEventListener("click", loadPlayList);

  var player = document.querySelector("audio");
  player.addEventListener("ended", playNextMusic);
}

window.addEventListener("load", initialize);
