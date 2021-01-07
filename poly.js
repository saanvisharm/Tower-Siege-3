class Polygons {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 1,
            density: 0.2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
        this.image = loadImage("polygon.png");
         
    }
    display() {
        var pos = this.body.position;
        
        push();
        ellipseMode(RADIUS);
        translate(pos.x, pos.y);
        
        strokeWeight(4);
       
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r)
        pop();
    }
}