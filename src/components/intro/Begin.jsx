import React, { useEffect } from 'react';
import * as common from '../../js/common';
import '../../assets/styles/common.scss';
import '../../assets/styles/begin.scss';

import img_01 from '../../assets/images/intro/img_INFP.png';
import img_02 from '../../assets/images/intro/img_ENFP.png';
import img_03 from '../../assets/images/intro/img_INFJ.png';
import img_04 from '../../assets/images/intro/img_ENFJ.png';
import img_05 from '../../assets/images/intro/img_INTJ.png';
import img_06 from '../../assets/images/intro/img_ENTJ.png';
import img_07 from '../../assets/images/intro/img_INTP.png';
import img_08 from '../../assets/images/intro/img_ENTP.png';
import img_09 from '../../assets/images/intro/img_ISFP.png';
import img_10 from '../../assets/images/intro/img_ESFP.png';
import img_11 from '../../assets/images/intro/img_ISTP.png';
import img_12 from '../../assets/images/intro/img_ESTP.png';
import img_13 from '../../assets/images/intro/img_ISFJ.png';
import img_14 from '../../assets/images/intro/img_ESFJ.png';
import img_15 from '../../assets/images/intro/img_ISTJ.png';
import img_16 from '../../assets/images/intro/img_ESTJ.png';

export default function Begin() {
  let motionTimer = '';
  let delayCheck = false;

  const introContentList = [
    {
      colorCode: '#e7deea',
      imageURL: img_01,
    },
    {
      colorCode: '#e8f278',
      imageURL: img_02,
    },
    {
      colorCode: '#74caa6',
      imageURL: img_03,
    },
    {
      colorCode: '#e7deea',
      imageURL: img_04,
    },
    {
      colorCode: '#d09eb8',
      imageURL: img_05,
    },
    {
      colorCode: '#b2859d',
      imageURL: img_06,
    },
    {
      colorCode: '#daeaf0',
      imageURL: img_07,
    },
    {
      colorCode: '#76cccc',
      imageURL: img_08,
    },
    {
      colorCode: '#f8edd6',
      imageURL: img_09,
    },
    {
      colorCode: '#debca5',
      imageURL: img_10,
    },
    {
      colorCode: '#e3c92a',
      imageURL: img_11,
    },
    {
      colorCode: '#e4ca2b',
      imageURL: img_12,
    },
    {
      colorCode: '#fd9a07',
      imageURL: img_13,
    },
    {
      colorCode: '#e2af3b',
      imageURL: img_14,
    },
    {
      colorCode: '#99c46c',
      imageURL: img_15,
    },
    {
      colorCode: '#a73d02',
      imageURL: img_16,
    },
  ];

  let userName =
    localStorage.getItem('userName') === '' || localStorage.getItem('userName') === null
      ? '방문자'
      : localStorage.getItem('userName');

  const introMotion = (sec) => {
    let introItem = document.querySelectorAll('.intro-item');
    let beginCol = document.querySelector('.begin-col');
    let i = 0;
    introItem[i].style.display = 'block';
    beginCol.style.backgroundColor = introItem[i].style.color;
    i = 1;

    motionTimer = setInterval(function () {
      if (i < introItem.length) {
        introItem[i - 1].style.opacity = 0;
        introItem[i].style.opacity = 1;
        introItem[i].querySelector('img').style.width = '80%';
        beginCol.style.backgroundColor = introItem[i].style.color;
        i++;
      } else if (i == introItem.length) {
        if (i > 0) introItem[i - 1].style.opacity = 0;
        beginCol.classList.add('end-motion');
      } else {
        clearInterval(motionTimer);
      }
    }, sec);
  };

  const application = () => {
    let beginCol = document.querySelector('.begin-col');
    if (delayCheck) {
      alert('잠시 후에 시도해 주세요');
    } else {
      delayCheck = true;
      beginCol.classList.add('motion-last');
      setTimeout(function () {
        delayCheck = false;
        window.location.href = '/intro/#/mbti';
      }, 1000);
    }
  };

  useEffect(() => {
    introMotion(150);
    common.windowHeightFull();
    return () => {
      clearInterval(motionTimer);
    };
  }, []);

  return (
    <>
      <section className="begin-col">
        <ul>
          {introContentList.map((item, idx) => (
            <li key={idx} style={{ color: item.colorCode }} className="intro-item">
              <img src={item.imageURL} alt="" />
            </li>
          ))}
        </ul>
        <div className="last-motion">
          <div className="last-inner">
            <p>
              안녕하세요, <span className="user-name">{userName}</span>
              <br />
              당신에 좀더 알고 싶어요
              <br />
              아래 버튼을 눌러주세요
            </p>
            <span className="last-item"></span>
            <button type="button" onClick={application}>
              시작
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
