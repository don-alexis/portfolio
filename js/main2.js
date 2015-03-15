$(document).ready(function(){
	$("#portfolio li").css({"backgroundSize":"125%"});

	$("#portfolio li").hover(
		function(){
		$(this).append('<div id="dimmer"></div>');
		$(this).animate({"backgroundSize": "155%"},250)
		$(this).children('div').animate({"opacity": "1"}, 250);
	}, function(){
		$(this).animate({"backgroundSize": "125%"},250)
		$(this).children('div').animate({"opacity": "0"}, 250);
	}
	);

	
	


	$("#portfolio li:nth-child(1)").click(function(){
		$("#container").animate({"opacity" : "0"}, 500, function(){
				$(window).scrollTop(0).delay(200);
				$("#slider").load("gallery1.html", function(){
				$("#slider").css({"opacity": "0"}).animate({"opacity":"1"}, 1000);
				$("#container").animate({"opacity" : "1"}, 500);
			})
		})
	})


	$("#portfolio li:nth-child(2)").click(function(){
		$("#container").animate({"opacity" : "0"}, 500, function(){
				$(window).scrollTop(0).delay(200);
				$("#slider").load("gallery2.html", function(){
				$("#slider").css({"opacity": "0"}).animate({"opacity":"1"}, 1000);
				$("#container").animate({"opacity" : "1"}, 500);
			})
		})
	})

	$("#portfolio li:nth-child(3)").click(function(){
		$("#container").animate({"opacity" : "0"}, 500, function(){
				$(window).scrollTop(0).delay(200);
				$("#slider").load("gallery3.html", function(){
				$("#slider").css({"opacity": "0"}).animate({"opacity":"1"}, 1000);
				$("#container").animate({"opacity" : "1"}, 500);
			})
		})
	})

	$("#portfolio li:nth-child(4)").click(function(){
		$("#container").animate({"opacity" : "0"}, 500, function(){
				$(window).scrollTop(0).delay(200);
				$("#slider").load("gallery4.html", function(){
				$("#slider").css({"opacity": "0"}).animate({"opacity":"1"}, 1000);
				$("#container").animate({"opacity" : "1"}, 500);
			})
		})
	})

	$("#portfolio li:nth-child(5)").click(function(){
		$("#container").animate({"opacity" : "0"}, 500, function(){
				$(window).scrollTop(0).delay(200);
				$("#slider").load("gallery2.html", function(){
				$("#slider").css({"opacity": "0"}).animate({"opacity":"1"}, 1000);
				$("#container").animate({"opacity" : "1"}, 500);
			})
		})
	})


	$("#portfolio li:nth-child(6)").click(function(){
		$("#container").animate({"opacity" : "0"}, 500, function(){
				$(window).scrollTop(0).delay(200);
				$("#slider").load("gallery6.html", function(){
				$("#slider").css({"opacity": "0"}).animate({"opacity":"1"}, 1000);
				$("#container").animate({"opacity" : "1"}, 500);
			})
		})
	})

	$("#portfolio li:nth-child(7)").click(function(){
		$("#container").animate({"opacity" : "0"}, 500, function(){
				$(window).scrollTop(0).delay(200);
				$("#slider").load("gallery7.html", function(){
				$("#slider").css({"opacity": "0"}).animate({"opacity":"1"}, 1000);
				$("#container").animate({"opacity" : "1"}, 500);
			})
		})
	})


	$("#portfolio li:nth-child(8)").click(function(){
		$("#container").animate({"opacity" : "0"}, 500, function(){
				$(window).scrollTop(0).delay(200);
				$("#slider").load("gallery8.html", function(){
				$("#slider").css({"opacity": "0"}).animate({"opacity":"1"}, 1000);
				$("#container").animate({"opacity" : "1"}, 500);
			})
		})
	})

	$("#portfolio li:nth-child(9)").click(function(){
		$("#container").animate({"opacity" : "0"}, 500, function(){
				$(window).scrollTop(0).delay(200);
				$("#slider").load("gallery9.html", function(){
				$("#slider").css({"opacity": "0"}).animate({"opacity":"1"}, 1000);
				$("#container").animate({"opacity" : "1"}, 500);
			})
		})
	})


	$("#portfolio li:nth-child(10)").click(function(){
		$("#container").animate({"opacity" : "0"}, 500, function(){
				$(window).scrollTop(0).delay(200);
				$("#slider").load("gallery10.html", function(){
				$("#slider").css({"opacity": "0"}).animate({"opacity":"1"}, 1000);
				$("#container").animate({"opacity" : "1"}, 500);
			})
		})
	})

	$("#portfolio li:nth-child(11)").click(function(){
		$("#container").animate({"opacity" : "0"}, 500, function(){
				$(window).scrollTop(0).delay(200);
				$("#slider").load("gallery11.html", function(){
				$("#slider").css({"opacity": "0"}).animate({"opacity":"1"}, 1000);
				$("#container").animate({"opacity" : "1"}, 500);
			})
		})
	})


	$("#portfolio li:nth-child(12)").click(function(){
		$("#container").animate({"opacity" : "0"}, 500, function(){
				$(window).scrollTop(0).delay(200);
				$("#slider").load("gallery12.html", function(){
				$("#slider").css({"opacity": "0"}).animate({"opacity":"1"}, 1000);
				$("#container").animate({"opacity" : "1"}, 500);
			})
		})
	})



	$("#portfolio li").click(function(){
		
		alert($("#portfolio li").index(this) );
	})



});