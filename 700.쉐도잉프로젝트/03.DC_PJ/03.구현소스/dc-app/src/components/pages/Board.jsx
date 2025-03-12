import React, { useRef, useState } from "react";

// 제이쿼리 불러오기 ///
import $ from "jquery";

// 게시판용 CSS 불러오기 ////
import "../../css/pages/board.scss";

// 로컬스토리지 확용 JS ////
import { initBoardData } from "../../js/func/board_fn";
import Write from "../modules/Write";
import List from "../modules/List";
import Read from "../modules/Read";

function Board() {
  // [후크 상태관리 변수구역]
  const [mode, setMode] = useState("L");
  // (1) 리스트 모드(L) : List Mode
  // (2) 글보기 모드(R) : Read Mode
  // (3) 글쓰기 모드(W) : Write Mode
  // (4) 수정 모드(M) : Modify Mode (삭제포함)

  // [ 리액트 참조변수 셋팅구역 ]
  // [1] 게시글 선택 데이터 : 글 내용보기시
  const selRecord = useRef(null);
  // -> 읽기 쓰기시 변수.current 로 사용함!
  console.log("선택데이터 참조변수:", selRecord);

  // 로컬스토리지 게시판 데이터 정보확인 함수호출!
  initBoardData();

  // 로컬스 데이터 변수할당하기!
  const baseData = JSON.parse(localStorage.getItem("board-data"));

  // 데이터 정렬 : 기준 -> 최신 날짜로 내림차순
  baseData.sort((a, b) => (a.date == b.date ? 0 : a.date > b.date ? -1 : 1));

  // 일부데이터 선택
  // -> 정렬후 상위 10개만 선택
  // -> 페이징을 하면 일정 단위수만큼 보이기
  const selData = [];
  for (let i = 0; i < 10; i++) {
    selData.push(baseData[i]);
  }

  // 리턴 코드구역 /////////////////
  return (
    <>
      {
        // [1] 리스트 모드 출력하기 : mode -> L
        mode === "L" && (
          <List
            selData={selData} //선택리스트 배열데이터
            setMode={setMode} //모드상태변수
            selRecord={selRecord}
          />
        ) //선택데이터 참조변수
      }
      {
        // [2] 리스트 모드 출력하기 : mode -> R
        mode === "R" && (
          <Read
            setMode={setMode} //모드상태변수
            selRecord={selRecord} //선택데이터 참조변수
          />
        )
      }
      {
        // [3] 리스트 모드 출력하기 : mode -> W
        mode === "W" && <Write setMode={setMode} />
      }
    </>
  );
}

export default Board;
