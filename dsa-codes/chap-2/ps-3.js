// ** Question-3 Bijli Bill **

let unit = Number(prompt("Enter Your Total Unit "))

let amount = 0

if(unit>401) {
    amount = (unit-400)*13
    unit = 400
}
if(unit>201 && unit<=400) {
    amount += (unit-200)*8
    unit = 200
}
if(unit>101 && unit<=200) {
    amount += (unit-100)*6
    unit = 100
}
else{
    console.log("Enter valid Unit no.")
}

amount += unit*4


console.log(amount)