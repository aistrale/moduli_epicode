let questionNumber = 0;

function createQuestion() {
    const questionBox = document.createElement("div");

     for (let i = 0; i < questions.length; i++) {
         const questionTitle = document.createElement("h2");
         questionTitle.innerHTML = `${questions[questionNumber].question}`;
         questionBox.innerHTML = "";
         questionBox.append(questionTitle);
         document.body.append(questionBox);
        
         let newArray = [];
         newArray = questions[i].incorrect_answers;
         newArray.push(`${questions[i].correct_answer}`);
         console.log(newArray)
         for (let i =newArray.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
         }
         // console.log(newArray)

         const questionForm = document.createElement("form");
         for (let i = 0; i < newArray.length; i++) {
             const questionButton = document.createElement("input");
             questionButton.type = "radio";
             questionButton.name = "group";
             questionButton.value = "option" + (i+1);
             const questionLabel = document.createElement("label");
             questionLabel.innerHTML = `${newArray[i]}`;
             questionForm.append(questionButton);
             questionForm.append(questionLabel);
             questionBox.append(questionForm);
         }
           const questionAnswered = document.createElement("h4");
           questionAnswered.innerHTML = "question " + `${questionNumber+1}` + "/" + `${questions.length}`;
           questionForm.append(questionAnswered);
           
      const buttonOk = document.createElement("button");
      // buttonOk.type = "submit";
      buttonOk.innerHTML = "ok";
      questionForm.append(buttonOk);
      buttonOk.addEventListener("click", (e) => {
        e.preventDefault();
        // questionNumber++;
        incrementQuestionIndex();
      })

      /* const buttonOk = document.createElement("button");
      buttonOk.innerHTML = "ok";
      buttonOk.addEventListener("click", () => {
        questionNumber++;
        displayquestionNumber();
    });
      questionForm.append(buttonOk); */
    }
}

  createQuestion()

  function incrementQuestionIndex() {
    questionNumber++
  }