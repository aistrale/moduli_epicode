funzione astratta / dinamica (?)

---
## Errori
Errore
`abstractFetch(ENDPOINT, {}).then(res.map(product => createCard(product));`

Spiegazione:
It looks like there's a syntax error in your code. The issue is with how you're trying to use `.then()` with the result of `abstractFetch`. The `.then()` method expects a function as its argument, but you're directly calling `res.map()` without wrapping it in a function. Additionally, you're missing a closing parenthesis for the `.then()` method.

Here's the corrected version of your code:

```javascript
abstractFetch(ENDPOINT, {}).then(res => res.map(product => createCard(product)));
```

This code correctly uses `.then()` to handle the promise returned by `abstractFetch`. It takes the response (`res`), maps over it to create a card for each product, and then calls `createCard` with each product.

---
## Errori esame
1. Le *arrow function* possono **sempre** essere utilizzate in sostituzione delle funzioni tradizionali, hanno solo una sintassi più breve e leggibile --> **FALSO**.

Non è sempre possibile sostituire le funzioni tradizionali con le *arrow function*. Le *arrow function* non hanno il proprio `this`, non hanno argomenti, non possono essere utilizzate come costruttori e non hanno il metodo `prototype`. Quindi, ci sono casi in cui le funzioni tradizionali sono necessarie.


2. Quale metodo array dovresti utilizzare per verificare che tutti i veicoli siano taxi?
```javascript
const cars = [car, taxi, ferrari];
const areAllTaxis = cars.every((car) => car === taxi);
```
devo usare `.every()`, NON `.filter()` o `.map()`.


3. Quale risposta è corretta per i valori C e D?
```javascript
const A = true;
const B = false;
const c = !(A&&B);
const D = !A || !B
```
-[] Sono entrambi `false`
-[x] Sono entrambi `true`
-[] C è `true`, D `false`
-[] D è `true`, C `false`


4. Cosa verrà inserito all'interno di `result`?
```javascript
const multiply = (x, y = 2) => x * y;
const result = multiply(4)
```
verrà inserito "8", NON "16".


5. Quale sarà l'output quando verrà eseguito il seguente codice?
```javascript
const a = [1, 2, 3];
const doubled = a.forEach((num) => num * 2);
console.log(doubled);
```
verrà inserito `undefined`, NON "[2, 4, 6]".