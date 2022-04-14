var firstPar = document.getElementById("btn")


firstPar.addEventListener('click', function (event) {
    document.body.innerHTML = "<p id='paragraph'>you clicked it!"
    document.getElementById("paragraph").style.color = "green"
})
