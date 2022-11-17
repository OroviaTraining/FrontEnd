$(document).ready(function () {
  
    //1.get dropdown selected beased on value
    $("#btnGetValue1").click(function(){
        var textBox = $("#txtTextBox1").val();
        $('#colorSelectDropdown1').val(textBox); 
     })
    
     //2.get dropdown selected beased on value
    $("#btnGetValue2").click(function(){
        var textBox = $("#txtTextBox2").val();
        $("#colorSelectDropdown2 option[value="+textBox+"]").attr('selected', 'selected');
     })

    
     //3.dropdown change evevnt 
     $("#colorSelect3").change(function () {
        //get selected child value
        var selectedColorsValue = $(this).children("option:selected").val();
        //get selected child text
        var selectedColorsText = $("#colorSelect3 option:selected").text();
        //to print result
        $("#firstCardText3").text(selectedColorsText);
        $("#firstCardValue3").text(selectedColorsValue);
    });
    
    
    //4.using click event to get text and value from dropdown
    $("#btnRead4").click(function(){
       //get selected child value
       var selectedColorsValue2 = $("#colorSelect4 option:selected").val();
       //get selected child text
       var selectedColorsText2 =$("#colorSelect4 option:selected").text();
        //to print result
        $("#firstCardText4").text(selectedColorsText2);
        $("#firstCardValue4").text(selectedColorsValue2);
        
    })
    
      //5. Add options to Dropdown list(method 1)
    $("#btnSetDropDown5").click(function(){
        var Value=$("#inputColorValue5").val();
        var Text=$("#inputColorText5").val();
        $('#colorSelect5').append($('<option></option>').val(Value).html(Text));    
        $(".set").val(""); 
    });
    
     //6. Add options to Dropdown list(method 2)
     $("#btnSetDropDown6").click(function(){
        var Value=$("#inputColorValue6").val();
        var Text=$("#inputColorText6").val();
        $('#colorSelect6').append(`<option value="${Value}">${Text}</option>`);      
        $(".set").val("");
    });
    

    //7. Add options to Dropdown list(method 3)
    $("#btnSetDropDown7").click(function(){
        var Value=$("#inputColorValue7").val();
        var Text=$("#inputColorText7").val();
        $('#colorSelect7').append(new Option(Text, Value));  
        $(".set").val("");    
    });
    
    //8. Add options to Dropdown list(method 4)
    $("#btnSetDropDown8").click(function(){
        var Value=$("#inputColorValue8").val();
        var Text=$("#inputColorText8").val();
        $('#colorSelect8').append($('<option>').val(Value).text(Text));  
        $(".set").val(""); 
    });
    
    
    //9.save button handler and calling save function for set value and text
    $("#btnSetDropDown9").on("click", clickSaveCard);
    
    });
    
    //for set val and text
    function clickSaveCard() {
        //getting text box value
        var Name = $("#inputColorValue9").val();
        var value = $("#inputColorValue9").val();
        //appending to the dropdown
        $("#colorSelect9").append($("<option>" + Name + "</option>").val(value));  
        //to select entered text in dropdown
        $("#colorSelect9").val(value).prop("selected", true);
        $(".set").val("");
    }
    
    