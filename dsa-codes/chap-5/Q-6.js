// ** Q-6 reverse array using good way still a method **

let arr = [10, 30, 6, 9, 56, 15]

let i = 0
let j = arr.length-1
let temp

while(i<j){
    temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp

    i++
    j--
}

console.log(arr)


