// Global variables
var g_screen="";
var g_val1="";
var g_val2="";

$(function(){
    // These variables are visible to all function inside here. they are not global
    var op="";
    var mode=0; // 0 means we are entering first number. 1 means we are entering second number
    // Handler for all buttons with class name 'num'
    $("button.num").click(function(){
        // Convert javascript (this) object to jquey object
        var btn$=$(this);
        var btnText=btn$.text();
        if(mode==0) {
            // We are still entering first number
            g_val1+=btnText;
            $("#screen").val(g_val1);
        }else{
            // We must be entering second number
            g_val2+=btnText;
            $("#screen").val(g_val2);
        }       
        
    });
    // Handler for all buttons with class name 'opr'
    $("button.opr").click(function(){
        // Convert javascript (this) object to jquey object
        var btn$=$(this);
        var btnText=btn$.text();
        // Remember the operator
        op=btnText;
        // Change the mode to second number
        mode=1;
        //Clear the screen
        $("#screen").val("");
    });
    // Handler for other buttons
    $("button.oth").click(function(){
        // Convert javascript (this) object to jquey object
        var btn$=$(this);
        var btnText=btn$.text();
        // Check what is clicked
        switch(btnText){
            case "C":
                // Clear the screen and reset the system
                $("#screen").val("");
                g_val1=g_val2="";
                mode=0;
                break;
            case "=":
                // Compute operation
                var a = parseInt(g_val1);
                var b = parseInt(g_val2);
                var c=0;
                switch(op){
                    case "+":
                        c=a+b;
                        $("#screen").val(c);
                        break;
                    case "-":
                    case "/":
                    case "*": break;
                }
        }
    });   
});