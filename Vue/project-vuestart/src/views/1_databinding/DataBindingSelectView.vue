<!-- select 바인딩 -->
<!-- 사용자가 값을 변경할 수 있으므로 양방향 데이터 바인딩-v-model -->
<!-- 사용자가 값을 바꾸면 이미 자바스크립트 코드상에서도 값이 변함 -->
<template>
    <div>
        <select name="" id="" v-model="selectedCity">
            <option value=""></option>
            <option value="02">서울</option>
            <option value="051">부산</option>
            <option value="064">제주</option>
        </select>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            selectedCity: '02'
        }
    }
}
</script>
