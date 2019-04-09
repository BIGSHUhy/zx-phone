// 监听滚动条
$(window).scroll(function() {
	// console.log($(this).scrollTop())
	if($(this).scrollTop() > 10) {
		$(".header-box").css({"margin-bottom":"0"})
		$(".banner-container").css({"z-index":"998"})
	} else {
		$(".header-box").css({"margin-bottom":"8rem"})
		$(".banner-container").css({"z-index":"1000"})
	}
});
// $('body').bind('touchmove', function(e) { 
// 	e.preventdefault();               //禁用默认滚动行为，需要自己实现滚动
// 	// console.log($(this).scrollTop()); // 计算你的屏幕高度
// 	if($(this).scrollTop() > 69) {
// 		$(".header-box").css({"margin-bottom":"0"})
// 		$(".banner-container").css({"z-index":"998"})
// 	} else {
// 		$(".header-box").css({"margin-bottom":"8rem"})
// 		$(".banner-container").css({"z-index":"1000"})
// 	}
// });
// window.addEventListener('scroll', function () {
// 	// console.log($(this).scrollTop())
// 	if($(this).scrollTop() > 69) {
// 		$(".header-box").css({"margin-bottom":"0"})
// 		$(".banner-container").css({"z-index":"998"})
// 	} else {
// 		$(".header-box").css({"margin-bottom":"8rem"})
// 		$(".banner-container").css({"z-index":"1000"})
// 	}
// })






// 轮播图
var mySwiper = new Swiper('.banner-container',{
	
	
	loop : true,
	observer:true, 
	observeParents:true,
	pagination: {
		el: '.swiper-pagination',
	  },
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		},
		
	})


	
    var swiper = new Swiper('.headlines-container', {
		direction: 'vertical',
		loop : true,
		autoplay: {
			delay: 2000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
			},
	  });
	