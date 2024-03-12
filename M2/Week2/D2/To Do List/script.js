function addTask() {
    const task = document.getElementById("inputTask");
    if (task.value.trim() === "" /* questo serve per controllare se la stringa è vuota e controllare che lo spazio non venga calcolato*/) {
        alert("Per favore compila il campo");
    } else {
        const taskList = document.getElementById("taskList");
        const createLi = document.createElement("li");
        const createButton = document.createElement("button");
        createButton.innerHTML = "Cancella";
        createLi.innerHTML = task.value;
        taskList.append(createLi, createButton);
        createLi.onclick = function() {
            this.classList.toggle("completed") /* fa riferimento all'elemento in questione, in questo caso l'else*/
        }
        createButton.addEventListener("click", function() {
            createLi.remove();
            createButton.remove();
        })
        task.value = ""; // per svuotare il campo ogni volta che lo compilo
    }
}
