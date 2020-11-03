/*class Dustbin{
    constructor(x, y, width, height) {
        var options = {
           isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER); 
        fill("white");
        rect(0, 0, this.width, this.height);
        pop();
      }
}*/

/*class Dustbin{

  constructor(x,y,width,height){
      var options={

          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2

      }
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      this.body=Bodies.rectangle(this.x,this.y,(this.r-20)/2,options)
      World.add(world,this.body)
  }
display(){

var pos=this.body.position;
console.log(this.body);

 push();
 translate(pos.x, pos.y);
 rectMode(CENTER);
 fill(rgb(255, 204, 204));
 //ellipse(0,0,this,this.r)
 pop();

}


}*/
class Box{

    constructor(x,y,r){
        var options={
  
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
  
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
        World.add(world,this.body)
    }
  display(){
  
  var pos=this.body.position;
  
   push();
   translate(pos.x, pos.y);
   rectMode(CENTER);
   fill("rgb(255, 204, 204)");
   ellipse(0,0,this.r,this.r)
   pop();
  
  }
  
  
  }