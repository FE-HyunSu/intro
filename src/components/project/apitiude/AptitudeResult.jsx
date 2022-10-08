import React, { useState, useEffect }  from 'react';
import '../../../assets/styles/aptitude.scss';
import AptitudeResultData from './AptitudeResultData.json';

export default function AptitudeResult ({props, resultList}) {
    const [filterResult, setFilterResult] = useState('');
    let userName = localStorage.getItem('userName');

    const resultView = () => {
        setTimeout(function() { 
            document.querySelector('.aptitude-col').classList.add('result-view');
            console.log('결과로직 임시 처리 적용 \n 1번 == 2 일때 -> 그냥 다 들어봐요 \n 2번 == 2 일때 -> 지금부터 찾아봐요 \n 3번 == 2 일때 -> 커리어 코스 \n 4번 == 2 일때 -> 영어 코스 \n 5번 == 2 일때 -> 머니 코스 \n 6번 == 2 일때 -> 야핏'); 

            if(resultList[0] == 2){ 
                setFilterResult('result-all');
            } else if(resultList[1] == 2){
                setFilterResult('result-find');
            } else if(resultList[2] == 2){
                setFilterResult('result-career');
            } else if(resultList[3] == 2){
                setFilterResult('result-english');
            } else if(resultList[4] == 2){
                setFilterResult('result-money');
            } else if(resultList[5] == 2){
                setFilterResult('result-yafit');
            } else { 
                setFilterResult('result-all');
            }

            document.querySelector('.result-content').innerHTML = document.querySelector('.result-content').textContent;
            for(let i = 0; i < document.querySelectorAll('.user-name').length; i++){
                document.querySelectorAll('.user-name')[i].innerHTML = userName;
            }
        }, 3000);
    }

    useEffect(() => {
        resultView();
    }, [])
    return (
        <>
            <div className="aptitude-col">
                <div className="inner-col">
                    <div className="progress-box">
                        <span className="progress-item">결과 확인 중</span>
                    </div>
                    {AptitudeResultData &&
                        AptitudeResultData.filter(item => item.resultType === filterResult).map((item, index) =>
                        <div className="result-box" key={index}>
                            <dl>
                                <dt>
                                    {item.resultTitle}<br/>
                                    <strong className={item.resultType}>{item.courseName}</strong>
                                </dt>
                                <dd>
                                    <p className="result-content">{item.resultContent}</p>
                                    <button type="button" onClick={() => window.close()}>
                                        <span>{item.linkText}</span>
                                    </button>
                                </dd>
                            </dl>
                        </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}