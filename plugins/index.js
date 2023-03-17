import Vue from "vue";

const myMixin = {
  methods: {
    MX_toggleOverflowBody({ active }) {
      const html = document.documentElement;
      const body = document.body;
      if (active !== true) {
        html.classList.remove("overflow-y-hidden");
        body.removeAttribute("style");
      } else {
        html.classList.add("overflow-y-hidden");
        body.style.paddingRight = "8px";
      }
    },
    MX_redirectTo({ path }) {
      // console.log("clicked");
      this.$router.push({ path });
    },
  },
};

Vue.mixin(myMixin);


