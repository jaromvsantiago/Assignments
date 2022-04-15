var h1 = document.createElement("h1");
h1.className = "header";
h1.textContent = "JavaScript made this!!"
document.getElementById("header").appendChild(h1);

var subTitle = document.createElement("span");
subTitle.innerHTML = "<span class= 'subtitle'>JaromS</span> wrote the Javascript"
document.getElementById("header").appendChild(subTitle)
subTitle.style.color = "green"

var messagesLeft = document.getElementsByClassName("message left")
messagesLeft[0].textContent = "You're awesome";
messagesLeft[1].textContent = "Thank you";

var messagesRight = document.getElementsByClassName("message right")
messagesRight[0].textContent = "You look good";
messagesRight[1].textContent = "Have a great day!";

var clearButton = document.getElementById("clear-button")

clearButton.addEventListener("click", messagesLeft, false)