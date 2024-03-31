const promise = new Promise(function (resolve, reject) {
  // qui dentro andremo a definire la logica per stabilire se questa promessa
  // sarà data per risolta o meno.
  // Saremo noi stessi qui in modo manuale a stabilire ciò.
  // Ovviamente questo è soltanto un esempio didattico

  if (confirm("Vuoi risolvere la promessa?")) {
    const dati = "Promessa risolta";
    resolve(dati);
  } else {
    const errore = "Promessa non risolta";
    reject(errore);
  }
});

promise
  .then(function (messaggioRisolutivo) {
    // Qui dentro posso fare ciò che desidero con i dati
    // correttamente risolti dalla promessa
    console.log(messaggioRisolutivo + "🎉");
  })
  .catch(function (messaggioDiErrore) {
    // Qui dentro posso fare ciò che desidero con l'errore
    // che è stato riscontrato nella promessa
    console.log(messaggioDiErrore + "😭");
  });
