$(document).ready(function(){

	
	$("body").hide().delay(100).show('fold');

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
				
				$("#slider").delay('800').animate({"opacity":"1"}, 1500, function(){
					$("#loading").animate({"opacity":"0"}, 650).remove();
					$("#container").animate({"opacity" : "1"}, 1500);
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


    
  	var x = false;
  	$("#mobileIcon").click(function(){
  		if(!x){
  			//function
  			$("#mainNav a").css({"visibility":"visible"});
  			x=true;
  		}
  		else{
  			//function
  			$("#mainNav a").css({"visibility":"hidden"});
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
 			   .css({"visibility":"visible"});
 			     
 			 }
 			 else if  (w > brk2)
 			 {
 			   $("#mainNav a")
 			   .css({"visibility":"visible"});
 			 }
 			}
 			



  










});