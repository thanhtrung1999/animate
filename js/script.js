$(document).ready(function() {
	$('.navbar').addClass('bounceInDown animated');
	$('.content .img-content:first-child').addClass('zoomInDown animated');

	$(window).scroll(function(event) {
		var pos_body = $('html, body').scrollTop(); 

		var pos_imgContent2 = $('.content .img-content:nth-child(2)').offset().top;
		var pos_imgContent3 = $('.content .img-content:nth-child(3)').offset().top;
		var pos_imgContent4 = $('.content .img-content:last-child').offset().top;

		if(pos_body>500){
			$('.back-to-top').addClass('show-btn');
			$('.navbar').addClass('sticky-top').addClass('slideInDown');
		}else{
			$('.back-to-top').removeClass('show-btn');
			$('.navbar').removeClass('sticky-top');
			$('.navbar').removeClass('slideInDown');
		}


		if(pos_body>pos_imgContent2-500){ //animation khi scrollDown
			$('.content .img-content:nth-child(2)').addClass('rollIn ')
		}else{ //animation khi scrollUp

			$('.content .img-content:nth-child(2)').removeClass('rollIn ');


		}

		if(pos_body>pos_imgContent3-500){
			$('.content .img-content:nth-child(3)').addClass('fadeInRight')
		}else{
			$('.content .img-content:nth-child(3)').removeClass('fadeInRight ');
		}

		if(pos_body>pos_imgContent4-500){
			$('.content .img-content:last-child').addClass('zoomInDown ')
		}else{
			$('.content .img-content:last-child').removeClass('zoomInDown ');
		}
		
	});

	$('.back-to-top').click(function(event) {
		$('html,body').animate({scrollTop:0},800);
	});

});