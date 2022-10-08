import React, { useState } from 'react';
import MBTIStart from './MBTIStart';
import MBTIStep from './MBTIStep';
import MBTIResult from './MBTIResult';
import '../../assets/styles/mbti.scss';

export default function MBTIMain() {
  const [pageType, setPageType] = useState('start');
  const [endResult, setEndResult] = useState([]);

  const getPageType = (type) => {
    setPageType(type);
  };

  const getEndResult = (result) => {
    setEndResult(result);
  };

  return (
    <>
      {pageType === 'start' ? (
        <MBTIStart getPageType={getPageType} />
      ) : pageType === 'step' ? (
        <MBTIStep getPageType={getPageType} getEndResult={getEndResult} />
      ) : pageType === 'result' ? (
        <MBTIResult getPageType={getPageType} resultList={endResult} />
      ) : (
        getPageType('start')
      )}
    </>
  );
}
