// ** Q-4 find 2nd maximum  value of Array using loop traversing **

let arr = [10, 30, 9, 60, 56, 15]

let IstMax = Math.max(arr[0],arr[1])
let IIndMax = Math.min(arr[0],arr[1])

for(let i=2; i<arr.length; i++){
    if(arr[i]>IstMax){

        IIndMax = IstMax
        IstMax = arr[i]
    }
    else if(arr[i]>IIndMax && IstMax != arr[i])
        IIndMax = arr[i]
}

console.log(IIndMax);
