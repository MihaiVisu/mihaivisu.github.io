$(function() {
    // for skill chat jquery
    var index=0;
    var $win = $(window);
    $win.scroll(function(){
    	var top = $('.skills').height()-$win.scrollTop();
    	// console.log(top);
    	if(top<-720){
    		if(index===0){
    			$('.chart').easyPieChart({
    				easing: 'easeOutBounce',
    				onStep: function(from, to, percent) {
    					$(this.el).find('.percent').text(Math.round(percent));
    				}
    			});

    		}
    		index++;
    	}
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    new WOW().init();
});
