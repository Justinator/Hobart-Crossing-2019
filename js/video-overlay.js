$(function() {
    $("#videoButton").click(function(e){
        $(".videoOverlay").toggleClass("open");
        	e.stopPropagation();
    });
});

$(function() {
    $("#close").click(function(e){
        $(".videoOverlay").toggleClass("open");
        	e.stopPropagation();
    });
});

$(function() {
    $(".videoOverlay").click(function(e){
        $(".videoOverlay").toggleClass("open");
        	e.stopPropagation();
    });
});
