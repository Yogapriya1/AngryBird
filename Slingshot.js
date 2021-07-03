class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 0.5
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,70,40,150)
        image(this.sling2,175,70,40,90)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
            stroke(46,28,11)
            line(pointA.x-18, pointA.y, pointB.x, pointB.y+15);
            line(pointA.x-18, pointA.y,pointB.x+40,pointB.y+15)
            image(this.sling3,pointA.x-20,pointA.y-6)
        }
    }
    attach(body){
        this.sling.bodyA = body
    }
}
