'use strict';

window.onload = function(e){
    let icons = 14;
    let now = 0;
    let position = -200;
    // 아이콘 작은 박스
    let icon = document.querySelectorAll('.icon_slide>div');

    // 아이콘 초기 위치
    setStarPosition();
        // setPosition(position, now);
    // 왼쪽 버튼 클릭시
    let btn_left = document.querySelector('.btn_left');
    btn_left.addEventListener('click', function(){
        if(now == 0){
            now = icons;
        }else{
            now--;
        }
        // position -= 200;
        setPosition(position, now);
    });

    // 오른쪽 버튼 클릭시
    let btn_right = document.querySelector('.btn_right');
    btn_right.addEventListener('click', function(){
        if(icons == now){
            now = 0;
        }else{
            now++;
        }
        // position += 200;
        setPosition(position, now);
    });

    //초기 포지션
    function setStarPosition(){
        let pos = 0;
        for(let i=0; i < icons; i++){
            if(i == 0){
                icon[i].style.left = pos + "px";
            }else{
                icon[i].style.left = (pos += 200) + "px";
            }
        }
    }
    // 아이콘 위치포지션 주기
    function setPosition(position, now){
        for(let i = now; i < icons; i++){
            if(i == 0){
                icon[i].style.left = position + "px";
            }else{
                icon[i].style.left = (position += 200) + "px";
            }
        }
        for(let i = 0; i < now; i++){
                icon[i].style.left = (position += 200) + "px";
        }
        
    }
}