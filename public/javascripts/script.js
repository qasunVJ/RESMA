$(document).ready(function () {

    $onDisplay = false;

	$("div#tray-bunch ul li").hover(function(){
        $(this).find(".lid").animate({top: '-60px'});
        $(this).find("#intro").fadeIn();
    }, function () {
    	$(this).find(".lid").animate({top: '15px'});
    	$(this).find("#intro").fadeOut();
    });

    $("div#tables-wrapper ul li a").on("click", function () {
        if ($onDisplay == true){
            $("div.popup-wrap").fadeOut();
            $(this).siblings("div.popup-wrap").fadeIn().css("display","block");
        }
        $(this).siblings("div.popup-wrap").fadeIn().css("display","block");
        $onDisplay = true;
    });

    $(".table-pop-close").on("click", function () {
        $(this).closest("div.popup-wrap").fadeOut();
    });

});