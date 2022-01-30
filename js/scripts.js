$(document).ready(function(revise) {

    var questionNum1 = document.quizp.questionNum1.value;
    var questionNum2 = document.quizp.questionNum2.value;
    var questionNum3 = document.quizp.questionNum3.value;
    var questionNum4 = document.quizp.questionNum4.value;
    var questionNum5 = document.quizp.questionNum5.value;
    var yourLanguage = 0

    
    if (questionNum1 == "Elephant") {
      yourLanguage++;
}
    if(questionNum2 == "Sushi") {
      yourLanguage++;
}
    if(questionNum3 == "Football") {
      yourLanguage++;
}
    if(questionNum4 == "Gaming"){
      yourLanguage++;
}
    if(questionNum5 == "Horror"){
      yourLanguage++;
    }
    
    var result;

    if (yourLanguage == 0) {
      result = Python;
    }

    if (yourLanguage > 0 && yourLanguage< 5) {
      result = Java;
    }

    if (yourLanguage == 5) {
      result= Ruby
    }

document.getElementById("submit").style.visibility = "visible";
document.getElementById("yourLanguage").innerHTML = "The results indicate you are " + yourLanguage + "yourLanguage";
}




  // var yourLanguage2 = Ruby
  // var yourLanguage3 = Go
  // var yourLanguage4 = Java