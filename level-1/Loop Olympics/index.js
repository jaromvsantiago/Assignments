//Preliminaries and Bronze #1
var numbers = []
var superNumbers = []
var fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i <= 9; i++){
    numbers.push(i);
}
console.log(numbers)
var reverseNumbers = numbers.reverse()
console.log(reverseNumbers)
/*for(var i = numbers.length - 1; i >= 0; i--){
    console.log(i)
}  -----Other way to reverse array*/
superNumbers.push(numbers)
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}
//console.log(superNumbers)

//Bronze
var numHundo = []
for(var i = 0; i <= 100; i++){
    if(i % 2 === 0){
        numHundo.push(i);
    }
}
console.log(numHundo)
var fruitTwo = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(i = 0; i < fruitTwo.length; i += 2){
    if(fruitTwo.length % 2 === 0){
        //fruitTwo.push(i)
        console.log(fruitTwo[i])
    }
}
