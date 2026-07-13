/**
 * TypeScript Advanced Concepts
 * - Enums
 * - Literal Types
 * - Type Guards
 * - Discriminated Unions
 */

/* ============================
   Numeric Enum
============================ */

enum Status {
    Pending,
    Approved,
    Rejected
}

const currentStatus: Status = Status.Approved;
console.log(currentStatus);

/* ============================
   String Enum
============================ */

enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    User = "USER"
}

const role: UserRole = UserRole.Admin;
console.log(role);

/* ============================
   Const Enum
============================ */

const enum Direction {
    Up,
    Down,
    Left,
    Right
}

const move = Direction.Up;
console.log(move);

/* ============================
   Literal Types
============================ */

type Theme = "light" | "dark";

function setTheme(theme: Theme): void {
    console.log(`Theme: ${theme}`);
}

setTheme("light");

/* ============================
   Type Guards - typeof
============================ */

/**
 * Prints value based on primitive type.
 * @param value Number or string.
 */
function printValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

printValue("typescript");
printValue(25);

/* ============================
   Type Guards - instanceof
============================ */

class Dog {
    bark(): void {
        console.log("Woof!");
    }
}

class Cat {
    meow(): void {
        console.log("Meow!");
    }
}

/**
 * Determines animal type.
 * @param animal Dog or Cat.
 */
function speak(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

speak(new Dog());
speak(new Cat());

/* ============================
   Type Guards - in
============================ */

interface Car {
    drive(): void;
}

interface Boat {
    sail(): void;
}

/**
 * Uses "in" operator to narrow types.
 * @param vehicle Car or Boat.
 */
function operate(vehicle: Car | Boat): void {
    if ("drive" in vehicle) {
        vehicle.drive();
    } else {
        vehicle.sail();
    }
}

operate({
    drive() {
        console.log("Driving...");
    }
});

operate({
    sail() {
        console.log("Sailing...");
    }
});

/* ============================
   Discriminated Unions
============================ */

interface Square {
    kind: "square";
    size: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Square | Circle | Rectangle;

/**
 * Calculates shape area.
 * @param shape Shape object.
 * @returns Area.
 */
function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;

        case "circle":
            return Math.PI * shape.radius ** 2;

        case "rectangle":
            return shape.width * shape.height;
    }
}

console.log(getArea({ kind: "square", size: 4 }));
console.log(getArea({ kind: "circle", radius: 5 }));
console.log(getArea({ kind: "rectangle", width: 8, height: 3 }));

/* ============================
   Type Assertions
============================ */

const username: unknown = "Brishav";

const userLength = (username as string).length;

const anotherLength = (<string>username).length;

console.log(userLength);
console.log(anotherLength);