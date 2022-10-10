$(function(){
    // Associate click handler to ADD button
    $("#btnAdd").click(ADDClicked);
    // Inline function.
    $("#btnMul").click(function(){
        var aStr=$("#txtA2").val();
        var bStr=$("#txtB2").val();
        var aInt=parseInt(aStr);
        var bInt=parseInt(bStr);
        var cInt=aInt*bInt;
        $("#txtR2").val(cInt);
    });
    //Both buttons have common handler
    $("#btnSub,#btnDiv").click(Operations);
    //All buttons inside a given DIV
    $(":button","#calc").click(Calculate);
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

/* This handler is common to both sub and div. See how we use 'this' to find which button was clicked */
function Operations(){
    // Get the id of the button clicked.
    var id=this.id;
    // We don't have to repeat this
    var aStr=$("#txtA3").val();
    var bStr=$("#txtB3").val();
    var a=parseFloat(aStr);
    var b=parseFloat(bStr);
    var c=0;
    if(id=="btnSub"){
        c=a-b;
    }else if(id=="btnDiv"){
        c=a/b;
    }
    $("#txtR3").val(c);
}

function Calculate(){
    // Get the id of the button clicked.
    var id=this.id;
    // We don't have to repeat this
    var aStr=$("#txtA4").val();
    var bStr=$("#txtB4").val();
    var a=parseFloat(aStr);
    var b=parseFloat(bStr);
    var c=0;
    switch(id){
        case "btnA":
            c=a+b;
            break;
        case "btnS":
            c=a-b;
            break;
        case "btnD":
            c=a/b;
            break;
        case "btnM":
            c=a*b;
            break;
    }
    $("#txtR4").val(c);
}