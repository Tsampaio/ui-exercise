$( ".toggle-sidebar" ).click(function() {

    if($(".side-bar-container").css("display") == 'none'){ 
        $(".side-bar-container").show();
        $(".trips").removeClass("full-width");
     } else { 
        $(".side-bar-container").hide();
        $(".trips").addClass("full-width");
     }
});