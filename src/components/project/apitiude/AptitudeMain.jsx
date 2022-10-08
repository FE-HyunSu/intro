import React, { useState }  from 'react';
import '../../../assets/styles/aptitude.scss'
import AptitudeStart from './AptitudeStart';
import AptitudeStep from './AptitudeStep';
import AptitudeResult from './AptitudeResult';

export default function AptitudeMain () {
    const [pageType, setPageType] = useState('start');
    const [endResult, setEndResult] = useState([]);
    const getPageType = (type) => {
        setPageType(type);
    }
    const getEndResult = (result) => {
        setEndResult(result);
    }

    return (
        // pageType === 'start' -> 시작 페이지
        // pageType === 'step' -> 질문 페이지
        // pageType === 'result' -> 결과 페이지
        <>
            {pageType === 'start'
            ? <AptitudeStart getPageType={getPageType} /> 
            : pageType === 'step' 
            ? <AptitudeStep getPageType={getPageType} getEndResult={getEndResult} /> 
            : pageType === 'result'
            ? <AptitudeResult getPageType={getPageType} resultList={endResult} /> 
            : getPageType('start')}
        </>
    )
}