const questionBox = document.createElement("div");

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
          for (let j=0; j<finalArray[i].length; j++) {
          const questionButton = document.createElement("input");
          questionButton.type = "radio";
          questionButton.name = "group";
          questionButton.value = "option" + (j+1);
          questionButton.setAttribute("id", `option${j+1}`);
          const questionLabel = document.createElement("label");
          questionLabel.setAttribute("for", `option${j+1}`);
          questionLabel.innerHTML = `${finalArray[i][j]}`;
          questionForm.append(questionButton);
          questionForm.append(questionLabel);
          questionBox.append(questionForm);}
       
          const questionAnswered = document.createElement("h4");
          questionAnswered.innerHTML = "question " + `${i+1}` + "/" + `${questions.length}`;
          questionForm.append(questionAnswered);
         
          const buttonOk = document.createElement("button");
          buttonOk.id = "submit";
           // buttonOk.type = "submit";
          buttonOk.innerHTML = "ok";
          questionForm.append(buttonOk);
          buttonOk.addEventListener("click", (e) => {
            let seconds = 0;
            timer(seconds)
            const userAnswer=checkInput()
            if(userAnswer===questions[i].correct_answer){
              contatore+=1
            }
            if(i<finalArray.length-1){
              i+=1
              displayQuestion()
            }
            else {
              const resultsPercentage = (contatore*100)/questions.length;
              finalResult(resultsPercentage)
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


function finalResult(resultsPercentage) {
  const h1 = document.createElement("h1");
  h1.innerHTML = resultsPercentage + ` %`;
  questionBox.innerHTML = "";
  document.body.append(h1)
  if (resultsPercentage >= 60){
    const p = document.createElement("p");
    p.innerHTML = "test superato";
    document.body.append(p);
  }
  else{
    const p = document.createElement("p");
    p.innerHTML = "test non superato";
    document.body.append(p);
  }
  
  console.log(resultsPercentage)
}


function welcomePage() {
  const welcomeTitle = document.createElement("h1");
  welcomeTitle.innerHTML = "Welcome";
  document.body.append(welcomeTitle);
  const instructions = document.createElement("div");
  instructions.id = "instructionsDiv";
  const instructionsTitle = document.createElement("h3");
  instructionsTitle.innerHTML = "instructions";
  instructions.append(instructionsTitle);
  const instructionsText = document.createElement("p");
  instructionsText.innerHTML = "lorem ipsum";
  instructions.append(instructionsText);
  const instructionsList = document.createElement("ul");
  const listItem = document.createElement("li");
  listItem.innerHTML = "list";
  instructionsList.append(listItem);
  instructions.append(instructionsList);
  document.body.append(welcomeTitle);
  document.body.append(instructions);

  const proceed = document.createElement("div");
  proceed.classList.add("proceed");
  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "myCheckbox";
  checkbox.id = "checkboxID";

  const checkboxLabel = document.createElement("label");
  checkboxLabel.innerHTML = "i promise";

  checkbox.append(checkboxLabel);
  proceed.append(checkbox);

  const proceedButton = document.createElement("button");
  proceedButton.innerHTML = "proceed";
  proceedButton.addEventListener("click", ()=>{
    proceedChecked(welcomeTitle,instructions,proceed)
  })
  proceed.append(proceedButton);
  
  document.body.append(proceed);
}

function proceedChecked(welcomeTitle,instructions,proceed) {
  const test = document.getElementById("checkboxID");
  if(test.checked){
    let seconds = 0;
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

function timer(seconds) {
  const box = document.createElement("div");
  box.classList.add("timer-box");
  const timerBox = document.createElement("div");
  box.append(timerBox);
  timerBox.id = "timer";
  const timerElement = document.getElementById("timer");
  const timerInterval = setInterval(() => {
    seconds++;
    timerElement.textContent = seconds;
  }, 1000);
  timerBox.append(timerInterval);
  document.body.append(box);
}