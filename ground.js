class Ground{
    constructor(x,y,width,height){
        var G_options = {
            isStatic : true
        }
        
        this.body = Bodies.rectangle(x,y,width,height,G_options)
        this.width = width;
        this.height = height;
        
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        fill(140, 97, 3);
        rect(pos.x, pos.y, this.width, this.height);

    }
}