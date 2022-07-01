[질문](https://velog.io/@ansrjsdn/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8-%EC%A0%95%EB%A6%AC#js-%EA%B4%80%EB%A0%A8)

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


# CSS

<details>
<summary><strong>CSS를 head 위에 둬야하는 이유는 무엇인가요?</strong></summary>
    <hr>
  
`<head>` 안에 '<link>'를 넣는 이유는 최적화된 웹사이트를 구출할때 적절한 명세의 일부입니다.
페이지가 처음 로드되면, HTML과 CSS가 동시에 parsing되는데, 이때 HTML은 DOM을 만들고, CSS는 CSSOM(CSS Object Model)을 만들게 됩니다.

두가지 모두 웹사이트에서 시작적인 부분을 만드는데 필요해 빠른 "first meaningful paint"를 가능하게 합니다. 하지만 문서 최하단 즉, `<head>`가 아닌곳에 stylesheet를 두는 것은 많은 브라우저 상에서 점진적 렌더링을 금지하게 되고, 사용자가 빈화면을 보게 만들게 됩니다.

- first meaningful paint : 사이트의 성능 지표중 하나, 사이트 최적화의 범주
  
    <hr> 
</details>


