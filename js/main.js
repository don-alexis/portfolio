$(document).ready(function(){

	

	$("#portfolio li:nth-child(1)").click(function(){
		$("#portfolio").stop().animate({opacity:0}, 500, function(){
			$("#content").empty();
			$("#slider").stop().animate({"height":"0px"}, 800, function(){

				$("#slider").animate({"height":"5000px"}, 800, function(){
					
				$("#content").load('gallery1.html', function(){
					$("#content").css({opacity:0}).delay(100).animate({opacity:1}, 500, function(){
						$("#portfolio").animate({opacity:1}, 500);
					});
					
				})
			});
		})
		});
		
	})


	
	$("#portfolio li:nth-child(2)").click(function(){
		$("#portfolio").stop().animate({opacity:0}, 500, function(){
			$("#content").empty();
			$("#slider").stop().animate({"height":"0px"}, 800, function(){

				$("#slider").animate({"height":"5000px"}, 800, function(){
					
				$("#content").load('gallery2.html', function(){
					$("#content").css({opacity:0}).delay(100).animate({opacity:1}, 500, function(){
						$("#portfolio").animate({opacity:1}, 500);
					});
					
				})
			});
		})
		});
		
	})




	$("#portfolio li:nth-child(3)").click(function(){
		$("#portfolio").stop().animate({opacity:0}, 500, function(){
			$("#content").empty();
			$("#slider").stop().animate({"height":"0px"}, 800, function(){

				$("#slider").animate({"height":"5000px"}, 800, function(){
					
				$("#content").load('gallery3.html', function(){
					$("#content").css({opacity:0}).delay(100).animate({opacity:1}, 500, function(){
						$("#portfolio").animate({opacity:1}, 500);
					});
					
				})
			});
		})
		});
		
	})




	$("#portfolio li:nth-child(4)").click(function(){
		$("#portfolio").stop().animate({opacity:0}, 500, function(){
			$("#content").empty();
			$("#slider").stop().animate({"height":"0px"}, 800, function(){

				$("#slider").animate({"height":"5900px"}, 800, function(){
					
				$("#content").load('gallery4.html', function(){
					$("#content").css({opacity:0}).delay(100).animate({opacity:1}, 500, function(){
						$("#portfolio").animate({opacity:1}, 500);
					});
					
				})
			});
		})
		});
		
	})





	$("#portfolio li:nth-child(5)").click(function(){
		$("#portfolio").stop().animate({opacity:0}, 500, function(){
			$("#content").empty();
			$("#slider").stop().animate({"height":"0px"}, 800, function(){

				$("#slider").animate({"height":"12000px"}, 800, function(){
					
				$("#content").load('gallery5.html', function(){
					$("#content").css({opacity:0}).delay(100).animate({opacity:1}, 500, function(){
						$("#portfolio").animate({opacity:1}, 500);
					});
					
				})
			});
		})
		});
		
	})




	$("#portfolio li:nth-child(6)").click(function(){
		$("#portfolio").stop().animate({opacity:0}, 500, function(){
			$("#content").empty();
			$("#slider").stop().animate({"height":"0px"}, 800, function(){

				$("#slider").animate({"height":"7000px"}, 800, function(){
					
				$("#content").load('gallery6.html', function(){
					$("#content").css({opacity:0}).delay(100).animate({opacity:1}, 500, function(){
						$("#portfolio").animate({opacity:1}, 500);
					});
					
				})
			});
		})
		});
		
	})



		$("#portfolio li:nth-child(7)").click(function(){
		$("#portfolio").stop().animate({opacity:0}, 500, function(){
			$("#content").empty();
			$("#slider").stop().animate({"height":"0px"}, 800, function(){

				$("#slider").animate({"height":"9000px"}, 800, function(){
					
				$("#content").load('gallery7.html', function(){
					$("#content").css({opacity:0}).delay(100).animate({opacity:1}, 500, function(){
						$("#portfolio").animate({opacity:1}, 500);
					});
					
				})
			});
		})
		});
		
	})



		$("#portfolio li:nth-child(8)").click(function(){
		$("#portfolio").stop().animate({opacity:0}, 500, function(){
			$("#content").empty();
			$("#slider").stop().animate({"height":"0px"}, 800, function(){

				$("#slider").animate({"height":"4500px"}, 800, function(){
					
				$("#content").load('gallery8.html', function(){
					$("#content").css({opacity:0}).delay(100).animate({opacity:1}, 500, function(){
						$("#portfolio").animate({opacity:1}, 500);
					});
					
				})
			});
		})
		});
		
	})



		$("#portfolio li:nth-child(9)").click(function(){
		$("#portfolio").stop().animate({opacity:0}, 500, function(){
			$("#content").empty();
			$("#slider").stop().animate({"height":"0px"}, 500, function(){

				$("#slider").animate({"height":"10000px"}, 500, function(){
					
				$("#content").load('gallery9.html', function(){
					$("#content").css({opacity:0}).delay(100).animate({opacity:1}, 500, function(){
						$("#portfolio").animate({opacity:1}, 500);
					});
					
				})
			});
		})
		});
		
	})


		$("#portfolio li:nth-child(10)").click(function(){
		$("#portfolio").stop().animate({opacity:0}, 500, function(){
			$("#content").empty();
			$("#slider").stop().animate({"height":"0px"}, 800, function(){

				$("#slider").animate({"height":"6000px"}, 800, function(){
					
				$("#content").load('gallery10.html', function(){
					$("#content").css({opacity:0}).delay(100).animate({opacity:1}, 500, function(){
						$("#portfolio").animate({opacity:1}, 500);
					});
					
				})
			});
		})
		});
		
	})




		$("#portfolio li:nth-child(11)").click(function(){
		$("#portfolio").stop().animate({opacity:0}, 500, function(){
			$("#content").empty();
			$("#slider").stop().animate({"height":"0px"}, 800, function(){

				$("#slider").animate({"height":"8000px"}, 800, function(){
					
				$("#content").load('gallery11.html', function(){
					$("#content").css({opacity:0}).delay(100).animate({opacity:1}, 500, function(){
						$("#portfolio").animate({opacity:1}, 500);
					});
					
				})
			});
		})
		});
		
	})





	$("#portfolio li:nth-child(12)").click(function(){
		$("#portfolio").stop().animate({opacity:0}, 500, function(){
			$("#content").empty();
			$("#slider").stop().animate({"height":"0px"}, 800, function(){

				$("#slider").animate({"height":"9000px"}, 800, function(){
					
				$("#content").load('gallery12.html', function(){
					$("#content").css({opacity:0}).delay(100).animate({opacity:1}, 500, function(){
						$("#portfolio").animate({opacity:1}, 500);
					});
					
				})
			});
		})
		});
		
	})	
	



















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




					var stopHere = $("#content");
                    $("#portfolio li").click(function(){
                      $("#slider").scrollTo(stopHere, 1000);
                    });





});
