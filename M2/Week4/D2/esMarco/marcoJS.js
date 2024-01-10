const form = document.querySelector('.formRegi')
const name = document.querySelector('#nameField')
const surname = document.querySelector('#surnameField')
const eta = document.querySelector('#etaField')
const email = document.querySelector('#emailField')
const password  = document.querySelector('#passwordField')
const passwordConf = document.querySelector('#passwordConfField')
const gender = document.querySelector('#geneder')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getFormData()
    requiured(getFormData())
})

function requiured(result){
    /* const inputs = form.getElementsByTagName('input')
   for (let index = 0; index < inputs.length; index++) {
    const element = inputs[index];
    if(validateName(element.value)){
        console.log(validateName(element.value));
        console.log('hai un nome troppo piccolo');
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

function validateName(inputNameValue) {
    return inputNameValue.trim().length >= 5; // deve essere di almeno 5 lettere
  }


function getFormData(){
    if(name.value === " "){
        console.log('riprova');
    }else {
        nameValue=name.value
    }
    const result = {
        name:nameValue,
        surname:surname.value,
        eta:eta.value,
        email:email.value,
        password:password.value,
        passwordConf:passwordConf.value,
        gender:gender.value,
    }
    console.log(result);
    return result
}