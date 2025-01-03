// 도깨비 PJ 메인페이지 JS - main.js

// 메인배너 슬라이드 기능함수 불러오기
import slideFn from "./slide_fn.js";

// 도깨비 PJ 데이터 불러오기
// import { previewData } from "../data/dkb_data.js";
// import * as dkbData from "../data/dkb_data.js";
// 넘겨준 것을 모두 받는 방법은 별(*)로 받고
// as로 별칭을 지어주면 객체화되어 담겨진다.

// console.log(dkbData);

// 도깨비 GNB데이터 불러오기
import gnbData from "../data/gnb_data.js";
console.log(gnbData, Object.keys(gnbData), gnbData["About tvN"]);

// 0. GNB데이터 바인딩하기
$(".gnb").html(`
  <ul class="fx-box">
  ${Object.keys(gnbData)
    .map(
      (v) => `
    <li>
      <a href="#">
        ${v + (gnbData[v] == "없음" ? "" : '<i class="fa-solid fa-chevron-down"></i>')}
        </a>
        ${
          gnbData[v] == "없음"
            ? ""
            : `
        <!-- 서브메뉴 -->
      <aside class="smenu">
        <div class="inbox">
          <h2>${v}</h2>
          <ol>
          ${gnbData[v].map(
            (v2) => `
          <li>
            <a href="#">${v2}</a>
          </li>
          `
          ).join('')}
          </ol>
        </div>
      </aside>
        `
        }
    </li>                                       
    `
    )
    .join("")}
  </ul>
  `);

// console.log(slideFn);
// 슬라이드함수 호출하여 실행하기
slideFn();

// 2. 데이터 셋팅하기
// (1) 미리보기 데이터 셋팅하기
//  대상: .previewBox ul
// 데이터 : previewdata
// map 메서드 사용하기
// 배열값 변령출력은? 맵죠잉!
// 원래는 일반 js에서 html 넣을때
// 배열값 직접 넣으면 사이에 콤마가 출력됨
// 그래서 join('')으로 없애고 출력함!
// ->제이쿼리 html() 메서드에서는 join()없이
// 콤마없애고 출력해줌!!

$(".preview-box ul").html(
  dkbData.previewData.map(
    (v) => `
        <li>
            <h3>${v.title}</h3>
            <p>${v.story}</p>
        </li>      
        `
  )
  // .join("")
);

////////////////////////////////////////
// 현장포토 영역 : 데이터 연결하여 태그만들기 ////
////////////////////////////////////////
// 대상 : .live-box
// 주의 : 제이쿼리 html() 메서드의 값으로 map변환만 씀녀
// join('') 자동 변환되지면 다른 태그 합칠경우
// 서비스 기능이 비활성화 된다!
// 이런경우 JS기본 사용법대로 아래처럼 "맵죠잉~?" 한다.
// 배열.map().join('')
$(".live-box").html(
  "<ul>" +
    dkbData.liveData
      .map(
        (v) => `
    <li data-idx="${v.idx}">
                  <figure>
                    <img
                      src="./images/live_photo/${v.imgName[0]}.jpg"
                      alt="${v.title}"
                    />
                    <figcaption>
                      ${v.title}
                    </figcaption>
                  </figure>
                </li>`
      )
      .join("") +
    "</ul>"
);

////////////////////////////////////////
// 대표포스터 영역 : 데이터 연결하여 태그만들기 ////
////////////////////////////////////////
$(".poster-box").html(
  "<ul>" +
    dkbData.posterData
      .map(
        (v) => `
    <li data-idx="${v.idx}">
    <figure>
    <img
    src="./images/poster_img/${v.imgName}.jpg"
    alt="${v.title}"
    />
    <figcaption>${v.title}</figcaption>
    </figure>
    </li>
    
    `
      )
      .join("") +
    "</ul>"
);
////////////////////////////////////////
// 최신동영상 영역 : 데이터 연결하여 태그만들기 ////
////////////////////////////////////////
// 대상: .clip-box
$(".clip-box").html(
  `<ul
      class="slide swiper-wrapper"
      data-db="clipData"
    >
    ${dkbData.clipData
      .map(
        (v) => `
      <li
        class="swiper-slide"
        data-idx="${v.idx}}"
        data-seq="0"
      >
        <div
          class="clip-mv-box"
        >
          <img
            src="./images/clip_img/${v.idx}.jpg"
            alt="${v.subtit}}"
          />
        </div>
        <h4>
          ${v.subtit}}
        </h4>
        <h3>${v.title}}</h3>
      </li>
      `
      )
      .join("")}
  </ul>
                `
);

////////////////////////////
//스와이퍼 인스턴스 생성하기 //////
////////////////////////////

const swiper = new Swiper(".clip-box", {
  // 한화면에 볼 슬라이드수
  slidesPerView: 4,
  // 슬라이드 사이 간격(숫자는 px단위임)
  spaceBetween: 0,
}); /// swiper /////

// 스와이퍼 API를 이용한 개별 코딩
// 내가 만든 버튼에 이동 기능 부여하기!
const myBtns = document.querySelectorAll(".btn-box button");
console.log("대상:", myBtns);

// 클릭이벤트 설정하기
myBtns.forEach((el) => {
  el.addEventListener("click", controlSwp);
});

// 기능구현함수
function controlSwp() {
  // 버튼구분하기
  let isBtn = this.classList.contains("btn-next");
  console.log("나야나!", isBtn);

  // 분기하기
  // 다음버튼
  if (isBtn) {
    swiper.slideNext();
  } // if //
  // 이전버튼
  else {
    swiper.slidePrev();
  } // else //
} ////////// controlSwp함수 /////////

//////////////////////////////////////////
//////////리스트 내뇬 서브페이지 별창형 구현/////
//////////////////////////////////////////

// 공통변경대상: .sub-cont
const $subCont = $(".sub-cont");

// 닫기버튼 셋팅
$subCont.find(".cbtn").click(() => $subCont.fadeOut());

// 1. 미리보기영역 클릭시 세부내용 보기
//  이벤트 대상 : .preview-box li
$(".preview-box li").click(function () {
  console.log("hi");

  // 클릭된 박스의 데이터 읽어오기
  let currTit = $(this).find().text();
  let currCont = $(this).find().text();

  // 2. 읽어온 내용을 서브컨텐츠 박스에 넣기
  $subCont.find("h1").text(currTit);
  $subCont.find("내용박스").text(currCont);
  // 3. 서브컨텐츠 박스 보이기
  $subCont.fadeIn();
  // fadeIn(시간) 시간 안쓰면 400
}); ////click ///////
