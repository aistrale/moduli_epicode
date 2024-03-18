/* esercizio 1
Crea una funzione che controlli due numeri interi. Ritorna 'true' se uno dei due è 50 o se la somma dei due è 50. */
const checkNumbers1 = (numberOne, numberTwo) => {
    if (numberOne === 50 || numberTwo === 50 || numberOne + numberTwo === 50) {
        console.log(true);
    } else {
        console.log(false);
    }
}
console.log(checkNumbers1(60, 25))

/* esercizio 2
Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata. */
const deleteChar = (mySentence, position) => {
    return mySentence.slice(0, position) + mySentence.slice(position+1);
}
console.log(deleteChar("Hello!", 4))

/* esercizio 3
 Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna "true" se rispecchiano queste condizioni, altrimenti ritorna "false".
*/
const exerciseThree = (string) => {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = string;
    document.body.append(paragraph);
}

const checknNumberRange = (firstNumber, secondNumber) => {
    const firstRange = (firstNumber >= 40 && firstNumber <= 60) || (secondNumber >= 40 && secondNumber <= 60)
    const secondRange = (firstNumber >= 70 && firstNumber <= 100) || (secondNumber >= 70 && secondNumber <= 100)
    exerciseThree(`il primo range è ${firstRange}, il secondo è ${secondRange}`)
}
console.log(checknNumberRange(48, 39))

/* esercizio 4
Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorni 'false */
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

/* esercizio 5
Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro. */
const sum = (arrayOfNumbers) => {
    let total = 0;
    for (const number of arrayOfNumbers) {
        total += number;
    }
    return total;
}
console.log(sum([1,2,30]))

/* eserizio 6
Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene ritorna 'true', altrimenti ritorna 'false' */
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

/* const checkNumbers = (myArray) => {
    return !myArray.includes(1) && !myArray.includes(3);
}
console.log(checkNumbers([1,2,4])) */

/* esercizio 7
Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
- Angolo acuto: meno di 900 ritorna "acuto"
- Angolo ottuso: tra i 900 e i 1800 gradi ritorna "ottuso"
- Angolo retto: 900 ritorna "retto"
- Angolo Piatto: 1800 ritorna "piatto" */


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

/* Esercizio 8
Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT". */
const acronym = (string) => {
    const splittedWords = string.split(" ")
    let result = "";
    for (const word of splittedWords) {
        result += word[0].toUpperCase()
    }
    return result;
}
console.log(acronym("ciao sono marco"))


const maxUsed = (string) => {
    const lowerCaseString = string.toLowerCase();
    let count = {};

    for (const char of string) {
        count[char] = (count[char] || 0) +1;
    }
    let mostUsedChar = "";
    let maxCount = 0;

    for (let char in count) {
        if (count[char] > maxCount) {
            mostUsedChar = char;
            maxCount = count[char];
        }
    }
    return mostUsedChar;
}
console.log(maxUsed("Ciao ciccio"));

const anagram = (string1, string2) => {
    let stringOneLowerCase = string1.toLowerCase();
    let stringTwoLowerCase = string2.toLowerCase();
}

// EXTRA

/* 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa. */
const maxUsedChar = (string) => {
    const lowerCaseString = string.toLowerCase();
    let count = {};
    // dobbiamo iterare ogni oggetto della stringa
    for (let char of lowerCaseString) {
        // la chiave sarà il carattere, il valore il numero di quante volte appare. Qui gli stiamo dicendo che se il carattere c'è, deve aggiungergli un valore, altrimenti associa "0".
        count[char] = (count[char] || 0) +1;
    }
    let mostUsedChar = "";
    let maxCount = 0;

    for (let char in count) {
        if (count[char] > maxCount) {
            mostUsedChar = char;
            maxCount = count[char];
        }
    }
    return mostUsedChar
}
console.log(maxUsedChar("Ciao ciccio"));

/* 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricorda di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`. */
function Anagram(string1, string2) {
    const cleanedStringOne = string1.replace(/[^\w]/g, "").toLowerCase();
    const cleanedStringTwo = string2.replace(/[^\w]/g, "").toLowerCase();

    const orderedStringOne = cleanedStringOne.split("").sort().join("");
    const orderedStringTwo = cleanedStringTwo.split("").sort().join("");

    return orderedStringOne === orderedStringTwo;
}
console.log(Anagram("teatro", "attore"));

/* 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”]. */
const splitAndOrderedString = (word) => {
    return word.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

const findAnagram = (word, possibleAnagrams) => {
    const sortedWord = splitAndOrderedString(word);
    const result = possibleAnagrams.filter((anagram) => {
        return splitAndOrderedString(anagram) === sortedWord;
    })
    return result;
}
console.log(findAnagram("cartine", ['carenti', 'incerta', 'espatrio']));

/* 4. Partendo da una stringa passata come parametro, ritorna 'true' se la stringa è palindroma e 'false' se non lo è. */
const palindrom = (string) => {
    const cleanedWord = string.replace(/[^\w]/g, "").toLowerCase();
    const reverseWord = cleanedWord.split("").reverse().join("");

    return reverseWord === cleanedWord;
}
console.log(palindrom("anna"));

/* 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981 */
const reverseNumber = (number) => {
    // const stringNumber = number.toString(); oppure
    const stringNumber = String(number);
    return Number(stringNumber.split("").reverse().join(""));
}
console.log(reverseNumber("189"))