var item = document["addItem"]

item.addEventListener("submit",  (event) => {
    event.preventDefault()

    var addedItem = item.title.value
    item.title.value = ""
    console.log(addedItem)

    var h1 = createNewItem()
    var editBtn = createEdit()
    editBtn.addEventListener("click", event => {
        var newInput = document.createElement("input")
        h1.append(newInput)
        newInput.value = h1.children[0].textContent
        var submitBtn = document.createElement("button")
        submitBtn.textContent = "submit"
        h1.append(submitBtn)
        console.log(h1.children)
        submitBtn.addEventListener("click", event =>{
            h1.children[0].textContent = newInput.value
            newInput.remove()
            submitBtn.remove()
        })
    })
    var exBtn = document.createElement("button")
    exBtn.textContent = "X"
    exBtn.addEventListener("click", event => {
        var groceryList = document.getElementById("theList")
        groceryList.removeChild(h1)
    })
    h1.id = "newItem"
    var listSpan = document.createElement("span")
    listSpan.textContent = addedItem
    h1.append(listSpan, editBtn, exBtn)


    document.getElementById("theList").append(h1)

})

function createNewItem(){
    var newList = document.createElement("li")
    return newList
}

function createEdit(){
    var editButton = document.createElement("button")
    editButton.textContent = "edit"
    return editButton
}

function deleteButton(){
    var deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", (event) => {
        var groceryList = document.getElementById("theList")
        var newGrocery = document.getElementById("newItem")
        groceryList.removeChild(newGrocery.value)
    })
    return deleteBtn
}
function removeItem(event){
    console.log("Item removed")
    var removeNew = document.getElementsByTagName("ul")[0]
    removeNew.removeChild(item)

}
