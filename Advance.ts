
/* Numeric Enum */


enum Status {
    Pending,
    Approved,
    Rejected
}

const currentStatus: Status = Status.Approved;
console.log(currentStatus);

/* String Enum */


enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    User = "USER"
}

const role: UserRole = UserRole.Admin;
console.log(role);

/* Const Enum */


const enum Direction {
    Up,
    Down,
    Left,
    Right
}

const direction = Direction.Up;
console.log(direction);

/* Literal Types */


type Theme = "light" | "dark";


function setTheme(theme: Theme): void {
    console.log(`Theme selected: ${theme}`);
}

setTheme("light");

/* Type Guard - typeof */


function printValue(value: string | number): void {

    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }

}

printValue("typescript");
printValue(25);

/* Type Guard - instanceof */

/*Dog class.*/

class Dog {

    bark(): void {
        console.log("Woof!");
    }

}

/**Cat class*/
class Cat {

    meow(): void {
        console.log("Meow!");
    }

}

function speak(animal: Dog | Cat): void {

    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }

}

speak(new Dog());
speak(new Cat());

/* Type Guard - in*/

interface Car {
    drive(): void;
}

interface Boat {
    sail(): void;
}


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

/* Discriminated Unions*/

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

console.log(getArea({
    kind: "square",
    size: 5
}));

console.log(getArea({
    kind: "circle",
    radius: 10
}));

console.log(getArea({
    kind: "rectangle",
    width: 5,
    height: 8
}));

/* ==========================
   Type Assertions
========================== */

const username: unknown = "Brishav";

const length1 = (username as string).length;

const length2 = (<string>username).length;

console.log(length1);
console.log(length2);