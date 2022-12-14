//Hook up the tweet display

$(document).ready(function() {
						   
	name = '';
	
	$(".countdown").countdown({
				date: "14 dec 2022 18:54:00",
				format: "on"
			},
			
			function() {
				window.location.href = 'you-win.html';
			});

});	
