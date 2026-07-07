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
 