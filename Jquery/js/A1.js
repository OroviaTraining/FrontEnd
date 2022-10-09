$(function(){
    // Associate click handler to ADD button
    $("#btnAdd").click(ADDClicked);
});

/* This function is called when ADD button is clicked */
function ADDClicked(){
    var aStr=$("#txtA1").val();
    var bStr=$("#txtB1").val();
    var aInt=parseInt(aStr);
    var bInt=parseInt(bStr);
    var cInt=aInt+bInt;
    $("#txtR1").val(cInt);
}