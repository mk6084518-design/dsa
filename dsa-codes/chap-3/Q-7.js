// ** Q-7 reverse of numbers  **



var pr = prompt("kaha tak add karwaaoge ?");

if(pr === null) {
    console.log("cancelled");
}

else{
    var n = Number(pr);

    if(isNaN(pr)){
        console.log("Invalid input");
    }
    else{
        if(n > 0){
            sum = 0
            while(n>0){
                var rem = n%10
                sum = sum*10 + rem

                n = Math.floor(n/10)
            }
            console.log(sum)

        }
    }
}