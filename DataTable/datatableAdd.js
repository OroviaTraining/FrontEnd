$(document).ready(function () {
    //table initilize
    var tbl = $("#example").DataTable();

 //dummy row addtion
     $("#addRow").on("click", function () {
    tbl.row.add(["ID ", "Product", "quantity"]).draw();
    });

    //add row from model inputs
    $("#addRow1").on("click", function () {
      $("#exampleModal").modal("show");
    $("#btnUpdate").hide();
     $("input").val("");
     });

    //add to table
    $("#btnSave").on("click", function () {
     var id = $("#txtID").val();
     var name = $("#txtName").val();
     var qty = $("#txtQty").val();
     tbl.row.add([id, name, qty]).draw();
     $("#exampleModal").modal("hide");
    });

    
    $("#example tbody").on("click", "tr", function () {
     if ($(this).hasClass("selected")) {
     $(this).removeClass("selected");
    } else {
     tbl.$("tr.selected").removeClass("selected");
     $(this).addClass("selected");
     }
 });

    //edit selected row
$("#editRec").click(function () {
     $("#btnSave").hide();
     $("#btnUpdate").show();
    $("#exampleModal").modal("show");
    var rowData = tbl.row(".selected").data();
    $("#txtID").val(rowData[0]);
    $("#txtName").val(rowData[1]);
 $("#txtQty").val(rowData[2]);
    });

//update to selected row
    $("#btnUpdate").on("click", function () {
    var rowData = [];
    rowData[0] = $("#txtID").val();
    rowData[1] = $("#txtName").val();
     rowData[2] = $("#txtQty").val();
     //update the selected row
 tbl.row(".selected").data(rowData).draw();
    $("#exampleModal").modal("hide");
    });
});