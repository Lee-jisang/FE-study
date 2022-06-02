/*eslint-disable*/
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  //왜 state를 쓰냐? -> state에 보관한 자료만 바꾸면 html 재렌더링됨
  let [글제목, 글제목변경] = useState(["남자코트 추천", "강남 우동맛집", "파이썬 독학"]); //Destructuring
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={ ()=>{ 
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
    } }> 정렬버튼 </button>

      <button onClick={ ()=>{ 
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy)
    } }> 수정버튼 </button>

      <div className="list">      
        <h4> {글제목[0]} <span onClick={()=> {따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>

      <Modal1/>

    </div>
  );
}

//다른함수 바깥에 함수만들기
function Modal(){
  return(
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  )
}

const Modal1 = () =>{
  return(
    <>
    <div className="modal">
      <h4>제목dd</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    <div></div>
  </>
  )
}

export default App;
