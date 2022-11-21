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
    // 4번째 라인 왼쪽 이미지 슬라이드
    $(".img2 img").eq(0).siblings().css("display","none");
    $(".prev2").addClass("off");
    $(".prev2").click(function(){
        if(!$(".img2 img").first().is(":visible")){
            $(".img2 img:visible").hide().prev("img").fadeIn("slow");
            $(".next2").removeClass("off");
        }
        if($(".img2 img").first().is(":visible")){
            $(".prev2").addClass("off");
        }
    });
    $(".next2").click(function(){
        if(!$(".img2 img").last().is(":visible")){
            $(".img2 img:visible").hide().next("img").fadeIn("slow");
            $(".prev2").removeClass("off");
        }
        if($(".img2 img").last().is(":visible")){
            $(".next2").addClass("off");
        }
    });

    // 공지사항, 독서문화행사, 추천도서
    $(".tab_box > div").eq(0).css("background-color", "#F0F0F0");
    $(".tab_box > div").eq(1).css("background-color", "#F0F0F0");
    $(".tab_box > div").eq(2).css("background-color", "#F0F0F0");
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

    // 이달의책, 원북원부산, 도서관행사(갤러리)
    $(".tab_box2 > div").eq(0).css("background-color", "#F0F0F0");
    $(".tab_box2 > div").eq(1).css("background-color", "#F0F0F0");
    $(".tab_box2 > div").eq(2).css("background-color", "#F0F0F0");
    $(".book").css({
        "background-color": "#003C83",
        "color": "#FFF"
    });
    $(".book").click(function(){
        $(".tab2").css({
            "background-color": "#F0F0F0",
            "color" : "#000"
        });
        $(this).css({
            "background-color" : "#003C83",
            "color" : "#FFF"
        });
    });
    
    $(".busan").click(function(){
        $(".tab2").css({
            "background-color": "#F0F0F0",
            "color" : "#000"
        });
        $(this).css({
            "background-color" : "#003C83",
            "color" : "#FFF"
        });
    });
    $(".event").click(function(){
        $(".tab2").css({
            "background-color": "#F0F0F0",
            "color" : "#000"
        });
        $(this).css({
            "background-color" : "#003C83",
            "color" : "#FFF"
        });
    });
});