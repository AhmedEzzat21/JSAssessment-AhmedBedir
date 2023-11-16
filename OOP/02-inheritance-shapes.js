class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }

  toString() {
    return `Polygon sides: ${this.sides}`;
  }
}

class Rectangle extends Polygon {
  constructor(length, width) {
    super(length, width, length, width);
    this.shape = 'Rectangle';
  }

  get area() {
    return this.sides[0] * this.sides[1];
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.shape = 'Square';
  }
}

class Circle extends Polygon {
  constructor(radius) {
    super(radius);
    this.shape = 'Circle';
  }

  get area() {
    return Math.PI * this.sides[0] ** 2;
  }
}

class Triangle extends Polygon {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.shape = 'Triangle';
  }

  get area() {
    const s = (this.sides[0] + this.sides[1] + this.sides[2]) / 2;
    return Math.sqrt(
      s * (s - this.sides[0]) * (s - this.sides[1]) * (s - this.sides[2])
    );
  }
}

// Testing shapes
const rectangle = new Rectangle(5, 10);
console.log(rectangle.area); // Output: 50
console.log(rectangle.toString()); // Output: Polygon sides: 5,10,5,10

const square = new Square(7);
console.log(square.area); // Output: 49
console.log(square.toString()); // Output: Polygon sides: 7,7,7,7

const circle = new Circle(5);
console.log(circle.area.toFixed(2)); // Output: 78.54
console.log(circle.toString()); // Output: Polygon sides: 5

const triangle = new Triangle(3, 4, 5);
console.log(triangle.area); // Output: 6
console.log(triangle.toString()); // Output: Polygon sides: 3,4,5
