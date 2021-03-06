class Papper {
    constructor(x,y , radius ) {
      var options = {
          isStatic: false,
          density : 1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      push()
      translate(this.body.position.x, this.body.position.y);
      ellipseMode(RADIUS);
      fill("pink");
      circle( 0, 0, this.radius);
      pop()
    }
  };