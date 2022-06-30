<template>
  <div>
    <!-- @keyup="checkEnter($event)" -->
    <input type="search" name="" id="" @keyup.enter="doSearch" v-model="searchText">
    <button @click="doSearch">조회</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
// .enter
// .tab
// .delete
// .esc
// .space
// .up
// .down
// .left
// .right
// .stop - event.stopPropagaion()
// .prevent - event.preventDefault();
export default {
    component: {},
    data() {
        return {
            searchText: ''
        }
    },
    methods: {
        doSearch() {
            console.log(this.searchText)
        }
        // checkEnter(event) {
        //     if (event.keyCode === 13) {
        //         this.doSearch()
        //     }
        // }
    }
}
</script>