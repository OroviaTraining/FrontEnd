var g_array = ["7", "blue", "delhi"];
$(document).ready(function () {
  $("#btnSubmit").click(function () {
    var firstQuestion = $("input[type=radio]:checked", "#QOne").val();
    var secondQuestion = $("input[type=radio]:checked", "#QTwo").val();
    var thirdQuestion = $("input[type=radio]:checked", "#QThree").val();

    
      if (firstQuestion == g_array[0] && secondQuestion == g_array[1]&&thirdQuestion == g_array[2]) {
       $("#msg").append("<br/>"+"Q1-correct"+"<br/>"+"Q3-correct"+"<br/>"+"Q2-correct"+"<br/>");
      } 
       else {
        $("#msg").text("some answers are wrong");
      }
  });

  $("#btnClear").click(function () {
    $("input[type=radio]").prop("checked", false);
    $("#msg").empty();
  });
});
