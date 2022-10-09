import React from 'react';
import '../../assets/styles/common.scss';
import '../../assets/styles/main.scss';

export default function Contact() {
  return (
    <>
      <section className="main-section contact-col">
        <div className="inner">
          <h1>연락방법</h1>
          <div className="icon-contact">
            <span></span>
          </div>
          <div className="icon-khs">
            <dl>
              <dt>
                <span className="icon-hear"></span>
                <span className="icon-eye"></span>
                <span className="icon-mouth"></span>
              </dt>
              <dd>
                <span></span>
              </dd>
            </dl>
          </div>
          <div className="profile-box">
            <p>김현수 (KIMHYUNSU)</p>
            <p>
              Tel : <a href="sms:01049221429">01049221429</a>
            </p>
            <p>
              mail :
              <a href="mailto:fe.hyunsu@gmail.com">fe.hyunsu@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
