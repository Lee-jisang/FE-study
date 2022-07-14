<!-- check box 이역시 사용자가 선택하는 값이므로 양방향 데이터 바인딩 -->
<!-- checkbox는 checked 속성과 양방향 데이터 바인딩임
select, input은 value랑 양방향 데이터 바인딩-->
<template>
    <div>
        <div>
            <input type="radio" name="" id="html" value="HTML" v-model="favoriteLang">
            <label for="html">HTML</label>
        </div>
        <div>
            <input type="radio" name="" id="css" value="CSS" v-model="favoriteLang">
            <label for="css">CSS</label>
        </div>
        <div>
            <input type="radio" name="" id="js" value="JS" v-model="favoriteLang">
            <label for="js">JS</label>
        </div>
        <div>선택한 지역: {{favoriteLang}}</div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            favoriteLang: '' // 라디오 버튼은 문자열로 선언 왜냐 하나만 선택할 수 있으므로
        }
    }
}
</script>
