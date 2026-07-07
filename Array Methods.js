// ============================================================
// array-methods.js
// Practical Examples of ES6+ Array Methods
// Methods: map, filter, reduce, find, findIndex,
//          some, every, sort, flat, flatMap,
//          forEach, includes, indexOf, slice, splice
// ============================================================


// ─── Sample dataset (used throughout all examples) ───────────
const products = [
  { id: 1, name: "Laptop",  category: "Electronics", price: 75000, inStock: true,  rating: 4.5 },
  { id: 2, name: "Phone",   category: "Electronics", price: 25000, inStock: true,  rating: 4.2 },
  { id: 3, name: "Desk",    category: "Furniture",   price: 12000, inStock: false, rating: 3.8 },
  { id: 4, name: "Chair",   category: "Furniture",   price: 8000,  inStock: true,  rating: 4.0 },
  { id: 5, name: "Monitor", category: "Electronics", price: 30000, inStock: true,  rating: 4.7 },
  { id: 6, name: "Lamp",    category: "Furniture",   price: 2500,  inStock: false, rating: 3.5 },
  { id: 7, name: "Tablet",  category: "Electronics", price: 45000, inStock: true,  rating: 4.3 },
];

const scores = [85, 92, 78, 95, 60, 88, 71, 99, 55, 83];
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];


// ─────────────────────────────────────────────────────────────
// 1. MAP — transform every element, returns NEW array (same length)
// ─────────────────────────────────────────────────────────────

// Example 1: Extract product names
const productNames = products.map(p => p.name);
console.log("1a - map names:", productNames);

// Example 2: Apply 10% discount to all prices
const discountedPrices = products.map(p => ({
  ...p,
  price: p.price * 0.9,
  discounted: true,
}));
console.log("1b - map discounted:", discountedPrices.map(p => `${p.name}: ${p.price}`));

// Example 3: Convert scores to letter grades
const grades = scores.map(score => {
  if (score >= 90) return "A+";
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  return "F";
});
console.log("1c - map grades:", grades);


// ─────────────────────────────────────────────────────────────
// 2. FILTER — keep only matching elements, returns NEW array (shorter or equal)
// ─────────────────────────────────────────────────────────────

// Example 4: Only Electronics
const electronics = products.filter(p => p.category === "Electronics");
console.log("2a - filter electronics:", electronics.map(p => p.name));

// Example 5: In-stock items under 30,000 BDT
const affordable = products.filter(p => p.inStock && p.price < 30000);
console.log("2b - filter affordable in-stock:", affordable.map(p => `${p.name} (${p.price})`));

// Example 6: Highly-rated items (rating above 4.2)
const topRated = products.filter(p => p.rating > 4.2);
console.log("2c - filter top rated:", topRated.map(p => `${p.name}: ${p.rating}`));

// Example 7: Scores that passed (>= 70)
const passing = scores.filter(s => s >= 70);
console.log("2d - filter passing scores:", passing);


// ─────────────────────────────────────────────────────────────
// 3. REDUCE — accumulate array into a single value
// ─────────────────────────────────────────────────────────────

// Example 8: Total value of all in-stock items
const totalStockValue = products
  .filter(p => p.inStock)
  .reduce((total, p) => total + p.price, 0);
console.log("3a - reduce total stock value:", totalStockValue);

// Example 9: Group products by category
const grouped = products.reduce((acc, p) => {
  if (!acc[p.category]) acc[p.category] = [];
  acc[p.category].push(p.name);
  return acc;
}, {});
console.log("3b - reduce group by category:", grouped);

// Example 10: Calculate average score
const average = scores.reduce((sum, s) => sum + s, 0) / scores.length;
console.log("3c - reduce average score:", average.toFixed(2));

// Example 11: Count products per category
const categoryCounts = products.reduce((acc, p) => {
  acc[p.category] = (acc[p.category] || 0) + 1;
  return acc;
}, {});
console.log("3d - reduce category counts:", categoryCounts);

// Example 12: Find the most expensive product using reduce
const mostExpensive = products.reduce((max, p) => p.price > max.price ? p : max);
console.log("3e - reduce most expensive:", mostExpensive.name, mostExpensive.price);


// ─────────────────────────────────────────────────────────────
// 4. FIND — returns FIRST matching element (or undefined)
// ─────────────────────────────────────────────────────────────

// Example 13: Find product by id
const productById = products.find(p => p.id === 3);
console.log("4a - find by id:", productById?.name, productById?.inStock);

// Example 14: Find first out-of-stock item
const outOfStock = products.find(p => !p.inStock);
console.log("4b - find first out-of-stock:", outOfStock?.name);

// Example 15: Find first score above 90
const firstHigh = scores.find(s => s > 90);
console.log("4c - find first score > 90:", firstHigh);


// ─────────────────────────────────────────────────────────────
// 5. FINDINDEX — returns INDEX of first match (or -1)
// ─────────────────────────────────────────────────────────────

// Example 16: Find index of product with lowest rating
const lowestRatedIndex = products.findIndex(
  p => p.rating === Math.min(...products.map(x => x.rating))
);
console.log("5a - findIndex lowest rated:", lowestRatedIndex, products[lowestRatedIndex].name);

// Example 17: Find index of first failing score
const failIndex = scores.findIndex(s => s < 60);
console.log("5b - findIndex first fail:", failIndex, scores[failIndex]);


// ─────────────────────────────────────────────────────────────
// 6. SOME — returns true if AT LEAST ONE element matches
// ─────────────────────────────────────────────────────────────

// Example 18: Is there any out-of-stock product?
const hasOutOfStock = products.some(p => !p.inStock);
console.log("6a - some out-of-stock:", hasOutOfStock); // true

// Example 19: Is there any product over 80,000 BDT?
const hasExpensive = products.some(p => p.price > 80000);
console.log("6b - some over 80k:", hasExpensive); // false

// Example 20: Did anyone fail?
const anyFailed = scores.some(s => s < 60);
console.log("6c - some failed:", anyFailed);


// ─────────────────────────────────────────────────────────────
// 7. EVERY — returns true ONLY if ALL elements match
// ─────────────────────────────────────────────────────────────

// Example 21: Are all products rated above 3.0?
const allDecent = products.every(p => p.rating > 3.0);
console.log("7a - every rating > 3:", allDecent); // true

// Example 22: Are all Electronics in stock?
const allElectronicsInStock = products
  .filter(p => p.category === "Electronics")
  .every(p => p.inStock);
console.log("7b - every electronics in stock:", allElectronicsInStock);

// Example 23: Did everyone pass?
const allPassed = scores.every(s => s >= 60);
console.log("7c - every passed:", allPassed);


// ─────────────────────────────────────────────────────────────
// 8. SORT — sorts IN PLACE, returns same array sorted
// ─────────────────────────────────────────────────────────────

// Example 24: Sort scores ascending
const ascending = [...scores].sort((a, b) => a - b); // copy first to avoid mutating original
console.log("8a - sort ascending:", ascending);

// Example 25: Sort scores descending
const descending = [...scores].sort((a, b) => b - a);
console.log("8b - sort descending:", descending);

// Example 26: Sort products by price (low to high)
const byPrice = [...products].sort((a, b) => a.price - b.price);
console.log("8c - sort by price:", byPrice.map(p => `${p.name}: ${p.price}`));

// Example 27: Sort products alphabetically by name
const alphabetical = [...products].sort((a, b) => a.name.localeCompare(b.name));
console.log("8d - sort alphabetical:", alphabetical.map(p => p.name));

// Example 28: Sort by rating descending, then by price ascending (multi-sort)
const multiSort = [...products].sort((a, b) => {
  if (b.rating !== a.rating) return b.rating - a.rating; // primary: rating desc
  return a.price - b.price;                               // secondary: price asc
});
console.log("8e - multi-sort:", multiSort.map(p => `${p.name} (${p.rating}, ${p.price})`));


// ─────────────────────────────────────────────────────────────
// 9. FLAT & FLATMAP
// ─────────────────────────────────────────────────────────────

// Example 29: flat — flatten nested arrays
const nested = [[1, 2], [3, [4, 5]], [6]];
console.log("9a - flat (1 level):", nested.flat());
console.log("9b - flat (deep):",    nested.flat(Infinity));

// Example 30: flatMap — map then flat in one step
const sentences = ["Hello World", "JavaScript is fun", "ES6 is great"];
const words = sentences.flatMap(s => s.split(" "));
console.log("9c - flatMap words:", words);


// ─────────────────────────────────────────────────────────────
// 10. FOREACH — iterate (no return value, used for side effects)
// ─────────────────────────────────────────────────────────────

// Example 31: forEach to log each in-stock product
console.log("10 - forEach in-stock products:");
products
  .filter(p => p.inStock)
  .forEach((p, index) => {
    console.log(`  ${index + 1}. ${p.name} — ${p.price} BDT (⭐ ${p.rating})`);
  });


// ─────────────────────────────────────────────────────────────
// 11. INCLUDES & INDEXOF
// ─────────────────────────────────────────────────────────────

// Example 32: includes — check if value exists
const techStack = ["HTML", "CSS", "JavaScript", "Python", "SQL"];
console.log("11a - includes JS:",     techStack.includes("JavaScript")); // true
console.log("11b - includes React:", techStack.includes("React"));       // false

// Example 33: indexOf — find position of value
console.log("11c - indexOf Python:", techStack.indexOf("Python")); // 3
console.log("11d - indexOf Vue:",    techStack.indexOf("Vue"));    // -1


// ─────────────────────────────────────────────────────────────
// 12. SLICE & SPLICE
// ─────────────────────────────────────────────────────────────

// Example 34: slice — extract a portion WITHOUT mutating original
const top3Scores = [...scores].sort((a, b) => b - a).slice(0, 3);
console.log("12a - slice top 3 scores:", top3Scores);

const middleProducts = products.slice(2, 5);
console.log("12b - slice middle products:", middleProducts.map(p => p.name));

// Example 35: splice — modify array IN PLACE (add/remove)
const techList = ["HTML", "CSS", "JS", "Python", "SQL"];
const removed = techList.splice(2, 1, "JavaScript", "TypeScript"); // remove 1 at index 2, add 2
console.log("12c - splice removed:", removed);
console.log("12d - splice result:", techList);


// ─────────────────────────────────────────────────────────────
// 13. CHAINING METHODS — combine multiple methods
// ─────────────────────────────────────────────────────────────

// Example 36: Real-world pipeline — get names of top-rated in-stock Electronics under 50k
const recommendation = products
  .filter(p => p.category === "Electronics")
  .filter(p => p.inStock)
  .filter(p => p.price <= 50000)
  .sort((a, b) => b.rating - a.rating)
  .map(p => `${p.name} (${p.price} BDT ⭐${p.rating})`);

console.log("13 - chained pipeline result:", recommendation);


// ─────────────────────────────────────────────────────────────
// SUMMARY TABLE
// ─────────────────────────────────────────────────────────────
console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Array Methods Quick Reference
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  map()       → transform all items     → new array (same length)
  filter()    → keep matching items     → new array (shorter)
  reduce()    → accumulate to 1 value   → any type
  find()      → first match             → single item or undefined
  findIndex() → index of first match    → number (-1 if not found)
  some()      → any match?              → boolean
  every()     → all match?              → boolean
  sort()      → order items             → same array (mutates!)
  flat()      → flatten nested arrays   → new array
  flatMap()   → map + flat              → new array
  forEach()   → iterate (no return)     → undefined
  includes()  → value exists?           → boolean
  indexOf()   → position of value       → number (-1 if not found)
  slice()     → extract portion         → new array (no mutation)
  splice()    → add/remove in place     → removed items (mutates!)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);