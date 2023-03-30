class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2 * this.radius;
  }
  get circumference() {
    return Math.PI * this.diameter;
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }
  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }
  set circumference(newCircumference) {
    this.radius = newCircumference / Math.PI / 2;
  }
  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI);
  }
}

const myCircle = new Circle(5);
console.log(myCircle.diameter);
console.log(myCircle.circumference);
console.log(myCircle.area);
