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
	});



	$("#portfolio li").click(function(){
		var varIndex = $("#portfolio li").index(this) ;
		var goTo = varIndex + 1;
		var theLink = "gallery"+goTo+".html";
		$("#container").animate({"opacity" : "0"}, 500, function(){
			$(window).scrollTop(0).delay(200);
			$("#slider").load(theLink, function(){
				$("#slider").css({"opacity": "0"}).animate({"opacity":"1"}, 1000);
				$("#container").animate({"opacity" : "1"}, 500);
				})
		})
	})

});