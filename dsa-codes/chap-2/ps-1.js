// ***** Condtional Statements ****

// ** Question-1 Valid Voter **
let ans = Number(prompt("Enter your age"))

if(isNaN(ans)) {
    console.log("enter a valid number");
}

else if(ans>=18){
    console.log("Valid Voter");
}

else {
    console.log("not Valid Voter");
}