$(".1dp").on('mouseenter mouseleave', function () {
    $(this).find(".Depth2").toggleClass("on"); // li 에서 Dpeth2 찾아 toggle 클래스
    $(this).siblings().children(".Depth2").removeClass("on"); // 선택자 제외한 형제 요소에서 Dpeth2 찾아 remove 클래스
    $('.blur').toggleClass('on');
});

// $(".listbtn").click(function(){
//     $('.full_meun').fadeIn();
// });

// $(".close").click(function(){
//     $('.full_meun').fadeOut();
// });


//PC full menu open / close
$(function () {

    const $open = $(".listbtn");
    const $close = $(".close");

    $($open).click(function () {
        $(this).toggleClass('on');
        $('.full_meun').toggleClass('on');
    });

    $($close).click(function () {
        $(this).removeClass('on');
        $('.full_meun').removeClass('on');
        $($open).removeClass('on')
    });

});

// $('.gnb > li').on(function(){
//     if($('.Depth2').hasClass('on')){
//         $(this).removeClass('on');
//         $(".header_bg").removeClass('active');
//     }else{
//         $(this).addClass('on');
//         $(".header_bg").addClass('active');
//     }
// });

function isMobile(){
	var UserAgent = navigator.userAgent;

	if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null){
		return true;
	}else{
		return false;
	}
}

if(isMobile()){
	location.href = "../mobile/index.html";	//모바일페이지
}else{
	location.href = "index.html";	//PC페이지
}
