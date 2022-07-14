const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      mynum: 0,
      name1: "",
      name2: "",
      name3: "",
      name4: "",
      confirmName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name1 = event.target.value;
    },
    enterName(event) {
      this.name3 = event.target.value;
    },
    setName2(event, lastName) {
      this.name4 = event.target.value + " " + lastName;
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmName = this.name4;
    },
  },
});

app.mount("#events");
