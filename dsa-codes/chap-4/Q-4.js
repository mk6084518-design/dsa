// ** Q-4 Right Angle Traingle **

/*

A
A B
A B C
A B C D 
A B C D E 

*/


const prompt = require("prompt-sync")();

let n = prompt("Enter your number: ");

for(let i=1; i<=n; i++){
    let ascii = 65;
    for(let j=1; j<=i; j++){
        process.stdout.write(String.fromCharCode(ascii)+" ")
        ascii++;
        
    }
    console.log()

}