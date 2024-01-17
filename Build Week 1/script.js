function createQuestion() {
  const questionBox = document.createElement("div");
  let finalArray=[]
  let i = 0;
   for (let i = 0;i < questions.length; i++) {
      
       let newArray = [];
       newArray = questions[i].incorrect_answers;
       newArray.push(`${questions[i].correct_answer}`);
       for (let i =newArray.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
       }
       finalArray.push(newArray)
      }
   console.log(finalArray)

   
   function displayQuestion(){
          const questionTitle = document.createElement("h2");
          questionTitle.innerHTML = `${questions[i].question}`;
          questionBox.innerHTML = "";
          questionBox.append(questionTitle);
          document.body.append(questionBox);
          const questionForm = document.createElement("form");
          for (let j=0; j<finalArray[i].length; j++) {const questionButton = document.createElement("input");
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
            i+=1
            const correctAnswer = checkInput();
            console.log(correctAnswer);
            if(i<finalArray.length){
              displayQuestion()
            }
          },
          )
        
  }
  displayQuestion()
  
}

createQuestion()

function checkInput() {
  const test = document.querySelectorAll('input[type="radio"]');
console.log(test);

function getLabelFromRadio(input) {
  const id = input.id;
  const label = document.querySelector(`label[for="${id}"]`);
  if(label){
    console.log(label.textContent);
    return label.textContent
  }

}

test.forEach(input => {
  input.addEventListener("click", ()=> {
if (input.checked){
  const label = getLabelFromRadio(input);
}
console.log(input);
  })
});
}




