// 监听滚动条
$(document).scroll(function() {
	// console.log($(this).scrollTop())
	if($(this).scrollTop() > 69) {
		$(".header-box").css({"margin-bottom":"0"})
		$(".banner-container").css({"z-index":"998"})
	} else {
		$(".header-box").css({"margin-bottom":"8rem"})
		$(".banner-container").css({"z-index":"1000"})
	}
});






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
	