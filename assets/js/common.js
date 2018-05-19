$(function(){
	//pc导航
	$(".nav_list > li").hover(function(){
		$(".nav_list > li").removeClass("on");
		$(this).addClass("on");
	},function(){
		$(this).removeClass("on");
	})
	
	//语言版本切换
	$("#languages").change(function(){
		$(window).attr('location',$(this).val());
	})
	
	//index banner
	var swiper = new Swiper('.index_banner', {
        pagination: '.index_banner .swiper-pagination',
        paginationClickable: true,
        autoplay:4000,
        loop:true
    });
    
    //首页新闻轮播
    var swiper = new Swiper('.index_new_swiper', {
        paginationClickable: true,
        nextButton: '.index_new_swiper .next',
        prevButton: '.index_new_swiper .prev',
        autoplay:4000,
        loop:true
    });
    
    //产品列表筛选查看更多
    $(".last_option .more").click(function(){
		var oOption = $(this).parent();
		oOption.hasClass("open") ? oOption.removeClass("open") : oOption.addClass("open");
	})
    
    //ihc产品详情页产品推荐
    var swiper = new Swiper('.product_aside .swiper-container', {
    	direction: 'vertical',
    	nextButton: '.aside .prev',
        prevButton: '.aside .next',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 14,
        loop : true,
        autoplay : 3000,
        speed:600
    });
    
    //通用产品详情页产品推荐
    var swiper = new Swiper('.recommened_swiper .swiper-container', {
       	nextButton: '.recommened_next',
        prevButton: '.recommened_prev',
        slidesPerView: 3,
        paginationClickable: true,
        loop:true,
        autoplay:4000,
        speed:600,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
})
