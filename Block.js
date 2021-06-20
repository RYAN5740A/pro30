class Block{
  constructor(x, y, width, height) {
    this.image= loadImage("block.png")
      var options = {
          restitution :0.4,
          friction :0.0,
      }
     
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image= loadImage("block.png")
      this.width = width;
      this.height = height;
      
      this.Visiblity=255
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      push()
      image(this.image,this.body.position.x,this.body.position.y,40,40)
      pop()
    }else{
      World.remove(world,this.body)
      push()
  this.Visiblity-=5
  tint(255,this.Visiblity)
  image(this.image,this.body.position.x,this.body.position.y,40,40)
  pop()
  
    }

  }


}