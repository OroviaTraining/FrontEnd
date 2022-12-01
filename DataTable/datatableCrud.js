var g_Products = [];
$(document).ready(function () {
  //table initialize
  var table$ = $("#example").DataTable();

  //add button event
  $("#btnAdd").on("click", function () {
    $("#btnUpdate").hide();
    $("#btnSave").show();
    $(".clr").val("");
    $("input[type='radio']:checked").prop("checked", false);
    $("#idColor option:selected").prop("selected", false);
  });

  $("#example tbody").on("click", "tr", function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      table$.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  //save button handler
  $("#btnSave").on("click", function () {
    var id = $("#txtId").val();
    var name = $("#txtName").val();
    var age = $("#txtAge").val();
    var salary = $("#txtSalary").val();
    var radio = $("input[name='genderSelect']:checked").val();
    var colors = $("#idColor option:selected").text();
    table$.row.add([id, name, age, salary, radio, colors]).draw();
    $("#exampleModal").modal("hide");
  });

  $("#btnEdit").on("click", function () {
    $("#btnSave").hide();
    $("#btnUpdate").show();
    $("#exampleModal").modal("show");

    var rowData = table$.row(".selected").data();
    $("#txtId").val(rowData[0]);
    $("#txtName").val(rowData[1]);
    $("#txtAge").val(rowData[2]);
    $("#txtSalary").val(rowData[3]);
    var gender = rowData[4];
    if (gender == "Male") {
      $("#radioMale").prop("checked", true);
    } else {
      $("#radioFemale").prop("checked", true);
    }
    $("#idColor option:selected").text(rowData[5]);
  });

  $("#btnUpdate").on("click", function () {
    var rowData = [];
    rowData[0] = $("#txtId").val();
    rowData[1] = $("#txtName").val();
    rowData[2] = $("#txtAge").val();
    rowData[3] = $("#txtSalary").val();
    rowData[4] = $("input[name='genderSelect']:checked").val();
    rowData[5] = $("#idColor option:selected").text();
    table$.row(".selected").data(rowData).draw();
    $("#exampleModal").modal("hide");
  });

  $("#btnDelete").on("click", function () {
    var rowData = table$.row(".selected").data();
    table$.row(".selected").remove(rowData).draw();
  });
});
