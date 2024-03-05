// esercizio 1
const numberOne = 50;
const numberTwo = 23;

const checkNumbers = () => {
    if (numberOne === 50 || numberTwo === 50 || numberOne + numberTwo === 50) {
        console.log(true)
    } else {
        console.log("It's not");
    }
}
checkNumbers()

// esercizio 2
const mySentence = "This is difficult!";

const deleteChar = () => {
    mySentence.slice(-1);
    console.log(mySentence.slice(-1));
}
deleteChar()

// esercizio 3
const firstNumber = 45;
const secondNumber = 89;

const checknNumberRange = () => {
    if (40 < firstNumber, secondNumber < 70 && 70 < firstNumber, secondNumber < 100) {
        console.log(true);
    } else {
        console.log(false);
    }
}
checknNumberRange()