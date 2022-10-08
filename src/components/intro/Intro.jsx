import React, { useEffect } from 'react';
import * as common from '../../js/common';
import '../../assets/styles/common.scss';
import '../../assets/styles/intro.scss';

export default function Intro() {
  let delayCheck = false;
  let loginCheck = false;

  const validation = (e) => {
    let userName = document.getElementById('userName').value;
    let btnJoin = document.getElementById('btnJoin');

    e.keyCode == 13
      ? application()
      : userName.length > 1
      ? btnJoin.classList.add('active')
      : btnJoin.classList.remove('active');
  };

  const application = () => {
    let userName = document.getElementById('userName').value;
    let introCol = document.querySelector('.intro-col');

    if (delayCheck) {
      return false;
    } else if (userName.length < 2) {
      delayCheck = true;
      alert('2자 이상 10자 미만으로 입력해 주세요');
      delayCheck = false;
    } else {
      delayCheck = true;
      introCol.classList.add('motion-last');
      setTimeout(function () {
        delayCheck = false;
        localStorage.setItem('userName', userName);
        window.location.href = '/intro/#/begin';
      }, 1000);
    }
  };

  const loginChecking = () => {
    let userName = localStorage.getItem('userName');
    let mbti = localStorage.getItem('mbti');
    if (userName === '' || mbti === '' || userName === null || mbti === null) {
      loginCheck = false;
    } else {
      loginCheck = true;
    }
  };

  const skipIntro = () => {
    loginCheck ? (window.location.href = '/intro/#/main') : alert('방문 이력이 없어요ㅠㅠ');
  };

  useEffect(() => {
    document.querySelector('.intro-col').classList.add('active');
    loginChecking();
    common.windowHeightFull();
    loginCheck
      ? (document.getElementById('btnSkip').style.display = 'block')
      : (document.getElementById('btnSkip').style.display = 'none');
  }, []);

  return (
    <>
      <section className="intro-col flex-center">
        <div className="inner-full">
          <div className="icon-khs">
            <dl>
              <dt>
                <span className="icon-hear"></span>
                <span className="icon-eye"></span>
                <span className="icon-mouth"></span>
              </dt>
              <dd>
                <span></span>
              </dd>
            </dl>
          </div>
          <div className="who-box">
            <div className="motion-box">
              <p>안녕하세요,</p>
              <p>제 홈페이지에 방문해 주셔서 감사해요</p>
              <p>당신의 이름을 입력해주세요</p>
              <input
                type="text"
                id="userName"
                minLength="2"
                maxLength="10"
                placeholder="2자 이상 10자 미만"
                onKeyUp={(e) => validation(e)}
              />
              <button type="button" id="btnJoin" onClick={application}>
                입장
              </button>
              <button type="button" className="active" id="btnSkip" onClick={skipIntro}>
                메인으로
              </button>
            </div>
          </div>
        </div>
        <span className="deco-top-left"></span>
        <span className="deco-top-right"></span>
        <span className="deco-bottom-left"></span>
        <span className="deco-bottom-right"></span>
      </section>
    </>
  );
}
