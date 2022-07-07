//#1
function fiveAndGreaterOnly(arr) {
    let greater = arr.filter(num =>num >= 5)
    return greater
  }
  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
  
  //#2
  function evensOnly(arr) {
    let evens = arr.filter(num => num % 2 === 0)
    return evens;
  }
  // test
  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

  //#3

  function fiveCharactersOrFewerOnly(arr) {
    let characters = arr.filter(words => words.length <= 5)
    return characters;
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  
//#4
function peopleWhoBelongToTheIlluminati(arr){
    let members = arr.filter(people => people.member === true)
    return members;
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

  //#5
  function ofAge(arr){
    let peoples = arr.filter(function(people){
        if(people.age >= 18){
            console.log(`${people.name} can watch The Matrix`)
        }
    })
    return peoples;
}
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]
  