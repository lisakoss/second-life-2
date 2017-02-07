$(window).scroll(function () {
    if($(window).height() < 200 || $(window).width() < 200 ) {
        $('#nav').css("background-color", "rgba(140,198,209,0.9)");
    }

    else if($(window).height() > 200) {
        if ($(this).scrollTop() > $(window).height() - 130) { 
            $('#nav').css("background-color", "rgba(140,198,209,0.9)");
        }
        else{
            $('#nav').css("background-color", "rgba(140,198,209,0.0)");
        }
    }
    
});
