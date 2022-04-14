var djSquare = document.getElementById("square")

djSquare.addEventListener("mouseout", defaultSquare)
djSquare.addEventListener("mouseover", blueSquare)
djSquare.addEventListener("mousedown", redSquare)
djSquare.addEventListener("mouseup", yellowSquare)
djSquare.addEventListener("dblclick", greenSquare)
window.addEventListener("wheel", orangeSquare)

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


/*
djSquare.addEventListener("keydown", event => {
    if (event.code === 66){
        djSquare.style.backgroundColor = "blue"
    } else if (event.code === 82){
        djSquare.style.backgroundColor = "red"
    } else if (event.code === 89){
        djSquare.style.backgroundColor = "yellow"
    } else if (event.code === 71){
        djSquare.style.backgroundColor = "green"
    } else if (event.code === 79){
        djSquare.style.backgroundColor = "orange"
    }
})*/

/*
document.addEventListener("keydown", KeyboardEvent => {
    if (KeyboardEvent.code === 66){
        djSquare.style.backgroundColor = "blue";
    } else if (KeyboardEvent.code === 82){
        djSquare.style.backgroundColor = "red";
    } else if (KeyboardEvent.code === 89){
        djSquare.style.backgroundColor = "yellow";
    } else if (KeyboardEvent.code === 71){
        djSquare.style.backgroundColor = "green";
    } else if (KeyboardEvent.code === 79){
        djSquare.style.backgroundColor = "orange";
    }
})*/

