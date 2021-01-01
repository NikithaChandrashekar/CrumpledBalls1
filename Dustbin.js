class Dustbin{
    constructor(x, y, width, height) {
        var options = {
           isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.side1 = Bodies.rectangle(x-width/2, y, 20, 150, options); // left wall's x position in relation with the bottom wall.
        this.side2 = Bodies.rectangle(x+width/2, y, 20, 150, options); //right wall's x position in relation with the bottom wall.
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
        World.add(world,this.side1);
        World.add(world,this.side2);
      }
      display(){
        var pos1 =this.body.position;
        var pos2 =this.side1.position;
        var pos3 =this.side2.position;
        var angle = this.body.angle;
        push();
        //translate(pos.x, pos.y);  It is a static object, so no need of translation and rotation
        //rotate(angle);
        rectMode(CENTER); 
        fill("red");
        rect(pos1.x, pos1.y, this.width, this.height);
        rect(pos2.x, pos2.y,20,150);
        rect(pos3.x, pos3.y,20,150);
        pop();
      }
}

