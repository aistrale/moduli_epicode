// 1. creo un array
const categoryNames = ["Free Shipping", "Support 24/7", "Money Return"];

// 2. nell'html creo tre div con 3 #id diversi: #freeShipping, #support, #moneyReturn

// 3. creo i singoli elementi
const freeShipping = document.getElementById("freeShipping");
const support = document.getElementById("support");
const moneyReturn = document.getElementById("moneyReturn");

freeShipping.innerText = categoryNames[0];
support.innerText = categoryNames[1];
moneyReturn.innerText = categoryNames[2];

// 4. creo <p> per tutti e 3 i div, dato che <p> è uguale
const placeholderText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, labore?"
const supportElementShipping = document.createElement("div");
const supportElementSupport = document.createElement("div");
const supportElementMoney = document.createElement("div");

supportElementShipping.innerHTML = placeholderText;
supportElementSupport.innerHTML = placeholderText;
supportElementMoney.innerHTML = placeholderText;

freeShipping.append(supportElementShipping);
support.append(supportElementSupport);
moneyReturn.append(supportElementMoney);

// quando si usa il metodo .append() si sta "spostando" quel contenuto. Se voglio riutilizzare lo stesso elemento, posso usare .cloneNode(). Questo metodo vuole obbligatoriamente un booleano
const supportElement = document.createElement("div");
supportElement.innerHTML = placeholderText;
freeShipping.append(supportElement.cloneNode(true));
support.append(supportElement.cloneNode(true));
moneyReturn.append(supportElement.cloneNode(true));