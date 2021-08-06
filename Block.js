class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      //student did not add line 8
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //did not add line 13
      this.image= loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
   /* student code 
     console.log(this.body.speed);
      if(this.body.speed <3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      
      pop();
      
    }
    */

    //console.log(this.body.speed);

    //added the code from solution
    var pos= this.body.position;
    if(this.body.speed <3){
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width, this.height);
    }
  else{
    World.remove(world, this.body);
    push();
    this.visiblity = this.visiblity - 5;
    tint(255,this.visiblity);
    image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
    pop();
  }

  }
}