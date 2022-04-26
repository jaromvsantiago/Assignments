var item = document["addItem"]

item.addEventListener("submit",  (event) => {
    event.preventDefault()

    var addedItem = item.title.value
    item.title.value = ""
    console.log(addedItem)

    var h1 = document.createElement("li")
    var editBtn = document.getElementById("editBtn")
    var exBtn = document.getElementById("exBtn")
    h1.id = "newItem"
    h1.textContent = addedItem

 
    document.getElementsByTagName("ul")[0].append(h1)
    document.getElementsByTagName("ul")[0].append(editBtn)
    document.getElementsByTagName("ul")[0].append(exBtn)


    exBtn.addEventListener("click", (event) => {
        exBtn.style.display = "none"
        h1.style.display = "none"
    })

})



