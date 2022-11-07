$(document).ready(function () {
  //save button handler and calling save function for set value and text
  $("#ButtonSave").on("click", clickSave);

  //save button handler and calling set function for setting  text
  $("#Buttonset").on("click", clickSet);
});

//for set val and text
function clickSave() {
  //getting text box value
  var Name = $("#textBoxA").val();
  var value = $("#textBoxB").val();
  //appending to the dropdown
  $("#Select").append($("<option>" + Name + "</option>").val(value));
  $("#alertOutput1").html(
    '<div class="alert alert-success mt-3" id="alertOutput" role="alert">Success!!</div>'
  );
  setTimeout(function () {
    $("#alertOutput1").html("");
  }, 1500);
  //clear text
  clear();
}

//common text clear function 
function clear() {
  $("input").val("");
}

//for setting only text
function clickSet() {
  var Name = $("#txtA").val();
   $("#Names").append("<option>" + Name + "</option>");
   $("#alertOutput2").html(
    '<div class="alert alert-success mt-3" id="alertOutput" role="alert">Success!!</div>'
  );
  setTimeout(function () {
    $("#alertOutput2").html("");
  }, 1500);
     //clear text
  clear();
}