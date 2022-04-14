var headerOne = document.getElementById("header1")
console.log(headerOne.innerHTML)

var grab = document.getElementById("header1")
grab.textContent = "Monster1"
grab.style.backgroundColor = "green"

var select = document.querySelectorAll(".navbar > li")
console.log(Array.from(select))

for (var i = 0; i < select.length; i++){
    select[i].textContent = "Monster"
}

