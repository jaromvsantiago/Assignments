// write a function (oneWordOnly) that takes an array of strings, and 
// returns an array of just the strings with one word in them

function oneWordOnly(words){
    let thing = words.filter(function(word){
        if(!word.includes(" ")){
            return word;
        }
    })
    return thing;
   }
   
   console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
   console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"]