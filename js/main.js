$(function() {

var ctx = document.getElementById("myChart");

  var data = {
    datasets: [{
      data: [75, 75, 80, 85, 50, 80, 70, 80, 90],
      borderWidth: 1,
      label: 'Percentage',
      backgroundColor: [
        "rgba(228,75,35,0.6)", "rgba(241,224,90,0.6)", "rgba(145,222,121,0.6)",
        "rgba(53,114,165,0.6)", "rgba(112,21,22,0.6)", "rgba(85,85,85,0.6)",
        "rgba(23,134,0,0.6)", "rgba(176,114,25,0.6)",
      ]
    }],
    labels: [
      "HTML/CSS", "Javascript", "Database Management",
      "Python", "Ruby", "C/C++", "C#", "Java",
      "Algorithms/Data Structures"
    ]
  };
  var options = {
    responsive: true,
    animation: {
      duration: 2000
    },
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100,
      }
    }
  };

    // for skill chat jquery
    var index=0;
    var $win = $(window);
    $win.scroll(function(){
    	var top = $('.skills').height()-$win.scrollTop();
    	// console.log(top);
    	if(top<-720){
    		if(index===0){
          var myChart = new Chart(ctx, {
            type: 'polarArea',
            options: options,
            data: data
          });
    		}
    		index++;
    	}
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    new WOW().init();
});
