//Preliminaries and Bronze #1
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var superNumbers = []
var fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i <= 9; i++){
    superNumbers.push(i);
}
for(var i = numbers.length - 1; i >= 0; i--){
    console.log(i)
}
numbers.push(superNumbers)
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}
console.log(superNumbers)

//Bronze
var numHundo = []
for(var i = 0; i <= 100; i++){
    if(i % 2 === 0){
        numHundo.push(i);
    }
}
console.log(numHundo)
var fruitTwo = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(i = 0; i <= fruitTwo.length; i += 2){
    if(i % 2 === 0){
        console.log(fruitTwo[i])
    }
}
