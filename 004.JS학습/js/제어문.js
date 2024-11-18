// js3-1. 제어문 JS///////

//본파일 로딩확인
console.log("나 제어문 테스트!!");

// 1. if문 처리를 위한 함수 만들기/////

/********************************* 
 
    함수명 : showJumsu
    기능 : 점수에 따른 평가를 출력함
        1. 점수에 따른 메세지 출력
        2. 점수에 따른 메세지 글자색변경
        3. 점수에 따른 칭찬스티커 보이기

 *********************************/

// 이름있는 함수를 선언적 함수라고함!
function showJumsu() {
  // 1. 함수호출확인!
  // console.log(
  //   "평가해줘~~~~~~~~~~~~~~~~"
  // );
  // 2. 대상선정 /////
  // 2-1. 점수입력요소 : input#jumsu
  var jumsu =
    document.querySelector("#jumsu");
  // 2-2. 출력요소 : .jexp
  var jexp =
    document.querySelector(".jexp");
  // 2-3. 스티커 : .jshow
  var jshow =
    document.querySelector(".jshow");

  // 대상 호출확인!
  // console.log(
  //   "선택요소 : ",
  //   jumsu,
  //   jexp,
  //   jshow
  // );

  // 3. 점수 입력값 읽어오기 : jumsu변수의 input요소값
  var score = jumsu.value;
  // value 속성 - 입력된 input값을 읽어오는 속성
  // console.log("점수 : ", score);

  /***********************************
   if문을 이용하여 데이터 필터링하기
   (1) 문자이면 돌려보내기
   (2) 숫자범위가 아니면 돌려보내기 
   (3) 빈값이면 돌려보내기
   ----> 공통 : 메세지 찍기 + 초기화
   ***********************************/
  //  3.5-1. 문자이면 돌려보내기
  // 숫자가 아니니? is not a number?
  // JS내장함수 isNaN(보낼값) -> 결과는?
  // 숫자가 아니면 true, 숫자이면 false
  if (isNaN(score)) {
    // 결과호출
    console.log("숫자가 아닙니다.");
    // 초기화하기
    // (1) 텍스트 변경하기
    jexp.innerText =
      "숫자를 입력해라. ";
    // (2) 글자색 변경하기
    jexp.style.color = "black";
    // (3) 칭찬스티커 변경하기
    jshow.style.backgroundPosition =
      "-50% 0%";
    // (4) 입력값 지우고 포커스 보내기
    jumsu.value = "";
    jumsu.focus();
    // 함수를 나가는 키어드는 return;
    return;
  } /// if///
  // 3.5-2. 숫자 범위가 아니면 돌려보내기
  // 조건범위 : 0보다 작거나 100보다 크면 true
  else if (score < 0 || score > 100) {
    // 호출확인
    console.log(
      "점수는 범위가 아니유~."
    );
    // 초기화하기
    // (1) 텍스트 변경하기
    jexp.innerText =
      "0~100사이 숫자만 입력혀유~";
    // (2) 글자색 변경하기
    jexp.style.color = "black";
    // (3) 칭찬스티커 변경하기
    jshow.style.backgroundPosition =
      "-50% 0%";
    // (4) 입력값 지우고 포커스 보내기
    jumsu.value = "";
    jumsu.focus();

    return;
  }
  // 3.5-3. 빈값이면 돌려보내기
  // 공백문자열 제거 내장함수는? trim()
  // ->문자열 앞뒤 공백제거 기능
  // ->공백만 쓰면 공백자체가 제거된다.
  else if (score.trim() == "") {
    // 호출확인
    console.log("빈값이여~");
    // 초기화하기
    // (1) 텍스트 변경하기
    jexp.innerText = "값을 넣어유~";
    // (2) 글자색 변경하기
    jexp.style.color = "black";
    // (3) 칭찬스티커 변경하기
    jshow.style.backgroundPosition =
      "-50% 0%";
    // (4) 입력값 지우고 포커스 보내기
    jumsu.value = "";
    jumsu.focus();

    return;
  }

  // 4. 점수에 따른 분기하여 결과 출력//////
  // if/else if를 사용하면 구간설정 불필요!

  //  ###결과담는 변수 셋팅
  // (1) 평가결과 텍스트 변수
  var expText = "";
  // (1) 평가결과 글자색 변수
  var expColor = "";
  // (1) 평가결과 스티커 변수
  var jshowPos = "";

  // 4-1. 90점이상 : 매우잘함
  if (score >= 90) {
    expText = "매우잘했333";
    expColor = "purple";
    jshowPos = "100% 50%";
  }
  // 4-2. 80점이상 : 잘햇삼
  else if (score >= 80) {
    expText = "잘했333";
    expColor = "blue";
    jshowPos = "0% 0%";
  }
  // 4-3. 70점이상 : 보통이삼
  else if (score >= 70) {
    expText = "보통이333";
    expColor = "green";
    jshowPos = "0% 100%";
  }
  // 4-4. 60점이상 : 분발하삼
  else if (score >= 60) {
    expText = "분발하333";
    expColor = "yellow";
    jshowPos = "50% 100%";
  }
  //  4-5. 60점미만 : 재시험
  else {
    expText = "재시험이333!";
    expColor = "black";
    jshowPos = "0% 50%";
  }

  // 5. 화면출력변경하기 /////
  // 5-1. 텍스트 변경하기
  jexp.innerText =
    "평가결과는 " + expText;
  // 5-2. 글자색 변경하기
  jexp.style.color = expColor;
  // 5-3. 칭찬스티커 변경하기
  jshow.style.backgroundPosition =
    jshowPos;
} ////////////////////showJumsu함수 /////////////////
/*************************************** 
       [ if문 ]
        - 조건문을 검사하여 true이면
        중괄호안의 코드가 실행되는 제어문

        - 조건문이란 
        결과가 true / false 로 나오는 구문
        (조건문: 비교연산자, 논리연산자)

        ((구문))
        ____________________________

        if(조건문){
            실행코드
        }
        else if(조건문){
            실행코드
        }
        ...
        else{
            실행코드
        }
        ______________________________

        ((구문해석))
        1. if문은 단독으로 따로 사용가능

        2. else if문은 if문 뒤에 또는 else if문 뒤에
        만 사용가능함!(else if로 시작못함!)
        -> 하나의 조건에 걸리면 다른 조건문엔 안들어감!
        -> 단독으로 else if문 사용불가!

        3. else문은 모든 조건에 해당없을때
        무조건 실행할 코드가 있을 경우 사용한다!
        -> if문 가장 끝에 사용한다!
        -> 단독으로 else문만 사용불가!

        ※ 참고 : if문의 실행문이 하나이면 중괄호생략가능
        예) 
            if(aa>10){
                my = "ㅎㅎㅎ";
            }

            -> 위와 같음

            if(aa>10) my = "ㅎㅎㅎ";
       ***************************************/

// if문 튜닝~~
if (true) {
  console.log("조건통과");
}
if (false) {
  console.log("조건통과2!!!");
} else {
  console.log("불통과!!");
}

// 변수를 사용한 불린값 체크
var condition;
console.log(
  "할당안된 변수값: ",
  condition
);

// if문 처리결과 찍기 함수 /////////
var showResult = function (txt) {
  // txt - 전달변수
  // 호출확인 + 검사종류 타이틀 찍기
  console.log("❁" + txt + "❁");
  // if문 테스트하기!
  if (condition) {
    console.log(condition, "if문 통과");
  } else {
    console.log(condition, "false처리");
  }
}; //////////showResult함수 /////////////////

// 테스트 1 : undifined
// 선언 후 할당되지 않은 변수값은 undifined임
showResult("테스트 1 : undifined");

// 테스트 2 : 숫자
// ->0은 false, 이외의 숫자는 true
// true는 1, false는 0과 매칭됨
condition = 1;
showResult("테스트 2 : 숫자");
condition = 0;
showResult("테스트 2 : 숫자");
condition = 1231234123;
showResult("테스트 2 : 숫자");

// 테스트 3 : null
// ->null은 빈 값을 의미한다.
condition = null;
showResult("테스트 3 : null");

// 테스트 4 : 비교연산자
// 비교연산자는 결과로 true / false를 return
condition = 34 < 1;
showResult(
  "테스트 4 : 비교연산자 (34<1)"
);
condition = 34 > 1;
showResult(
  "테스트 4 : 비교연산자 (34>1)"
);

// 테스트 5 : 선언된적이 없는 변수
// ->아예 에러가 난다.
// condition = mymymy;
// showResult("테스트 5 : 선언된적이 없는 변수");

// 상단 콘솔출력 지우기
console.clear();

// [for문 구구단 출력을 위한 코드] /////
// 1. 대상선정 - 이벤트대상, 변경대상 ///
// 1-1. 이벤트대상 : select#selbx
var selbx =
  document.querySelector("#selbx");
// 1-2. 변경대상 : 출력대상 - .g1
var g1 = document.querySelector(".g1");
// DOM선택이 된 이유는 외부 JS호출시
// defer로 호출했기때문에
// html태그 로딩 후 실행됨
// console.log("선택대상 : ", selbx,g1);

// 2. 이벤트 설정하기 ///
selbx.onchange = makeGugu;
// 함수를 그대로 할당하면 이벤트 발생시 함수를 실행함

// 3. 함수만들기 ///
function makeGugu() {
  // 함수를 호출한 요소 자신은? this
  // this === select#selbx 요소

  // 1.선택값 optiondml value
  var optVal = this.value;

  // 2. 함수호출확인
  console.log(
    "구구단을 쓰자!",
    optVal,
    this
  );

  // 3. 구구딘 만들기
  var hcode = `<h2>${optVal}단</h2>`;
  // 구구단 넣기 : for문 사용//
  // for(시;한;증){코드}
  for (var i = 1; i < 10; i++) {
    hcode += `${optVal} x ${i} = ${
      optVal * i
    }<br>`;
  } ///for문 /////////////
  /***************************************** 
       [ for문 ]
        - 어떤 실행문을 순서대로 여러번 반복
        실행할 경우 사용하는 제어문

        ((구문구조))
        _____________________________________

        for(시;한;증){실행코드}
        - 시 -> 시작값(변수선언과 함께 숫자할당)
        - 한 -> 한계값(숫자를 조건문으로 사용)
        - 증 -> 증감(1씩증가 ++ / 1씩감소 --)

        ______________________________________

        ((구문해석))
        1. 먼저 시작값을 변수에 선언 후 할당함
        2. 중앙에 있는 한계값 조건에 맞는지 검사함
        3. 맞으면(true) for문의 중괄호{}안의 코드를 실행함
        4. 중괄호 안의 코드를 실행후 세번째 증감으로 감
            ++ / -- 로 1씩 증감함
        5. 중앙에 있는 한계값 조건에 맞는지 검사함
        6. 조건에 맞는 동안 중괄호 안의 코드를 실행함
        7. 중앙의 한계값 조건에 맞지 않으면(false)
            for문을 빠져나온다!

            ((참고 : 무한루프))
            for문의 범위를 잘못 설정하여 무한히
            for문을 돌게 되는 것을 무한루프에 빠졌다!
            라고한다. 이때 최신 브라우저 엔진은 범위에러로 처리하여
            브라우저 자체가 다운되지 않도록 처리한다.
       *****************************************/

  // 4. 화면 요소에 출력하기
  // 출력대산은 g1변수 -> .g1박스
  g1.innerHTML = hcode;
} //////////mekeGugu함수 /////////////////
