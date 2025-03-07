<a href="https://velog.io/@ansrjsdn/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8-%EC%A0%95%EB%A6%AC#js-%EA%B4%80%EB%A0%A8" target="_blank">[질문]</a>
<br>
[[질문]](https://xiubindev.tistory.com/m/119)

testestste

# HTML

    
<details>
<summary><strong>DOCTYPE 이란 무엇인가요?</strong></summary>  
    <hr>
     'DOCTYPE'은 웹 브라우저에서 처리할 문서가 HTML이며 어떠한 버전으로 사용하였으니 해당 방식대로 해석하라는 의미를 갖는다
    <hr>      
</details>

<details>
<summary><strong>시맨틱 태그란 무엇인가요?</strong></summary>
    <hr> 
     의미론적인 태그이다. 예를들면 b태그보다는 strong태그로 중요하다는 의미를 강조한다.
    <hr>
</details>

<details>
<summary><strong>meta태그에 대해서 설명하시오.</strong></summary>
    <hr>
     meta 태그는 해당 문서에 대한 정보인 메타데이터(metadata)를 정의할 때 사용합니다.
    
[답](https://webclub.tistory.com/354)
    <hr>
</details>

# CSS

<details>
<summary><strong>CSS를 head 위에 둬야하는 이유는 무엇인가요?</strong></summary>   
<hr>  
    
`<head>` 안에 `<link>`를 넣는 이유는 최적화된 웹사이트를 구출할때 적절한 명세의 일부입니다.<br>
페이지가 처음 로드되면, HTML과 CSS가 동시에 parsing되는데, 이때 HTML은 DOM을 만들고, CSS는 CSSOM(CSS Object Model)을 만들게 됩니다.<br>
    
두가지 모두 웹사이트에서 시작적인 부분을 만드는데 필요해 빠른 "first meaningful paint"를 가능하게 합니다. 하지만 문서 최하단 즉, `<head>`가 아닌곳에 stylesheet를 두는 것은 많은 브라우저 상에서 점진적 렌더링을 금지하게 되고, 사용자가 빈화면을 보게 만들게 됩니다.

- first meaningful paint : 사이트의 성능 지표중 하나, 사이트 최적화의 범주
    
 <hr> 
</details>


<details>
<summary><strong>margin, padding의 차이는 무엇인가요?</strong></summary>
    <hr>
margin은 바깥쪽 여백<br>
padding은 안쪽 여백<br>
       
![image](https://user-images.githubusercontent.com/76837780/177903285-6e98ba8c-7994-4ba6-8a11-08c8dcd33011.png)
    
[참고](https://bebeya.tistory.com/entry/CSS-margin-padding-%EA%B0%9C%EB%85%90-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%A0%95%EB%A6%AC) , [참고](https://velog.io/@hyejin4169/CSS-margin-padding-%EC%B0%A8%EC%9D%B4%EC%A0%90%EA%B3%BC-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%A0%95%EB%A6%AC)
    <hr>
</details>

# JS
  
<details>
<summary><strong>var, let, const의 차이는 무엇인가요?</strong></summary>
    <hr>
      var은 재할당이 가능하고 변수 중복 선언이 가능합니다. <br>
      let은 재할당이 가능하지만 변수 중복 선언이 불가능합니다. <br>
      const는 하나의 변수명으로 단 한번 선언될 수 있고, 재할당이 금지되어있다. 또 선언과 초기화가 동시에 이루어져야 한다.
    <hr> 
</details>

  
<details>
<summary><strong>nodejs와 그냥 js의 차이점은 무엇인가요?</strong></summary>
    
![image](https://user-images.githubusercontent.com/76837780/177282338-b0d2531b-cf10-4c2f-be4a-9b758aa930ac.png)       
[출처](https://hazel-developer.tistory.com/152#node.js%EC%9D%98-%EC%9E%A5%EC%A0%90)
   
</details>

<details>
<summary><strong>호이스팅이 무엇인가요?</strong></summary>
    <hr>
     변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 말한다.
     선언문을 찾아서 먼저 실행시키는 것이다. 변수뿐만 아니라 모든 식별자는 호이스팅 된다.
     모든 선언문은 런타임 이전단계에서 먼저 실행되기 때문이다.
    <hr> 
</details>

<details>
<summary><strong>호이스팅은 개발자가 이해하기 어려운데 왜 만들었을까요? 일어나는 이유가 뭘까요?</strong></summary>
<hr>
    
[답](https://velog.io/@ansrjsdn/%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85%EC%9D%80-%EC%99%9C-%EC%83%9D%EA%B8%B0%EB%8A%94-%EA%B1%B8%EA%B9%8C)
    
<hr> 
</details>

<details>
<summary><strong>== 과 === 의 차이가 무엇인가요?</strong></summary>
    <hr>
      == 은 동등비교 연산자로 좌항과 우항의 값이 같다는 것을 의미하고 , <br> === 은 일치비교연산자로 좌항과 우항의 값과 타입까지 같다는 것을 의미한다.
    <hr> 
</details>


<details>
<summary><strong>NaN 과 NaN을 비교하면 어떻게 되나요? 어떻게 확인할 수 있나요?</strong></summary>
<hr>
    
- NaN은 다른 모든 값과 비교(==, !=, ===, !==)했을 때에도 같지 않고, 다른 NaN과도 같지 않다.
- 그래서 NaN을 판별할 때는 isNaN() 또는 Number.isNaN()을 사용하면 가장 분명하게 NaN을 판별할 수 있다.
- 오로지 NaN만이 자기자신과 비교했을 때 같지 않다.
- NaN === NaN -> false   

[참조](https://velog.io/@pul8219/JS-NaN-isNaN%EA%B3%BC-Number.isNaN%EC%9D%98-%EC%B0%A8%EC%9D%B4)

<hr> 
    
</details>

<details>
<summary><strong>ES6에서 추가된 기능은?</strong></summary>
<hr>    
    
[참조](https://velog.io/@takeknowledge/javscript-ES6%EC%97%90-%EC%B6%94%EA%B0%80%EB%90%9C-%EA%B8%B0%EB%8A%A5-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC)
    
<hr>   
</details>

<details>
<summary><strong>block scope란 무엇인가요?</strong></summary>
<hr>   

블록 스코프는 블록({})내부에서 선언된 변수는 해당 블록에서만 접근 가능한 걸 말한다.  
`var`의 경우 함수 스코프를 따르므로, 함수 내부에서는 변수 접근이 가능하다. 
하지만, `let`, `const`는 블록 스코프를 따르므로 블록 바깥에서는 변수 접근이 불가하다.

[참조](https://mong-blog.tistory.com/entry/%EB%B8%94%EB%A1%9D-%EC%8A%A4%EC%BD%94%ED%94%84-%ED%95%A8%EC%88%98-%EC%8A%A4%EC%BD%94%ED%94%84%EC%9D%98-%EC%B0%A8%EC%9D%B4-javascript?category=967416)
    
<hr>   
</details>

<details>
<summary><strong>웹팩이 뭔가요? 왜 사용하나요?</strong></summary>
<hr>   

웹팩이란 최신 프런트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러(Module Bundler)입니다. 모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구를 의미합니다.

[참조](https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html)
    
<hr>   
</details>
 

<details>
<summary><strong>바벨이 뭔가요? 왜 사용하나요?</strong></summary>
<hr>   

크로스 브라우징 이슈를 해결하기 위해 생겨난 툴이 바벨이다. ES6+ 버전의 자바스크립트나 타입스크립트, JSX 등 다른 언어로 분류되는 언어들에 대해서도 모든 브라우저에서 동작할 수 있도록 호환성을 지켜준다. 바벨은 이렇게 추상화 수준을 유지한 채로 코드를 변화시키는 트랜스파일러의 역할을 한다. 바벨을 통해 ES6+의 자바스크립트 코드는 하위 버전으로 변환되고, 그로 인해 IE나 다른 브라우저에서 동작할 수 있게 만든다.

[참조](https://lihano.tistory.com/20)
    
<hr>   
</details>
  
  
<details>
<summary><strong>클로저란?</strong></summary>
    <hr>
      - 반환된 내부함수가 자신이 선언됬을때의 환경인 스코프를 기억하여 자신이 선언되었을때의 환경 밖에서 호출되어도 
      그 환경에 접근할 수 있는 함수, 자신이 생성될때의 환경을 기억하는 함수 <br>
      - 외부함수의 변수를 내부함수가 기억함  <br>
      사용 하는 이유 : <br>
      1) 현재 상태를 기억하고 변경된 최신 상태를 유지하기 위해 <br>
      2) 전역 변수의 사용을 억제 하기위해 <br>
      3) 정보를 은닉하기 위해 <br> 
    <hr> 
</details>
  
  
  
# Web

<details>
<summary><strong>렌더링이 되는 과정을 설명해주세요.</strong></summary>
<hr>
    
- 사용자가 브라우저를 통해 웹 사이트에 접속하면, 서버로 부터 HTML, CSS 등 웹 사이트에 필요한 리소스를 다운로드 받습니다. 브라우저가 페이지를 렌더링 하려면 먼저 HTML 코드는 DOM, CSS는 CSSOM 트리를 생성해야합니다.    
    
- HTML 파일과 CSS 파일을 파싱해서 각각 Tree를 만든다. (Parsing)
- 두 Tree를 결합하여 Rendering Tree를 만든다. (Style)
- Rendering Tree에서 각 노드의 위치와 크기를 계산한다. (Layout)
- 계산된 값을 이용해 각 노드를 화면상의 실제 픽셀로 변환하고, 레이어를 만든다. (Paint)
- 레이어를 합성하여 실제 화면에 나타낸다. (Composite)

[참조](https://velog.io/@eassy/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B0%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%90%98%EB%8A%94-%EA%B3%BC%EC%A0%95%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94)

[참조](https://tecoble.techcourse.co.kr/post/2021-10-24-browser-rendering/)

<hr> 
    
</details>

<details>
<summary><strong>http란 무엇인가요?</strong></summary>
<hr>
    
- 텍스트 기반의 통신 규약으로 **인터넷에서 데이터를 주고받을 수 있는 프로토콜이다.** 
- 클라이언트가 서버에게 연락하는 것을 `요청`이라고 하며 요청을 보낼때는 요청에 대한 정보를 담아 서버로 보낸다. 
- 서버가 요청에 대한 답변을 클라이언트에게 보내는 것을 `응답`이라고 한다. 
    
[참조](https://velog.io/@surim014/HTTP%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)
    
<hr> 
      
</details>

<details>
<summary><strong>http랑 https의 차이점이 무엇인가요?</strong></summary>
<hr>
    
- 따라서 HTTPS는 HTTP보다 더 안전한 보안용 프로토콜이라고 할 수 있습니다. HTTP와 HTTPS의 유일한 차이점은 HTTPS를 사용한 웹 페이지를 통해 전송되는 모든 데이터는 추가적인 보안 계층이 있습니다.
   
    
<hr> 
      
</details>

<details>
<summary><strong>쿠키와 세션의 차이점이 무엇인가요?</strong></summary>
<hr>
    
- 크로스브라우징은 웹 페이지 제작 시에 모든 브라우저에서 깨지지 않고 의도한 대로 올바르게(호환성) 나오게 하는 작업을 말한다.
- 크로스 브라우징 작업이 필요한 원인은 무엇일까?
- 브라우저 마다 랜더링 엔진이 다르기 때문이다.
   
[참조](https://velog.io/@93jm/Cross-Browsing%ED%81%AC%EB%A1%9C%EC%8A%A4-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A7%95) ,
[참조](https://velog.io/@seochanh/00003)
    
<hr> 
      
</details>

<details>
<summary><strong>크로스 브라우징이 뭐고 어떻게 하나요?</strong></summary>
<hr>
    
- 크로스브라우징은 웹 페이지 제작 시에 모든 브라우저에서 깨지지 않고 의도한 대로 올바르게(호환성) 나오게 하는 작업을 말한다.
- 크로스 브라우징 작업이 필요한 원인은 무엇일까?
- 브라우저 마다 랜더링 엔진이 다르기 때문이다.
   
[참조](https://velog.io/@93jm/Cross-Browsing%ED%81%AC%EB%A1%9C%EC%8A%A4-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A7%95) ,
[참조](https://velog.io/@seochanh/00003)
    
<hr> 
      
</details>

</details>

<details>
<summary><strong>REST API란?</strong></summary>
<hr>

> 구성
- 자원(RESOURCE) - URI
- 행위(Verb) - HTTP METHOD
- 표현(Representations)

> 가이드
- 첫 번째, URI는 정보의 자원을 표현해야 한다.
- 두 번째, 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현한다.
   
[참조](https://khj93.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-REST-API%EB%9E%80-REST-RESTful%EC%9D%B4%EB%9E%80), 
[참조](https://meetup.toast.com/posts/92) 
    
<hr> 
      
</details>



## 용어

- DOM: 문서객체모델로 브라우저에서 자바스크립트 html요소를 제어할 수 있도록 해주는 api, 브라우저에서 제공하는 기능같은 것임
- BOM: 브라우저객체모델로 브라우저 자체를 객체화함으로서 자바스크립트로 제어할 수 있도록 하는 인터페이스, <br> 예를들면 window, document, history, location, screen, navigator 등이 있음     
- API : 애플리케이션에서 데이터를 읽거나 쓰기위해 사용하는 인터페이스(소통방법) <br> 
         ex)HTTP API-open api(public api), private api// Java API, Android API
- REST-API: 자원, 행위, 표현으로 구성되어있는 REST의 원리를 따르는 API
- 렌더링: 렌더링이란 서버로부터 HTML 파일을 받아 브라우저에 뿌려주는 과정이다.
- 서버사이드 렌더링(SSR)
- 클라이언트사이드 렌더링(CSR)
- XML
- JASON
- 웹소켓-ajax
- AWS
 
