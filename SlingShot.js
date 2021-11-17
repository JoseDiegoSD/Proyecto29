class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.lazo = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.lazo);

    }
    attach(body){
        this.lazo.bodyA = body;
    }
    fly(){
        this.lazo.bodyA =null;
        
    }
    display(){
        if(this.lazo.bodyA){
        var pointA = this.lazo.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}



  