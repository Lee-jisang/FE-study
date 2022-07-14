const app = Vue.createApp({
  data() {
    return {
      output: "",
      enteroutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Show Alert!!");
    },
    keyDown(event) {
      this.output = event.target.value;
    },
    enterOuput(event) {
      this.enteroutput = event.target.value;
    },
  },
});

app.mount("#assignment");
