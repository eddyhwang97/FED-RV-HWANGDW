// DC.com 배너 컴포넌트 - Banner.jsx ///////
import React from "react";
import "../../css/modules/banner.scss"

function Banner(props) {
  return (
    <div class="banner">
      <ul class="slider">
        <li>
          <img
            src="/FED-RF-2nd-2024-TOM/700.%EC%89%90%EB%8F%84%EC%9E%89%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.DC_PJ/02.%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4/dc-app/build/images/dcm21.jpg"
            alt="GOTHAM GAZETTE"
          />
          <section class="bantit">
            <h2>GOTHAM GAZETTE</h2>
            <p>WORLDS TRAVELER</p>
            <button>New Places, Familiar Faces</button>
          </section>
        </li>
      </ul>
    </div>
  );
}

export default Banner;
