var readlineSync = require("readline-sync")
var num1 = readlineSync.questionFloat("Please select your first number: ")
var num2 = readlineSync.questionFloat("Please select your second number: ")
var operation = ["add", "subtract", "multiply", "divide"]
index = readlineSync.keyInSelect(operation, "Choose an operation")


if (operation[index] === "add") {
    console.log("The result is: ", addThem(num1, num2))
} 
if (operation[index] === "subtract"){
    console.log("The result is: ", Number(num1) - Number(num2))
}
if (operation[index] === "divide"){
    console.log("The result is: ", Number(num1) / Number(num2))
}
if (operation[index] === "multiply"){
    console.log("The result is: ", Number(num1) * Number(num2))
}
function addThem(number1, number2){
    return (number1 + number2)
}