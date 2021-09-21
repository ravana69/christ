const sources = [
  "http://stream.zeno.fm/y7n8qfmh838uv", // Ravana FM
  "http://stream.zeno.fm/39zagfub938uv", // Ravana FM 2
  "https://playerservices.streamtheworld.com/api/livestream-redirect/CLUBFMUAEAAC.aac", // 94.3
  "https://edge.mixlr.com/channel/axxln", // Gramaphone FM
  "https://listen.radioking.com/radio/305023/stream/354512", // Patupetty FM
  "https://prclive4.listenon.in/Malayalam", // Radio City Malayalam
  "https://schedule.radiolemonlive.com:7443/radio/8000/live", // Radio Lemon Live
  "https://servidor15.brlogic.com:7110/live", // Radio Green
  "https://streamer.radio.co/sd0b826808/listen", // Radio Beats
  "http://radio.knpinfotech.co.in:8000/stream/1/", // KNP Infotech
  "https://pallaviradio.out.airtime.pro/pallaviradio_a", // Pallavi Radio
  "https://radioindia.net/radio/macfast/icecast.audio", // Radio Macfest
  "http://n02.radiojar.com/q6hbcwmx8vzuv.mp3?rj-ttl=5&rj-tok=AAABdW3c0j8AU1QT19VJzvtLWw", // Radio Mirchi Kerala
  "https://radio.garden/api/ara/content/listen/pxGu8wy2/channel.mp3?1626457544992", // London Malayalam Radio
  "https://eu10.fastcast4u.com/clubfmuae", // Club FM
  "https://bcovlive-a.akamaihd.net/19b535b7499a4719a5c19e043063f5d9/ap-southeast-1/6034685947001/profile_2/chunklist.m3u8", // Radio Mango
  "https://edge.mixlr.com/channel/gvufg" // Asha Radio
];

const labels = [
  [ "Ravana Fm", "http://stream.zeno.fm/y7n8qfmh838uv"],
  [ "Ravana FM 2", "http://stream.zeno.fm/39zagfub938uv"],
  [ "94.3", "https://playerservices.streamtheworld.com/api/livestream-redirect/CLUBFMUAEAAC.aac"],
  [ "Gramaphone FM", "https://edge.mixlr.com/channel/axxln"],
  [ "Patupetty FM", "https://listen.radioking.com/radio/305023/stream/354512"],
  [ "Radio City Malayalam", "https://prclive4.listenon.in/Malayalam"],
  [ "radio lemon live", "https://schedule.radiolemonlive.com:7443/radio/8000/live"],
  [ "radio green", "https://servidor15.brlogic.com:7110/ve"],
  [ "radio beats", "https://streamer.radio.co/sd0b826808/listen"],
  [ "knp Infotech", "http://radio.knpinfotech.co.in:8000/stream/1/?listening-from-radio-garden=1624554409280"],
  [ "pallavi radio", "https://pallaviradio.out.airtime.pro/pallaviradio_a"],
  [ "radio macfest", "https://radioindia.net/radio/macfast/icecast.audio"],
  [ "radio mirchi kerala", "http://n02.radiojar.com/q6hbcwmx8vzuv.mp3?rj-ttl=5&rj-tok=AAABdW3c0j8AU1QT19VJzvtLWw"],
  [ "London malayalam radio", "https://radio.garden/api/ara/content/listen/pxGu8wy2/channel.mp3?1626457544992"],
  [ "club FM", "https://eu10.fastcast4u.com/clubfmuae"],
  [ "radio mango", "https://bcovlive-a.akamaihd.net/19b535b7499a4719a5c19e043063f5d9/ap-southeast-1/6034685947001/profile_2/chunklist.m3u8"],
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
