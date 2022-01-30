$(document).ready(function() {
  function buildQuiz(){
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
        output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );
  quizContainer.innerHTML = output.join('');
}

  function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;
  
  myQuestions.forEach( (currentQuestion, questionNumber) => {
    
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
    // const score;
    if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
      if (userAnswer === 0) {
        answerContainers = Python;
      }
        
      if (userAnswer> 0 && yourLanguage < 5) {
        answerContainers = Java;
      }
        
      if (userAnswer === 5) {
        answerContainers = Ruby
      }

  });
    // function showResults(){
    //   const answerContainers = quizContainer.querySelectorAll('.answers');
    //   let numCorrect = 0;
      
    //   myQuestions.forEach( (currentQuestion, questionNumber) => {
        
    //     const answerContainer = answerContainers[questionNumber];
    //     const selector = `input[name=question${questionNumber}]:checked`;
    //     const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
    // if(userAnswer === currentQuestion.correctAnswer){
    //   numCorrect++;
  //   if (userAnswer === 0) {
  //     Python;
  //   }
      
  //   if (userAnswer> 0 && yourLanguage < 5) {
  //     Java;
  //         }
      
  //   if (userAnswer === 5) {
  //     Ruby
  //         }

  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "Choose an animal!?",
    answers: {
      a: "Elephant",
      b: "Eagle",
      c: "Lion"
    },
    correctAnswer: "c"
  },
  {
    question: "Pick a food item",
    answers: {
      a: "Sushi",
      b: "Burgers",
      c: "Pizza"
    },
    correctAnswer: "c"
  },
  {
    question: "Choose a sport",
    answers: {
      a: "Basketball",
      b: "Tennis",
      c: "Football",
    },
    correctAnswer: "c"
  },
  {
    question: "Choose a hobby",
    answers: {
      a: "Gaming",
      b: "Puzzles/Reading",
      c: "Sleeping"
    },
    correctAnswer: "c"
  },
  {
    question: "Favorite movie category",
    answers: {
      a: "Horror",
      b: "Action",
      c: "Romantic comedy"
    },
    correctAnswer: "c"
  }
];

buildQuiz();
submitButton.addEventListener('click', showResults);
})(); 





//   $("form#pquiz").submit(function() {
//     const questionNum1 = $(document.quizp.questionNum1).val();
//     const questionNum2 = $(document.quizp.questionNum2).val();
//     const questionNum3 = $(document.quizp.questionNum3).val();
//     const questionNum4 = $(document.quizp.questionNum4).val();
//     const questionNum5 = $(document.quizp.questionNum5).val();
//     const yourLanguage = 0

    
//     if (questionNum1 === "Elephant") {
//       yourLanguage++;
// }
//     if(questionNum2 === "Sushi") {
//       yourLanguage++;
// }
//     if(questionNum3 === "Football") {
//       yourLanguage++;
// }
//     if(questionNum4 === "Gaming"){
//       yourLanguage++;
// }
//     if(questionNum5 === "Horror"){
//       yourLanguage++;
//     }
    
//     var result;

//     if (yourLanguage === 0) {
//       result = Python;
//     }

//     if (yourLanguage > 0 && yourLanguage< 5) {
//       result = Java;
//     }

//     if (yourLanguage === 5) {
//       result= Ruby
//     }
//     return String;

// document.getElementById("submit").style.visibility = "visible";
// document.getElementById("yourLanguage").innerHTML = "The results indicate you are " + yourLanguage + "yourLanguage";
// });
// });