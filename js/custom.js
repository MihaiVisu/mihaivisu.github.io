
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});


// chart loading
$(window).load(function() {

	var chart = window.chart = $('.chart').data('easyPieChart');
	$('.js_update').on('click', function() {
		chart.update(Math.random()*100);
	});

    $("#loaderInner").fadeOut();
    $("#loader").delay(400).fadeOut("slow");

});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// Number animation
$('.counter').waypoint(function() {

    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

    $('.total-number-1').animateNumber({
        number: 2150,
        numberStep: comma_separator_number_step
    }, 2000);

    $('.total-number-3').animateNumber({
        number: 32,
        numberStep: comma_separator_number_step
    }, 2000);

    $('.total-number-2').animateNumber({
        number: 48350,
        numberStep: comma_separator_number_step
    }, 2000);

    }, {
        offset: '60%'

});
