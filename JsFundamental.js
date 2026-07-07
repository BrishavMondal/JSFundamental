let age = 22;
age = 23; 
console.log("Example 1 - let:", age); // 23

const name = "Brishav";

console.log("Example 2 - const:", name);

function testVar() {
  if (true) {
    var x = 10;   
    let y = 20;   
  console.log("Example 3 - var x:", x); // 10
 
testVar();

const user = { name: "Brishav", role: "Developer" };
user.role = "MIS Engineer"; 
console.log("Example 4 - const object:", user);

const str    = "Hello";          
const num    = 42;               
const bool   = true;            
const nothing = null;          
let notDefined;                 
const sym    = Symbol("id");     
const bigInt = 9007199254740991n; 
 
console.log("Example 5 - types:", typeof str, typeof num, typeof bool, typeof nothing, typeof notDefined, typeof sym);
 \
 const str    = "Hello";          // String
const num    = 42;               // Number
const bool   = true;             // Boolean
const nothing = null;            // Null
let notDefined;                  // Undefined
const sym    = Symbol("id");     // Symbol
const bigInt = 9007199254740991n; // BigInt
 
console.log("Example 5 - types:", typeof str, typeof num, typeof bool, typeof nothing, typeof notDefined, typeof sym);