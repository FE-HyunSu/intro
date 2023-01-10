import React from 'react';
import '../../assets/styles/common.scss';
import '../../assets/styles/main.scss';

export default function Skill() {
  return (
    <>
      <section className="main-section skill-col">
        <div className="inner">
          <h1>할수있는것</h1>
          <div className="icon-work">
            <div className="icon-gear">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="icon-gear">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="skill-box">
            <ul>
              <li>
                <dl>
                  <dt>
                    <span>&lt;/&gt;</span>
                    <strong>HTML</strong>
                  </dt>
                  <dd>
                    <em>시멘틱 마크업</em>을 기본으로 페이지에서 표현하고자 하는 구조에 대해 먼저
                    생각합니다.
                    <br />
                    <em>유지보수와 확장성을 고려한 코딩</em>을 지향하고, <em>SEO</em>를 통해 다수의
                    사용자들이 접근할 수 있도록 노력합니다.
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <span>CSS</span>
                    <strong>CSS, SCSS</strong>
                  </dt>
                  <dd>
                    <em>Cross Browsing</em>을 고려하며 유지보수에 용이하도록 style 가이드를
                    작성합니다.
                    <br />
                    라이브러리를 사용하지 않고 <em>interaction한 motion</em>을 구현하기 위한 style을
                    지향합니다.
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <span>JS</span>
                    <strong>Javascript</strong>
                  </dt>
                  <dd>
                    <em>Javascript, Jquery를 통한 동적 기능 구현</em>이 가능하며 오픈소스를 활용하여
                    기획, 디자인에서 의도한 기능까지 구현합니다.{' '}
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <span>API</span>
                    <strong>API</strong>
                  </dt>
                  <dd>
                    생성된 API를 <em>GET, POST, PUT, DELETE Method</em>를 통해 기획된 내용을
                    Front단에 적용합니다. Javascript를 통해 필요한 값들을 가공하고, 과도한 API 중복
                    호출을 막기위해 최대한 많은 유저 케이스를 생각하고 예외처리를 적용합니다.
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <span>SPA</span>
                    <strong>Single Page Application</strong>
                  </dt>
                  <dd>
                    <em>React</em> 개발 경험이 있습니다. 해당 포트폴리오 페이지 또한 React로 작업
                    되었습니다.
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <span>D</span>
                    <strong>Design</strong>
                  </dt>
                  <dd>
                    디자인 편집 툴로 <em>Adobe Photoshop, Figma</em> 사용 경험이있고 기획,디자인팀과
                    협업에 문제 없습니다.
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <span>C</span>
                    <strong>형상관리</strong>
                  </dt>
                  <dd>
                    <em>SVN, Git 등 형상관리 시스템 사용</em>에 다수의 경험이 있어 소스관리에
                    어려움이 없습니다.
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <span>E</span>
                    <strong>etc.</strong>
                  </dt>
                  <dd>
                    그 외 <em>Microsoft Office Word, Excel, Power Point</em> 등 사용 가능하며{' '}
                    <em>JIRA, Confluence</em> 협업 툴에 익숙합니다.
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
