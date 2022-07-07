var form = document["baddies-Form"]
var submit = document.getElementById("submit")

function formTotal(event){
    event.preventDefault()
    let goomba = document.getElementById("goombaa").valueAsNumber
    let bob = document.getElementById("bob").valueAsNumber
    let cheep = document.getElementById("cheep").valueAsNumber
    let totalCoin = document.getElementById("totalBox")
    let totalGoomba = goomba * 5;
    let totalBob = bob * 7;
    let totalCheep = cheep * 11;
    let totalNumber = totalGoomba + totalBob + totalCheep;
    
    totalCoin.innerHTML = totalNumber + " coins"

}

form.submit.addEventListener("click", formTotal)