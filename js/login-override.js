//JavaScript for Marcom Stuff
//Hello, Scott!
//

//Style Stuff
//onload = catalogActions;
var gv = jQuery.noConflict();


//Login Page Script
function setObjSize(){
        gv("#closed-sign").css("width", "100%");
        gv("#closed-sign").css("height", winHeight+"px");
        
        //gv(".global-container").css("height", winHeight+"px");
        //gv("#banner-row").css("height", winHeight*.213 + "px");
        //gv("#login-row").css("height", winHeight*.787 + "px");
        }
//This is the block of code that conatains the login input fields.
var CtlSearchGroup = "<div class=\"CtlSearchGroup\"><div><div><div class=\"header\"><span id=\"ctl00_content_Login_Stringcontrol2\">User Id</span></div><div class=\"content\"><input name=\"ctl00$content$Login$txtLoginId\" type=\"text\" id=\"ctl00_content_Login_txtLoginId\" tabindex=\"1\" autocomplete=\"off\" /></div></div><div><div class=\"header\"><span id=\ctl00_content_Login_Stringcontrol3\">Password</span></div><div class=\"content\"><input name=\"ctl00$content$Login$txtPassword\" type=\"password\" id=\"ctl00_content_Login_txtPassword\" tabindex=\"2\" autocomplete=\"off\" /></div></div><div><div class=\"header\"></div><div class=\"content\"></div></div><div><div class=\"header\"></div><div class=\"content\"></div></div></div></div>";

//var storeClosed = "<div id=\"closed-sign\" style=\"background-image:url(https://mymulti-craft.com/gv-connect/moving.jpg);background-repeat:no-repeat;background-position:center top; \"></div>";
if(document.getElementById("ctl00_content_Login_txtLoginId") && document.getElementById("ctl00_content_Login_txtPassword")){
    
    //var storeClosed = "<div id=\"closed-sign\" style=\"background-image:url(https://mymulti-craft.com/gv-connect/moving.jpg);background-repeat:no-repeat;background-position:center top; \"></div>";
    
    console.log("This is the login page");
    var winHeight = gv(window).height();
    
    //gv("#ENUSmain").css("display","none");
   
    //console.log("The script is adding the new closed page.");
    //console.log(storeClosed);
    
    //gv("form#aspnetForm").before(storeClosed);
    //gv("form#aspnetForm").remove();
    
    setObjSize();
    
    gv(window).resize(function(){
            winHeight = gv(window).innerHeight();
            setObjSize();
        });
        
        
}



//});