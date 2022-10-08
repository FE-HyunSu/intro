import React, { useEffect } from 'react';
import '../../assets/styles/yta.scss';
    
export default function YTA() {
    let checkPoint = false;
    let scrollPosition = 0;


    const scrollMove = () => {      
        let ytaIntroCol = document.querySelector('.yta-intro-col'); // 전체 섹션
        let ytaFilter = document.getElementById('ytaFilter'); // YTA 텍스트 구멍 필터 이미지
        let maxSize = 22; // 필터 초기 사이즈
        let ytaMotionItem1 = document.getElementById('ytaMotionItem1'); // 모션 아이템 1
        let ytaMotionItem2 = document.getElementById('ytaMotionItem2'); // 모션 아이템 2
        let bgStarS = document.getElementById('bgStarS'); // 모션 아이템 3
        let bgStarM = document.getElementById('bgStarM'); // 모션 아이템 4
        let bgStarL = document.getElementById('bgStarL'); // 모션 아이템 5
        
        scrollPosition = ytaIntroCol.getBoundingClientRect().top * -1 / (ytaIntroCol.offsetHeight - window.innerHeight);

        (scrollPosition > 0) ? document.getElementById('root').classList.add('fixed') : document.getElementById('root').classList.remove('fixed');

        if(scrollPosition > 1) {
            ytaIntroCol.classList.add('absolute-mode');
            ytaIntroCol.classList.remove('fixed-mode');
        } else if(checkPoint == false){
            checkPoint = true;
            ytaIntroCol.classList.remove('absolute-mode');
            ytaIntroCol.classList.add('fixed-mode');
            ytaFilter.style.backgroundColor = ((scrollPosition * 100 > 96) ? '#000' : 'transparent' );
            ytaFilter.style.transform = 'scale(' + ((maxSize - maxSize * scrollPosition) > 1 ? maxSize - maxSize * scrollPosition : 1 ) + ')';
            ytaMotionItem1.style.backgroundSize = ((100 - scrollPosition * 20) > 100 ? 100 : 100 - scrollPosition * 20) + '%';
            ytaMotionItem2.style.backgroundSize = ((100 - scrollPosition * 40) > 100 ? 100 : 100 - scrollPosition * 40) + '%';
            bgStarS.style.backgroundPositionX = scrollPosition * 30 + 'rem';
            bgStarM.style.backgroundPositionX = scrollPosition * 60 + 'rem';
            bgStarL.style.backgroundPositionX = scrollPosition * 90 + 'rem';
            (scrollPosition * 100 > 88) ? ytaFilter.classList.add('active') : ytaFilter.classList.remove('active');
            
            checkPoint = false;
        }
    }

    const introSlideEnd = () => {
        window.scrollTo({top:document.querySelector('.yta-intro-col').offsetHeight, behavior:'smooth'});
    }
    
    window.addEventListener('scroll', function(){
        scrollMove();
    });
    
    useEffect(() => {
        scrollMove();
    }, []);

    return (
        <>
            <div className="yta-intro-col interaction-check">
                <div className="intro-bg" id="ytaFilter">
                    <button type="button" onClick={introSlideEnd}>다음</button>
                    <p>당신의 잠재력 부스터 Yanadoo Traning Academy</p>
                </div>
                <div className="intro-content">
                    <span id="bgStarS"></span>
                    <span id="bgStarM"></span>
                    <span id="bgStarL"></span>
                    <span id="ytaMotionItem1"></span>
                    <span id="ytaMotionItem2"></span>
                </div>
            </div>
            {/* <div className="test-col bg-1">
                <div className="inner-col">
                </div>
            </div>
            <div className="test-col bg-2">
                <div className="inner-col">
                </div>
            </div>
            <div className="test-col bg-3">
                <div className="inner-col">
                </div>
            </div>
            <div className="test-col bg-4">
                <div className="inner-col">
                </div>
            </div>
            <div className="test-col bg-5">
                <div className="inner-col">
                </div>
            </div> */}
        </>
    )
};