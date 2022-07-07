

document.addition.addEventListener("submit", function(e){
    e.preventDefault()

    const firstnum = document.addition.add1.value
    const secondnum = document.addition.add2.value  
    const total = Number(firstnum) + Number(secondnum)
    const theAnswer = document.createElement("li")
    theAnswer.textContent = `Your addition result is = ${total}`
    document.getElementById("addition").append(theAnswer)
})

document.subtract.addEventListener("submit", function(e){
    e.preventDefault()

    const firstnum = document.subtract.sub1.value
    const secondnum = document.subtract.sub2.value  
    const total = Number(firstnum) - Number(secondnum)
    const theAnswer = document.createElement("li")
    theAnswer.textContent = `Your subtraction result is = ${total}`
    document.getElementById("subtract").append(theAnswer)
})

document.multiply.addEventListener("submit", function(e){
    e.preventDefault()

    const firstnum = document.multiply.mul1.value
    const secondnum = document.multiply.mul2.value  
    const total = Number(firstnum) * Number(secondnum)
    const theAnswer = document.createElement("li")
    theAnswer.textContent = `Your multiply result is = ${total}`
    document.getElementById("multiply").append(theAnswer)
})
  