import React, { useEffect } from 'react';
import hsPackage from 'hsmotion';

export default function MBTIStart(props) {
  const pageMoveStep = () => {
    document.querySelector('.mbti-col').classList.add('mbti-start');
    setTimeout(function () {
      props.getPageType('step');
    }, 500);
  };

  useEffect(() => {
    document.querySelector('.mbti-col').classList.add('active');
  }, []);

  return (
    <>
      <section className="mbti-col start">
        <div className="inner-col">
          <div className="begin-box">
            <dl>
              <dt>
                <span></span>1분 MBTI
              </dt>
              <dd>
                <p>
                  <span>4문항만 답해주시면 됩니다.</span>
                  <span>시작 버튼을 눌러주세요.</span>
                </p>
                <button type="button" onClick={pageMoveStep}>
                  시작!
                </button>
              </dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
