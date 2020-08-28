class Box {
    constructor(x, y, width, height) {
      var options = {
          
          isStatic:false,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility=225;
    
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
     
      push();
      
      rotate(angle);
      rectMode(CENTER);
      fill (random (50,225));
      strokeWeight(4);
      stroke("yellow");
      
      rect(pos.x, pos.y, this.width, this.height);
      pop();
      }
      else{
        push();
        World.remove(world,this.body);
        this.Visibility=this.Visibility-0.05;
        tint (225,this.Visibility);
        pop();
      }
    }
  };
  