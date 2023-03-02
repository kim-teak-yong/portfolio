$(document).ready(function(){
    $(".1dp").on('click', function(){
        $(this).find(".Depth2").toggleClass("on"); // li 에서 Dpeth2 찾아 toggle 클래스
        $(this).siblings().children(".Depth2").removeClass("on"); // 선택자 제외한 형제 요소에서 Dpeth2 찾아 remove 클래스
    });
});

// $('.gnb > li').click(function(){
//     if($('.Depth2').hasClass('on')){
//         $(this).removeClass('on');
//         $(".header_bg").removeClass('active');
//     }else{
//         $(this).addClass('on');
//         $(".header_bg").addClass('active');
//     }
// });


const changeHandler = () => {
    console.log(window.innerHeight);
    document.querySelector("video").style.height=String(window.innerHeight)+"px";
  };
  
  window.addEventListener("resize", changeHandler);