
// SECTION 1: VARIABLES — let, const, var

// Example 1: let — block-scoped, can be reassigned
let age = 22;
age = 23; 
console.log("Example 1 - let:", age); 

// Example 2: const — block-scoped, cannot be reassigned
const name = "Brishav";
console.log("Example 2 - const:", name);

// Example 3: var vs let — var is function-scoped, let is block-scoped
function testVar() {
  if (true) {
    var x = 10;   
    let y = 20;   
  }
  console.log("Example 3 - var x:", x); // 10
}
testVar();

// Example 4: const with objects — reference is fixed, but properties can change
const user = { name: "Brishav", role: "Developer" };
user.role = "MIS Engineer"; 
console.log("Example 4 - const object:", user);


// ─────────────────────────────────────────────────────────────
// SECTION 2: DATA TYPES
// ─────────────────────────────────────────────────────────────

// Example 5: Primitive data types
const str    = "Hello";          
const num    = 42;               
const bool   = true;             
const nothing = null;            
let notDefined;                 
const sym    = Symbol("id");     
const bigInt = 9007199254740991n; 

console.log("Example 5 - types:", typeof str, typeof num, typeof bool, typeof nothing, typeof notDefined, typeof sym);

// Example 6: Reference types
const arr = [1, 2, 3];          
const obj = { a: 1 };          
const fn  = () => {};           
console.log("Example 6 - reference types:", typeof arr, typeof obj, typeof fn);



// SECTION 3: OPERATORS & TYPE COERCION

// Example 7: Arithmetic operators
const a = 10, b = 3;
console.log("Example 7 - arithmetic:", a + b, a - b, a * b, a / b, a % b, a ** b);

// Example 8: == vs === (loose vs strict equality)
console.log("Example 8 - == vs ===:");
console.log(5 == "5");   
console.log(5 === "5");  
console.log(null == undefined);  
console.log(null === undefined); 

// Example 9: Type coercion — JavaScript converting types automatically
console.log("Example 9 - type coercion:");
console.log("5" + 3);   
console.log("5" - 3);   
console.log(true + 1);  
console.log(false + 1); 
console.log(+"42");     

// Example 10: Logical operators
console.log("Example 10 - logical:");
console.log(true && false);  
console.log(true || false);  
console.log(!true);          
console.log(null ?? "default"); 
console.log(0 || "fallback");   
console.log(0 ?? "fallback");  

// Example 11: Optional chaining
const person = { address: { city: "Dhaka" } };
console.log("Example 11 - optional chaining:", person?.address?.city);     
console.log("Example 11 - safe miss:",         person?.phone?.number);    


// SECTION 4: FUNCTIONS

// Example 12: Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log("Example 12 - declaration:", greet("Brishav"));

// Example 13: Function expression
const square = function(n) {
  return n * n;
};
console.log("Example 13 - expression:", square(5));

// Example 14: Arrow function — concise syntax
const cube = (n) => n * n * n;
console.log("Example 14 - arrow function:", cube(3));

// Example 15: Arrow function with multiple statements
const divide = (a, b) => {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
};
console.log("Example 15 - arrow multi-line:", divide(10, 2), divide(5, 0));

// Example 16: Default parameters
const greetUser = (name = "Guest", role = "User") => `Welcome, ${name} (${role})`;
console.log("Example 16 - default params:", greetUser(), greetUser("Brishav", "Admin"));

// Example 17: Callback function — passing a function as an argument
function doMath(a, b, operation) {
  return operation(a, b);
}
const add      = (x, y) => x + y;
const multiply = (x, y) => x * y;
console.log("Example 17 - callback:", doMath(4, 5, add), doMath(4, 5, multiply));

// Example 18: Higher-order function — returns a function
function makeMultiplier(factor) {
  return (number) => number * factor;
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log("Example 18 - higher-order:", double(7), triple(7));


// SECTION 5: CLOSURES

// Example 19: Closure — inner function remembers outer scope
function counter() {
  let count = 0; 
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount:  () => count,
  };
}
const myCounter = counter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
console.log("Example 19 - closure counter:", myCounter.getCount()); 

// Example 20: Closure for data privacy — bank account simulation
function createAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit:    (amt) => { balance += amt; return `Deposited ${amt}. Balance: ${balance}`; },
    withdraw:   (amt) => {
      if (amt > balance) return "Insufficient funds";
      balance -= amt;
      return `Withdrew ${amt}. Balance: ${balance}`;
    },
    getBalance: () => balance,
  };
}
const account = createAccount(1000);
console.log("Example 20 - closure account:", account.deposit(500));
console.log(account.withdraw(200));
console.log("Balance:", account.getBalance()); // 1300


// SECTION 6: HOISTING


// Example 21: Function declarations are hoisted — can be called before defined
console.log("Example 21 - hoisting:", sayHello("World")); 
function sayHello(name) {
  return `Hello, ${name}!`;
}

// Example 22: var is hoisted but initialized as undefined
console.log("Example 22 - var hoisting:", typeof hoistedVar); 
var hoistedVar = "I was hoisted";

// Example 23: let and const are NOT initialized before declaration (Temporal Dead Zone)
let hoistedLet = "I was NOT accessible before this line";
console.log("Example 23 - let TDZ:", hoistedLet);


// SECTION 7: SCOPE


// Example 24: Global scope
const globalVar = "I am global";

function showScope() {
  const localVar = "I am local";          
  console.log("Example 24 - inside function:", globalVar, localVar);
}
showScope();

// Example 25: Block scope with let/const
{
  let blockLet   = "block let";
  const blockConst = "block const";
  console.log("Example 25 - inside block:", blockLet, blockConst);
}

// Example 26: Lexical scope — inner functions access outer variables
function outer() {
  const outerValue = "outer";
  function inner() {
    const innerValue = "inner";
    console.log("Example 26 - lexical:", outerValue, innerValue); 
  }
  inner();
 
}
outer();



// SECTION 8: DESTRUCTURING

// Example 27: Array destructuring
const colors = ["red", "green", "blue", "yellow"];
const [first, second, , fourth] = colors; 
console.log("Example 27 - array destructure:", first, second, fourth);

// Example 28: Object destructuring
const student = { studentName: "Brishav", cgpa: 3.16, university: "AIUB" };
const { studentName, cgpa, university } = student;
console.log("Example 28 - object destructure:", studentName, cgpa, university);

// Example 29: Destructuring with rename and default values
const { studentName: sName, grade = "A" } = student;
console.log("Example 29 - rename & default:", sName, grade);

// Example 30: Nested object destructuring
const profile = {
  userName: "brishav_m",
  scores: { thesis: 99.3, exam: 85 },
};
const { userName, scores: { thesis, exam } } = profile;
console.log("Example 30 - nested destructure:", userName, thesis, exam);

// Example 31: Destructuring in function parameters
function displayUser({ name, role = "Intern" }) {
  return `${name} — ${role}`;
}
console.log("Example 31 - param destructure:", displayUser({ name: "Brishav", role: "MIS Engineer" }));


/
// SECTION 9: SPREAD & REST OPERATORS
/
// Example 32: Spread — expand array into individual elements
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combined = [...nums1, ...nums2];
console.log("Example 32 - spread arrays:", combined);

// Example 33: Spread — copy and extend objects
const baseConfig = { theme: "dark", lang: "en" };
const userConfig = { ...baseConfig, fontSize: 14 };
console.log("Example 33 - spread object:", userConfig);

// Example 34: Spread — pass array as function arguments
function sumThree(x, y, z) { return x + y + z; }
const values = [10, 20, 30];
console.log("Example 34 - spread as args:", sumThree(...values));

// Example 35: Rest — collect remaining arguments into array
function logAll(first, second, ...rest) {
  console.log("Example 35 - rest:", first, second, rest);
}
logAll("a", "b", "c", "d", "e");

// Example 36: Rest in destructuring
const [head, ...tail] = [10, 20, 30, 40, 50];
console.log("Example 36 - rest destructure:", head, tail);


// ─────────────────────────────────────────────────────────────
// SECTION 10: TEMPLATE LITERALS
// ─────────────────────────────────────────────────────────────

// Example 37: Basic template literal
const city  = "Dhaka";
const intro = `I live in ${city} and my CGPA is ${cgpa}.`;
console.log("Example 37 - template literal:", intro);

// Example 38: Multi-line string
const multiLine = `Line 1: Introduction
Line 2: Background
Line 3: Methodology
Line 4: Results`;
console.log("Example 38 - multi-line:\n", multiLine);

// Example 39: Expression inside template literal
const price = 100, tax = 0.15;
console.log("Example 39 - expression:", `Total: ${price + price * tax} BDT`);



// SECTION 1: VARIABLES — let, const, var
/

// Example 1: let — block-scoped, can be reassigned
let age = 22;
age = 23; // allowed
console.log("Example 1 - let:", age); 

// Example 2: const — block-scoped, cannot be reassigned
const name = "Brishav";

console.log("Example 2 - const:", name);

// Example 3: var vs let — var is function-scoped, let is block-scoped
function testVar() {
  if (true) {
    var x = 10;  
    let y = 20;   
  }
  console.log("Example 3 - var x:", x); 
  
testVar();

// Example 4: const with objects — reference is fixed, but properties can change
const user = { name: "Brishav", role: "Developer" };
user.role = "MIS Engineer"; 
console.log("Example 4 - const object:", user);



// SECTION 2: DATA TYPES

// Example 5: Primitive data types
const str    = "Hello";         
const num    = 42;              
const bool   = true;             
const nothing = null;           
let notDefined;                  
const sym    = Symbol("id");     
const bigInt = 9007199254740991n; 

console.log("Example 5 - types:", typeof str, typeof num, typeof bool, typeof nothing, typeof notDefined, typeof sym);

// Example 6: Reference types
const arr = [1, 2, 3];          
const obj = { a: 1 };          
const fn  = () => {};         
console.log("Example 6 - reference types:", typeof arr, typeof obj, typeof fn);

// SECTION 3: OPERATORS & TYPE COERCION

// Example 7: Arithmetic operators
const a = 10, b = 3;
console.log("Example 7 - arithmetic:", a + b, a - b, a * b, a / b, a % b, a ** b);

// Example 8: == vs === (loose vs strict equality)
console.log("Example 8 - == vs ===:");
console.log(5 == "5");   
console.log(5 === "5");  
console.log(null == undefined);  
console.log(null === undefined); 

// Example 9: Type coercion — JavaScript converting types automatically
console.log("Example 9 - type coercion:");
console.log("5" + 3);   
console.log("5" - 3);   
console.log(true + 1);  
console.log(+"42");     
// Example 10: Logical operators
console.log("Example 10 - logical:");
console.log(true && false);  
console.log(true || false);  
console.log(!true);         
console.log(null ?? "default"); 
console.log(0 || "fallback");   
console.log(0 ?? "fallback");   
// Example 11: Optional chaining
const person = { address: { city: "Dhaka" } };
console.log("Example 11 - optional chaining:", person?.address?.city);     
console.log("Example 11 - safe miss:",         person?.phone?.number);     



// SECTION 4: FUNCTIONS

// Example 12: Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log("Example 12 - declaration:", greet("Brishav"));

// Example 13: Function expression
const square = function(n) {
  return n * n;
};
console.log("Example 13 - expression:", square(5));

// Example 14: Arrow function — concise syntax
const cube = (n) => n * n * n;
console.log("Example 14 - arrow function:", cube(3));

// Example 15: Arrow function with multiple statements
const divide = (a, b) => {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
};
console.log("Example 15 - arrow multi-line:", divide(10, 2), divide(5, 0));

// Example 16: Default parameters
const greetUser = (name = "Guest", role = "User") => `Welcome, ${name} (${role})`;
console.log("Example 16 - default params:", greetUser(), greetUser("Brishav", "Admin"));

// Example 17: Callback function — passing a function as an argument
function doMath(a, b, operation) {
  return operation(a, b);
}
const add      = (x, y) => x + y;
const multiply = (x, y) => x * y;
console.log("Example 17 - callback:", doMath(4, 5, add), doMath(4, 5, multiply));

// Example 18: Higher-order function — returns a function
function makeMultiplier(factor) {
  return (number) => number * factor;
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log("Example 18 - higher-order:", double(7), triple(7));

// SECTION 5: CLOSURES


// Example 19: Closure — inner function remembers outer scope
function counter() {
  let count = 0; 
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount:  () => count,
  };
}
const myCounter = counter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
console.log("Example 19 - closure counter:", myCounter.getCount()); 

// Example 20: Closure for data privacy — bank account simulation
function createAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit:    (amt) => { balance += amt; return `Deposited ${amt}. Balance: ${balance}`; },
    withdraw:   (amt) => {
      if (amt > balance) return "Insufficient funds";
      balance -= amt;
      return `Withdrew ${amt}. Balance: ${balance}`;
    },
    getBalance: () => balance,
  };
}
const account = createAccount(1000);
console.log("Example 20 - closure account:", account.deposit(500));
console.log(account.withdraw(200));
console.log("Balance:", account.getBalance()); 



// SECTION 6: HOISTING

// Example 21: Function declarations are hoisted — can be called before defined
console.log("Example 21 - hoisting:", sayHello("World")); 
function sayHello(name) {
  return `Hello, ${name}!`;
}

// Example 22: var is hoisted but initialized as undefined
console.log("Example 22 - var hoisting:", typeof hoistedVar);
var hoistedVar = "I was hoisted";

// Example 23: let and const are NOT initialized before declaration (Temporal Dead Zone)

let hoistedLet = "I was NOT accessible before this line";
console.log("Example 23 - let TDZ:", hoistedLet);



// SECTION 7: SCOPE


// Example 24: Global scope
const globalVar = "I am global";

function showScope() {
  const localVar = "I am local";          
  console.log("Example 24 - inside function:", globalVar, localVar);
}
showScope();


// Example 25: Block scope with let/const
{
  let blockLet   = "block let";
  const blockConst = "block const";
  console.log("Example 25 - inside block:", blockLet, blockConst);
}
/
// Example 26: Lexical scope — inner functions access outer variables
function outer() {
  const outerValue = "outer";
  function inner() {
    const innerValue = "inner";
    console.log("Example 26 - lexical:", outerValue, innerValue); 
  }
  inner();
 
}
outer();

// SECTION 8: DESTRUCTURING


// Example 27: Array destructuring
const colors = ["red", "green", "blue", "yellow"];
const [first, second, , fourth] = colors; 
console.log("Example 27 - array destructure:", first, second, fourth);

// Example 28: Object destructuring
const student = { studentName: "Brishav", cgpa: 3.16, university: "AIUB" };
const { studentName, cgpa, university } = student;
console.log("Example 28 - object destructure:", studentName, cgpa, university);

// Example 29: Destructuring with rename and default values
const { studentName: sName, grade = "A" } = student;
console.log("Example 29 - rename & default:", sName, grade);

// Example 30: Nested object destructuring
const profile = {
  userName: "brishav_m",
  scores: { thesis: 99.3, exam: 85 },
};
const { userName, scores: { thesis, exam } } = profile;
console.log("Example 30 - nested destructure:", userName, thesis, exam);

// Example 31: Destructuring in function parameters
function displayUser({ name, role = "Intern" }) {
  return `${name} — ${role}`;
}
console.log("Example 31 - param destructure:", displayUser({ name: "Brishav", role: "MIS Engineer" }));



// SECTION 9: SPREAD & REST OPERATORS


// Example 32: Spread — expand array into individual elements
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combined = [...nums1, ...nums2];
console.log("Example 32 - spread arrays:", combined);

// Example 33: Spread — copy and extend objects
const baseConfig = { theme: "dark", lang: "en" };
const userConfig = { ...baseConfig, fontSize: 14 };
console.log("Example 33 - spread object:", userConfig);

// Example 34: Spread — pass array as function arguments
function sumThree(x, y, z) { return x + y + z; }
const values = [10, 20, 30];
console.log("Example 34 - spread as args:", sumThree(...values));

// Example 35: Rest — collect remaining arguments into array
function logAll(first, second, ...rest) {
  console.log("Example 35 - rest:", first, second, rest);
}
logAll("a", "b", "c", "d", "e");

// Example 36: Rest in destructuring
const [head, ...tail] = [10, 20, 30, 40, 50];
console.log("Example 36 - rest destructure:", head, tail);


// ─────────────────────────────────────────────────────────────
// SECTION 10: TEMPLATE LITERALS
// ─────────────────────────────────────────────────────────────

// Example 37: Basic template literal
const city  = "Dhaka";
const intro = `I live in ${city} and my CGPA is ${cgpa}.`;
console.log("Example 37 - template literal:", intro);

// Example 38: Multi-line string
const multiLine = `Line 1: Introduction
Line 2: Background
Line 3: Methodology
Line 4: Results`;
console.log("Example 38 - multi-line:\n", multiLine);

// Example 39: Expression inside template literal
const price = 100, tax = 0.15;
console.log("Example 39 - expression:", `Total: ${price + price * tax} BDT`);

// Example 40: Tagged template literal — advanced use
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) =>
    result + str + (values[i] !== undefined ? `[${values[i]}]` : ""), "");
}
const product = "Phone", amount = 5;
console.log("Example 40 - tagged template:", highlight`Ordered ${amount} units of ${product}`);
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) =>
    result + str + (values[i] !== undefined ? `[${values[i]}]` : ""), "");
}
const product = "Phone", amount = 5;
console.log("Example 40 - tagged template:", highlight`Ordered ${amount} units of ${product}`);