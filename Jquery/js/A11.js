$("document").ready(function () {
    $("#btnSetDropDown").on("click", SetDropDown);
    $("#btnReset").on("click", Reset);
  });
  
  function SetDropDown() {
    var val = $("#inputColorValue").val();
    var dropdownValues = [];
    $("#colorSelect option").each(function () {
      dropdownValues.push($(this).val());
    });
  
    var isSuccess = false;
    for (var i = 0; i < dropdownValues.length; i++) {
      if (val == dropdownValues[i]) {
        isSuccess = true;
        $("#colorSelect").val(val);
      }
    }
  
    if (isSuccess == true) {
      $("#alertOutput").html(
        '<div class="alert alert-success mt-3" id="alertOutput" role="alert">Success!!</div>'
      );
    } else {
      $("#alertOutput").html(
        '<div class="alert alert-danger mt-3" id="alertOutput" role="alert">No matching option found!!</div>'
      );
    }
  }
  
  function Reset() {
    $("#colorSelect option").prop("selected", false);
    $("#inputColorValue").val("");
    dropdownValues = "";
    $("#alertOutput").html("");
  }
  