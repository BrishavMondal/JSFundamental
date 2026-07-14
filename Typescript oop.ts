
// SECTION 1: INTERFACES


interface IDrawable {
  
  draw(): void;
  getDescription(): string;
}


interface IResizable {

  scale(factor: number): void;
  reset(): void;
}

interface ITransformable {

  moveTo(x: number, y: number): void;

  readonly x: number;
  readonly y: number;
}


// SECTION 2: ABSTRACT BASE CLASS

abstract class Shape implements IDrawable, ITransformable {

  private static _instanceCount: number = 0;
  readonly id: number;
  private _x: number;
  private _y: number;

  protected _color: string;


  constructor(color: string = "black", x: number = 0, y: number = 0) {
    Shape._instanceCount++;
    this.id = Shape._instanceCount;
    this._color = color;
    this._x = x;
    this._y = y;
  }

  get x(): number { return this._x; }

  get y(): number { return this._y; }

  get color(): string { return this._color; }

  set color(value: string) {
    if (!value || value.trim() === "") {
      throw new Error("Color cannot be empty");
    }
    this._color = value.trim();
  }

  //  Static members 


  static getInstanceCount(): number {
    return Shape._instanceCount;
  }

  static resetInstanceCount(): void {
    Shape._instanceCount = 0;
  }

  //Concrete methods 
 
  moveTo(x: number, y: number): void {
    this._x = x;
    this._y = y;
    console.log(`  Shape #${this.id} moved to (${x}, ${y})`);
  }


  getDescription(): string {
    return `Shape #${this.id} | Color: ${this._color} | Position: (${this._x}, ${this._y})`;
  }

  
  printSummary(): void {
    console.log("─".repeat(50));
    console.log(this.getDescription());
    console.log(`  Area:      ${this.area().toFixed(4)}`);
    console.log(`  Perimeter: ${this.perimeter().toFixed(4)}`);
    this.draw();
    console.log("─".repeat(50));
  }

  // Abstract methods
  
  abstract area(): number;
  abstract perimeter(): number;


  abstract draw(): void;
}


// SECTION 3: CONCRETE CLASSES


class Circle extends Shape implements IResizable {

  private static readonly PI: number = Math.PI;

  private _radius: number;

  private readonly _originalRadius: number;

 
  constructor(
    radius: number,
    color: string = "blue",
    x: number = 0,
    y: number = 0
  ) {
    super(color, x, y); 
    if (radius <= 0) throw new Error("Circle radius must be positive");
    this._radius = radius;
    this._originalRadius = radius;
  }

  get radius(): number { return this._radius; }

 
  area(): number {
    return Circle.PI * this._radius ** 2;
  }


  perimeter(): number {
    return 2 * Circle.PI * this._radius;
  }

  draw(): void {
    console.log(`  🔵 Drawing Circle [r=${this._radius}] in ${this.color}`);
  }


  getDescription(): string {
    return `${super.getDescription()} | Type: Circle | Radius: ${this._radius}`;
  }

  scale(factor: number): void {
    if (factor <= 0) throw new Error("Scale factor must be positive");
    this._radius *= factor;
    console.log(`  Circle scaled by ${factor}x → new radius: ${this._radius}`);
  }

 
  reset(): void {
    this._radius = this._originalRadius;
    console.log(`  Circle reset → radius: ${this._radius}`);
  }

 
  containsPoint(px: number, py: number): boolean {
    const dx = px - this.x;
    const dy = py - this.y;
    return Math.sqrt(dx * dx + dy * dy) <= this._radius;
  }
}


class Rectangle extends Shape implements IResizable {

  protected _width: number;

  protected _height: number;

  private readonly _originalWidth: number;
  private readonly _originalHeight: number;

 
  constructor(
    width: number,
    height: number,
    color: string = "green",
    x: number = 0,
    y: number = 0
  ) {
    super(color, x, y);
    if (width <= 0 || height <= 0) throw new Error("Width and height must be positive");
    this._width  = width;
    this._height = height;
    this._originalWidth  = width;
    this._originalHeight = height;
  }

  get width():  number { return this._width;  }

  get height(): number { return this._height; }

  area(): number {
    return this._width * this._height;
  }

  perimeter(): number {
    return 2 * (this._width + this._height);
  }

  draw(): void {
    console.log(`  🟩 Drawing Rectangle [${this._width}×${this._height}] in ${this.color}`);
  }

  getDescription(): string {
    return `${super.getDescription()} | Type: Rectangle | ${this._width}×${this._height}`;
  }

  diagonal(): number {
    return Math.sqrt(this._width ** 2 + this._height ** 2);
  }

  isSquare(): boolean {
    return this._width === this._height;
  }

  scale(factor: number): void {
    if (factor <= 0) throw new Error("Scale factor must be positive");
    this._width  *= factor;
    this._height *= factor;
    console.log(`  Rectangle scaled by ${factor}x → ${this._width}×${this._height}`);
  }

 
  reset(): void {
    this._width  = this._originalWidth;
    this._height = this._originalHeight;
    console.log(`  Rectangle reset → ${this._width}×${this._height}`);
  }
}


class Square extends Rectangle {

  constructor(
    side: number,
    color: string = "purple",
    x: number = 0,
    y: number = 0
  ) {
    super(side, side, color, x, y); 
  }

  get side(): number { return this._width; }

 
  set side(value: number) {
    if (value <= 0) throw new Error("Side must be positive");
    this._width  = value;
    this._height = value;
  }

  draw(): void {
    console.log(`  🟪 Drawing Square [side=${this._width}] in ${this.color}`);
  }

  getDescription(): string {
    return `${super.getDescription()} → Square (side=${this._width})`;
  }
}



class Triangle extends Shape implements IResizable {

  private _a: number;
  private _b: number;
  private _c: number;

  private readonly _origA: number;
  private readonly _origB: number;
  private readonly _origC: number;

  constructor(
    a: number,
    b: number,
    c: number,
    color: string = "orange",
    x: number = 0,
    y: number = 0
  ) {
    super(color, x, y);
    if (a <= 0 || b <= 0 || c <= 0) throw new Error("All sides must be positive");
    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error("Invalid triangle: sides violate the triangle inequality");
    }
    this._a = a; this._b = b; this._c = c;
    this._origA = a; this._origB = b; this._origC = c;
  }

  area(): number {
    const s = this.perimeter() / 2; // semi-perimeter
    return Math.sqrt(s * (s - this._a) * (s - this._b) * (s - this._c));
  }

  
  perimeter(): number {
    return this._a + this._b + this._c;
  }

  draw(): void {
    console.log(`  🔺 Drawing Triangle [${this._a}, ${this._b}, ${this._c}] in ${this.color}`);
  }



  getDescription(): string {
    return `${super.getDescription()} | Type: Triangle | Sides: ${this._a}, ${this._b}, ${this._c} | ${this.getType()}`;
  }

 
  getType(): string {
    if (this._a === this._b && this._b === this._c) return "Equilateral";
    if (this._a === this._b || this._b === this._c || this._a === this._c) return "Isosceles";
    return "Scalene";
  }

 
  scale(factor: number): void {
    if (factor <= 0) throw new Error("Scale factor must be positive");
    this._a *= factor; this._b *= factor; this._c *= factor;
    console.log(`  Triangle scaled by ${factor}x → ${this._a}, ${this._b}, ${this._c}`);
  }

  reset(): void {
    this._a = this._origA; this._b = this._origB; this._c = this._origC;
    console.log(`  Triangle reset → ${this._a}, ${this._b}, ${this._c}`);
  }
}


// SECTION 4: POLYMORPHISM DEMONSTRATION

function drawAllShapes(shapes: Shape[]): void {
  console.log("\n🎨 Drawing all shapes:\n");
  shapes.forEach((shape, index) => {
    console.log(`  [${index + 1}] ${shape.constructor.name}`);
    shape.draw();
    console.log(`       Area: ${shape.area().toFixed(2)}, Perimeter: ${shape.perimeter().toFixed(2)}`);
  });
}

tion totalArea(shapes: Shape[]): number {
  return shapes.reduce((sum, shape) => sum + shape.area(), 0);
}


function largestShape<T extends Shape>(shapes: T[]): T {
  return shapes.reduce((max, shape) => shape.area() > max.area() ? shape : max);
}


function scaleAll(shapes: (Shape & IResizable)[], factor: number): void {
  console.log(`\n🔄 Scaling all resizable shapes by ${factor}x:\n`);
  shapes.forEach(shape => {
    shape.scale(factor);
  });
}

// SECTION 5: RUNNING THE DEMO

console.log("=".repeat(60));
console.log(" TypeScript OOP — Shape Hierarchy Demo");
console.log("=".repeat(60));

const circle    = new Circle(7, "crimson", 10, 20);
const rectangle = new Rectangle(12, 8, "teal", 5, 5);
const square    = new Square(6, "purple", 15, 15);
const triangle  = new Triangle(3, 4, 5, "orange", 0, 0);

console.log(`\n✅ Created ${Shape.getInstanceCount()} shapes\n`);

console.log("\n📋 Individual Shape Summaries:");
[circle, rectangle, square, triangle].forEach(s => s.printSummary());

const allShapes: Shape[] = [circle, rectangle, square, triangle];
drawAllShapes(allShapes);

console.log("\n📐 Calculations:");
console.log(`  Total area of all shapes:   ${totalArea(allShapes).toFixed(2)}`);

const biggest = largestShape(allShapes);
console.log(`  Largest shape:              ${biggest.constructor.name} (area: ${biggest.area().toFixed(2)})`);

console.log("\n📍 Moving shapes:");
circle.moveTo(50, 60);
rectangle.moveTo(100, 200);

const resizable = [circle, rectangle, square, triangle];
scaleAll(resizable, 2);

console.log("\n📐 Areas after scaling:");
allShapes.forEach(s => {
  console.log(`  ${s.constructor.name}: ${s.area().toFixed(2)}`);
});

console.log("\n↩️  Resetting all:");
resizable.forEach(s => s.reset());

console.log("\n🔎 Type-specific methods:");
console.log(`  Circle contains (10, 20)?   ${circle.containsPoint(10, 20)}`);
console.log(`  Circle contains (100, 100)? ${circle.containsPoint(100, 100)}`);
console.log(`  Rectangle diagonal:         ${rectangle.diagonal().toFixed(2)}`);
console.log(`  Rectangle isSquare?         ${rectangle.isSquare()}`);
console.log(`  Square isSquare?            ${square.isSquare()}`);
console.log(`  Triangle type:              ${triangle.getType()}`);

console.log("\n🔍 instanceof checks:");
allShapes.forEach(shape => {
  const isCircle    = shape instanceof Circle    ? "Circle"    : "";
  const isRect      = shape instanceof Rectangle ? "Rectangle" : "";
  const isTriangle  = shape instanceof Triangle  ? "Triangle"  : "";
  const isShape     = shape instanceof Shape     ? "Shape"     : "";
  console.log(`  Shape #${shape.id}: ${[isCircle, isRect, isTriangle, isShape].filter(Boolean).join(", ")}`);
});

console.log(`\n  Is Square instanceof Rectangle? ${square instanceof Rectangle}`); // true
console.log(`  Is Square instanceof Shape?     ${square instanceof Shape}`);     // true
console.log(`  Is Square instanceof Circle?    ${square instanceof Circle}`);    // false

console.log("\n🖼️  Using IDrawable interface:");
const drawables: IDrawable[] = [circle, rectangle, square, triangle];
drawables.forEach(d => {
  console.log(d.getDescription());
  d.draw();
});

console.log("\n🎨 Color setter:");
circle.color = "navy";
console.log(`  Circle color updated to: ${circle.color}`);

try {
  circle.color = ""; 
} catch (e) {
  if (e instanceof Error) {
    console.log(`  Caught expected error: ${e.message}`);
  }
}

console.log("\n=".repeat(60));
console.log(` Final area after all operations`);
console.log("=".repeat(60));
allShapes.forEach(s => {
  console.log(`  ${s.constructor.name.padEnd(10)} | Area: ${s.area().toFixed(4).padStart(10)} | Perimeter: ${s.perimeter().toFixed(4).padStart(10)}`);
});
console.log(`  ${"TOTAL".padEnd(10)} | Area: ${totalArea(allShapes).toFixed(4).padStart(10)}`);
console.log("=".repeat(60));