import Vue from "vue";

const myMixin = {
  methods: {
    MX_toggleOverflowBody({ active }) {
      const html = document.documentElement;
      const body = document.body;
      const appBar = document.querySelector(".v-app-bar");
      if (active !== true) {
        html.classList.remove("overflow-y-hidden");
        body.removeAttribute("style");
        appBar.classList.remove("pr-2");
      } else {
        html.classList.add("overflow-y-hidden");
        body.style.paddingRight = "8px";
        appBar.classList.add("pr-2");
      }
    },
    MX_redirectTo({ path }) {
      // console.log("clicked");
      this.$router.push({ path });
    },
  },
};

Vue.mixin(myMixin);
