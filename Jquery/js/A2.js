$(document).ready(function () {
    //use of prop method
    $("#btnSubmit").click(getRadioValue); 

    
    //use of change event
    $("input[name=operators1]").on("change", function () {
        var a = parseFloat($("#txtA2").val());
        var b = parseFloat($("#txtB2").val());
        var res=0;
        var add = $("#r1Add").prop("checked");
        var div = $("#r2Div").prop("checked");
        if (add == true) {
            res = a + b;
            $("#lblRes1").text(res);
        }
        
        else if (div == true) {
            res = a / b;
            $("#lblRes1").text(res);
        }
         else{
        $("#lblRes1").text("Enter some value");
        }
    });


    //radio length using (this).prop method
    $("#r1").on("change", function () {
        var tick = $(this).prop("checked");
        if (tick == true) {
            $("#msg1").append("r1 is ticked"+"<br>");
        }
    });
    $("#r2").on("change", function () {
        var tick = $(this).prop("checked");
        if (tick == true) {
            $("#msg1").append("r2 is ticked"+"<br>");
        }
    });
    $("#r3").on("change", function () {
        var tick = $(this).prop("checked");
        if (tick == true) {
            $("#msg1").append("r3 is ticked"+"<br>");
        }
    });
    $("#r4").on("change", function () {
        var tick = $(this).prop("checked");
        if (tick == true) {
            $("#msg1").append("r4 is ticked"+"<br>");
        }
    });
});	

function getRadioValue(){
    var a = parseFloat($("#txtA").val());
    var b = parseFloat($("#txtB").val());
    //getting the radio values
    var add = $("#rAdd").prop("checked");
    var sub = $("#rSub").prop("checked");
    var div = $("#rDiv").prop("checked");
    var mul = $("#rMul").prop("checked");
    if (add == true) {
        var addition = a + b;
        $("#lblRes").text(addition);
    }
    else if(sub==true){
        var subtraction=a-b;
        $("#lblRes").text(subtraction);
    }
    else if(div==true){
        var division=a/b;
        $("#lblRes").text(division);
    }
    else if(mul==true){
        var multiply=a*b;
        $("#lblRes").text(multiply);

    }else{
        $("#lblRes").text("Enter some value");
    }
}
