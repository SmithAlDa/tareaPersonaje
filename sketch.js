var poke;

function setup() {
  createCanvas(400, 400);
  poke = new Eevee();
  frameRate(15);
}

function draw() {
  background(220);
  poke.mostrar();
  if (keyIsPressed && keyCode == 39){
    poke.moverDer();
    scale(-0.5,0.5);

  }
  if (keyIsPressed && keyCode == 37){
    poke.moverIzq();
  }
}