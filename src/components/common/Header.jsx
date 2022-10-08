import React, { useState, useEffect } from 'react';
import * as common from '../../js/common';
import HeaderData from '../../data/HeaderData.json';
import MbtiData from '../../data/QuizStepResultData.json';
import hsPackage from 'hsmotion';

export default function Header() {
  const [isActive, setActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const ToggleClass = () => {
    setActive(!isActive);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scollTop;

    if (scrollPosition >= 0) {
      document.getElementById('root').classList.add('header-fixed');
    } else {
      document.getElementById('root').classList.remove('header-fixed');
    }
  };

  const reSetIntro = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('mbti');
    window.location.href = '/intro/#/';
  };

  const mbtiInfo =
    MbtiData && MbtiData.filter((list) => list.resultType === localStorage.getItem('mbti'));

  useEffect(() => {
    let mbti = localStorage.getItem('mbti');
    let name = localStorage.getItem('userName');

    if (mbti === '' || name === '' || mbti === undefined || name === undefined) {
      reSetIntro();
    }

    window.addEventListener('scroll', handleScroll);
    document.getElementById('mbti').classList.add(mbti);
    document.getElementById('name').innerText = name;

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isActive ? 'active' : null}>
        <div className="header-box">
          <h1>
            <a href="/intro/">
              <em>K</em>
              <span>IM</span>
              <em>H</em>
              <span>YUN</span>
              <em>S</em>
              <span>U</span>
            </a>
          </h1>
          <nav>
            <ul>
              {HeaderData &&
                HeaderData.map((item, index) => {
                  return (
                    <li key={index}>
                      {item.linkType === 'link' ? (
                        <a href={item.link}>{item.menuName}</a>
                      ) : item.linkType === 'scroll' ? (
                        <button
                          type="button"
                          onClick={() => hsPackage.scrollMove(item.tagName, 15)}
                        >
                          {item.menuName}
                        </button>
                      ) : item.linkType === 'blank' ? (
                        <a href={item.link} target="_blank">
                          {item.menuName}
                        </a>
                      ) : null}
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </header>
      <section className="profile-card">
        <strong id="mbti"></strong>
        <span>
          {mbtiInfo[0].subTitle}
          <br />
          <em id="name"></em>님<br />
          방문 감사합니다
        </span>
        <button type="button" onClick={reSetIntro}>
          다시 설정하기
        </button>
      </section>
    </>
  );
}
