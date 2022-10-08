import React, { useState, useEffect }  from 'react';
import '../../../assets/styles/aptitude.scss';
import AptitudeTestData from './AptitudeData.json';

export default function AptitudeStep (props) {
    const [step, setStep] = useState(0);
    const [stepResult, setStepResult] = useState([]);
    
    const nextStep = (e) => {
        setStepResult(stepResult => [...stepResult, e.target.value]); // 선택지를 선택할때마다 stepResult에 배열로 담아보자
        setStep(step + 1);
    }

    useEffect(() => {
        let stepTitle = document.querySelector('.step-title');
        let stepItem = document.querySelectorAll('.step-item');

        if(step < AptitudeTestData.length){ // 마지막 문제인지 체크, 마지막 문제라면 결과페이지로 이동
            document.querySelector('.step-progress').childNodes[0].style.width = ((step + 1) / AptitudeTestData.length) * 100 + '%'; // 상단 progress-bar 진행률 표기
            stepTitle.classList.remove('active'); // 타이틀 active 리셋 (등장 motion 목적)

            for(let i=0; i < stepItem.length; i++){ // 라디오 , active 리셋
                stepItem[i].disabled = true; // 선택지 disabled 처리, 찰나의 연속 선택을 방지
                stepItem[i].checked = false; // 선택지 checked 해제 (다음문제 초기화)
                stepItem[i].classList.remove('active');

                setTimeout(function() { // 순차적으로 모션 발생되도록 (0.3 x i)초의 간격으로 적용 
                    stepItem[i].disabled = false;
                    stepTitle.classList.add('active');
                    stepItem[i].classList.add('active');
                }, 300 * i);
            }
        } else {
            props.getPageType('result'); // 결과페이지로 이동
            props.getEndResult(stepResult); // 결과값 부모 컴포넌트로 전달
        }
    })

    return (
        <>
            <div className="aptitude-col">
                <div className="inner-col">
                    <div className="step-box">
                        {AptitudeTestData &&
                            AptitudeTestData.filter((item, index) => index === step).map((item, index) =>
                                <dl key={index}>
                                    <dt className={`step-title ` + item.imgCategory}>
                                        {item.question.split('\n').map((content, index) => (<strong key={index}>{content}</strong>))}
                                    </dt>
                                    <dd>
                                        {item.option.map((sub, subIndex) => (
                                            <label key={subIndex}>
                                                <input type="radio" name={`step` + (step + 1)} value={sub.value} className="step-item" onChange={nextStep} />
                                                <strong>{sub.content}</strong>
                                            </label>
                                        ))}
                                    </dd>
                                </dl>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="step-progress"><span></span></div>
        </>
    )
}