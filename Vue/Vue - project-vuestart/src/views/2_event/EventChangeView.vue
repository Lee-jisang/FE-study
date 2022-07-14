<!-- v:on === @  -->
<!-- event를 전달하고 싶으면 @change="changeCity($event)"   -->
<template>
  <div>
    <select name="" id="" @change="changeCity" v-model="selectedCity">
        <option value="">==도시선택==</option>
        <option :value="city.cityCode" :key="city.cityCode" v-for="city in cityList">
            {{city.title}}
        </option>
    </select>
    <!-- change event로 동작 -->
    <select name="" id="">
        <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in selectedDongList">
            {{dong.dongtitle}}
        </option>
    </select>
    <!-- 양방향 데이터 바인딩을 통해 methods를 거치지않고 동작 -->
    <select name="" id="">
        <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in dongList.filter(
                 (dong) => dong.cityCode === this.selectedCity
            )">
            {{dong.dongtitle}}
        </option>
    </select>
  </div>
</template>

<script>
export default {
    component: {},
    data() {
        return {
            selectedCity: '',
            cityList: [
                { cityCode: '02', title: '서울' },
                { cityCode: '051', title: '부산' },
                { cityCode: '064', title: '제주' }
            ],
            dongList: [
                { cityCode: '02', dongCode: '1', dongtitle: '서울 1동' },
                { cityCode: '02', dongCode: '2', dongtitle: '서울 2동' },
                { cityCode: '02', dongCode: '3', dongtitle: '서울 3동' },
                { cityCode: '051', dongCode: '1', dongtitle: '부산 1동' },
                { cityCode: '051', dongCode: '2', dongtitle: '부산 2동' },
                { cityCode: '064', dongCode: '1', dongtitle: '제주 1동' },
                { cityCode: '064', dongCode: '2', dongtitle: '제주 2동' }
            ],
            selectedDongList: []
        }
    },
    methods: {
        changeCity(event) {
            console.log(event.target.tagName)
            this.selectedDongList = this.dongList.filter(
                 (dong) => dong.cityCode === this.selectedCity
            )
        }
    }
}
</script>

<style>

</style>