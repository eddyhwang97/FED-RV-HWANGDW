import React from 'react';
import ReactDOM from 'react-dom/client';

// 메인 css
import './css/main.scss';


// root 요소 선택
const root = ReactDOM.createRoot(document.getElementById('root'));

// root에 랜더링하기
root.render(
  <>
    <h1>
      <b>선재업고</b>
      <span>튀어</span>
    </h1>
  </>
);