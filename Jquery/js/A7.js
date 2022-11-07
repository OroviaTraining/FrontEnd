var g_answers = ["7", "blue", "delhi"];
$(document).ready(function () {

  //clicked handler
  $("#btnSubmit").click(function () {
    var firstQuestion = $("input[name='Q1']:checked").val();
    var secondQuestion = $("input[name='Q2']:checked").val();
    var thirdQuestion = $("input[name='Q3']:checked").val();
  
   if (firstQuestion == g_answers[0]) {
    $("#msg").append("Q1-correct" + "<br/>");
  } else {
    $("#msg").append("Q1-wrong" + "<br/>");
  }

  if (secondQuestion == g_answers[1]) {
    $("#msg").append("Q2-correct" + "<br/>");
  } else {
    $("#msg").append("Q2-wrong" + "<br/>");
  }

  if (thirdQuestion == g_answers[2]) {
    $("#msg").append("Q3-correct" + "<br/>");
  } else {
    $("#msg").append("Q3-wrong" + "<br/>");
  }

  });

  //if (firstQuestion == g_array[0] && secondQuestion == g_array[1] && thirdQuestion == g_array[2]) {
   // $("#msg").append("<br/>"+"Q1-correct"+"<br/>"+"Q3-correct"+"<br/>"+"Q2-correct"+"<br/>");
  // } 
   // else {
    // $("#msg").text("some answers are wrong");
  // }


  $("#btnClear").click(function () {
    //get all radio buttons in the page and set the checked property to false
    $("input[type='radio']").prop("checked", false);
    $("#msg").empty();
  });
});
