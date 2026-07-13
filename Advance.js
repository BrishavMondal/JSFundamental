

enum Status {
    Pending,
    Approved,
    Rejected
}

const currentStatus: Status = Status.Approved;
console.log(currentStatus);



enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    User = "USER"
}

const role: UserRole = UserRole.Admin;
console.log(role);



const enum Direction {
    Up,
    Down,
    Left,
    Right
}

const move = Direction.Up;
console.log(move);


type Theme = "light" | "dark";

function setTheme(theme: Theme): void {
    console.log(`Theme: ${theme}`);
}

setTheme("light");




function printValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

printValue("typescript");
printValue(25);


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


function speak(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

speak(new Dog());
speak(new Cat());


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


  @param shape 
  @returns 
 
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


const username: unknown = "Brishav";

const userLength = (username as string).length;

const anotherLength = (<string>username).length;

console.log(userLength);
console.log(anotherLength);