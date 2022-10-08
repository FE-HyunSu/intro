import React from 'react';
import '../../../assets/styles/aptitude.scss';

export default function AptitudeStart (props) {
    const pageMoveStep = () => {
        props.getPageType('step');
    }

    return (
        <>
            <div className="aptitude-col">
                <div className="inner-col">
                    <div className="begin-box">
                        <dl>
                            <dt>나의 라이프스타일로<br/><em>딱 맞는 적성</em>을 찾아보세요</dt>
                            <dd>
                                <p>8가지 질문으로 내게 딱 맞는<br/>야나두 커리큘럼을 추천해드릴게요.</p>
                                <button type="button" onClick={pageMoveStep}>적성 테스트 시작하기</button>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}