
// 轮播图
var mySwiper = new Swiper('.banner-container',{
	
	
	loop : true,
	pagination: {
		el: '.swiper-pagination',
	  },
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
		},
		
	})


	
    var swiper = new Swiper('.headlines-container', {
		direction: 'vertical',
		loop : true,
		autoplay: {
			delay: 1000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
			},
	  });
	