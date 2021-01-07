class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.bodyA = bodyA
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        if(this.sling.bodyA ){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
       
        strokeWeight(4);
        stroke(255);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
}