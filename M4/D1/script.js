/*
// esercizio 1
const checkNumbers = (numberOne, numberTwo) => {
    if (numberOne === 50 || numberTwo === 50 || numberOne + numberTwo === 50) {
        console.log(true)
    } else {
        console.log(false);
    }
}
console.log(checkNumbers(25, 25))

// esercizio 2

const deleteChar = (mySentence, position) => {
    return mySentence.slice(0, position) + mySentence.slice(position+1);
}
console.log(deleteChar("Hello!", 4))

// esercizio 3
const createSentence = (string) => {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = string;
    document.body.append(paragraph);
}

const checknNumberRange = (firstNumber, secondNumber) => {
    const firstRange = (firstNumber >= 40 && firstNumber <= 60) || (secondNumber >= 40 && secondNumber <= 60)
    const secondRange = (firstNumber >= 70 && firstNumber <= 100) || (secondNumber >= 70 && secondNumber <= 100)
    createSentence(`il primo range è ${firstRange}, il secondo è ${secondRange}`)
}
console.log(checknNumberRange(48, 39))

// esercizio 4
const cityNames = (city) => {
    if (city.startsWith("Los") || city.startsWith("New")) {
        console.log(true)
        return city
    } else {
        console.log(false)
        return false
    }
}
console.log(cityNames("San Francisco"))


// es 5
const sum = (arrayOfNumbers) => {
    let total = 0;
    for (const number of arrayOfNumbers) {
        total += number;
    }
    return total;
}
console.log(sum([1,2,30]))


// es 6
const checkNumbers = (myArray) => {
    if (myArray.includes(1) || myArray.includes(3)) {
        console.log(false)
        return false
    } else {
        console.log(true)
        return true
    }
}
console.log(checkNumbers([5,2,4]))


const checkNumbers = (myArray) => {
    return !myArray.includes(1) && !myArray.includes(3);
}
console.log(checkNumbers([1,2,4]))


//es 7
const angle = (degree) => {
    if (degree === 90) {
        return "retto"
    } else if (degree < 90) {
        return "acuto"
    } else if (degree >= 90 && degree < 180) {
        return "ottuso"
    } else if (degree === 180) {
        return "piatto"
    } else {
        return "angolo non valido"
    }
}
console.log(angle(179))
*/

// es 8
const acronym = (string) => {
    const splittedWords = string.split(" ")
    let result = "";
    for (const word of splittedWords) {
        result += word[0].toUpperCase()
    }
    return result;
}
console.log(acronym("ciao sono marco"))

