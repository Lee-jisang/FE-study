const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  },
  watch: {
    Show() {
      console.log("Watcher executing..");
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    Show() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter > 37) {
        return "Too much";
      } else {
        return this.counter;
      }
    },
  },
});

app.mount("#assignment");
