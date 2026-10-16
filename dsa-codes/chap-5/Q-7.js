// ** Q-6 reverse array using good way still a method **

let arr = [1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0]

let i = 0
let j = 0
let temp

while(i<arr.length){
    if(arr[i]===0){
        while(arr[i]===0){
            temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp   
            j++
        }
    }
    i++
    
}

console.log(arr)


// chap-5 is completed

