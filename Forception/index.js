var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var splitAlpha = alphabet.split("")
//console.log(splitAlpha)

function forception(people, alphabet){
    for(var i = 0; i < people.length; i++){
       var jon = people[i].concat(alphabet.split(""))
       console.log(jon)
    }
    //for(i = 0; i < people.length; i++)

 
    //return people.concat(alphabet)
}
console.log(forception(people, alphabet))