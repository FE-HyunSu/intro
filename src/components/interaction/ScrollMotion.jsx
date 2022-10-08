import React, { useState, useEffect } from 'react';
import '../../assets/styles/interaction.css';
import ImgLogo from '../../assets/images/logo_ynd_136x38.png';
import ImgSlogan1 from '../../assets/images/img_title_01.png';
import ImgSlogan2 from '../../assets/images/img_title_02.png';
import ImgSlogan3 from '../../assets/images/img_title_03.png';
import ImgNevergiveupTitle from '../../assets/images/img_nevergiveup_title.png';
import ImgAudio from '../../assets/images/img_audio.png';
import ImgYafitTitle from '../../assets/images/img_submain.png';
import ImgYafitTargetTitle from '../../assets/images/img_target_title.png';
import ImgYafitStepTitle from '../../assets/images/img_tit_step_v2.png';
import ImgYafitComment from '../../assets/images/img_expectation_comment.png';
import ImgYafitContent from '../../assets/images/bg_special_benefit_content.png';
import MediaYafit from '../../assets/images/media_riding.mp4';

export default function ScrollMotion () {
    let delayChk = false;
    let oneTimeItem = document.querySelectorAll('.one-time');

    const scrollAction = () =>{
        let positionIndex = window.pageYOffset,
            sectionPoint = document.querySelectorAll('.motion-screen');

        for(let i=0; i < sectionPoint.length > 0; i++){
            if((0 >= (sectionPoint[i].getBoundingClientRect().top)) && (sectionPoint[i].getBoundingClientRect().top) > (sectionPoint[i].offsetHeight * -1)){ // i번째 요소의 top을 기준으로 거리가 음수로 반환, 0보다 작고, ( i번째 요소의 높이 * -1 ) 보다 크다면 'active' 클래스를 부여한다.
                sectionPoint[i].classList.add('active'); //
                if(sectionPoint[i].className.indexOf('type-fixed') != -1){ // 만약 해당 섹션에 'type-fixed' 클래스가 존재한다면(hasClass) 해당 섹션에 'fixed-mode' 클래스를 추가 시킨다.
                    if(0 >= sectionPoint[i].offsetHeight - window.innerHeight + sectionPoint[i].getBoundingClientRect().top ){ // fixed-mode 섹션인 경우 이런 방식으로 처리하는 이유는 섹션 끝지점에서 position:absolute; bottom:0; 적용해야 다음 섹션으로 넘어갈때 자연스럽게 넘어갈 수 있다.
                        sectionPoint[i].classList.add('absolute');
                    } else {
                        sectionPoint[i].classList.remove('absolute');
                    }
                }
                // document.getElementById('scrollPosition').innerHTML = sectionPoint[i].getBoundingClientRect().top + 'px'; // test 용도 사용 완료 후 삭제 예정
            } else {
                sectionPoint[i].classList.remove('active');
            }
        }

        if(positionIndex <= 0){
            for(let i=0; i < oneTimeItem.length; i++){
                oneTimeItem[i].classList.remove('begin');
            }
        }
    }

    const scrollTop = () => {
        document.getElementById('intro').scrollIntoView();
    }

    const scrollDelay = (sec, position) => { // delayChk가 false 일때 페이지 스크롤 lock 처리, sec초 뒤에 풀려나고 원하는 위치로 스크롤 이동 처리.
        delayChk = true;
        document.querySelector('html, body').classList.add('scroll-locked');
        setTimeout(function() {
            document.querySelector('html, body').classList.remove('scroll-locked');
            document.querySelector(position).scrollIntoView({ behavior: 'smooth' });
        }, sec * 1000);
    }
    
    useEffect(() => {
        let intro = document.getElementById('intro');
        let english = document.getElementById('english');
        let yafit = document.getElementById('yafit');
        let scaleScreen = document.getElementById('scaleScreen');

        window.addEventListener('scroll', function(){
            scrollAction();
            
            // intro 섹션에 스크롤 중
            if(intro.className.indexOf('active') != -1){
                if(!delayChk && intro.getBoundingClientRect().top * -1 < window.innerHeight){
                    intro.classList.add('motion-on');
                    scrollDelay(4, '#english');
                } else if(intro.getBoundingClientRect().top >= 0) {
                    intro.classList.remove('motion-on');
                    delayChk = false;
                }
            }

            // english 섹션에 스크롤 중
            if(english.className.indexOf('active') != -1){
                // neverGiveup 영역
                let englishValue = english.getBoundingClientRect().top * -1;
                let neverGiveUp = document.getElementById('neverGiveUp');
                let neverGiveUpTitle = document.getElementById('neverGiveUpTitle');
                let neverGiveUpHenry = document.getElementById('neverGiveUpHenry');
                neverGiveUpTitle.classList.add('begin');
                neverGiveUpHenry.classList.add('begin');
                neverGiveUpTitle.style.left = englishValue + 'px';
                neverGiveUpHenry.style.left = englishValue * -1 + 'px';
                neverGiveUp.style.backgroundPositionY = englishValue * 0.2 + 'px';

                // milchak 영역
                let milchak = document.getElementById('milchak');
                let milchakTitle = document.getElementById('milchakTitle');
                let milchakHenry = document.getElementById('milchakHenry');
                let milchakValue = englishValue - neverGiveUp.offsetHeight + window.innerHeight / 3;
                let milchakTitleValue = milchakValue * 0.3 - 100;
                let milchakHenryValue = milchakValue * -0.3 + 100;
                if(milchakTitleValue > 0) milchakTitleValue = 0;
                if(milchakHenryValue < 0) milchakHenryValue = 0;
                milchakTitle.style.left = milchakTitleValue + '%';
                milchakHenry.style.left = milchakHenryValue + '%';

                // audio 영역
                let audio = document.getElementById('audio');
                let audioImg = document.getElementById('audioImg');
                let audioEffectBg = document.getElementById('audioEffectBg');
                let audioValue = (englishValue - neverGiveUp.offsetHeight - milchak.offsetHeight + window.innerHeight / 5) * 0.2;
                if(audioValue > 0) audioValue = 0;
                audioImg.style.top = audioValue + '%';
                audioEffectBg.style.cssText = 'transform:scale(' + (audioValue * -0.05 + 1) + ');';

                // cheerup 영역
                let cheerupBg = document.getElementById('cheerupBg');
                let cheerupTitle = document.getElementById('cheerupTitle');
                let cheerupValue = englishValue - neverGiveUp.offsetHeight - milchak.offsetHeight - audio.offsetHeight + window.innerHeight / 3;
                let cheerupScale = 4 - cheerupValue * 0.02;
                if(cheerupScale <= 1) cheerupScale = 1;
                cheerupBg.style.backgroundPositionY = englishValue * - 0.2 + 'px';
                cheerupTitle.style.cssText = 'transform:scale(' + cheerupScale + '); opacity:' + cheerupValue + '%;';
            }

            // yafit
            if(yafit.className.indexOf('active') != -1){
                let yafitCycle = document.getElementById('yafitCycle');
                let yafitValue = (yafit.getBoundingClientRect().top * -1) / yafit.offsetHeight * 100;
                let yafitItem = scaleScreen.querySelectorAll('li');
                let yafitScrollValue = yafit.getBoundingClientRect().top * -1;
                if(yafitValue <= 0){
                    yafitValue = 0;
                } else if(yafitValue >= 90){
                    yafitValue = 100;
                    yafitCycle.classList.add('finish');
                } else {
                    yafitCycle.classList.remove('finish');
                }

                yafitCycle.innerHTML = Math.floor(yafitValue * 10) / 10 + 'km';
                yafitCycle.style.left = yafitValue + '%';

                console.log(yafitScrollValue);
                // 유지보수하기 편하도록 스크립트 개선 필요
                if(yafitScrollValue > 15000){
                    for(let i=0; i < yafitItem.length; i++){
                        yafitItem[i].classList.remove('step-prev');
                        yafitItem[i].classList.remove('step-active');
                        yafitItem[i].classList.remove('step-next');
                    }
                    scaleScreen.querySelectorAll('li')[2].classList.add('step-prev');
                    scaleScreen.querySelectorAll('li')[3].classList.add('step-active');

                    if(yafitScrollValue > 18500){
                        scaleScreen.querySelectorAll('.change-step')[0].classList.remove('motion-on');
                        scaleScreen.querySelectorAll('.change-step')[1].classList.remove('motion-on');
                        scaleScreen.querySelectorAll('.change-step')[2].classList.remove('motion-on');
                        scaleScreen.querySelectorAll('.yafit-change')[0].classList.add('motion-end');
                    } else if(yafitScrollValue > 17500){
                        scaleScreen.querySelectorAll('.change-step')[0].classList.remove('motion-on');
                        scaleScreen.querySelectorAll('.change-step')[1].classList.remove('motion-on');
                        scaleScreen.querySelectorAll('.change-step')[2].classList.add('motion-on');
                        scaleScreen.querySelectorAll('.yafit-change')[0].classList.remove('motion-end');
                    } else if(yafitScrollValue > 16500){
                        scaleScreen.querySelectorAll('.change-step')[0].classList.remove('motion-on');
                        scaleScreen.querySelectorAll('.change-step')[1].classList.add('motion-on');
                        scaleScreen.querySelectorAll('.change-step')[2].classList.remove('motion-on');
                        scaleScreen.querySelectorAll('.yafit-change')[0].classList.remove('motion-end');
                    } else if(yafitScrollValue > 15500){
                        scaleScreen.querySelectorAll('.change-step')[0].classList.add('motion-on');
                        scaleScreen.querySelectorAll('.change-step')[1].classList.remove('motion-on');
                        scaleScreen.querySelectorAll('.change-step')[2].classList.remove('motion-on');
                        scaleScreen.querySelectorAll('.yafit-change')[0].classList.remove('motion-end');
                    } else {
                        scaleScreen.querySelectorAll('.change-step')[0].classList.remove('motion-on');
                        scaleScreen.querySelectorAll('.change-step')[1].classList.remove('motion-on');
                        scaleScreen.querySelectorAll('.change-step')[2].classList.remove('motion-on');
                        scaleScreen.querySelectorAll('.yafit-change')[0].classList.remove('motion-end');
                    }

                } else if(yafitScrollValue > 10000){
                    for(let i=0; i < yafitItem.length; i++){
                        yafitItem[i].classList.remove('step-prev');
                        yafitItem[i].classList.remove('step-active');
                        yafitItem[i].classList.remove('step-next');
                    }
                    yafitItem[1].classList.add('step-prev');
                    yafitItem[2].classList.add('step-active');
                    yafitItem[3].classList.add('step-next');
                    if(yafitScrollValue > 12500){
                        scaleScreen.querySelectorAll('.yafit-live')[1].classList.add('motion-on');
                        scaleScreen.querySelectorAll('.yafit-live')[0].classList.remove('motion-on');
                    } else if(yafitScrollValue > 10500){
                        scaleScreen.querySelectorAll('.yafit-live')[0].classList.add('motion-on');
                        scaleScreen.querySelectorAll('.yafit-live')[1].classList.remove('motion-on');
                    } else {
                        scaleScreen.querySelectorAll('.yafit-live')[0].classList.remove('motion-on');
                        scaleScreen.querySelectorAll('.yafit-live')[1].classList.remove('motion-on');
                    }
                } else if(yafitScrollValue > 5000){
                    for(let i=0; i < yafitItem.length; i++){
                        yafitItem[i].classList.remove('step-prev');
                        yafitItem[i].classList.remove('step-active');
                        yafitItem[i].classList.remove('step-next');
                    }
                    yafitItem[0].classList.add('step-prev');
                    yafitItem[1].classList.add('step-active');
                    yafitItem[2].classList.add('step-next');

                    (yafitScrollValue > 7500) ? scaleScreen.querySelectorAll('.black-circle')[0].classList.add('motion-on') : scaleScreen.querySelectorAll('.black-circle')[0].classList.remove('motion-on');
                    (yafitScrollValue > 8000) ? scaleScreen.querySelectorAll('.green-circle')[0].classList.add('motion-on') : scaleScreen.querySelectorAll('.green-circle')[0].classList.remove('motion-on');

                } else if(yafitScrollValue >= 0){
                    for(let i=0; i < yafitItem.length; i++){
                        yafitItem[i].classList.remove('step-prev');
                        yafitItem[i].classList.remove('step-active');
                        yafitItem[i].classList.remove('step-next');
                    }
                    yafitItem[0].classList.add('step-active');
                    yafitItem[1].classList.add('step-next');

                    (yafitScrollValue > 2000) ? scaleScreen.querySelectorAll('.yafit-intro')[0].classList.add('next-scene') : scaleScreen.querySelectorAll('.yafit-intro')[0].classList.remove('next-scene');
                }
            }
        });
        
        return () => {
            window.removeEventListener('scroll', scrollAction);
        }
    })

    return (
        <>
            <section className="motion-screen type-fixed" id="intro">
                <div className="fixed-area">
                    <img src={ImgLogo} alt="야나두" className="intro-logo" />
                    <div className="slogan-box">
                        <img src={ImgSlogan1} alt="야" className="slogan-01" />
                        <img src={ImgSlogan2} alt="너두" className="slogan-02" />
                        <img src={ImgSlogan3} alt="할수있어" className="slogan-03" />
                    </div>
                </div>
            </section>
            <section className="motion-screen" id="english">
                <div className="scroll-motion-box" id="neverGiveUp">
                    <h2 id="neverGiveUpTitle" className="one-time"><img src={ImgNevergiveupTitle} alt="150만 회원 돌파 기념 78% 할인" /></h2>
                    <div id="neverGiveUpHenry" className="one-time"></div>
                </div>
                <div className="scroll-motion-box" id="milchak">
                    <h2 id="milchakTitle">90일에 끝내는 초밀착개인과외</h2>
                    <div id="milchakHenry"></div>
                </div>
                <div className="scroll-motion-box" id="audio">
                    <div className="audio-price-col">
                        <dl>
                            <dt id="audioImg">
                                <img src={ImgAudio} alt="" />
                            </dt>
                            <dd id="audioEffectBg">
                                <span className="motion-effect-1"></span>
                                <span className="motion-effect-2"></span>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="scroll-motion-box" id="cheerupBox">
                    <h2 id="cheerupTitle">야 너도 기부 할수있어</h2>
                    <div id="cheerupBg"></div>
                </div>
            </section>
            <section className="motion-screen" id="yafit" style={{"height":"20000px"}}>
                <div className="intro-cover"></div>
                <div className="fixed-area">
                    <div className="scale-screen" id="scaleScreen">
                        <ul>
                            <li className="step-active">
                                <div className="yafit-intro"></div>
                                <div className="yafit-intro-title">
                                    <img src={ImgYafitTitle} alt="" />
                                </div>
                            </li>
                            <li className="seep-next">
                                <div className="yafit-info">
                                    <div className="circle-wrap">
                                        <div className="black-circle">
                                            <p>야핏 사이클 회원 중 매일 <br/>운동하는 비율</p>
                                            <p><strong> 70.2</strong></p>
                                            <p><span>11/1 ~ 11/30 누적 설치 수 대비 DAU 기준</span></p>
                                        </div>
                                        <div className="green-circle">
                                            <p>우리나라 국민 중<br/> 매일 운동하는 비율</p>
                                            <p><strong>4.6</strong></p>
                                            <p><span>문화체육관광부<br/>'2012국민생활체육<br/>참여실체조사'</span></p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="yafit-live">
                                    <div className="video-box">
                                        <h2>당신은 이제 매일 이 사이클에<br/>앉게 될 겁니다</h2>
                                        <p>동기부여 3단계를 바탕으로 설계 돼<br/>2시간이 훌쩍 지나버리는 꿀잼 가상 라이딩</p>
                                        <video autoPlay muted loop>
                                            <source src={MediaYafit} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                                <div className="yafit-live">
                                    <div className="img-box">
                                        <h2>수백명이 함께 달리는 신개념 홈 트레이닝<br/><em>야핏 사이클</em></h2>
                                        <p>와디즈 오픈 40분만에 1억 펀딩 돌파!<br/>그랜드 슬램 달성</p>
                                        <img src={ImgYafitContent} alt=""/>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="yafit-change">
                                    <div className="change-step">
                                        <img src={ImgYafitTargetTitle} style={{"marginTop" : "3em"}} alt="" />
                                    </div>
                                    <div className="change-step">
                                        <img src={ImgYafitStepTitle} alt="" />
                                    </div>
                                    <div className="change-step">
                                        <img src={ImgYafitComment} style={{"width":"520px"}} alt="" />
                                    </div>
                                </div>
                                <div className="end-box">
                                    <button type="button" onClick={scrollTop}>처음으로 가기</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="load">
                        <span className="cycle-move" id="yafitCycle">0%</span>
                        <em>마우스 휠을 움직여 사이클을 움직여 보세요</em>
                    </div>
                </div>
            </section>
        </>
    )
}