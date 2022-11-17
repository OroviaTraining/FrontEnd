$(document).ready(function(){
    //use of input type with id(scope method)to get length
    $("#btnSave").click(function(){
        var questionOne=$("input[type=checkbox]:checked","#Q1").length;
        $("#lbl1").text(questionOne);
        var questionTwo=$("input[type=checkbox]:checked","#Q2").length;
        $("#lbl2").text(questionTwo);
        var questionThree=$("input[type=checkbox]:checked","#Q3").length;
        $("#lbl3").text(questionThree);
    
    })

    //this one for -to get individual checkbox value using prop method on changes event
    $("#chkFirst").on("change", function () {
        var tick = $(this).prop("checked");
        if (tick == true) {
            $("#checkAllDisplay").append("<p>checkbox 1 is ticked</p>");
        }
        else{
            $("#checkAllDisplay").append("<p>checkbox 1 is unticked</p>");
             
        }
    });
    $("#chkSec").on("change", function () {
        var tick = $(this).prop("checked");
        if (tick == true) {
            $("#checkAllDisplay").append("<p>checkbox 2 is ticked</p>");
        }
        else{
            $("#checkAllDisplay").append("<p>checkbox 2 is unticked</p>");
             
        }
    });
    
})