<!-- class 많이 사용함 object형태로 true fals를 동적으로 활용 -->
<template>
  <div>
    <div :class="{ 'text-red': hasError, 'active': isActive }">클래스 바인딩</div>
    <div :class="class2">클래스 바인딩2</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            hasError: false,
            class2: ['active', 'text-red'] // 실무에서 활용되는 경우 거의 없음
        }
    }

}
</script>

<style>
.active {
    background-color: greenyellow;
    font-weight: bold;
}

.text-red {
    color: red;
}

</style>