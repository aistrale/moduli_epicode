1. navbar
2. front page con cards / slider (?)
3. spread operator
4. manca la gestione del body (?)
5. funzione astratta / dinamica (?)

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