$(document).ready(function () {
  /*move cities*/

  $("#btnRightMove").click(function () {
    //get the selected item
    var selectedCity$ = $("#Cities1 option:selected");
    //find how many items are selected
    if (selectedCity$.length > 0) {
      var destination$ = $("#Countries");
      selectedCity$.appendTo(destination$);
      $("#res").html("");
    } else {
      $("#res").html("Please select some value");
    }
  });
  $("#btnRightMoveAll").click(function () {
    //get all the children from cities
    var moveCities = $("#Cities1").children();
    var destination = $("#Countries");
    moveCities.appendTo(destination);
  });

  $("#btnLeftMove").click(function () {
    //get the selected item
    var selectedCountries = $("#Countries option:selected");
    var pavilion = $("#Cities1");
    pavilion.append(selectedCountries);
  });
  $("#btnLeftMoveAll").click(function () {
    //get the selected item
    var moveCountries = $("#Countries").children();
    var pavilion = $("#Cities1");
    moveCountries.appendTo(pavilion);
  });

  /*copy cities*/
  $("#btnRightCopy").click(function () {
    //get the selected item
    var selectedCity = $("#Cities2 option:selected");
    selectedCity.clone().appendTo("#Countries1");
  });
  $("#btnRightCopyAll").click(function () {
    var copyCity = $("#Cities2").children();
    copyCity.clone().appendTo("#Countries1");
  });

  $("#btnLeftCopy").click(function () {
    //get the selected item
    var selectedCountries = $("#Countries1 option:selected");
    var pavilion = $("#Cities2");
    selectedCountries.clone().appendTo(pavilion);
  });
  $("#btnLeftCopyAll").click(function () {
    //get all child element of dropdown
    var copyCountries = $("#Countries1").children();
    var pavilion = $("#Cities2");
    copyCountries.clone().appendTo(pavilion);
  });
});
