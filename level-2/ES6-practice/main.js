const name = "John"
const age = 101

function runForLoop(pets) {
    var petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

//ES6 Arrow Functions
//Task 1
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots))

//Task 2
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
}

console.log(filterForFriendly(people))
//Task 3
//doMathSum((a, b) => a + b)

var produceProduct = (a, b) => a * b

//Task 4
const katStark = {
    firstName: 'Kat',
    lastName: 'Stark',
    age: 40
}
const printString = ({firstName, lastName, age}) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;

console.log(printString(katStark))

//Task 5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
    return arr.filter(animal => animal.type === "dog" ? true : false)}

console.log(filterForDogs(animals))

