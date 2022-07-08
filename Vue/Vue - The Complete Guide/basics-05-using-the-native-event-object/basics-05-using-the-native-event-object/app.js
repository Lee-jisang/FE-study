const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    //name 프로퍼티가 변할때만 이 함수를 호출하도록 제한함
    //computed 속성은 해당 속성이 종속된 대상이 변경될 때만 함수를 실행합니다.
    //여기서는 name
    fullname() {
      console.log("Running again..");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    outputFullname() {
      console.log("counter기능만 사용할때도 method의 함수가 호출됨");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "jisang";
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
