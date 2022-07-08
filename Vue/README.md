# Vue 공부



## 시작하기

![image](https://user-images.githubusercontent.com/76837780/177941337-80861723-a939-46b5-a0f1-3537ad0f0efc.png)


```html
<div id="app">
  {{ message }}
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: '안녕하세요 Vue!'
  }
})
```

## Vue 인스턴스


- 라이프사이클 다이어그램

![image](https://user-images.githubusercontent.com/76837780/175900737-b23b9d8f-7589-4036-8c6c-1dd4263bc458.png)
