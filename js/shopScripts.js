//This file contains all the custom scripts for the GV Apparel Store.

//Custom Scripts for 2018 Holiday Gift Guide.
var gv = jQuery.noConflict();
var bg = {
    global:false,
    imageURL:""
};
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

//
//Next level customization.
//

var ga = jQuery.noConflict(true);
ga(document).ready(function(){
    
    
    //This function adds meta tags to help improve the sites responsiveness    
    function addMeta(){
        var metatags = "<meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">";
		//change the Doctype to html5
        var doctype = document.implementation.createDocumentType('html','','');
        document.doctype.parentNode.replaceChild(doctype, document.doctype);
                ga("head").prepend(metatags);
    }
    addMeta();
    
    //This function executes the desired changes to the menus present in the Marcon UI
    function modMenu(){
            }
    
	//function to change out desired page elements at page load    
	function modPage(){
        modMenu();
        showPage();
    }
    //by default, the page is hidden until modPage function is completed.
    function showPage(){
        ga("body#PageType01").css("display","block");
        ga("body#PageType01-elastic").css("display","block");
    }
    
    //gets dimensions of home page
    //uncomment if we want to do set height and width dimensions.
    /*function homeDimensions(){
        var width = dg("#lp-hero-container").width();
        var height = (width * .3931) + "px";

    }*/
    
    function changeBg(bg){
        ga("body#PageType01").css({
            "background-image":"url("+bg+")",
        });
    }
    
    
    //The following conditional statements check to see if certain tags are present.
    if(document.getElementById("login-page")){
        if(bg === null || bg === "" | bg === undefined){
            bg = "";//insert URL for image;
            changeBg(bg);
        }
                
        //adds class to ENUSmain table to help ID the page as the login page
        ga("#ENUSmain").addClass("login-page-container");
        console.log("Welcome to the Login page!");
        //Write some scripting that restructures the home page to fit your needs.
        
        showPage();
        
    }//Login
    else if(document.getElementById("home-page")){
        ga("#ENUSmain").addClass("home-page-container");
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
        console.log("Welcome to the Home page!");
        //addMeta();
        
        
        
    }//Home
    else if(document.getElementById("catalog-page")){
        ga("#ENUSmain").addClass("catalog-page-container");
        console.log("Welcome to the Catalog page!");
        
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
        
    }//Catalog
    else if(document.getElementById("ctl00_content_CtlAddToCart_ProductOrderInfoController_divProductOrderInfo")){
        ga("#ENUSmain").addClass("product-page-container");
        
        console.log("Welcome to the Product page!");
        
        
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
        
    }//Product
    else if(document.getElementById("shopping-cart-page")){
        ga("#ENUSmain").addClass("shopping-page-container");

        console.log("Welcome to the Cart page!");
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
        
    }//Cart
    else if(document.getElementById("shipping-page")){
        ga("#ENUSmain").addClass("shipping-page-container");
        
        console.log("Welcome to the Checkout page!");
        
        //addMeta();
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
        
    }//Checkout
    else if(document.getElementById("cat-search-page")){
        console.log("Welcome to the Category Search Results page!");
        ga("#ENUSmain").addClass("cat-search-page-container");
        
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
    }
    else if(document.getElementById("save-cart-page")){
        console.log("Welcome to the Save Cart page!");
        ga("#ENUSmain").addClass("save-cart-page-container");
        
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
    }
    else if(document.getElementById("billing-page")){
        console.log("Welcome to the Billing page!");
        ga("#ENUSmain").addClass("billing-page-container");
        
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
    }
    else if(document.getElementById("billing-po-page")){
        console.log("Welcome to the Billing Purchase Order page!");
        ga("#ENUSmain").addClass("billing-po-page-container");
        
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
    }
    else if(document.getElementById("billing-cc-page")){
        console.log("Welcome to the Billing Credit Card page!");
        ga("#ENUSmain").addClass("billing-cc-page-container");
        
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
    }
    else if(document.getElementById("confirm-order-page")){
        console.log("Welcome to the Confirm Order page!");
        ga("#ENUSmain").addClass("confirm-order-page-container");
        
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
    }
    else if(document.getElementById("order-sum-page")){
        console.log("Welcome to the Order Summary page!");
        ga("#ENUSmain").addClass("order-sum-page-container");
        
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
    }
    else if(document.getElementById("order-mgr-page")){
        console.log("Welcome to the Order Manager page!");
        ga("#ENUSmain").addClass("order-mgr-page-container");
        
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
    }
    else if(document.getElementById("reports-page")){
        console.log("Welcome to the Reports page!");
        ga("#ENUSmain").addClass("reports-page-container");
        
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
    }
    else if(document.getElementById("self-reg-page")){
        console.log("Welcome to the Self Registration page!");
        ga("#ENUSmain").addClass("self-reg-page-container");
        
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
    }
    else if(document.getElementById("err-page")){
        console.log("Welcome to the Error page!");
        ga("#ENUSmain").addClass("err-page-container");
        
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
    }
    else{
        ga("#ENUSmain").addClass("misc-page-container");
        console.log("This might be the profile or any other page!");
        modPage();
        if(bg.global === false){
            bg.imageURL = "";//insert URL for image;
            changeBg(bg.imageURL);
        }
    }
    
        
    
});
