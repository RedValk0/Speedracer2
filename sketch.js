var canvas;
var backgroundImage, car1_img, car2_img, track;
var database;
var gameState=0;
var form, player;
var playerCount=0;
var allPlayers, car1, car2;
var cars = [];
var fuel = 100;
var displayFuel = "Awaiting Fuel Diagnostics..."
var fuelImage, powerCoinImage, fuels, powerCoins, obstacle1Image, obstacle2Image, obstacles;
var blastImage;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  fuelImage = loadImage("../assets/fuel.png");
  powerCoinImage = loadImage("../assets/goldCoin.png");
  obstacle1Image = loadImage("../assets/obstacle1.png");
  obstacle2Image = loadImage("../assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  blastImage = loadImage("./assets/blast.png");
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  background(backgroundImage);

  
  displayFuel = `Fuel: ${fuel}%`

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
