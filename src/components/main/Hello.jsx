import React, { useEffect } from 'react';
import * as common from '../../js/common';
import '../../assets/styles/common.scss';
import '../../assets/styles/main.scss';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import modelItem from '../../assets/item/ice_bear_we_bare_bears/scene.gltf';

export default function Hello() {
  useEffect(() => {
    const nameCard = document.querySelectorAll('.name-card');
    const userName = localStorage.getItem('userName');
    for (let i = 0; i < nameCard.length; i++) {
      nameCard[i].innerHTML = userName;
    }

    // 장면을 만든다.
    let scene = new THREE.Scene();

    // 브라우저에 내가 만든 장면을 렌더링해주세요.
    // 3d 오브젝트를 브라우저에 보여주고 싶을때는 WebGL이라는 엔진을 사용하는데 그때 도와주는 함수.
    let renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#introItem'),
      antialias: true,
    });
    renderer.outputEncoding = THREE.sRGBEncoding;

    // 카메라 설치
    // PerspectiveCamera (원근법 O)
    // OrthographicCamera (원근법 무시)
    let camera = new THREE.PerspectiveCamera(90, 1);
    camera.position.set(0, 0, 8);

    // 조명 & 배경색
    scene.background = new THREE.Color('white');
    let light = new THREE.DirectionalLight(0x446ab3, 0.8);
    let light2 = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(light);
    scene.add(light2);

    // 3d 오브젝트를 불러와서 변수에 담는다.
    let loader = new GLTFLoader();
    loader.load(modelItem, function (gltf) {
      scene.add(gltf.scene);
      renderer.render(scene, camera);
      function animate() {
        requestAnimationFrame(animate);
        gltf.scene.rotation.y += 0.015;
        renderer.render(scene, camera);
      }
      animate();
    });
  }, []);

  return (
    <>
      <section className="main-section hello-col">
        <div className="inner">
          <h1>
            <span>인사말</span>
          </h1>
          <div className="icon-keyboard">
            <span></span>
            <span className="eft-keyup-5"></span>
            <span></span>
            <span className="eft-keyup-3"></span>
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
            <span className="eft-keyup-1"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="eft-keyup-3"></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="eft-keyup-4"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="eft-keyup-4"></span>
            <span></span>
            <span></span>
            <span className="eft-keyup-2"></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="eft-keyup-4" style={{ width: '4.5em' }}></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>
            안녕하세요 <em className="name-card"></em>님,
            <br />제 홈페이지에 방문해 주셔서 감사합니다.
            <br />
            저는 <strong>인터렉션한 프론트 개발</strong>에 관심이 많은 김현수라고 합니다.
          </p>
          <p>
            이 사이트는 개인 소개 목적으로 만들어진 사이트로,
            <br />
            React로 개발되었으며, <em>Interaction motion</em> 요소들은 라이브러리 사용을 피해
            <br />
            <strong>Javascript</strong> 와 <strong>CSS Keyframe animation, WebGL</strong>등을
            사용하여 구현했습니다.
          </p>
          <canvas id="introItem" width="200" height="200"></canvas>
          <p>
            &ndash; Gitblog :
            <a href="https://fe-hyunsu.github.io/" target="_blank">
              https://fe-hyunsu.github.io/
            </a>
          </p>
          <p>
            &ndash; 개인 노션 :
            <a
              href="https://phase-litter-337.notion.site/Frontend-KHS-2353d76247774c8582e74ad61e71337c"
              target="_blank"
            >
              [바로가기]
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
