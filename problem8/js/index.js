// write a java script program to get three numbers from the user , and then print the maximum number , and the maximum number =>
document.getElementById("mainHeading").innerHTML = "get the maximum number between the three numbers"
var fristNumber = window.prompt(("please enter the frist number is = "))
var secondNumber = window.prompt(("please enter the second number is = "))
var thirdNumber = window.prompt(("please enter the third number is = "))
console.log("the frist number is = ",fristNumber)
console.log("the second number is = ",secondNumber)
console.log("the third number is = ",thirdNumber)
// if((fristNumber > secondNumber) && (fristNumber > thirdNumber)){
//     console.log("the frist number is the maximum number , because the frist number is = ",fristNumber)
//     console.log("the minimum number is = ",Math.min(secondNumber , thirdNumber))
// }
// else if((secondNumber > fristNumber) && (secondNumber > thirdNumber)){
//     console.log("the second number is the maximum number , because the second number is = ",secondNumber)
//     console.log("the minimum number is = ",Math.min(fristNumber , thirdNumber))
// }
// else{
//     console.log("the third number is the maximum number , because the third number is = ",thirdNumber)
//     console.log("the minimum number is = ",Math.min(fristNumber , secondNumber))
// }
if((secondNumber > fristNumber) && (secondNumber > thirdNumber)){
    console.log("the second number is the maximum number , because the second number is = ",secondNumber)
    console.log("the minimum number is = ",Math.min(fristNumber , thirdNumber))
}
else if((thirdNumber > fristNumber) && (thirdNumber > secondNumber)) {
    console.log("the third number is the maximum number , because the third number is = ",thirdNumber)
    console.log("the minimum number is = ",Math.min(secondNumber , fristNumber))
}
else{
    console.log("the frist number is the maximum number , because the frist number is = ",fristNumber)
    console.log("the minimum number is = ",Math.min(secondNumber , thirdNumber))
}