class Hammer{

    constructor(x, y, width, height) {
        var options = {
          'isStatic':true,
          'resistution':0.3,
          'friction':2,
          'density':0.5
        }
  
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);  
        }

display(){
      var pos =this.body.position;
      // pos.x=Mouse.x
      // pos.y=Mouse.y
       push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("black");
      rect(0, 0, this.width, this.height);
      pop();
    
} 
};