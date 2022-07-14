<!-- v-modle 은 양방향 데이터 바인딩이 가능 -->
<!-- 웹페이지상에서 입력값을 바꾸면 자바스크립트에서 콘솔을 출력해보면 변경된상태임 -->
<template>
    <div>
        <input type="text" v-model="userId" />
        <button @click="myFunction">클릭</button>
        <button @click="changeData">변경</button>
        <br>
        <br>
        <input type="text" v-model="num1" /> +
        <input type="text" v-model="num2" /> =
        <span>{{ num1 + num2 }}</span>
        <br>
        <br>
        <input type="text" v-model.number="num3" /> +
        <input type="text" v-model,number="num4" /> =
        <span>{{ num3 + num4 }}</span>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            userId: 'jisang',
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0
        }
    },
    methods: {
        myFunction() {
            console.log(this.userId)
        },
        changeData() {
            this.userId = 'genius'
        }
    }
}
</script>
