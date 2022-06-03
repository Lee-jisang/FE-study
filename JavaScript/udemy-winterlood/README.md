
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

```javascript
let person = new Object;
let person = {}; //객체 리터럴 방식 이걸 주로 사용
``` 
