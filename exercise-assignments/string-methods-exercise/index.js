
// #1
function capilizeAndLowercase(string){
    var uppers = string.toUpperCase()
    var lower = uppers.toLowerCase()
    console.log(uppers + lower)
}

capilizeAndLowercase("HelLo") // => "HELLOhello"

// #2
function findMiddleIndex(string){
    var strLength = string.length 
    var halfString = Math.floor(strLength/2)
    console.log(string + ": " + halfString)
}


findMiddleIndex("Hello") // => 2
findMiddleIndex("Hello World") // => 5

// #3
function returnFirstHalf(string){
    var strLength = string.length 
    var halfString = Math.floor(strLength/2)
    var sliceWords = string.slice(0, halfString)
    console.log(sliceWords)
}


returnFirstHalf("Hello") // => "He"
returnFirstHalf("Hello World") // => "Hello"

// #4
function capilizeAndLowercase(string){
    var strLength = string.length 
    var halfString = Math.floor(strLength/2)
    var firstHalf = string.slice(0, halfString)
    var secondHalf = string.slice(halfString)
    var capFirstHalf = firstHalf.toUpperCase()
    var capAndLower = capFirstHalf + secondHalf
    console.log(capAndLower)
}


capilizeAndLowercase("Hello") // => "HEllo"
capilizeAndLowercase("Hello World") // => "HELLO world"
