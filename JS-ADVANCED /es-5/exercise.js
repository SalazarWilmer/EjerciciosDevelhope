class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figGeo) {
    if (figGeo instanceof Square) {
      return figGeo.side * figGeo.side
    } else if (figGeo instanceof Rectangle) {
      return figGeo.width * figGeo.height
    } else if (figGeo instanceof Circle) {
      return Math.pow(figGeo.radius, 2)  * Math.PI
    }
  }
}



const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
