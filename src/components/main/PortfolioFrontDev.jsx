import React, { useState, useEffect } from 'react';
import '../../assets/styles/common.scss';
import '../../assets/styles/main.scss';

import ModalPopup from '../modal/ModalPopup'; // Modal component
import ModalTest from '../modal/ModalTest'; // Modal contents test component
import ModalTest2 from '../modal/ModalTest2';
import Aptitude from '../project/apitiude/AptitudeMain';

import img_ynd_intro from '../../assets/images/main/img_ynd_intro.jpg';
import img_ticketing from '../../assets/images/main/img_ticketing.png';
import img_ynd_easterEgg from '../../assets/images/img_ynd_easter_egg.png';
import img_npmPackage from '../../assets/images/main/img_npmpackage.png';
import img_spooner from '../../assets/images/main/img_spooner.png';
import img_bettingspoon from '../../assets/images/main/img_bettingspoon.png';
import img_ssaklog_lnb from '../../assets/images/main/img_ssaklog_lnb.png';
import img_ynd_yu from '../../assets/images/main/img_ynd_yu.png';
import img_aptitude from '../../assets/images/main/img_aptitude.png';
import img_ssaklog from '../../assets/images/main/img_ssaklog.png';
import img_tensorflow from '../../assets/images/main/img_tensorflow.png';
import img_d3chart from '../../assets/images/main/img_d3chart.png';
import img_hookjobs from '../../assets/images/main/img_hookjobs.png';

let modalTarget = '';
const commingSoon = () => {
  alert('업데이트 예정입니다.');
};

export default function PortfolioFrontDev() {
  // modal Open 여부 useState
  const [isOpenModal, setIsOpenModal] = useState(false);
  // 해당 컴포넌트에 팝업이 n개일때 modalControl 함수를 통해 원하는 팝업을 노출 시킴
  const modalControl = (modalName) => {
    modalTarget = modalName;
    setIsOpenModal(true);
  };

  const motionList = [
    {
      mainTitle: 'HookJobs (진행중)',
      keyword: '#React, #NextJS, #Hook',
      subTitle: 'React Hook 스터디 페이지',
      pageURL: 'https://sage-basbousa-110816.netlify.app/',
      linkType: 'blank',
      imageURL: img_hookjobs,
    },
    {
      mainTitle: 'D3Chart',
      keyword: '#D3js',
      subTitle: 'D3js를 활용, 입력받은 데이터로 그래프를 그려보자.',
      pageURL: '/intro/project/chart/chart.html',
      linkType: 'blank',
      imageURL: img_d3chart,
    },
    {
      mainTitle: 'HSBOT',
      keyword: '#TensorFlowjs',
      subTitle: 'TensorFlowjs를 활용, 학습하는 HSBOT을 만들어보자.',
      pageURL: '/intro/project/hsbot/index.html',
      linkType: 'blank',
      imageURL: img_tensorflow,
    },
    {
      mainTitle: 'SSAKLOG (진행중)',
      keyword: '#NEXTJS, #Typescript',
      subTitle: '토이프로젝트 SSAKLOG',
      pageURL: 'https://ssaklog.netlify.app/',
      linkType: 'blank',
      imageURL: img_ssaklog,
    },
    {
      mainTitle: 'SSAKLOG 문서정리 (진행중)',
      keyword: '#NEXTJS, #Typescript',
      subTitle: '토이프로젝트 SSAKLOG',
      pageURL:
        'https://lime-textbook-f24.notion.site/c2bcb6f0401f4267847f1b621f7d8c24?v=6dfbfaa5ea4145ebacce1c18d8953f52',
      linkType: 'blank',
      imageURL: img_ssaklog,
    },
    {
      mainTitle: 'hsMotion Package module',
      keyword: '#프론트개발',
      subTitle: 'hsMotion Package 개발 및 NPM 배포',
      pageURL: 'https://www.npmjs.com/package/hsmotion',
      linkType: 'blank',
      imageURL: img_npmPackage,
    },
    {
      mainTitle: 'Yanadoo EasterEgg 페이지 개발',
      keyword: '#프론트개발, #모션',
      subTitle: '그룹 순서 Random, 리더 멤버 고정, background 별똥별 Random, 캐릭터 아이콘 Random',
      pageURL: '/intro/project/yndEasterEgg/yndEasterEgg.html',
      linkType: 'blank',
      imageURL: img_ynd_easterEgg,
    },
    {
      mainTitle: 'Yanadoo University',
      keyword: '#퍼블리싱, #모션',
      subTitle: '야나두 입학소개 페이지',
      pageURL: '/intro/project/yndYanadooUniversity/yndYanadooUniversity.html',
      linkType: 'blank',
      imageURL: img_ynd_yu,
    },
    {
      mainTitle: 'Yanadoo 적성검사',
      keyword: '#프론트개발, #React',
      subTitle: '적성검사',
      pageURL: '/intro/#/Aptitude',
      linkType: 'blank',
      imageURL: img_aptitude,
    },
    {
      mainTitle: 'Ticketing Event Motion',
      keyword: '#모션',
      subTitle: '티켓팅 이벤트 인트로 모션 (css)',
      pageURL: '/intro/project/ticketing/ticketing.html',
      linkType: 'blank',
      imageURL: img_ticketing,
    },
    {
      mainTitle: 'Spooner NFT',
      subTitle: 'website 반응형 publishing, 환율 계산식 함수 적용',
      keyword: '#퍼블리싱',
      pageURL: 'https://sosu1008.github.io/spooner/spoonerNFT/src/index.html',
      linkType: 'blank',
      imageURL: img_spooner,
    },
    {
      mainTitle: 'BettingSpoon',
      subTitle: 'website 반응형 publishing',
      keyword: '#퍼블리싱',
      pageURL: 'https://sosu1008.github.io/spooner/bettingSpoon/src/index.html',
      linkType: 'blank',
      imageURL: img_bettingspoon,
    },
    {
      mainTitle: 'SSAKLOG LNB 개발',
      subTitle: '블로그 LNB 편집 드래그 기능 개발',
      keyword: '#프론트개발, #모션',
      pageURL: '/intro/project/ssaklogCategory/ssaklogCategory.html',
      linkType: 'blank',
      imageURL: img_ssaklog_lnb,
    },
    {
      mainTitle: 'Scroll event Sample (PC)',
      keyword: '#프론트개발, #모션',
      subTitle: 'Scroll event 활용 야나두 소개 샘플링 페이지 (javascript, css)',
      pageURL: '/intro/project/yndInteraction/yndInteraction.html',
      linkType: 'blank',
      imageURL: img_ynd_intro,
    },
  ];

  return (
    <>
      <section className="main-section interest-col motion-col">
        <div className="inner">
          <h1>프론트 스터디</h1>
          <div className="icon-motion">
            <span></span>
            <span></span>
          </div>
          <div className="play-list">
            {/* <button type='button' onClick={() => modalControl('test1')}>test</button>
            <button type='button' onClick={() => modalControl('test2')}>test2</button>
            <button type='button' onClick={() => modalControl('Aptitude')}>Aptitude</button> */}
            <ul>
              {motionList &&
                motionList.map((item, idx) => (
                  <li key={idx}>
                    {item.linkType === 'blank' ? (
                      <a
                        href={item.pageURL}
                        target="_blank"
                        style={{
                          backgroundImage: 'url(' + item.imageURL + ')',
                        }}
                      >
                        <p>
                          <strong>{item.mainTitle}</strong>
                          <span>{item.keyword}</span>
                          {item.subTitle}
                        </p>
                      </a>
                    ) : item.linkType === 'soon' ? (
                      <button type="button" className="soon" onClick={commingSoon}>
                        <p>
                          <strong>{item.mainTitle}</strong>
                          <span>{item.keyword}</span>
                          {item.subTitle}
                        </p>
                      </button>
                    ) : (
                      <a
                        href={item.pageURL}
                        style={{
                          backgroundImage: 'url(' + item.imageURL + ')',
                        }}
                      >
                        <p>
                          <strong>{item.mainTitle}</strong>
                          <span>{item.keyword}</span>
                          {item.subTitle}
                        </p>
                      </a>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
      {/* open 속성에 modal open 여부를 설정한다. onClseModal 값을 통해 modal close 기능을 구현한다. */}
      <ModalPopup open={isOpenModal} onCloseModal={() => setIsOpenModal(false)}>
        {modalTarget === 'test1' ? (
          <ModalTest />
        ) : modalTarget === 'test2' ? (
          <ModalTest2 />
        ) : modalTarget === 'Aptitude' ? (
          <Aptitude />
        ) : null}
      </ModalPopup>
    </>
  );
}
