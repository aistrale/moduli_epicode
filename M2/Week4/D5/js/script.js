function createForm() {
    const form = document.createElement("form");
    form.setAttribute("id", "form");
    // qui mappo il singolo elemento dell'array, ovvero input
    formInputs.map((input) => {
        // qui devo dirgli cosa deve fare con ogni singolo elemento dell'array, ovvero input
        createInput(input, form);
    })
    /*
    quando una funzione anonima ha un solo elemento da ritornare, si possono omettere le {}
        formInputs.map(input => createInput(input, form);
    */
    document.body.append(form);
}
createForm()

// questa è una funzione astratta che deve solo creare un input e appenderlo da qualche parte
function createInput(inputData, inputContainer) {
    // creazione dell'input
    const input = document.createElement("input");
    input.setAttribute("type", inputData.type);
    input.setAttribute("id", inputData.id);
    input.setAttribute("placeholder", inputData.placeholder);

    // ora dobbiamo appendere l'input da qualche parte
    inputContainer.append(input);
}

// all'invio del form devo raccogliere i dati dell'input e stampare un oggetto con tutte le proprietà, da richiamare al click del button
function collectFormData() {
    /*
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const age = document.getElementById("age");
    const job = document.getElementById("job");
    const place = document.getElementById("place");
    */
    // stessa cosa ma più breve
    const form = document.getElementById("form");
    // ora dobbiamo cercare tutti gli input dentro il form
    const inputs = form.querySelectorAll("input");
    // se faccio console.log(input) ritorna una NodeList; devo trasformarla in un array e mapparlo
    const arrayOfInputs = Array.from(inputs).map((input) => {
        // console.log(input);
        return input.value;
    })
    return arrayOfInputs;
}

function showValues(data) {
    const div = document.createElement("div");
        div.innerHTML = data;
        document.body.append(div);
}


const button = document.getElementById("submit");
button.addEventListener("click", function(event) {
    event.preventDefault();
    const inputsValueArray = collectFormData();
    inputsValueArray.map(data => showValues(data));
})
