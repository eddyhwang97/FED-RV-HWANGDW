// ================================================
// [ 상품리스트 서브컴포넌트 : GoodsList ]
// ================================================

// 공유신발 데이터 불러오기
import guData from "../data/gu_data";
// 효진드레스 데이터 불러오기
import hjData from "../data/hj_data";
// console.log(guData);
// 공통함수 불러오기
import * as comFn from "./common/com_fn";

export default function GoodsList({ selItem, setGIdx,setViewList }) {
  // selItem - 대분류(공유/효진) -> 데이터 선택
  // setGIdx - 부모의 상태관리변수 gIdx 업데이트 메서드
  // 데이터 종류 선택하기
  const selDB = selItem === "공유" ? guData : selItem === "효진" ? hjData : null;

  // 조건 렌더링 : null 값일 경우
  if (!selDB)
    return (
      <ul>
        <li>데이터가 없습니다.</li>
      </ul>
    );

  // reuturn code //////
  return (
    <ul>
      {
        // [ 반복데이터로 li 태그 만들기 ]
        // 반복 요소를 만들때 필수로 key속성을 셋팅할 것!
        // 반복 요소 구분을 위한 필수키로 리액트에서 설정
        // 할것을 항제하고 있은(cdn에서는 에러안남)
        selDB.map((v, i) => (
          <li key={i}>
            <a
              href="#"
              onClick={(e) => {
                // 기본이동막기
                e.preventDefault();
                // console.log("클릭");
                // 상태관리변수 gIdx를 업데이트하기
                setGIdx(v.idx);
                setViewList(false)
                // false 값으로 변경시 상세페이지만 보임
              }}
            >
              <ol className="glist">
                <li>
                  <img src={"./images/vans/vans_" + v.idx + ".jpg"} alt="신발" />
                </li>
                <li>{v.gname}</li>
                <li>💰가격 : {comFn.addCommas(v.gprice)}원💰</li>
              </ol>
            </a>
          </li>
        ))
      }
    </ul>
  );
} ///////////////GoodsList 컴포넌트 //////////////
