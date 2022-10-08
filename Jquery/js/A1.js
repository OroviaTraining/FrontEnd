$(function(){
    // Associate click handler to ADD button
    $("#btnAdd").click(ADDClicked);
});

/* This function is called when ADD button is clicked */
function ADDClicked(){
    var aStr=$("#txtA").val();
    var bStr=$("#txtB").val();
    var aInt=parseInt(aStr);
    var bInt=parseInt(bStr);
    var cInt=aInt+bInt;
    $("#txtR").val(cInt);
}