class Ball{
    constructor(x,y,radius){
     var options={
         restitution:0.3,
         friction:0.5,
         density:1.5
     } 
     this.body=Bodies.circle(x,y,radius,options)  
     this.radius=radius
     this.image=loadImage("paper.png")
     World.add(world,this.body)
    }
display(){
push ()
 imageMode (CENTER)
 fill ("red")   
 image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
pop ()
}
}
