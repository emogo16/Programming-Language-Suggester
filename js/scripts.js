$(document).ready(function() {
  $("form#pquiz").submit(function() {
    const questionNum1 = $(document.quizp.questionNum1).val();
    const questionNum2 = $(document.quizp.questionNum2).val();
    const questionNum3 = $(document.quizp.questionNum3).val();
    const questionNum4 = $(document.quizp.questionNum4).val();
    const questionNum5 = $(document.quizp.questionNum5).val();
    // const yourLanguage = 0

    
    if (questionNum1 === "Elephant") {
      yourLanguage++;
}
    if(questionNum2 === "Sushi") {
      yourLanguage++;
}
    if(questionNum3 === "Football") {
      yourLanguage++;
}
    if(questionNum4 === "Gaming"){
      yourLanguage++;
}
    if(questionNum5 === "Horror"){
      yourLanguage++;
    }
    
    const result;

    if (yourLanguage === 0) {
      result = Python;
    }

    if (yourLanguage > 0 && yourLanguage < 5) {
      result = Java;
    }

    if (yourLanguage === 5) {
      result= Ruby
    }
    
    event.preventDefault();
  });

});

// document.getElementById("submit").style.visibility = "visible";
// document.getElementById("yourLanguage").innerHTML = "The results indicate you are " + yourLanguage + "yourLanguage";