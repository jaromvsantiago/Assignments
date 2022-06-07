var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

//console.log(splitAlpha)

function forception(people, alphabet){
    /*for(var i = 0; i < people.length; i++){
       var jon = people[i].concat(alphabet.split(""))
       console.log(jon)
    }*/
    for(var i = 0; i < people.length; i++){
        var splitAlpha = alphabet.split("")
        for(var j = 0; j < people[i][j].length; j++){
            console.log(people[i] + ": " + splitAlpha)
        }
    }

    //return people.concat(alphabet)
}
console.log(forception(people, alphabet))
