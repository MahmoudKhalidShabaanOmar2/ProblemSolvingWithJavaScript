// write a java script program to get number from the user , and then check if the number is even , or odd number =>
document.getElementById("mainHeading").innerHTML = "check if your entered number is a even number , or odd number"
var number = window.prompt("please enter the number is = ")
// if(number %2 == 0) {
//     console.log("it is even number , because your entered number is = ",number," , and the modulus of the number by two is = ",number % 2)
// }
// else{
//     console.log("it is odd number , because your entered number is = ",number," , and the modulus of the number by two is = ",number % 2)
// }
if(number %2 != 0){
    console.log("it is odd number , because your entered number is = ",number," , and the modulus of the number by two is = ",number % 2)
}
else{
    console.log("it is even number , because your entered number is = ",number," , and the modulus of the number by two is = ",number % 2)
}