var playList = [
  {
    title: "私だけに",
    artist: "artist A",
    src: "01.mp3"
  },
  {
    title: "ミルク",
    artist: "artist B",
    src: "02.mp3"
  },
  {
    title: "私が踊るとき",
    artist: "artist C",
    src: "03.mp3"
  },
  {
    title: "ママ、どこなの",
    artist: "artist D",
    src: "04.mp3"
  }  
];

var current = -1;

function showNowPlaying(value){
  var label = document.querySelector("#nowplayind");
  var music = playList[value];
  label.textContent =  music.title;
}

function nextMusic(){
  current = (current + 1) % playList.length;
  var music = playList[current];
  var player = document.querySelector("audio");
  player.src = music.src;
  showNowPlaying(current);
  return music;
}

function playNextMusic(){
  nextMusic();
  var player = document.querySelector("audio");
  player.play();
}

function createElement(i){
  var music = playList[i];

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
    current = i;
    console.log(current)
    showNowPlaying(current);
    player.play();
  };

  item.addEventListener("click", handler);
  
  return item;
}

function loadPlayList(){
  var list = document.querySelector("#list");
  var i = 0;
  while(i < playList.length){
    list.appendChild(createElement(i));
    i = i + 1;
  }
  nextMusic();
}

function initialize(){
  /*var loadButton = document.querySelector("#load");
  loadButton.addEventListener("click", loadPlayList);*/
  loadPlayList();

  var player = document.querySelector("audio");
  player.addEventListener("ended", playNextMusic);
}

window.addEventListener("load", initialize);
