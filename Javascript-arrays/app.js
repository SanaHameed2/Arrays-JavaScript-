// Purpose: Create an array of fruits and access them by index
// Topic: Array Creation & Indexing

let fruits = ["Orange", "Banana", "Cherry", "Peach", "Mango"];
console.log(fruits[0]); // Orange
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry
console.log(fruits[3]); // Peach
console.log(fruits[4]); // Mango

// Purpose: Add and remove items using push() and pop()
// Topic: Array Methods - push & pop
 
let fruits = ["Apple", "Banana", "Cherry", "Peach", "Mango"];
fruits.push("Orange"); // Adds "Orange" to the end of the array
console.log(fruits); // ["Apple", "Banana", "Cherry", "Peach", "Mango", "Orange"]

fruits.pop(); // Removes the last item ("Orange")
console.log(fruits); 

// Purpose: Add and remove items using unshift() and shift()
// Topic: Array Methods - unshift & shift

let fruits = ["Apple", "Banana", "Cherry", "Peach", "Mango"];
fruits.unshift("Orage"); // Adds "Orange" to the beginning of the array
console.log(fruits);


// // Purpose: Add and remove items using unshift() and shift()
// Topic: Array Methods - unshift & shift

let fruits = ["Apple", "Banana", "Cherry", "Peach", "Mango"];
fruits.shift(); // Removes the first item ("Orange")
console.log(fruits); // ["Banana", "Cherry", "Peach", "Mango"]
