$(document).ready(function(){


	$("html").css({"overflow":"auto"});
	
	$("body").hide().delay(100).show('blind');

	$("footer").hover(function(){
		$("#footHold").stop().animate({"bottom":"0px"}, 200);
	},function(){
		$("#footHold").stop().animate({"bottom":"-100px"}, 200);
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
	});



	$("#portfolio li").click(function(){
		var varIndex = $("#portfolio li").index(this) ;
		var goTo = varIndex + 1;
		var theLink = "gallery"+goTo+".html";
	
		$("#slider").css({"opacity": "0"})
		$("#container").animate({"opacity" : "0"}, 800, function(){
		$("body").append('<div id="loading"> </div>');
		$("#loading").animate({"opacity": "1"}, 750);
			$(window).scrollTop(0).delay(200);
			$("#slider").load(theLink, function(){
				
				$("#slider").delay('800').animate({"opacity":"1"}, 750, function(){
					$("#loading").animate({"opacity":"0"}, 650).delay(100).remove();
					$("#container").animate({"opacity" : "1"}, 750);
				});
				

				})
		})
	})




	 var theForm =$('#sendmail');
      console.log(theForm);

      function form_submit(event) {
      event.preventDefault();
      console.log('Let\'s do this');

      var formVars = theForm.serialize();

      $.post('contact.php', formVars, function(data){
        //console.log(data);
        $('#sendmail').css({'opacity':'0'}, 500).remove90;
        $('.target').css({'opacity': '0'}).html(data).animate({'opacity':'1'}, 1000);

      });
  }
  theForm.submit(form_submit);


    $("#mainNav a").css({"visibility":"hidden"});
  	var x = false;
  	$("#mobileIcon").click(function(){
  		if(!x){
  			//function
  			$("#mainNav a").css({"visibility":"visible", "z-index":"100000000"});
  			$("#mainNav").css({"background-color": "white"});
  			x=true;
  		}
  		else{
  			//function
  			$("#mainNav a").css({"visibility":"hidden","z-index":"-100000000"});
  			$("#mainNav").css({"background-color": ""});
  			x = false;
  		}
  	});


  	$(window).resize(respond).ready(respond);
  		var brk1 = 481;
  		var brk2 = 482;

  		function respond() {
 			 var w = $(window).width();

 			 if  (w > brk1)
 			 {
 			   $("#mainNav a")
 			   .css({"visibility":"", "z-index":"-100000000"});
 			   $("#mainNav").css({"background-color": ""});
 			     
 			 }
 			 else if  (w > brk2)
 			 {
 			   $("#mainNav a")
 			   .css({"visibility":"visible", "z-index":"100000000"});
 			   $("#mainNav").css({"background-color": "white"});
 			 }
 			}
 			





 			var preloadImages = [ 'img/_photoplus/_0001.jpg','img/_photoplus/_mobile/_0001.jpg',
							  'img/_photoplus/_0002.jpg','img/_photoplus/_mobile/_0002.jpg',
							  'img/_photoplus/_0003.jpg','img/_photoplus/_mobile/_0003.jpg',
							  'img/_photoplus/_0004.jpg','img/_photoplus/_mobile/_0004.jpg',
							  'img/_photoplus/_0005.jpg','img/_photoplus/_mobile/_0005.jpg',
 							  'img/_allure/_0001.jpg','img/_allure/_mobile/_0001.jpg',
 							  'img/_allure/_0002.jpg','img/_allure/_mobile/_0002.jpg',		
 							  'img/_allure/_0003.jpg','img/_allure/_mobile/_0003.jpg',		
 							  'img/_allure/_0004.jpg','img/_allure/_mobile/_0004.jpg',		
 							  'img/_allure/_0005.jpg','img/_allure/_mobile/_0005.jpg',
 							  'img/_loveluna/_0001.jpg','img/_loveluna/_mobile/_0001.jpg',
							  'img/_loveluna/_0002.jpg','img/_loveluna/_mobile/_0002.jpg',
							  'img/_loveluna/_0003.jpg','img/_loveluna/_mobile/_0003.jpg',
							  'img/_loveluna/_0004.jpg','img/_loveluna/_mobile/_0004.jpg',
							  'img/_loveluna/_0005.jpg','img/_loveluna/_mobile/_0005.jpg',
							  'img/_loveluna/_0006.jpg','img/_loveluna/_mobile/_0006.jpg',
							  'img/_loveluna/_0007.jpg','img/_loveluna/_mobile/_0007.jpg',
							  'img/_loveluna/_0008.jpg','img/_loveluna/_mobile/_0008.jpg',
							  'img/_ymca/_0001.jpg','img/_ymca/_mobile/_0001.jpg',
							  'img/_ymca/_0002.jpg','img/_ymca/_mobile/_0002.jpg',
							  'img/_ymca/_0003.jpg','img/_ymca/_mobile/_0003.jpg',
							  'img/_ymca/_0004.jpg','img/_ymca/_mobile/_0004.jpg',
							  'img/_ymca/_0005.jpg','img/_ymca/_mobile/_0005.jpg',
							  'img/_ymca/_0006.jpg','img/_ymca/_mobile/_0006.jpg',	
							  'img/_hospital/_0001.jpg','img/_hospital/_mobile/_0001.jpg',
							  'img/_hospital/_0002.jpg','img/_hospital/_mobile/_0002.jpg',
							  'img/_hospital/_0003.jpg','img/_hospital/_mobile/_0003.jpg',
							  'img/_hospital/_0004.jpg','img/_hospital/_mobile/_0004.jpg',
							  'img/_hospital/_0005.jpg','img/_hospital/_mobile/_0005.jpg',
							  'img/_hospital/_0006.jpg','img/_hospital/_mobile/_0006.jpg',
							  'img/_hospital/_0007.jpg','img/_hospital/_mobile/_0007.jpg',
							  'img/_hospital/_0008.jpg','img/_hospital/_mobile/_0008.jpg',
							  'img/_hospital/_0009.jpg','img/_hospital/_mobile/_0009.jpg',
							  'img/_hospital/_0010.jpg','img/_hospital/_mobile/_0010.jpg',
							  'img/_hospital/_0011.jpg','img/_hospital/_mobile/_0011.jpg',
							  'img/_hospital/_0012.jpg','img/_hospital/_mobile/_0012.jpg',
							  'img/_oceanpark/_0001.jpg','img/_oceanpark/_mobile/_0001.jpg',
							  'img/_oceanpark/_0002.jpg','img/_oceanpark/_mobile/_0002.jpg',
							  'img/_oceanpark/_0003.jpg','img/_oceanpark/_mobile/_0003.jpg',
							  'img/_oceanpark/_0004.jpg','img/_oceanpark/_mobile/_0004.jpg',
							  'img/_oceanpark/_0005.jpg','img/_oceanpark/_mobile/_0005.jpg',
							  'img/_oceanpark/_0006.jpg','img/_oceanpark/_mobile/_0006.jpg',
							  'img/_oceanpark/_0007.jpg','img/_oceanpark/_mobile/_0007.jpg',
						       'img/_glint/_0001.jpg','img/_glint/_mobile/_0001.jpg',
						       'img/_glint/_0004.jpg','img/_glint/_mobile/_0004.jpg',
						       'img/_glint/_0003.jpg','img/_glint/_mobile/_0003.jpg',
						       'img/_glint/_0004.jpg','img/_glint/_mobile/_0004.jpg',
						       'img/_glint/_0005.jpg','img/_glint/_mobile/_0005.jpg',
						       'img/_glint/_0006.jpg','img/_glint/_mobile/_0006.jpg',
						       'img/_glint/_0007.jpg','img/_glint/_mobile/_0007.jpg',
						       'img/_glint/_0008.jpg','img/_glint/_mobile/_0008.jpg',
						       'img/_glint/_0009.jpg','img/_glint/_mobile/_0009.jpg',
						       'img/_glint/_0010.jpg','img/_glint/_mobile/_0010.jpg',
						       'img/_digital_imaging/_0001.jpg','img/_digital_imaging/_mobile/_0001.jpg',
							  'img/_digital_imaging/_0002.jpg','img/_digital_imaging/_mobile/_0002.jpg',
							  'img/_digital_imaging/_0003.jpg','img/_digital_imaging/_mobile/_0003.jpg',
							  'img/_digital_imaging/_0004.jpg','img/_digital_imaging/_mobile/_0004.jpg',
							  'img/_photography/_0001.jpg','img/_photography/_mobile/_0001.jpg',
							  'img/_photography/_0002.jpg','img/_photography/_mobile/_0002.jpg',
							  'img/_photography/_0003.jpg','img/_photography/_mobile/_0003.jpg',
							  'img/_photography/_0004.jpg','img/_photography/_mobile/_0004.jpg',
							  'img/_photography/_0005.jpg','img/_photography/_mobile/_0005.jpg',
							  'img/_photography/_0006.jpg','img/_photography/_mobile/_0006.jpg',
							  'img/_photography/_0007.jpg','img/_photography/_mobile/_0007.jpg',
							  'img/_photography/_0008.jpg','img/_photography/_mobile/_0008.jpg',
							  'img/_photography/_0009.jpg','img/_photography/_mobile/_0009.jpg',	
							  'img/_photography/_0010.jpg','img/_photography/_mobile/_0010.jpg',
							  'img/_motiongfx/_0001.jpg','img/_motiongfx/_mobile/_0001.jpg',
							  'img/_motiongfx/_0002.jpg','img/_motiongfx/_mobile/_0002.jpg',
							  'img/_motiongfx/_0003.jpg','img/_motiongfx/_mobile/_0003.jpg',
							  'img/_motiongfx/_0004.jpg','img/_motiongfx/_mobile/_0004.jpg',
							  'img/_motiongfx/_0005.jpg','img/_motiongfx/_mobile/_0005.jpg',
							  'img/_motiongfx/_0006.jpg','img/_motiongfx/_mobile/_0006.jpg',	
							  'img/_music/_0001.jpg','img/_music/_mobile/_0001.jpg',
						       'img/_music/_0002.jpg','img/_music/_mobile/_0002.jpg',
						       'img/_music/_0003.jpg','img/_music/_mobile/_0003.jpg',
						       'img/_music/_0004.jpg','img/_music/_mobile/_0004.jpg',
						       'img/_music/_0005.jpg','img/_music/_mobile/_0005.jpg',
						       'img/_music/_0006.jpg','img/_music/_mobile/_0006.jpg',
						       'img/_music/_0007.jpg','img/_music/_mobile/_0007.jpg',
						       'img/_music/_0008.jpg','img/_music/_mobile/_0008.jpg',
						       'img/_random/_0001.jpg','img/_random/_mobile/_0001.jpg',
						       'img/_random/_0002.jpg','img/_random/_mobile/_0002.jpg',
						       'img/_random/_0003.jpg','img/_random/_mobile/_0003.jpg',
						       'img/_random/_0004.jpg','img/_random/_mobile/_0004.jpg',
						       'img/_random/_0005.jpg','img/_random/_mobile/_0005.jpg',
						       'img/_random/_0006.jpg','img/_random/_mobile/_0006.jpg',
						       'img/_random/_0007.jpg','img/_random/_mobile/_0007.jpg',
						       'img/_random/_0008.jpg','img/_random/_mobile/_0008.jpg',
						       'img/_random/_0009.jpg','img/_random/_mobile/_0009.jpg',

 										] ;

 			var imgs = [];
 			for (var i=0; i<preloadImages.length;i++){
 				imgs[i] = new Image();
 				imgs[i].src = preloadImages[1];
 			}












});