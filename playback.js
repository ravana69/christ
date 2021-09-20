const sources = [
  "http://stream.zeno.fm/y7n8qfmh838uv", // paradise
  "http://stream.zeno.fm/39zagfub938uv", // party gong
  "https://edge.mixlr.com/channel/gvufg", // folk forward
  "http://94.23.26.22:8090/live.mp3" // punk fm
];

const labels = [
  [ "Radio Paradise", "https://www.radioparadise.com" ],
  [ "Party Gong", "https://www.radiogong.de/"],
  [ "SomaFM Folk Forward", "http://somafm.com/folkfwd/"],
  [ "Punk FM", " http://www.punkfm.co.uk/"]
];

let playingIndex = 0; // current radio
let playing = true; // stream status
let music = null;

setTimeout(function(){
    loadStream(playingIndex);
}, 1);

function loadStream(index){
  if(playing && music !== null)
    destroyStream();

  music = new Audio();
  music.src = sources[index];
  music.load();
  music.play();
  setLabel(index);
  pauseIcon();
  playingIndex = index;
  playing = true;
}

function destroyStream(){
  music.pause();
  music.src = "";
  playIcon();
  playing = false;
}

function changePlayback(){
  if(playing){ destroyStream();  }else{  loadStream(playingIndex);  }
}

function setLabel(index){
  document.getElementById("label").innerHTML = '<h6> <a target="_blank" href="' + labels[index][1] + '">' + labels[index][0] + '</a></h6>';
}

document.onkeydown = function(e) {
  e = e || window.event;
  switch(e.which || e.keyCode) {
    case 32:
      changePlayback();
    break;
  }
};

// icons
function pauseIcon(){
  document.getElementById('playbackButton').className = 'icon fa-pause';
}
function playIcon(){
  document.getElementById('playbackButton').className = 'icon fa-play';
}
