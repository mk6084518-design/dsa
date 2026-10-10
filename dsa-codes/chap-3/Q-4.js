let n = prompt("Enter your Number")

// for sum
if (n === null || n.trim() === "" || isNaN(n)) {
    console.log("Invalid Input")
}
else{
    var l = Number(n)

        let factor = [];
        for(let i = 1; i<=l; i++){
            if(l%i === 0){
                factor.push(i)
            }
        }
        console.log(`Factor of ${l} is ${factor}`)
    }
