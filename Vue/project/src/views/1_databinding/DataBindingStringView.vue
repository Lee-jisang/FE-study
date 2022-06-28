<!-- 단방향으로 문자열을 일단 바인딩 해보자 -->
<!-- 어떤 것을 바인딩하는지에 따라 문법이 다름 -->
<!-- html 코드가 들어가는 부분 -->
<!-- template 태그 안에 div(루트태그)를 꼭넣어주자! -->
<template>
   <div>
       <h1>Hello {{ userName }}</h1>
       <p>{{message}}</p>
   </div>
</template>

<!-- javascript들어가는 부분 -->
<script>
export default {
    data() {
        return {
            userName: 'John Doe',
            message: 'Welcome 개발자의 품격',
            arr: [],
            obj: {}
        }
    }
}

</script>
<!-- 이 화면에서만 style 적용-->
<style scoped>
.text-red{
    color: red;
}
</style>
