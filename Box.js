class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var PositionX = this.body.positionX;
        var PositionY = this.body.positionY;
        rectMode(CENTER);
        fill(178,34,34);
        rect(PositionX,PositionY,this.width,this.height);
    }
}