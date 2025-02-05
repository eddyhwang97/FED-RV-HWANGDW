// 메인 컴포넌트 - main.js

// 메인 페이지 컴포넌트 : 구성할 여러개의 컴포넌트 호출
export const MainComp = Vue.component("main-comp",{
    template:`
    <main>
        <!-- 2. 배너영역 -->
      <banner-comp></banner-comp>

      <!-- 3. Today’s Stories 영역 -->
      <today-area-comp></today-area-comp>
      
      <!-- 7. fashion 영역 -->
      <fashion-area-comp></fashion-area-comp>
    </main>
    `,
    // DOM구성후 
    mounted(){
        // css 변경하기
    $('#css-set').attr('href','./css/main.css')
    }
}); ////////mainComp ///////////////