const fizz = "fizz"
const buzz = "buzz"
const numbers = []

/*for(var i = 0; i <= 100; i++){
    numbers.push(i)
    if(numbers % 3 === 0){
        console.log(`${numbers[i]} ${fizz}`)
    }
} 
console.log(numbers)*/

for (var i=1; i <= 100; i++){
    if( i % 3 == 0 && i % 5 == 0 ) {
        console.log(`${i} fizzbuzz`)
    } else {
        if( i % 3 == 0 ) {
            console.log(`${i} ${fizz}`)
        }
        if( i % 5 == 0 ) {
            console.log(`${i} ${buzz}`);
        }
    }
}
