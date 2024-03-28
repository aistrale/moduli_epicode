const addBtn = document.querySelector("#add-product-btn")

const getFormValues = () => {
    const form = document.getElementById("add-product-form")
    const inputs = form.querySelectorAll("input"); /* node list */
    const values = {}

    inputs.forEach(input => {
        /* dobbiamo mettere in values l'input.name */
        values[input.name] = input.value
    });
    return values
}
addBtn.addEventListener("click", ()=> {
    getFormValues()
})