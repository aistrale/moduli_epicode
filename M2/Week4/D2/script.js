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
    // const inputs = form.getElementsByTagName("input");
    // for (let index = 0; index < inputs.length; index++) {
    //     const element = inputs[index];
    //     if (validateName)(element.value)
    //     console.log("ciao");
    // }

//     let isValid = true;
//     qui sotto controlla che il campo "name" non sia vuoto; result.name è il valore dell'input
//     if (!result.name || result.name.length < 2) {
//         console.log("il nome è troppo corto");
//         isValid =false;
//     }
// }

    let isValid = true;
    console.log(result.name.trim().length >=3);
    
    if (result.name.trim().length >=3) {
        console.log("il nome è troppo corto");
         isValid =false;
    }
 }

function validateName(name) {
    return name.length >= 2;
}

 function getFormData(){
    const result = {
        name:name.Value,
        surname:surname.Value,
        age:age.Value,
        email:email.lValue,
        password:password.Value,
        passwordCheck:passwordCheck.Value,
        gender:gender.Field
    }
    console.log(result);
    return result
 }