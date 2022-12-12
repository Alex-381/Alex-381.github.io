//Hook up the tweet display

$(document).ready(function() {
						   
	name = '';
	
	$(".countdown").countdown({
				date: "12 dec 2022 20:56:00",
				format: "on"
			},
			
			function() {
				window.location.href = 'you-win.html';
			});

});	
