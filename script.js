$(function(){
    $("#top_menu").mouseover(function(){
        $(".detail_menu").stop().slideDown();
        $("#main_menu_back").stop().slideDown();
    });
    $("#top_menu").mouseleave(function(){
        $("#main_menu_back").stop().slideUp();
        $(".detail_menu").stop().slideUp();
    });

    // 3번째 라인 왼쪽 이미지 슬라이드
    $(".img img").eq(0).siblings().css("display","none");
    $(".prev").addClass("off");
    $(".prev").click(function(){
        if(!$(".img img").first().is(":visible")){
            $(".img img:visible").hide().prev("img").fadeIn("slow");
            $(".next").removeClass("off");
        }
        if($(".img img").first().is(":visible")){
            $(".prev").addClass("off");
        }
    });
    $(".next").click(function(){
        if(!$(".img img").last().is(":visible")){
            $(".img img:visible").hide().next("img").fadeIn("slow");
            $(".prev").removeClass("off");
        }
        if($(".img img").last().is(":visible")){
            $(".next").addClass("off");
        }
    });

    // 공지사항, 독서문화행사, 추천도서
    $(".tab_box > div").css("background-color", "#F0F0F0");
    $(".notice").css({
        "background-color": "#003C83",
        "color": "#FFF"
    });
    $(".notice").click(function(){
        $(".tab").css({
            "background-color": "#F0F0F0",
            "color" : "#000"
        });
        $(this).css({
            "background-color" : "#003C83",
            "color" : "#FFF"
        });
    });
    
    $(".bookEvent").click(function(){
        $(".tab").css({
            "background-color": "#F0F0F0",
            "color" : "#000"
        });
        $(this).css({
            "background-color" : "#003C83",
            "color" : "#FFF"
        });
    });
    $(".recommended").click(function(){
        $(".tab").css({
            "background-color": "#F0F0F0",
            "color" : "#000"
        });
        $(this).css({
            "background-color" : "#003C83",
            "color" : "#FFF"
        });
    });
    // 아이콘 슬라이드
    // $('.icon_slide>div').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // });
});