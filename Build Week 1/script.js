const questionBox = document.createElement("div");
questionBox.classList.add("main-div");

function createQuestion() {
  let finalArray=[]
  let i=0
   for (let indice = 0;indice < questions.length; indice++) {
      
       let newArray = [];
       newArray = questions[indice].incorrect_answers;
       newArray.push(`${questions[indice].correct_answer}`);
       for (let index =newArray.length - 1; index > 0; index--) {
       const j = Math.floor(Math.random() * (index + 1));
       [newArray[index], newArray[j]] = [newArray[j], newArray[index]];
       }
       finalArray.push(newArray)
      }
   console.log(finalArray)
   let contatore=0
   function displayQuestion(){
          const questionTitle = document.createElement("h2");
          questionTitle.innerHTML = `${questions[i].question}`;
          questionBox.innerHTML = "";
          questionBox.append(questionTitle);
          document.body.append(questionBox);
          const questionForm = document.createElement("form");
          const answers = document.createElement("div");
          answers.classList.add("answers-div");
          for (let j=0; j<finalArray[i].length; j++) {
          const answerBox = document.createElement("div");
          answerBox.classList.add("answer-container");
          const questionButton = document.createElement("input");
          questionButton.type = "radio";
          questionButton.name = "group";
          questionButton.value = "option" + (j+1);
          questionButton.setAttribute("id", `option${j+1}`);
          answerBox.onclick=(colorAnswerBox(answerBox));
          const questionLabel = document.createElement("label");
          questionLabel.setAttribute("for", `option${j+1}`);
          questionLabel.innerHTML = `${finalArray[i][j]}`;
          answerBox.append(questionButton);
          answerBox.append(questionLabel);
          answers.append(answerBox);
          questionForm.append(answers);
          questionBox.append(questionForm);}
       
          const questionAnswered = document.createElement("h4");
          questionAnswered.innerHTML = "QUESTION " + `${i+1}` + "<span>/</span>" + `<span>${questions.length}</span>`;
          questionForm.append(questionAnswered);
         
          const buttonOk = document.createElement("button");
          buttonOk.id = "submit";
           // buttonOk.type = "submit";
          buttonOk.innerHTML = "NEXT";
          questionForm.append(buttonOk);
          buttonOk.addEventListener("click", (e) => {
            if(timerInterval){
              clearInterval(timerInterval)              
            }

            const userAnswer=checkInput()
            if(userAnswer===questions[i].correct_answer){
              contatore+=1
            }
            if(i<finalArray.length-1){
              let seconds = 50;
              timer(seconds)
              i+=1
              displayQuestion()
            }
            else {
              const resultsPercentage = (contatore*100)/questions.length;
              finalResult(resultsPercentage)
              removeTimer()
            }
          }
          )
          
          
  }

  displayQuestion()  
}

welcomePage()

function checkInput() {
  const test = document.querySelector('input[type="radio"]:checked');
  if(test){
    console.log(test)
  return getLabelFromRadio(test)
  }

  function getLabelFromRadio(input) {
    const id = input.id;
    const label = document.querySelector(`label[for="${id}"]`);
    if(label){
    return label.textContent
    }
  }
}

function colorAnswerBox(radioButton) {
  if(radioButton.checked) {
    radioButton.classList.add("isActive");
  }


}


function finalResult(resultsPercentage) {
  const resultBox = document.createElement("div");
  resultBox.classList.add("results-div");
  const resultTitle = document.createElement("h3");
  resultBox.append(resultTitle);
  resultTitle.innerHTML = "Your final score is " + resultsPercentage + ` %`;
  resultTitle.classList.add("results-h3");
  questionBox.innerHTML = "";
  document.body.append(resultBox);
  if (resultsPercentage >= 60){
    const resultMessage1 = document.createElement("p");
    resultMessage1.innerHTML = "Quiz passed!";
    resultBox.append(resultMessage1);
  }
  else{
    const resultMessage2 = document.createElement("p");
    resultMessage2.innerHTML = "Quiz failed!";
    resultBox.append(resultMessage2);
  }
  
  console.log(resultsPercentage)
}


function welcomePage() {
  const welcomeTitle = document.createElement("h1");
  welcomeTitle.classList.add("welcome-h1");
  welcomeTitle.innerHTML = "Welcome to your exam";
  document.body.append(welcomeTitle);
  const instructions = document.createElement("div");
  instructions.id = "instructionsDiv";
  const instructionsTitle = document.createElement("h3");
  instructionsTitle.classList.add("instructions-h3");
  instructionsTitle.innerHTML = "Instructions";
  instructions.append(instructionsTitle);
  const instructionsText = document.createElement("p");
  instructionsText.innerHTML = "We don't expect most engineers to know the answers to all of these questions, so don't worry if you're unsure of a few of them.";
  instructions.append(instructionsText);
  const instructionsList = document.createElement("ul");
  const listItem1 = document.createElement("li");
  listItem1.innerHTML = "Each question is <strong>timed</strong> and can only be <strong>answered</strong> once.";
  const listItem2 = document.createElement("li");
  listItem2.innerHTML = "Changing browser tab or opening other windows will <strong>invalidate the question</strong>.";
  const listItem3 = document.createElement("li");
  listItem3.innerHTML = "This exam will take approx. <strong>0-5 minutes</strong>.";
  instructionsList.append(listItem1);
  instructionsList.append(listItem2);
  instructionsList.append(listItem3);
  instructions.append(instructionsList);
  document.body.append(welcomeTitle);
  document.body.append(instructions);

  const proceed = document.createElement("div");
  proceed.classList.add("proceed-container");

  const proceedForm = document.createElement("div");
  proceedForm.classList.add("proceed-form");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "myCheckbox";
  checkbox.id = "checkboxId";
  proceedForm.append(checkbox);

  const checkboxLabel = document.createElement("label");
  checkboxLabel.innerHTML = "I promise to answer myself without help from anyone";
  checkboxLabel.classList.add("proceed-chechbox");
  proceedForm.append(checkboxLabel);

  proceed.append(proceedForm);

  const proceedButton = document.createElement("button");
  proceedButton.innerHTML = "PROCEED";
  proceedButton.classList.add("proceed-button");
  proceedButton.addEventListener("click", ()=>{
    proceedChecked(welcomeTitle,instructions,proceed)
  })
  proceed.append(proceedButton);
  
  document.body.append(proceed);
}

function proceedChecked(welcomeTitle,instructions,proceed) {
  const test = document.getElementById("checkboxId");
  if(test.checked){
    let seconds = 50;
    timer(seconds)
    createQuestion();
    welcomeTitle.innerHTML = "";
    instructions.innerHTML = "";
    proceed.innerHTML = "";
  }
  else {
    const errorMessage = document.createElement("p");
    errorMessage.innerHTML = "devi flaggare";
    proceed.append(errorMessage);
    document.body.append(proceed);
  }

}

let timerBox
let timerInterval
let box

function timer(seconds) {
  if(!timerBox){ box = document.createElement("div");
  box.classList.add("timer-box");
  timerBox = document.createElement("div");
  timerBox.id='timer'
  box.append(timerBox);
  document.body.append(box)}
  const timerElement = document.getElementById("timer");
  timerInterval = setInterval(() => {
    seconds--;
    if(seconds===0){
      clearInterval(timerInterval)
    }
    timerElement.textContent = seconds;
  }, 1000);
  document.body.append(timerInterval)
}


function removeTimer(){
  box.remove()
  timerBox.remove()
}