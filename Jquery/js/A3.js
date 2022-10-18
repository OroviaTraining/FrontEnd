$(document).ready(function () {
    //radio buttons with same name
    $("#btnSubmit").click(getRadioValue); 

    
    //use of change event and porp method
    $("input[name=operators1]").on("change", function () {
        var a = parseFloat($("#txtA2").val());
        var b = parseFloat($("#txtB2").val());
        var res=0;
        var add = $("#r1Add").prop("checked");
        var div = $("#r2Div").prop("checked");
        if (add == true) {
            res = a + b;
        }
        else if (div == true) {
            res = a / b;
        }
        $("#lblRes1").text(res);
    });
  
//get radio values by name inside click handler
    $("#btnRadioAll").click(function(){
        var textA=$("#txtA").val();
        var gender=$("input[name=gender]:checked").val();
        var maritalStatus=$("input[name=married]:checked").val(); 
        var haveVehicles=$("input[name=vehicles]:checked").val(); 
        $("#resultradioall").append(textA+ " "+gender+ " "+maritalStatus+" "+haveVehicles);
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
