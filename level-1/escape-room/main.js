const readline = require("readline-sync");
const name = readline.question("TYPE NAME: ");
const yesOrNo = ["yes", "no"]
const welcome = readline.question(`Welcome ${name} are you ready to escape
this room?(hit ENTER)`)
const chooseChest = ["BLUE CHEST", "GREEN CHEST", "RED CHEST", "Hole in Wall"]
const choices = [...chooseChest]
index = readline.keyInSelect(yesOrNo,"Choose answer")
if(yesOrNo[index] === "yes"){
    console.log("To escape, you must find the key in the correct chest")
    thePick = readline.keyInSelect(choices, "Select a CHEST or the Hole in Wall")
    if(choices[thePick] === "BLUE CHEST"){
        console.log(`YOU HAVE ESCAPED!`)
    }
}
if(yesOrNo[index] === "no"){
    console.log("Too bad because to escape, you must find the key in the correct chest")
}
