//#1
function doubleNumbers(arr){
    let dblNumbers = arr.map(num => num * 2)
    return dblNumbers
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//#2 
function stringItUp(arr){
    let stringNum = arr.map(num => String(num))
    return stringNum
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
  

//#3

function capitalizeNames(arr){
    
    let theNames = arr.map(function(name){
        let firstLetter = name.slice(0, 1);
        let restLetter = name.slice(1);
        let lowerRest = restLetter.toLowerCase();
        let capFirstLetter = firstLetter.toUpperCase();
        let allWords = capFirstLetter + lowerRest;
       return allWords;
    });
    return theNames;
}
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  
  //#4
  function namesOnly(arr){
    let getNames = arr.map(function(people){
        let nameGrab = people.name;
        return nameGrab;
    })
    return getNames;
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  
  
  //#5
  function makeStrings(arr){
    let whoMakeIt = arr.map(function(peeps){
        let names = peeps.name;
        let ages = peeps.age;
        if(ages >= 18){
            return `${names} is old enough to watch Matrix`
        } else{
            return `${names} is not old enough`
        }
    })
    return whoMakeIt;
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  
  //#6

  function readyToPutInTheDOM(arr){

    let headers = arr.map(function(peoples){
        let namesHeader = peoples.name;
        let ageHeader = peoples.age;
        return `<h1>${namesHeader}</h1> <h2>${ageHeader}</h2>`
    })
    return headers;
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"] 