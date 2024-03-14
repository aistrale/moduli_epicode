const form = document.querySelector("#registratioForm");
const name = document.querySelector("#nameField");
const surname = document.querySelector("#surnameField");
const age = document.querySelector("#ageField");
const email = document.querySelector("#emailField");
const password = document.querySelector("#passwordField");
const passwordCheck = document.querySelector("#checkPasswordField");
const gender = document.querySelector("#genderField");

// prendo il form o button e ci aggancio l'event listener
form.addEventListener("submit", (e)=>{
     e.preventDefault() // previene il refresh automatico
     getFormData()
     required(getFormData())
 })

function required(result){
/*
    const inputs = form.getElementsByTagName("input");
    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        if (validateName)(element.value)
        console.log("ciao");
    }

    let isValid = true;
    // qui sotto controlla che il campo "name" non sia vuoto; result.name è il valore dell'input
    if (!result.name || result.name.length < 2) {
        console.log("il nome è troppo corto");
        isValid =false;
    }
}
*/

let isValid = true;
if(validateName(result.name)){
    console.log(result.name.trim.length >= 5);
    console.log('hai un nome');
    isValid=false;
}
}

/*
function validateName(name) {
    return name.length >= 2;
}
*/

function validateName(inputNameValue) {
    return inputNameValue.trim().length >= 5; // deve essere di almeno 5 lettere
  }

 function getFormData(){
    if(name.value === " ") {
        console.log('riprova');
    } else {
        nameValue=name.value
    }

    const result = {
        name:name.value,
        surname:surname.value,
        age:age.value,
        email:email.value,
        password:password.value,
        passwordCheck:passwordCheck.value,
        gender:gender.value,
    }
    console.log(result);
    return result
 }