var g_rowIndex;
$(document).ready(function () {
  //table initilize
  var tbl$ = $("#tableDisplay").DataTable({
    columns: [
      { 
        data: "ID",
        visible:false,
      },
      {
        data: "Name",
      },
      {
        data: "Quantity",
      },
      {
        data: "Color",
      },
      {
        defaultContent:
          "<a href='#' class='pEdit' id='edit'>edit</a>/<a href='#' class='pDelete' id='delete'>delete</a>",
      },
    ],
  });


  //save by creating object 
  $("#btnSave").on("click", function () {
    var aID = $("#txtID").val();
    var bName = $("#txtName").val();
    var cQuantity = $("#txtQuantity").val();
    var dColor = $("#Colors option:selected").text(); 
    var tblObj = {
      "ID": aID,
      "Name": bName,
      "Quantity": cQuantity,
      "Color": dColor,
    };
    tbl$.row.add(tblObj).draw();
    $("#modalAdd").modal("hide");
  });

  $("#modalAdd").on("show.bs.modal", function (e) {
    $("#btnUpdate").hide();

  });
  $("#modalAdd").on("hidden.bs.modal", function (e) {
    $(".form-control").val("");
    $("#Colors option:selected").prop("selected", false);
  });

  
  $("#tableDisplay tbody").on("click", "a", function (e) {
    var linkID = e.target.id;
    g_rowIndex = tbl$.row($(this).parents("tr")).index();
    if (linkID == "edit") {
      var rowData = tbl$.row(g_rowIndex).data();
      $("#txtID").val(rowData.ID);
      $("#txtName").val(rowData.Name);
      $("#txtQuantity").val(rowData.Quantity);
      $("#Colors option:selected").text(rowData.Color);
      $("#modalAdd").modal("show");
      $("#btnUpdate").show();
      $("#btnSave").hide();
    } else {
      $("#modalDelete").modal("show");
    }
  });


//delete confrimation 
  $("#btnDelYes").click(function () {
    tbl$.row(g_rowIndex).remove().draw();
    $("#modalDelete").modal("hide");
  });


  //update event
  $("#btnUpdate").on("click", function () {
    var Obj = {
      "ID": $("#txtID").val(),
      "Name": $("#txtName").val(),
      "Quantity": $("#txtQuantity").val(),
      "Color": $("#Colors option:selected").text(),
    };
    tbl$.row(g_rowIndex).data(Obj).draw();
    $("#modalAdd").modal("hide");
  });
});
