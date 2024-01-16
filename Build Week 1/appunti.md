non serve che sia UGUALE, l'importante è la funzionalità.

https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript

https://builtin.com/software-engineering-perspectives/for-loop-vs-while-loop

https://www.codecademy.com/forum_questions/537b52a7631fe91943001bf7


<div id="score-container">Punteggio: 0</div>

var score = 0;
function checkAnswer(event) {
    var selectedAnswer = event.target.textContent;
    var correctAnswer = questions[currentQuestionIndex].correct_answer;

    if (selectedAnswer === correctAnswer) {
        ;
        score++; 
    } else {
        alert("Risposta sbagliata. Riprova!");
    }
    document.getElementById('score-container').textContent = 'Punteggio: ' + score;

    nextQuestion();
}
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Quiz completato! Punteggio finale: " + score);
    }
}



per il timer > setInterval e lo fa JS