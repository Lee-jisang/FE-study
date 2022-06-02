# react-coding apple 강의 정리

- public 폴더 : static 파일 모아놓는 곳
- src 폴더 : 코드 짜는 곳
                          index.js
App.js:메인 페이지 -----------> index.html
package.json: 프로젝트 정보, 프로젝트 명, 버전, 라이브러리명

js파일에서 html을 쓸수있는 JSX
원래 리액트에서 div 쓸려면 React.createElement('div',null,'Hello World')
JSX를 쓰면 그냥 div 쓰면됨

- JSX 문법1.-> class 넣을 땐 className
- JSX 문법2.-> 변수 넣을 땐 {중괄호} , 원래 생 js에서는 document.querySelector('h4').innerHTML = post;
- JSX 문법3.-> style 넣을 떈 style={} ex)<h4 style={{ color: "red", fontSize: "16px" }}>블로그임</h4>

주의사항
- return() 안에서는 병렬로 태그 2개 이상 기입금지

state 만드는 법
- 1. import {useState}
- 2. useState(보관할 자료)
- 3. let[작명(state에 보관한 자료), 작명(state 변경도와주는 함수)]

import { useState } from "react";
let [글제목, b] = useState("남자 코트 추천"); //Destructuring
//왜 state를 쓰냐? -> state에 보관한 자료만 바꾸면 html 재렌더링됨
  즉, 변동시 자동으로 html에 반영되게 만들고 싶으면 state 쓰면됨
자주 변경될거같은 html 부분은 state로 만들어 놓기

let [a,c] = [1,2]; ->Destructuring

----------------------------------------------------------------------------------
warning 메시지 무시하고 싶으면->/* eslint-disable */

onClick안에는 함수를 넣으면되는데
()=>{} 이것도 함수만드는 문법임

state 변경하는 법
- state 변경함수 이용, state변경함수(새로운state)


어떤걸 컴포넌트로 만들면 좋은가
1.반복적인 html 축약할때
2. 큰 페이지들
3. 자주변경되는 것들

다른함수에 있는 state 가져다 쓸때 문제생김
