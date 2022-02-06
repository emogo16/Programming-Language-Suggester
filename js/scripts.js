$(document).ready(function() {
  $("form#pquiz").submit(function(event) {
    event.preventDefault();
    const questionNum1 = $('input[name="questionNum1"]:checked').val();
    const questionNum2 = $('input[name="questionNum2"]:checked').val();
    const questionNum3 = $('input[name="questionNum3"]:checked').val();
    const questionNum4 = $('input[name="questionNum4"]:checked').val();
    const questionNum5 = $('input[name="questionNum5"]:checked').val();
    let yourLanguage = 0;

    if (questionNum1 === "Elephant") {
      yourLanguage++;
    }
    
    if (questionNum2 === "Sushi") {
      yourLanguage++;
    }
    if (questionNum3 === "Football") {
      yourLanguage++;
    }
    if (questionNum4 === "Gaming") {
      yourLanguage++;
    }
    if (questionNum5 === "Horror") {
      yourLanguage++;
    }
    
    if (yourLanguage > 0 && yourLanguage <= 3) {
      alert("Based on your personality you will love Ruby");
      $("#Ruby").show();
    } else if (yourLanguage === 0) {  
      alert("After summing up your results based on your personality you will love Python");
      $("#Python").show();
    } else {
      alert("Your personality indicates you will love Java");
      $("#Java").show();
    }
  });

});
