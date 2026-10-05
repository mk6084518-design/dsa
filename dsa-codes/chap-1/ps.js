// Basic Logic on js
// Varable , operator

// ** Question - 1 **
// Part 1. Sum of two integers

let a = 1
let b = 2
 
const sum = a + b

console.log(sum)

// part 2. relation between integers and string

let x = 1     //integer
let y = "ram" //string

// ** Question - 2 **
// Sum and Message 

let m = 1     //integer
let n = "ram" //string

console.log(m+n) // 1ram
console.log(m-n) // naN

// ** Qusetion - 3 **
// Accept and print the Answer

// const Age = Number(prompt("Enter your Age")) //Please change this

// console.log(Age)

// ** Qusetion - 4 ** 
// Swap Two variable via 3 methods

// method - 1
// let f = 20;
// let g = 30;
// let c;

// h = f
// f = g
// g = h

// console.log(f)
// console.log(g)

// method - 2 using 2 variables
// let f = 20
// let g = 30

// f = f+g
// g = f-g
// f = f-g

// console.log(f)
// console.log(g)

// method - 3 
let f = 20
let g = 30

[f,g] = [g,f];

console.log(f,g)

