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
			//Nếu vị trí của body khi scroll > vị trí của ảnh thứ 2 - 500 thì thêm class tạo animation và xóa class hidden
			$('.content .img-content:nth-child(2)').addClass('rollIn animated').removeClass('hidden'); 
		}else{ //animation khi scrollUp
			/*Ngược lại thì xóa class tạo animation, thêm class tạo animation ẩn đi và thêm lại class hidden, 
			nhưng đến đoạn này bị lỗi, e cũng k biết mô tả ntn, a giúp e với*/
			$('.content .img-content:nth-child(2)').removeClass('rollIn animated');
			/* $('.content .img-content:nth-child(2)').addClass('rollOut animated');
			B.thường nếu ko có bước này thì bước hidden khi scrollUp vẫn thực thi đc,
			còn bước này e k hiểu vì s khi có lại bị lỗi*/
			$('.content .img-content:nth-child(2)').addClass('hidden');
		}

		if(pos_body>pos_imgContent3-500){
			$('.content .img-content:nth-child(3)').addClass('fadeInRight animated').removeClass('hidden');
		}else{
			$('.content .img-content:nth-child(3)').removeClass('fadeInRight animated');
			$('.content .img-content:nth-child(3)').addClass('hidden');
		}

		if(pos_body>pos_imgContent4-500){
			$('.content .img-content:last-child').addClass('zoomInDown animated').removeClass('hidden');
		}else{
			$('.content .img-content:last-child').removeClass('zoomInDown animated');
			$('.content .img-content:last-child').addClass('hidden');
		}
		
	});

	$('.back-to-top').click(function(event) {
		$('html,body').animate({scrollTop:0},800);
	});

});