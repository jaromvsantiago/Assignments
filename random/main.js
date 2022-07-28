const playerStatus = ['Powered Up', 'Big', 'Small', 'Dead'];

class Player {
    constructor() {
        this.name = '';
        this.totalCoins = 0;
        this.status = 2;    //Small
        this.hasStar = false;
        this.gameActive = true;
    }

    randomRange() {
        let intervalId = setInterval(() => {

            let min = Math.ceil(0);
            let max = Math.floor(2);
            let randomAction = Math.floor(Math.random() * (max - min + 1)) + min;
            if(this.gameActive) {
                switch (randomAction) {
                    case 0:
                        this.gotHit();
                        break;
                    case 1:
                        this.gotPowerup();
                        break;
                    case 2:
                        this.addCoin();
                        break;
                                
                }
            } else {
                clearInterval(intervalId);
            }
        }, 1000);
    }

    setName(namePicked) {
        this.name = namePicked;
    }

    gotHit() {
        if(this.hasStar) {
            this.hasStar = false;
        } else {
            this.status += 1;
            if(this.status === 3) {
                this.gameActive = false;
            }
        }
        this.print();
    }

    gotPowerup() {
        if(!this.hasStar) {
            if(this.status === 0) {
                console.log('1');
                this.hasStar = true;
            } else {
                console.log('2');
                this.status -= 1;
            }
        }
        this.print();
    }

    addCoin() {
        this.totalCoins += 1;
        this.print();
    }

    print() {
        console.log(`Name: ${this.name} \n`);
        console.log(`Status: ${playerStatus[this.status]} \n`);
        console.log(`Total Coins: ${this.totalCoins} \n`);
        console.log(`Has Star: ${(this.hasStar) ? "Active": "Inactive"} \n`);
    }
}
const playa = new Player()
function startGame(){
    playa.randomRange()
    playa.setName()
    playa.gotHit()
    playa.gotPowerup()
    playa.addCoin()
    playa.print()
}
console.log(startGame())