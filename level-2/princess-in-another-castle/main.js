const readline = require(`readline-sync`);
const characterChoice = ["Mario", "Luigi"];
function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}
class Player {
    constructor(){
        this.name = ""
        this.totalCoins = 0
        this.status = "small"
        this.hasStar = false
    }
    getRandomNum(){
        let interval = setInterval((min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            let num =  Math.floor(Math.random() * (max - min + 1)) + min;
            if(num === 0){
               this.gotHit()
            }if(num === 1){
                this.gotPowerup()
            }if(num === 2){
                this.addCoin()
            } else {
                clearInterval(interval);
            }
        }, 2000);
  
        this.print();
    }
    setName(){
        const namePicked = readline.keyIn(`press M for Mario and L for Luigi`, {limit: `ml`})
        if(namePicked === `m`){
            this.name = "Mario"
        } if(namePicked === `l`){
            this.name = "Luigi"
        }
        console.log(this.name)
        this.print();
    }
    gotHit(){
        if(this.status === "Powered Up"){
            this.status = "Big"
        }else if(this.status === "Big"){
            this.status = "small"
        }else if(this.status === "small"){
            this.status = "Dead"
        }
        console.log(this.status)
        this.print();
    }
    gotPowerup(){
        const levels = ["small", "Big", "Powered Up"]
        Math.floor((Math.random()*levels.length));
        if(this.status === "Powered Up"){
            this.hasStar++
        }
        this.print()
    }
    addCoin(){
        console.log(this.totalCoins++)
        this.print()
    }
    print(playerPrint){
        playerPrint = {
            Name: this.name,
            TotalCoins: this.totalCoins,
            Status: this.status
        }
        console.log(playerPrint);
    }
}
const character = new Player()

function startGameNow(){
    character.getRandomNum()
    character.setName()
    character.gotHit()
    character.gotPowerup()
    character.addCoin()
}
console.log(startGameNow())





function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//create start game function
//inside function, call functions in constructor