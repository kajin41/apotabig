/**
 * Created by on 11/14/15.
 */

$(window).on('resize', function(){
    var win = $(this); //this = window
    $("#headline").css({
            "position": "absolute",
            "font-size": "5vw",
            "text-shadow": "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            "left": "calc(50% - " + $("#headline").width()/2 + "px)"
    });
    $("#headline").css({
            "left": "calc(50% - " + $("#headline").width()/2 + "px)",
            "top": $(".cover").height()/3 + 'px'
    });
    if (win.height() < win.width()) {
        $("#down").css({
            "position": "absolute",
            "height": win.height()/20 + "px"
        });
    }
    else {
        $("#down").css({
            "position": "absolute",
            "height": win.width()/20 + "px"
        });
    }
    $("#down").css({
            "left": "calc(50% - " + $("#down").width() / 2 + "px)",
            "top": $(".cover").height() / 1.25 + 'px'
        });

});
$(document).ready(function(){
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
    $("#headline").css({
            "position": "absolute",
            "font-size": "5vw",
            "text-shadow": "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
    });
    $("#headline").css({
            "left": "calc(50% - " + $("#headline").width()/2 + "px)",
            "top": $(".cover").height()/3 + 'px'
    });
    if ($(window).height() < $(window).width()) {
        $("#down").css({
            "position": "absolute",
            "height": $(window).height()/20 + "px"
        });
    }
    else {
        $("#down").css({
            "position": "absolute",
            "height": $(window).width()/20 + "px"
        });
    }
    $("#down").css({
            "left": "calc(50% - " + $("#down").width() / 2 + "px)",
            "top": $(".cover").height() / 1.25 + 'px'
        });

    $("iframe").css({
        "padding": "5%"
    });

    $("#tab1").css({
            "padding-bottom": ".5%",
            "border-bottom-right-radius": "0%",
            "border-bottom-left-radius": "0%"
        });
    $("#tab1_info").show();


    $(".tab").click(function(){
        $(".info").hide();
        $(".tab").css({
            "padding-bottom": "0%",
            "border-bottom-right-radius": "3%",
            "border-bottom-left-radius": "3%"
        });
        $(this).css({
            "padding-bottom": ".5%",
            "border-bottom-right-radius": "0%",
            "border-bottom-left-radius": "0%"
        });
        var selec = "#" + $(this).attr("id") + "_info";
        $(selec).show();
    })
});
