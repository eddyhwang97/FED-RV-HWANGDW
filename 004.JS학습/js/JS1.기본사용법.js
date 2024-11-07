// JS1.기본사용법 JS ////////////////

console.log("JS1.기본사용법 시작~!");
// 함수는 코드를 저장하는 구역임
// 함수명은 코드저장소의 주소이다!
// 함수의 호출은 함수명

/***************************************
    함수명 : 김비서나와라
    기능 : 김비서박그에 각종 변경하기
***************************************/
function 김비서나와라() {
  // 1. 함수호출확인!
  console.log("김비서나왔다~!");

  // 2. HTML 넣기 : 이벤트 속성에서 인라인 코드로
  //이미 실행함!(이미지 넣기)

  // 3. css변경하기///////
  // 대상선정 : .pbox
  // 클래스는 여러개 사용할 수 있으므로
  // HTML 컬렉션 집합에 수집되어 사용됨!
  //getElementsByClassName(클래스명)
  // 0,1,2,... 이런 순서로 수집함
  // 하나뿐이어도 0번째라고 해야함!
  console.log(
    "클래스 선택 HTML 컬랙션 객체",
    document.getElementsByClassName(
      "pbox"
    ),
    "요소 선택 HTMl 컬랙션 객체",
    document.getElementsByTagName(
      "span"
    ),
    "아이디 선택 HTML 요소 객체",
    document.getElementById("name")
  );

  //  변수에 대상 할당하기
  var 나변수 = document
    .getElementsByClassName("pbox")
    .item(0);
  // 변수는 특정 매모리 공간이다!
  // 선언과 동시에 할당하여 값을 저장한다.
  // 변수는 여기를 "봐!" var로 선언
  // var 변수명 = 값;

  // 변수를 사용하는 이유?
  // -변수는 재사용
  // -변수는 저장 메모리공간 주소
  // -변수는 따옴표안쓴 문자
  // -변수는 띄어쓰기 없음
  // -변수는 호출시 값 출력
  // -변수는 재할당시 다른값 덮어씀
  // -변수는 한번만 선언 var(let/const)
  // -var는 variable(변수)라는 단어에서 나온말

  // 3-1. 배경이미지 넣기
  나변수.style.background =
    "url('./images/kimbs.jpg') no-repeat top/cover";
  // .pbox중 첫번째 (0)를 선택함
  // item(순번)

  // 3-2. 글자색 변경하기
  나변수.style.color = "lightblue";

  // 3-3. 글자크기 변경하기
  나변수.style.fontSize = "40px";

  // 3-4. 글자그림자
  나변수.style.textShadow =
    "2px 2px 2px #000";
  //(x,y,blur,color)

  // 3-5. 트랜지션
  // 백틱은 줄바꿈 자유로움
  나변수.style.transition = `
   2s,
   top 4s 2s,
   left 2s 2s,
   rotate 3s 2s,
   translate 1s 2s,
   scale 2s 6s
  `;

  // 3-6. 크기변경
  나변수.style.width = "400px";
  나변수.style.height = "400px";

  // 3-7. 줄간격
  나변수.style.lineheight = "100px";

  // 3-8. 원만들기
  나변수.style.borderRadius = "50%";

  // 3-9. 중앙이동을 위한 top,left값 변경
  나변수.style.top = "50%";
  나변수.style.left = "50%";

  // 3-10. 트랜스폼변경 : 중앙이동. 360도 회전, 스케일 변경
  나변수.style.translate = "-50% -50%";
  나변수.style.rotate = "360deg";
  나변수.style.scale = "2";

  // 트랜스폼 한번에 쓰기
  // 나변수.style.transform = "translate(-50%, -50%) rotate(360deg) scale(2)";

  // 만약 속성명을 잘못쓰면 브라우저가

  // 3-11. 전체 배경색 바꾸기
  // 대상: body
  // JS에서 body는 특별히 취급하여 document.body로 선택
  var 나바디 = document.body;
  나바디.style.backgroundColor =
    "lightgreen";
  // 나바디.style.background = "linear-gradient(45deg,lightgreen, white, lightblue)";
  나바디.style.transition = "3s 5s";

  /**************************************** 
   [JS COM의 선택 메서드]
   1. id 선택 메서드 : getElementById(id명)
   document.getElementById("id명")

   2. class선택 메서드 : 
   =>getElementClassName(class명)
   document.getElementsByClassName("class명")
   ((하위속성))
   length - 클래스 개수
   ((순번석택 하위메서드))
   item(순번) - 구체적인 순번요소 선택(0부터 시작)
   
   3. tag선택 메서드 : 
   =>getElementTagName(태그명)
   document.getElementsByTagName("tag명")
   ((하위속성))
   length - 요소 개수
   ((순번석택 하위메서드))
   item(순번) - 구체적인 순번요소 선택(0부터 시작)


   [ HTML 컬렉션은 무엇인가? ]
            - DOM을 통하여 선택된 다중선택요소인
            class/tag 를 메모리상 수집하는 공간
            - 상세 선택시 순번선택 메서드인 item()을
            사용하여 선택한다
            - 배열처럼 순서대로 메모리를 사용하기 때문에
            '유사배열'이라고 불리우며 배열처럼 대괄호순번
            을 사용하여 선택할 수 있다!
            - document
            .getElementsByClassName(클래스명).item(0)
            -> 아래처럼 점안찍고 대괄호 순번사용가능!
            .getElementsByClassName(클래스명)[0]

            - 컬렉션 전체 개수정보는 length 속성으로 
            알 수 있다!

            참고) 
            https://www.w3schools.com/js/js_htmldom_collections.asp
  ****************************************/
}
//////////김비서나와라 함수 ///////////////

/****************************************** 
 함수명 : 맘대로해라
 기능 : 선택요소의 스타일과 html을 변경함
******************************************/
function 맘대로해라(헐, 헉스) {
  //헉-.원이야 순번/헉스-그림제목
  // 1. 함수호출확인
  console.log(
    "니맘대로하세요~!",
    헐,
    헉스
  );

  // 2. 대상선정 : .박스야 .원이야
  //해당요소의 순번은 헐 변수에 들어있음
  var 아파트 = document.querySelectorAll('.박스야 .원이야')[헐];
    // .getElementsByClassName("박스야")
    // .item(0)
    // .getElementsByClassName("원이야")
    // .item(헐);

    console.log("대상요소:", 아파트);
} ////////////////////////// functions 함수명(){코드명} //////////////////////////
