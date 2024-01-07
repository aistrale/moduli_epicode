# Carrello e sconti particolari

Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
**A partire da una lista di prezzi, un utente e un costo di spedizione, l'algoritmo deve determinare il costo totale del carrello.**

- [x] Crea un array di utenti (usando `.push`) 
- [x] stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE è / non è un ambassador" basandoti sui dati contenuti nell'oggetto. 
- se `"isAmbassador" === true`, il carrello deve venire scontato del 30%, **PRIMA** di calcolare la spedizione
- [] se `"isAmbassador" === false`, il carrello **NON** deve venire scontato
- [] se `costo del carrello > 100`, la spedizione è gratuita (in entrambi i casi)
- [] se `costo del carrello <= 100`, aggiungere il valore fornito per coprire il costo della spedizione
- [] Infine, crea un **SECONDO** array in cui inserirai SOLO gli ambassador.



