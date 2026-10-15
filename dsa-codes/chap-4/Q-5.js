// ** Q-5 Inverted Right Angle Traingle **

/*

* * * * * 
* * * *
* * *
* *
* 

*/


const prompt = require("prompt-sync")();

let n = prompt("Enter your number: ");

for(let i=1; i<=n; i++){
    for(let j=n; j>=i; j--){
        process.stdout.write("* ")   
    }
    console.log()

}