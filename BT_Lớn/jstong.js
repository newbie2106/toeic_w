$(document).ready(function() {
    $(window).scroll(function(){
        if($(window).scrollTop() >= 10) {
            $('.go').show();
        } else {
			$('.go').hide();
		}
    })
    $("a.go").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
});
