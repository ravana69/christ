const sources = [
  "http://stream.zeno.fm/y7n8qfmh838uv", // Ravana FM
  "http://stream.zeno.fm/39zagfub938uv", // Ravana FM 2
  "https://playerservices.streamtheworld.com/api/livestream-redirect/CLUBFMUAEAAC.aac", // 94.3
  "https://edge.mixlr.com/channel/axxln", // Gramaphone FM
  "https://listen.radioking.com/radio/305023/stream/354512", // Patupetty FM
  "https://edge.mixlr.com/channel/gvufg" // Asha Radio
];

const labels = [
  [ "Ravana Fm", "http://stream.zeno.fm/y7n8qfmh838uv"],
  [ "Ravana FM 2", "http://stream.zeno.fm/39zagfub938uv"],
  [ "94.3", "https://playerservices.streamtheworld.com/api/livestream-redirect/CLUBFMUAEAAC.aac"],
  [ "Gramaphone FM", "https://edge.mixlr.com/channel/axxln"],
  [ "Patupetty FM", "https://listen.radioking.com/radio/305023/stream/354512"],
  [ "Asha Radio", "https://edge.mixlr.com/channel/gvufg"]
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
