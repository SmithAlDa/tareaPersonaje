class Eevee{
  constructor(){
    //Atributos
    this.x = width/2;
    this.y = height/2;
    this.img = []; //Es un array
    this.frame = 0;
    for(var i = 0; i < 4; i++){
      this.img[i] = createImg("http://127.0.0.1:8887/e"+ i +".png","");
    }
  }
  
  mostrar(){
    imageMode(CENTER);
    push();
    translate(this.x,this.y);
    if(keyCode==39){
      scale(-0.5,0.5);
    }
    if(keyCode==37){
      scale(0.5)
    }
    image(this.img[this.frame], 0,0);
    pop();
  }
  
  moverDer(){
    this.frame++;
    this.x = this.x + 10;
    if(this.frame > 3){
      this.frame = 0;
    }
  }
  moverIzq(){
    this.frame++;
    this.x = this.x - 10;
    if(this.frame > 3){
      this.frame = 0;
    }
  }
}