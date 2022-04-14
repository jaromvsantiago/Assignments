var djSquare = document.getElementById("square")

djSquare.addEventListener("mouseout", defaultSquare)
djSquare.addEventListener("mouseover", blueSquare)
djSquare.addEventListener("mousedown", redSquare)
djSquare.addEventListener("mouseup", yellowSquare)
djSquare.addEventListener("dblclick", greenSquare)
window.addEventListener("wheel", orangeSquare)
djSquare.addEventListener("keydown", blueTyped)

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

function blueTyped(){
    djSquare.style.backgroundColor = "blue"
}
/*
function colorTyped(event){
    var letter = event.key;
    if (letter = "b"){
        djSquare.style.backgroundColor = "blue";
    } else if (letter = "r"){
        djSquare.style.backgroundColor = "red";
    } else if (letter = "y"){
        djSquare.style.backgroundColor = "yellow";
    } else if (letter = "g"){
        djSquare.style.backgroundColor = "green";
    } else if (letter = "o"){
        djSquare.style.backgroundColor = "orange";
    }
} */
