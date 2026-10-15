// ** Q-6 Mirror Right Angle Traingle **

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

    for(let k=n; k>=i; k--){
        process.stdout.write("  ")  
    }
    for(let j=1; j<=i; j++){
        process.stdout.write("* ")   
    }
    console.log()

}