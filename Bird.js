class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory=[];

    this.smokeimg=loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
  
    
    if(this.body.velocity.x>10 && this.body.position.x>200){
    var position=[this.body.position.x,this.body.position.y]

    this.trajectory.push(position)
  }


    for(var I=0; I<this.trajectory.length;I++){
      image(this.smokeimg,this.trajectory[I][0],this.trajectory[I][1])
    }

    super.display();
  }
}
