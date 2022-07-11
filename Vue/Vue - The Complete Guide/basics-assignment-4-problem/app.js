const app = Vue.createApp({
  data() {
    return {
      name: "",
      showname: "",
      hv: true,
      color: "",
    };
  },
  computed: {
    // nameStyle() {
    //   if (this.hv === true) {
    //     if (this.name === "user1") {
    //       return { user1: true, visible: true };
    //     } else if (this.name == "user2") {
    //       return { user2: true, visible: true };
    //     } else {
    //       return { user1: false, user2: false, visible: true };
    //     }
    //   } else {
    //     return { hidden: true };
    //   }
    // },
    nameStyle() {
      return {
        user1: this.name === "user1",
        user2: this.name === "user2",
        visible: this.hv === true,
        hidden: this.hv === false,
      };
    },
  },
  methods: {
    showName() {
      this.showname = this.name;
    },
    hideAndVisible() {
      this.hv = !this.hv;
    },
  },
});

app.mount("#assignment");
