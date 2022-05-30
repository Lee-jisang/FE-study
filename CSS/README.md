# CSS

## 개념
- Cascading Style Sheets
 - HTML(마크업 언어)을 꾸며주는 언어
 - html이 웹페이지의 정보를 표현한다는 css는 html을 보기 좋게 디자인하는 역할 

## 문법

```css
h1 { color: yellow; font-size:2em; }
```
- 선택자(selector) - "h1"
- 속성(property) - "color"
- 값(value) - "yellow"
- 선언(declaration) - "color: yellow", "font-size: 2em"
- 선언부(declaration block) - "{ color: yellow; font-size:2em; }"
- 규칙(rule set) - "h1 { color: yellow; font-size:2em; }"
- 주석(comment) - /* 주석내용 */

## CSS의 속성(Property)과 HTML의 속성(Attribute)

- HTML의 속성은 영어로 attribute이고, CSS의 속성은 property <br>
둘 다 한국어로 번역할 때 "속성"이라고 하므로 잘 구분해야 함. <br>

## 적용

### 1. Inline

Inline은 해당 요소에 직접 스타일 속성을 이용해서 규칙들을 선언하는 방법.
해당 요소에 직접 입력하기 때문에 선택자는 필요하지 않게 되고, 선언부에 내용만 스타일 속성의 값으로 넣어주면 됩니다.
Inline 스타일 방식이라고 부릅니다.
```css
<div style="color:red;"> 내용 </div>
```
Inline 스타일 방식은 코드의 재활용이 되지 않기 때문에 자주 사용하지 않습니다.

 
### 2. Internal

Internal은 문서에 <style>을 활용한 방법입니다.
style은 head 태그 내부에 들어가며 style 안에 스타일 규칙이 들어갑니다.

 ```css
<style> div {color: red;} </style>
```
위의 코드로 모든 <div>에 같은 스타일을 줄 수 있습니다.
하지만 이것도 한계가 있습니다.
많은 페이지가 있는 경우에는 모든 페이지에 저마다의 규칙을 선언해줘야 합니다.
페이지가 많고 스타일 규칙 내용이 많아지면 결코 쉬운 일은 아닙니다.

 

### 3. External

External은 외부 스타일 시트 파일을 이용한 방법입니다.
외부 스타일 시트는 스타일 규칙들을 별도의 외부 파일을 만들어 넣는 방식입니다.
외부 파일은 확장자가 .css가 되며 css 파일이라고 부릅니다.
 ```css
div {color: red;}
```
우선 CSS 파일을 하나 만들고 스타일 규칙을 선언합니다.
그다음 <link>을 이용해서 CSS 파일을 연결하면 됩니다.
 ```css
<link rel="stylesheet" href="css/style.css">
 ```
<head> 내부에 <link>를 선언한 후 href 속성을 이용해 CSS 파일의 경로를 적습니다.
rel 속성은 연결되는 파일이 문서와 어떤 관계인지를 명시하는 속성으로, CSS 파일은 'stylesheet' 라고 적어야 합니다.
외부 스타일 시트 방식으로 스타일을 선언하면 많은 페이지가 있더라도 이 한 줄로 모든 페이지에 같은 스타일을 적용할 수 있습니다.
또한, 수정이 필요할 때도 CSS 파일을 수정하면 연결된 모든 페이지에 반영할 수 있습니다.
외부 스타일 시트 방식은 파일 관리가 편하면서도 용량이 작기 때문에 주로 사용되는 방법입니다.

 

### 4. Import

Import는 스타일 시트 내에서 다른 스타일 시트 파일을 불러오는 방식.
@import url("css/style.css");
<style> 내부 상단이나 외부 스타일 시트 파일 상단에 선언하는데 성능상 좋지 않아서 거의 쓰이지 않음.

