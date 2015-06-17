var playList = [
  {
    title: "title A",
    artist: "artist A",
    file: "01.mp3"
  },
  {
    title: "title B",
    artist: "artist B",
    file: "02.mp3"
  },
  {
    title: "title C",
    artist: "artist C",
    file: "03.mp3"
  },
  {
    title: "title D",
    artist: "artist D",
    file: "04.mp3"
  }  
];

function createElement(music){
  var item = document.createElement("li");
  item.textContent = music.title;
  return item;
}

function loadPlayList(){
  var list = document.querySelector("#list");
  var i = 0;
  while(i < playList.length){
    list.appendChild(createElement(playList[i]));
    i = i + 1;
  }
}

function initialize(){
  var loadButton = document.querySelector("#load");
  loadButton.addEventListener("click", loadPlayList);
}

window.addEventListener("load", initialize);
