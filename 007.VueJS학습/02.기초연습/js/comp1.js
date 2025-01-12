// 01. 컴포넌트 연습1 JS

// 1. 상단영역 전역 컴포넌트 만들기
Vue.component('tit-comp',{
    template:`
    <strong>
            <span>
              😀VueJs😄
            </span>
            쇼핑몰 갤러리리스트
          </strong>`
}); ///전역컴포넌트 ///////

new Vue({el: 'tit-comp'})

// [갤러리영 변수]
let inum = 0;

// 2. 갤러리 리스트에 넣을 전역 컴포넌트 만들기
Vue.component('list-comp',{
    template:`
    
      <div>
        <img v-bind:src="gsrc" alt="아이템">
        <aside>
          <h2>아비모밀</h2>
          <h3>6,5000원</h3>
        </aside>
      </div>
    `, ////telplate

    // v-bind:src 속성은 일반 src속성과 달리
    // 뷰JS에서 속성값을 바인딩하여 넣는다는 코딩법
    //-> 일반적으로 v-bind
    // 뷰JS용 바인딩 속성이 된다

    // 부모가 공개한 바인딩 속성르 가져온다
    // 프롭스다운!!!
    // props:[] ->배열형태로 여러개 등록가능!
    props:['list-num'],


    // (2) data 속성 : 컴포넌트에서 쓸 데이터
    // data (){ //=> 화살표 함수는 return을 제대로 못받아옴
    // data :function(){ 이형태 또는 메서드형으로!
    data(){ //메서드형
        // 컴포넌트 data는 함수형태로 반드시 return을 써야함!
        return{
            // 이미지 src
            // gsrc:`./images/${this.setNum()}.jpg`,
            gsrc:`./images/${this.listNum}.jpg`,
            // 상품명
            gname:``,
            // 상품가격
            gprice:``,
        }
    },//data 속성

    // (3) methods 속성
    methods:{
        setNum(){
            return ++inum;
        }
    },
})

new Vue({el: '.grid'})