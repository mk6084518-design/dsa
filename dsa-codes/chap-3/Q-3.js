let n = prompt("Enter your Number")

// for sum
if(isNaN(n)) {
    console.log("Invalid Input")
}
else{
    var l = Number(n)

    if(n>0){
        let sum = 0;
        for(let i = 1; i<=l; i++){
            sum +=i
        }
        console.log("sum is",sum)
    }else{
        console.log("Enter a number positive or more than 0")
    }
}
// for fact
if(isNaN(n)) {
    console.log("Invalid Input")
}
else{
    l = Number(n)
    if(n>0){
        let sum = 1;
        for(let i = 1; i<=l; i++){
            sum *=i
        }
        console.log("fact is",sum)
    }else{
        console.log("Enter a number positive or more than 0")
    }
}