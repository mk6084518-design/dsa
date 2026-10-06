// Basic Logic on js
// Varable , operator

// ** Question - 1 **
// Part 1. Sum of two integers

// let a = 1
// let b = 2
 
// const sum = a + b

// console.log(sum)


// part 2. relation between integers and string

// let x = 1     //integer
// let y = "ram" //string



// ** Question - 2 **
// Sum and Message 

// let m = 1     //integer
// let n = "ram" //string

// console.log(m+n) // 1ram
// console.log(m-n) // naN



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
// let f = 20
// let g = 30

// [f,g] = [g,f];

// console.log(f,g)



// ** Theory example **
// Calculate area and parameter of rectangular

// Part-1
// let i = 11;
// i = i++ + ++i;
// console.log(i); // 24

// // Part-2
// let a = 11, b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log("a=" + a) //13
// console.log("b=" + b) //24
// console.log("c=" + c) //103

// // Part-3
// let x = true;
// x++;
// console.log(x) //2

// Part-4 
// let n = 11++
// console.log(n) //error

// Part-5
// let y = 10;
// let z = ++(y++)
// console.log(y) //error



// ** Question - 5 Calulate area and perimeter of rectangle **
// let a = 5;
// let b = 7;
// area = 5*7;
// perimeter = 5+7
// console.log(area)
// console.log(perimeter)



// ** Question-6 Generate OTP
console.log(Math.trunc(Math.random()*9000+1000))



// ** Question-7 area of triangle by heron's formula
let a = 5
let b = 4
let c = 3

let s = (a+b+c)/2
console.log(s);

console.log(Math.sqrt(s * (s-a) * (s-b) * (s-c)));

// Question-8 Circumference of circle
let r = 12
console.log(Number((2*Math.PI*r).toFixed(2)))



