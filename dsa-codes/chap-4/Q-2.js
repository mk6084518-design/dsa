// ** Q-2 Right Angle Traingle **

/*

* 
* * 
* * * 
* * * * 
* * * * * 

*/


const prompt = require("prompt-sync")();

let n = prompt("Enter your number: ");

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write("* ")
        
    }
    console.log()

}