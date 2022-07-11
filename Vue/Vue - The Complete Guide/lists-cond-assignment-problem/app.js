const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      hv: true,
      caption: "",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = "";
    },
    HV() {
      this.hv = !this.hv;
    },
  },
});

app.mount("#assignment");
