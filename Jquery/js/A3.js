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
    var res=0;
    //getting the radio values
   var optionSeleted= $('input[name="operators"]:checked').val();
    if (optionSeleted == "add") {
        res = a + b;
        
    }
    else if(optionSeleted=="divide"){
        res=a/b;
       
    }
    else if(optionSeleted=="Sub"){
        res=a-b;
        
    }
    else if(optionSeleted=="multiply"){
        res=a*b;
       

    }else{
        $("#lblRes").text("Enter some value");
    }
    $("#lblRes").text(res); 
}
