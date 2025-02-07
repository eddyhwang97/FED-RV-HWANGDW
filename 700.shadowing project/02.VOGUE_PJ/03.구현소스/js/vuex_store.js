// 뷰엑스 스토아 - 전역뷰데이터 저장소!!!

////// 뷰엑스 스토아를 활용한 변수 셋팅하기 ///////
// [뷰엑스 스토어 인스턴스를 생성한다!!!] //////

// export const store = new Vuex.Store({
export default new Vuex.Store({
  // 1. 데이터 셋팅구역
  state: {
    // 로그인 사용자 정보 객체변수
    loginUser: {},
    // 로그인 환영메시지
    welcomeMsg: "",
    // 아이콘 객체(m-남자,w-여자)
    // 로그인 클래스(로그인/로그아웃 버튼 전환 클래스)
    loginCls:"login",
  },
  // 2. 데이터 변경 메서드 구역
  // -> 컴포넌트에서 호출시 commit() 사용!
  mutations: {
    // 로그인 사용자 정보 업데이트 메서드
    setLogin(st, pm) {
      // st - state객체, pm - 전달값
      console.log("로그인셋!", st, pm);
      // 1. state변수 업데이트하기
      // (1) 사용자 정보 변경
      st.loginUser = pm;
      // (2) 환영 메시지 변경 : 랜덤수로 아이콘 넣기
      st.welcomeMsg = 
      pm.name + "님, 환영합니다!";

      // (3) 로그인버튼 숨기기 (로그아웃 보이기)
      st.loginCls='login';
    },
    setLogout(st) {
      // st - state객체, pm - 전달값
      console.log("로그아웃!", st);
      // 1. state변수 업데이트하기
      // (1) 사용자 정보 변경
      st.loginUser = {};
      // (2) 환영 메시지 변경 : 랜덤수로 아이콘 넣기
      st.welcomeMsg = '';

      // (3) 로그인버튼 숨기기 (로그아웃 보이기)
      st.loginCls='';
      // (4) 로그인 세션스 지우기 'login-user'
      sessionStorage.removeItem('login-user');
    },
  },
  // 3. 비동기처리 메서드 구역
  // -> 컴포넌트에서 호출시 dispatch() 사용!
  actions: {},
}); /////////// Vuex.Store ///////////////
