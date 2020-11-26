// class Launcher{
//     constructor(bodyA, pointB){
//         var options = {
//             bodyA: bodyA,
//             pointB: pointB,
//             stiffness: 0.04,
//             length: 10
//         }
//         this.pointB = pointB;
//         this.launcher = Constraint.create(options);
//         World.add(world, this.launcher);
//     }
//     fly(){
//         this.launcher.bodyA = null;
//         console.log("withinfly");
//     }
//     attach(body){
//         this.launcher.bodyA = body;
//     }

//     display(){
//         if(this.launcher.bodyA){
//         var pointA = this.launcher.bodyA.position;
//         console.log("afterline15");
//         var pointB = this.pointB;
//         strokeWeight(4);
//         line(pointA.x, pointA.y, pointB.x, pointB.y);
//     }
// }
// fly(){
//     this.launcher.bodyA = null;
//     console.log("withinfly");
// }
// attach(body){
//     this.launcher.bodyA = body;
// }
    
// }

class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,

            
            'stiffness': 0.04,
            'length': 10
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        console.log("afterline15");
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
    fly(){
        this.launcher.bodyA = null;
        console.log("withinfly");
    }
    // attach(body){
    //     this.launcher.bodyA = body;
    //     }
}