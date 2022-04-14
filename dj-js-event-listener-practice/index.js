var djSquare = document.getElementById("square")

djSquare.addEventListener("mouseout", defaultSquare)
djSquare.addEventListener("mouseover", blueSquare)
djSquare.addEventListener("mousedown", redSquare)
djSquare.addEventListener("mouseup", yellowSquare)
djSquare.addEventListener("dblclick", greenSquare)
djSquare.addEventListener("wheel", orangeSquare)

function blueSquare (){
    djSquare.style.backgroundColor = "blue"
}
function redSquare (){
    djSquare.style.backgroundColor = "red"
}
function yellowSquare (){
   djSquare.style.backgroundColor = "yellow"
}
function greenSquare (){
    djSquare.style.backgroundColor = "green"
}
function orangeSquare (){
    djSquare.style.backgroundColor = "orange"
}
function defaultSquare (){
    djSquare.style.backgroundColor = "pink"
}