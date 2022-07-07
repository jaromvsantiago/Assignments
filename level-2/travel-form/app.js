var form = document["air-form"]
var submit = document.getElementById("submit");

function popAlert(){
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let gender = form.gender.value;
    let location = form.location.value;
    let dietSelect = []

    for(i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            dietSelect.push(form.diet[i].value)
        }
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nGender: " + gender + "\nLocation: " + location + "\nDietary Restrictions: " + dietSelect)
}

form.submit.addEventListener("click", popAlert)