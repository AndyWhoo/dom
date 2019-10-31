let kiwiButton;
let kiwiBird;
let cnv;
let kiwiCall;

function preload() {
  soundFormats('mp3', 'ogg');
  kiwiCall = loadSound('kiwicall.wav');
}


function setup() {
  cnv = createCanvas(128,126);
  cnv.parent("#canvasDiv");
  kiwiButton= select('#kiwiButton')
  kiwiButton.style("padding","50px");
  kiwiButton.style("background-color","#7affa0");

kiwiButton.mousePressed(toggleKiwi);

}

function draw() {
  background(220);
}

function toggleKiwi(){
kiwiCall.setVolume(0.7);
kiwiCall.play();

}
