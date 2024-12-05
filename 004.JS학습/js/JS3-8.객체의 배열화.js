// JS3-8.객체의 배열화

// module 타입으로 호출했으므로 import 사용가능!
// 제이슨 테이터 파일 불러오기
// -> 제이슨파일 import로 부르는 방법
// import 변수명 from 상대경로 with {type:'json'}
import movieInfo from '../data_movie.json' with {type:'json'};

console.log(
  "제이슨 데이터:",
  movieInfo
);

// 나의함수 불러오기
import myFn from "./my_function.js";

// console.log('나의 함수:', myFn);

// 1. 요구사항 분석
// - 제이슨파일 영화데이터를 바탕으로 각 영화의 정보를
// 화면에 박스구성하여 반복데이터를 코드로 생성한다.

// 2. 대상선정 //////////////////////////////////
// 2-1. 이벤트대상 : window
// -> 이벤트종류 : load이벤트                               

// 2-2. 변경대상 : .wrap
const wrap = myFn.qs(".wrap");

// console.log('대상:',wrap);

// 3. 이벤트 셋팅하기 /////////////////////////////////
// 이벤트 대상인 window를 load 이벤트와 함수로 연결
// 나의 함수에서 addEvt 사용하기
// myFn.addEvt(선택요소,이벤트,함수)
myFn.addEvt(window, "load", makeList);

// 4. 함수만들기 //////////////////////////////////////
function makeList() {
  // (1) 함수호출 확인
  // console.log('makeList 호출',makeList);

  // (2) 코드만들기
  let hCode = ``; //변수 선언 및 초기화

  // (3) 객체의 배열화
  // ******************* 여기서부터 다르다! *******************/
  // for in 안쓰고 배열 메서드인 forEach 를 쓰려고한다.
  // -> 객체를 forEach로 호출하면 에러남
  // movieInfo.forEach(v => {
  //   console.log(v);
  // });
  // -> 객체를 배열로 변환해야함!

  // [객체의 배열변환]
  // ((1)) Object.keys(객체) -> 속성배열;
  // ((2)) Object.values(객체) -> 값배열;

  console.log(
    "키배열",
    Object.keys(movieInfo)
  );
  console.log(
    "값배열",
    Object.values(movieInfo)
  );

  // 객체를 키배열로 변환하여 새로운변수에 할당
  const newVal = Object.keys(movieInfo);
  console.log("키배열로 변환:", newVal);

  // 결론적으로 key배열을 forEach 메서드로 돌리면
  // for in문으로 돌린것처럼 키값을 순회하여 셋팅가능함!

  Object.keys(movieInfo).forEach(
    (x) => {
      //x는 배열값(객체의 키)

      // 반복할 코드 대입연산자로(+=)로 계속저장함!
      hCode += `
       <!-- 샘플코드 -->
          <section class="cbx">
            <div class="minfo">
              <!-- 1. 포스터 -->
              <div class="photo">
                <img
                  src=${
                    movieInfo[x][
                      "포스터"
                    ]
                  }
                  alt="영화${
                    movieInfo["영웅"][
                      "제목"
                    ]
                  }의 포스터"
                />
              </div>
              <div class="cont">
                <!-- 2. 제목 -->
                <h2 class="tit">${
                  movieInfo[x]["제목"]
                }</h2>
                <!-- 3. 개요 -->
                <h3 class="sum">
                ${movieInfo[x]["개요"]}
                </h3>
                <!-- 4. 감독 -->
                <h3 class="dir">
                ${movieInfo[x]["감독"]}
                </h3>
                <!-- 5. 출연 -->
                <h3 class="act">
                ${movieInfo[x]["출연"]}
                </h3>
              </div>
            </div>
  
            <!-- 영화 한마디 -->
            <h2 class="showtit">
              ♥ 영화한마디!
            </h2>
            <!-- 6. 문구 -->
            <div class="show">
            ${wrapTag(
              movieInfo[x]["문구"]
            )}
            </div>
          </section>`;

      // (3) 변경대상에 코드넣기
      wrap.innerHTML = hCode;
    }
  ); // forEach 메서드 /////////////

  /********************************** 
    함수명 : wrapTag
    기능 : 글자를 하나씩 span 태그로 싸서 보내줌

    ********************************/
  function wrapTag(txt) {
    // 결과변수
    let hCode = ``;

    // (1) 함수호출 확인
    // console.log("wrap tag호출",txt);

    // (2) 태그로 싸기
    // 한글자씩 자르기? for of문 사용
    // 반드시 대입연산자로 결과 저장할것!
    for (let x of txt) {
      // console.log('x?',x);
      // 공백문자일 경우 처리
      if (x == " ") hCode += `<i></i>`;
      else hCode += `<span>${x}</span>`;
    } //for of ///////
    // 결과값 리턴하기
    return hCode;
  }
}
