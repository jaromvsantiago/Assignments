const readline = require("readline-sync")
const heroId = []
heroId.attack = 10
heroId.health = 10
heroId.item = `hands`
const enemies = [
    {
        name: "Amber",
        health: 12,
        attack: 12,
        item: "foot"
    },
    {
        name: "Karen",
        health: 5,
        attack: 0, 
        item: "nails"
    },
    {
        name: "Kyle",
        health: 9,
        attack: 5,
        item: "elbow"
    }
] 

const userName = readline.question(`May I have your name?: `);
heroId.name = userName;


function randomEnemy(){
    const chooseEnemy = enemies[Math.floor(Math.random() * enemies.length)]
    console.log(chooseEnemy.name)
    if(chooseEnemy.name === "Amber"){
        console.log("You are fighting AMBER")
    }
    if(chooseEnemy.name === "Karen"){
        console.log("You are fighting Karen")
    }
    if(chooseEnemy.name === "Kyle"){
        console.log("You are fighting Kyle")
    }
}


console.log(`Welcome to the BATTLE FOREST ${userName}! In this forest you will encounter enemies all throughout. 
Good luck on your quest in the BATTLE FOREST your starting health(hp) 
is ${heroId.health}`)

function encounter(){
    const chooseEnemy = enemies[Math.floor(Math.random() * enemies.length)]
    if(chooseEnemy.name === "Amber"){
        console.log("You are fighting AMBER")
    }
    if(chooseEnemy.name === "Karen"){
        console.log("You are fighting Karen")
    }
    if(chooseEnemy.name === "Kyle"){
        console.log("You are fighting Kyle")
    }
    const fightOrRun = readline.keyIn(`F to fight or R to run `, {limit: `fr`})
    if(fightOrRun === `f`){
        if(chooseEnemy.health < heroId.attack){
            console.log(`USER ATTACK!`)
            console.log(`CONGRATULATIONS you defeated ${chooseEnemy.name}`)
            heroId.push(chooseEnemy.item)
            exit()
        }
        if(heroId.attack < chooseEnemy.health){
            console.log(`${chooseEnemy.name} is too strong! keep walking`)
            walking()
        }
    }else if(fightOrRun === `r`){ 
        console.log(`USER RUN!: escape succesful!`)
        walking()
    }
}

function exit(){
    const exitForest = readline.keyIn('Type the letter "e" to exit forest or "w" to keep walking', {limit: 'ew'});
    if(exitForest === `e`){
        console.log(`THANK YOU FOR PLAYING ${userName}`)
    }else{
        walking()
    }
    
}

function walking(){
    const startWalk = readline.keyIn('Type the letter "w" to start walking or check stats "p" ', {limit: 'wp'});
    if(startWalk === `w`){
        encounter()
    }
    else{
        console.log(heroId)
        walking()
    }
}


function fight(){
    const fightOrRun = readline.keyIn(`F to fight or R to run `, {limit: `fr`})
    if(fightOrRun === `f`){
        console.log(`USER ATTACK!`)
        if(chooseEnemy.health < heroId.attack){
            console.log(`You defeated ${chooseEnemy.name}`)
            heroId.push(chooseEnemy.item)
        }else if(heroId.attack < chooseEnemy.health){
            console.log(`You were too weak! ${chooseEnemy.name} attacks back`)
            console.log(`You have been defeated`)
        }
    } else { 
        console.log(`USER RUN!: escape succesful!`)
        walking()
    }
}
walking()
