// ** Q-3 find 1st maximum  value of Array using loop traversing **

let arr = [10, 30, 90, 60, 56, 15]

let max = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i]
    }
}

console.log(max);
