// write a java script program to get two numbers from the user , and then check it is a positive number , or negative number =>
document.getElementById("mainHeading").innerHTML = "check if your entered number is a negative number , or positive number"
number = window.prompt("please enter the number is = ")
console.log("the number is = "+number)
if(number > 0) {
    console.log("it is a positive number , because your entered number is = "+number)
}
else{
    console.log("it is a negative number , because your entered number is = "+number)
}