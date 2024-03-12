// una funzione che prende i due numeri dell'input, fa l'operazione 

// dobbiamo prendere il valore dell'input all'interno della funzione, non all'inizio dello script; questo perché JS legge le istruzioni dall'inizio della pagina. Se prende il .value prima di fare un'operazione, poi ci ritornerà 0.
const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divide = document.getElementById("divide");
const result = document.getElementById("result");


function sum() {
    // Number() serve per assicurarci che ritorni un numero
    const resultSum = Number(numberOne.value) + Number(numberTwo.value);
    result.innerHTML = "<p>" + resultSum + "</p>";
}
// qui "click" è il primo parametro, il secondo è una callback function
plus.addEventListener("click", () => {
    sum()
});

function minusOp() {
    const resultMinus = Number(numberOne.value) - Number(numberTwo.value);
    result.innerHTML = "<p>" + resultMinus + "</p>";
}
minus.addEventListener("click", () => {
    minusOp()
})

function timesOp() {
    const resultTimes = Number(numberOne.value) * Number(numberTwo.value);
    result.innerHTML = "<p>" + resultTimes + "</p>";
}
times.addEventListener("click", () => {
    timesOp()
})

function divideOp() {
    const resultDivide = Number(numberOne.value) / Number(numberTwo.value);
    result.innerHTML = "<p>" + resultDivide + "</p>";
}
divide.addEventListener("click", () => {
    divideOp()
})