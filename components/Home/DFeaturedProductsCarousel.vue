<template>
  <div class="carousel mt-5 d-flex align-center justify-center">
    <div class="the_btn">
      <v-btn
        @click="prev"
        color="rgb(223, 227, 232)"
        style="z-index: 1"
        small
        fab
        ><v-icon size="20">mdi-arrow-left</v-icon></v-btn
      >
    </div>
    <v-sheet max-width="100%" color="transparent">
      <!-- max-width="calc(100% - 65px)" -->
      <VueSlickCarousel
        v-bind="settings"
        ref="carousel"
        :slides-to-show="
          $vuetify.breakpoint.lgAndUp
            ? 5
            : $vuetify.breakpoint.mdOnly
            ? 4
            : $vuetify.breakpoint.smOnly
            ? 3
            : 2
        "
      >
        <div v-for="(item, itemInd) in items" :key="itemInd">
          <BaseCardItem mini-slider :item="item" />
        </div>
      </VueSlickCarousel>
    </v-sheet>
    <div class="the_btn_right">
      <v-btn
        @click="next"
        color="rgb(223, 227, 232)"
        fab
        small
        class="ml-n1"
        style="z-index: 1"
        ><v-icon size="20">mdi-arrow-right</v-icon></v-btn
      >
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import products from "~/data/products2.json";
// optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  data: () => ({
    settings: {
      //   centerMode: true,
      //   centerPadding: "20px",
      //   focusOnSelect: true,
      //   infinite: true,
      //   speed: 500,
      //   arrows: false,
      //   autoPlay: true,
      //   autoplaySpeed: 2000,
      //   slidesToScroll: 1,
      //   pauseOnDotsHover: true,
      //   pauseOnFocus: true,
      //   pauseOnHover: true,
      //
      centerMode: true,
      centerPadding: "20px",
      arrows: false,
      infinite: true,
      focusOnSelect: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnFocus: true,
      pauseOnHover: true,
    },
    items: products,
  }),
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
  },
  components: {
    VueSlickCarousel,
  },
};
</script>

<style lang="scss" scoped>
$width: 40px;
.carousel {
  position: relative;
}

.the_btn,
.the_btn_right {
  height: calc(100% - 12px * 2 + 11px);
  min-width: $width + 10;
  background: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  button {
    position: absolute;
    right: 0;
    transform: translateX(20px);
  }
}
.the_btn {
  left: 0;
  transform: translateX(-12px);
  box-shadow: 3px 1px 1px 1px rgb(0 0 0 / 2%);
  button {
    right: 0;
    transform: translateX(20px);
  }
}
.the_btn_right {
  transform: translateX(12px);
  box-shadow: -3px 1px 1px 1px rgb(0 0 0 / 2%);
  right: 0;
  button {
    left: 0;
    transform: translateX(-20px);
  }
}
</style>