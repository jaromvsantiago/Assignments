var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//#1
vegetables.pop()
console.log(vegetables)
//#2
fruit.shift()
console.log(fruit)
//#3
var indexOrange = fruit.indexOf("orange")
console.log("fruits: ", indexOrange)
//#4
fruit.push(indexOrange)
console.log(fruit)
//#5
var vegLength = vegetables.length
console.log(vegLength)
//#6
vegetables.push(vegLength)
console.log(vegetables)
//#7
var food = fruit.concat(vegetables)
console.log(food)
//#8
var removeTwoFood = food.splice(4, 2)
console.log(food)
//#9
var reverseFood = food.reverse()
console.log(reverseFood)
//#10
var joinFood = food.join(",")
console.log(joinFood)