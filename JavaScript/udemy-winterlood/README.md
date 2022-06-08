
# 변수와 상수

- let, var이랑 다르게 같은 이름의 변수 중복 선언 허용 x
- const는 재할당 금지, 선언하고 할당 안됨


# 자료형과 형변환

![image](https://user-images.githubusercontent.com/76837780/171782095-7bb32b2d-1383-402b-9eac-9bb0dae266e5.png)

![image](https://user-images.githubusercontent.com/76837780/171859222-0058a7bd-eb29-4e2a-bbb9-d74f05436876.png)

- parseInt : 문자열에서 숫자로 형변환(명시적 형변환)

# 연산자

- 비교 연산자 -> === : 타입까지 같냐 비교, == : 값만 비교
- typeof 연산자 : 변수의 자료형이 뭔지 알려줌
- null 병합 연산자
  - let a; 
  - a= a ?? 10 -> 10

# 조건문

- 다른언어들이랑 같음, if, else, switch, case 등

# 함수

```javascript
function getArea(){
  
  return ~~;
}

getArea()
```
- 매개변수
- 지역변수, 전역변수

```javascript
let helloA = function() {
  return "안녕하세요 여러분";
} // 함수 표현식, 호이스팅 불가
```


```javascript
console.log(helloB());

function helloB(){
  return "안녕하세요 여러분";
} //함수 선언식, 호이스팅 가능(함수를 뒤에 써도 됨)
```



# 객체

- 접근 방식 : person[key], person.name
- 괄호표기법은 함수에서도 사용가능

```javascript
let person = new Object;
let person = {}; //객체 리터럴 방식 이걸 주로 사용
``` 
```javascript
const person = {
  name: "이지상",
  age: 26,
  say: function () {
    console.log(`안녕 나는 ${this["name"]}`); //person[name] 이랑 같음
  }
};

person["say"]();
```

# 배열 내장함수

- foreach
- map : 새로운 배열로 합쳐줌
- includes: 원소찾기 bool 반환
- indexOf : 인덱스 위치 알려줌
- findIndex
- filter
- slice
- concat
- sort(), compare
- join


<hr>

# Truthy & Falsy

- 자바스크립트에서 참과 거짓의 조건

```javascript
let a = undefined;
//null, undefined, 0, -0, NaN, "" -> False
if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
```

```javascript
const getName = (person) => {
  if (!person) { //if(person === undefined || person === null)
    return "객체가 아닙니다"; 
  }
  return person.name;
};

let person;
const name = getName(person);
console.log(name);
```

# 삼항 연산자

- 조건식을 파격적으로 줄여준다.
- (조건) ? 참 : 거짓

```javascript
let a = -1;
a >= 0 ? console.log("양수") : console.log("음수");
```

```javascript
let a = [];

const arrayStatus = a.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);
```

```javascript
let a = [];

const result = a ? true : false;
console.log(result);
```

# 단락 회로 평가

- 논리 연산자 : &&, ||, !
- true || true 일때는 앞에 값 return
- ture || false 일때는 true인 값 return

```javascript
const getName = (person) => {
  const name = person && person.name;
  return name || "객체가 아닙니다";
};

let person = { name: "이정환" }; // person이 null 일때는 객체가 아닙니다 
const name = getName(person);
console.log(name);
```

# 조건문 업그레이드

```javascript
const meal = {
  한식: "불고기",
  중식: "멘보샤",
  일식: "초밥",
  양식: "스테이크",
  인도식: "카레"
};

const getMeal = (mealType) => {
  return meal[mealType] || "굶기"; //객체 접근 할때 괄효표기법
};

console.log(getMeal("중식"));
console.log(getMeal());
```
