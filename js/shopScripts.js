//This file contains all the custom scripts for the GV Apparel Store.

//Custom Scripts for 2018 Holiday Gift Guide.
var gv = jQuery.noConflict();

gv(document).ready(function(){
    console.log("Hello, Moto.");
    
    gv("body#PageType01").css("display","block");
    gv("body#PageType01-elastic").css("display","block");

function setObjSize(){
        //gv("#closed-sign").css("width", "100%");
        //gv("#closed-sign").css("height", winHeight+"px");
        }    
    
//scripts to replace some stuff on the login page.    
if(document.getElementById("ctl00_content_Login_txtLoginId") && document.getElementById("ctl00_content_Login_txtPassword")){
    
    
    
    console.log("This is the login page");
    gv("#welcome-text").css('display','none');
    var winHeight = gv(window).height();
    
    //var ctlHead = gv("table#CtlHead tbody tr td").html();
     
    //gv("table#CtlHead").remove();//removes the header table - not wanted and not needed after I snag the content.
    var targetNode = function() {
        var domString = "table#ENUSmain tbody tr td ";
        var snaggedBlock = gv(domString).html();
        var loginBTN = "<img src=\"https://mymulti-craft.com/gv-apparel/login-btn.png\" alt=\"Login\">";
        
        gv(domString).empty();
        var newBlock = "<div id=\"login-wrapper\">" + snaggedBlock + "</div>";
        gv(domString).html(newBlock);
        gv("a#ctl00_content_Login_btnLogin.pbtn.btn-s.primary").empty();
        gv("a#ctl00_content_Login_btnLogin.pbtn.btn-s.primary").html(loginBTN);
        gv("#PageType01 #ENUSmain").css({
            "background-image":"none",
            "background":"transparent",
            "box-shadow":"none",
            "max-width":"none",
        });
        gv("#ctl00_content_Login_txtLoginId").attr("placeholder","User Id");
        gv("#ctl00_content_Login_txtPassword").attr("placeholder","Password");
        //var desiredHeadContent = gv("table#CtlHead tbody tr td").html();
        //var ctlLogin = gv(domString+"div#CtlLogin");
        //var script = gv(domString+"script");
        //var ctlFooter = gv(domString+"table#CtlFooter");
        //var footerBottom = gv(domString+"div.FooterBottom");
        //var newCtlHead = "<div id=\"ctlHead\">"+desiredHeadContent+"</div>";
        //var fullString = newCtlHead + ctlLogin + script + ctlFooter + footerBottom;
        //gv("table#ENUSmain tbody tr td").html(fullString);
        //gv(domString + "table#CtlHead").remove();
        
        //console.log(children);
    }
    
   targetNode();

    
    //gv("#CtlLogIn").before(ctlHead);
    //gv("#welcome-and-shop-now").wrap("<div id=\"CtlHead\"></div>"); 
    //gv("#ENUSmain").css("display","none");
   
    //console.log("The script is adding the new closed page.");
    //console.log(storeClosed);
    
    //gv("form#aspnetForm").before(storeClosed);
    //gv("form#aspnetForm").remove();
    
    //setObjSize();
    
    //gv(window).resize(function(){
    //        winHeight = gv(window).innerHeight();
    //        setObjSize();
    //    });
        
        
}

if(document.getElementById("ctl00_content_SelfRegFlow_SelfRegInstr_SelfRegInstrLayout")){
   gv("#welcome-text").css('display','none');
   }

if(document.getElementById("ctl00_content_ForgotPassword_txtUserID")){
   gv("#welcome-text").css('display','none');
   }    
    
});
