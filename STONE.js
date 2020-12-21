class STONE{
    constructor(x,y) {
        var options = {
            isStatic : false,
            restitution : 0.5,
            friction : 1,
            density : 1
        }
        this.body = Bodies.rectangle(x,y,20,options);
        this.r= 20;

        this.image = loadImage("Plucking mangoes/stone.png");
        
        World.add(world,this.body)
    }
    display () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,5*this.r,2.5*this.r);
        pop();
    }
}