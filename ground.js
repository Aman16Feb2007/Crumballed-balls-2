class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    display(){
        fill("blue")
        var pos = this.body.position

        rectMode(CENTER);
        rect(pos.x, pos.y, this.width,this.height);
}
}
