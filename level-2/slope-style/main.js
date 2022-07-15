//#1
function collectAnimals(...animal) {
    return animal
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//#2
const combineFruit = (fruit, sweets, vegetables) => ({fruit, sweets, vegetables})


console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
/*=> {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }*/

//#3
const parseSentence = ({location, duration}) => `We're going to have a good time in ${location} for ${duration}`
  
  console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }))

  //#4
  function returnFirst(items){
    const firstItem = [...items]; /*change this line to be es6*/
    return firstItem
}

//#5
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(firstFav, secondFav, thirdFav , ...arr){
    return `My top three favorite activities are, ${firstFav} , ${secondFav}, and ${thirdFav}`
}

console.log(returnFavorites(...favoriteActivities))

//#6
function combineAnimals(real, magical, mysterious){
    return [...real, ...magical, ...mysterious]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//#7
function product(a, b, c, d, e) {
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }
  


