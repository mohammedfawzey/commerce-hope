<template>
  <section id="d-featured-products">
    <div class="feautred-products-header">
      <div class="text-h2 text-center font-weight-bold text-head">
        Featured Products
      </div>
      <div class="text-body-1 text-center text-subhead mt-4">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry.
      </div>
    </div>
    <HomeDFeaturedProductsCarousel />
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  data: () => ({
    settings: {
      centerMode: true,
      centerPadding: "20px",
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 4,
      speed: 500,
      arrows: false,
    },
  }),
  methods: {
    next() {
      this.$refs.carousel.next();
    },
  },
  components: {
    VueSlickCarousel,
  },
};
</script>
