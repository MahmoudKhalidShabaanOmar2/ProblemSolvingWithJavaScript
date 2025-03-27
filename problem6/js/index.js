// write a java script program to get two numbers from the user , and then find the maximum number between the two numbers is :
document.getElementById("mainHeading").innerHTML = "get the maximum number between the two numbers"
var fristNumber = window.prompt(("please enter the frist number is = "))
var secondNumber = window.prompt(("please enter the second number is = "))
console.log("the frist number is = ",fristNumber)
console.log("the second number is = ",secondNumber)
// if(fristNumber > secondNumber){
//     console.log("the frist number is grater than the second number , because the frist number is = "+fristNumber)
// }
// else{
//     console.log("the second number is grater than the frist number , because the second number is = "+secondNumber)
// }
if(secondNumber > fristNumber){
    console.log("the second number is grater than the frist number , because the second number is = ",secondNumber)
}
else{
    console.log("the frist number is grater than the second number , because the frist number is = "+fristNumber)
}