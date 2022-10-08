import React, { useState, useEffect } from 'react';
import MbtiResultData from '../../data/QuizStepResultData.json';
import hsPackage from 'hsmotion';

export default function MBTIResult(props, resultList) {
  const [filterResult, setFilterResult] = useState('');

  const resultView = (type) => {
    document.querySelector('.mbti-col').classList.add('result-view');
    setFilterResult(type);
  };

  const reStart = () => {
    props.getPageType('start');
  };

  const moveMain = () => {
    localStorage.setItem('mbti', document.getElementById('mbtiType').innerText);
    window.location.href = '/khs/#/main';
  };

  useEffect(() => {
    resultView(
      props.resultList[0] +
        props.resultList[1] +
        props.resultList[2] +
        props.resultList[3]
    );

    // hsPackage.minHeightFull('.mbti-col');
  }, []);

  return (
    <>
      <div className="mbti-col">
        <div className="inner-col">
          <div className="progress-box">
            <span className="progress-item">결과 확인 중</span>
          </div>
          {MbtiResultData &&
            MbtiResultData.filter(
              (item) => item.resultType === filterResult
            ).map((item, index) => (
              <div className="result-box" key={index}>
                <dl>
                  <dt className={item.resultType}>
                    <strong id="mbtiType">{item.resultType}</strong>
                    {item.subTitle}
                  </dt>
                  <dd>
                    <p className="result-content">{item.resultContent}</p>
                    <button type="button" onClick={moveMain}>
                      완료
                    </button>
                    <span>
                      * 이미지 및 설문 정보 출처 : www.16personalities.com
                    </span>
                    <button
                      type="button"
                      className="btn-text"
                      onClick={reStart}
                    >
                      다시하기
                    </button>
                  </dd>
                </dl>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
