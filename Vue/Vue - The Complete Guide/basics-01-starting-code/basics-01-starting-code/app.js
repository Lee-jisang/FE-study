const app = Vue.createApp({
  data() {
    return {
      // always object return
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "<h1>Master the course and learn Vue!</h1>",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    ouputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount("#user-goal");
