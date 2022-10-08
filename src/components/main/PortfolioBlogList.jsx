import React from 'react';
import '../../assets/styles/common.scss';
import '../../assets/styles/main.scss';

import img_scrollmove from '../../assets/images/bloglist/img_scrollmove.jpg';
import img_npmpackage from '../../assets/images/bloglist/img_npmpackage.jpg';
import img_study01 from '../../assets/images/bloglist/img_study_01.png';
import img_swiperreact from '../../assets/images/bloglist/img_swiperreact.jpg';
import img_spooner from '../../assets/images/bloglist/img_spooner.jpg';
import img_browser from '../../assets/images/bloglist/img_browser.jpg';
import img_markup from '../../assets/images/bloglist/img_markup.jpg';
import img_entitycode from '../../assets/images/bloglist/img_entitycode.jpg';
import img_nextjs from '../../assets/images/bloglist/img_nextjs.jpg';
import img_editor from '../../assets/images/bloglist/img_editor.png';
import img_tensorflow from '../../assets/images/bloglist/img_tensorflow.png';
import img_redux from '../../assets/images/bloglist/img_redux.png';

const commingSoon = () => {
  alert('업데이트 예정입니다.');
};

export default function PortfolioBlogList() {
  const motionList = [
    {
      mainTitle: 'Redux 상태관리',
      subTitle: 'React-redux, redux-toolkit 으로 프로젝트에 상태관리 적용.',
      pageURL:
        'https://phase-litter-337.notion.site/React-Redux-Redux-toolkit-e4f4540c1d9049a0a8f461984176d81d',
      linkType: 'blank',
      imageURL: img_redux,
    },
    {
      mainTitle: 'TensorFlowjs',
      subTitle: 'TensorFlowjs를 통해 머신러닝 기술을 적용해보고, 샘플페이지를 만들어 보자.',
      pageURL:
        'https://phase-litter-337.notion.site/TP-HSBOT-TensorFlowjs-aa7ccfb5357f4dceb118b6b5bea0685f',
      linkType: 'blank',
      imageURL: img_tensorflow,
    },
    {
      mainTitle: '[SSAKLOG] 커스텀 에디터 컴포넌트 개발',
      subTitle: 'Contenteditable 커스텀 에디터 컴포넌트 개발',
      pageURL:
        'https://phase-litter-337.notion.site/React-SSAKLOG-91dbffb0c452463d84fb1de89968b91e',
      linkType: 'blank',
      imageURL: img_editor,
    },
    {
      mainTitle: 'NPM Package',
      subTitle: '내가 만든 module을 NPM Package 배포를 통해 사용해 보자.',
      pageURL:
        'https://phase-litter-337.notion.site/FS-NPM-Package-0f9f81e835c94d3c947b6549c92e0183',
      linkType: 'blank',
      imageURL: img_npmpackage,
    },
    {
      mainTitle: '직사각형넓이 구하기',
      subTitle: '프로그래머스 javascript 테스트 코드 작성',
      pageURL: 'https://phase-litter-337.notion.site/Lv-5-d420795320db48b98501ac99b5fd9b95',
      linkType: 'blank',
      imageURL: img_study01,
    },
    {
      mainTitle: 'NextJS',
      subTitle: 'React NextJS 배경 및 장점 설치.',
      pageURL: 'https://phase-litter-337.notion.site/FT-NextJS-e1c1e64485554b1fbe54b02c7540d24c',
      linkType: 'blank',
      imageURL: img_nextjs,
    },
    {
      mainTitle: 'ScrollMove',
      subTitle: 'Cross Browser 이슈 없는 특정위치로 scroll move Javascript 함수 구현.',
      pageURL:
        'https://phase-litter-337.notion.site/JS-ScrollMove-17f6be41332c45d284d25ecf08b1024d',
      linkType: 'blank',
      imageURL: img_scrollmove,
    },
    {
      mainTitle: 'Swiper React Components',
      subTitle: 'swiper 효과를 적용하기 위한 package 고민.',
      pageURL: 'https://phase-litter-337.notion.site/React-swiper-0488e3718405427faa082ce0a60e7a1a',
      linkType: 'blank',
      imageURL: img_swiperreact,
    },
    {
      mainTitle: 'Spooner NFT 작업 회고',
      subTitle: 'Spooner NFT 프로젝트 Front 개발 KPT 회고.',
      pageURL: 'https://mire-diascia-324.notion.site/Spooner-NFT-330a37b6bbf2413a8ec7230d9996e083',
      linkType: 'blank',
      imageURL: img_spooner,
    },
    {
      mainTitle: 'Browser Rendering',
      subTitle: 'Web Browser 구조와 Rendering 과정 이해.',
      pageURL:
        'https://phase-litter-337.notion.site/FE-Browser-Rendering-51b5e49a409f4c9f8e188856f1b75044',
      linkType: 'blank',
      imageURL: img_browser,
    },
    {
      mainTitle: 'Entity Code',
      subTitle: 'Entity Code를 사용해야하는 이유.',
      pageURL:
        'https://phase-litter-337.notion.site/FE-EntityCode-47b39d56f86f44bba2d1f5b61e045f87',
      linkType: 'blank',
      imageURL: img_entitycode,
    },
    {
      mainTitle: 'Markup',
      subTitle: 'Markup 기본 내용 정리.',
      pageURL: 'https://phase-litter-337.notion.site/FE-Markup-ce0ace363d8c49f693ee3f5ea513a7d8',
      linkType: 'blank',
      imageURL: img_markup,
    },
  ];
  return (
    <>
      <section className="main-section interest-col front-col">
        <div className="inner">
          <h1>개인블로그 기록</h1>
          <div className="icon-front">
            <span></span>
            <span></span>
          </div>
          <div className="blog-list">
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
                          {item.subTitle}
                        </p>
                      </a>
                    ) : item.linkType === 'soon' ? (
                      <button type="button" className="soon" onClick={commingSoon}>
                        <p>
                          <strong>{item.mainTitle}</strong>
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
    </>
  );
}
