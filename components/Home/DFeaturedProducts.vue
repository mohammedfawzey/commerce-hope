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
// optional style for arrows & dots
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
    items: [
      {
        img: 1,
        rival: "12",
        title: "Baby Don't Cry Shampoo",
        likes: 1,
        colors: ["primary", "red", "black","indigo"],
        rate: "4.5",
        price: 25,
        sizes: ["sm", "md", "lg", "xl"],
      },
      {
        img: 2,
        rival: "34",
        title: "Funtime Bubble Bath",
        likes: 2,
        colors: ["error","success", "info"],
        rate: "3.0",
        price: 50,
        sizes: ["sm", "md", "lg", "xl"],
      },
      {
        img: 3,
        rival: "20",
        title: "Nexton Baby Shampoo",
        likes: 4,
        colors: ["indigo",  "secondary","error darken-2", "success"],
        rate: "3.5",
        price: 77,
        sizes: ["sm", "md", "lg", "xl"],
      },
      {
        img: 4,
        title: "Intea Children's Shampoo Blond Highlights 250ml",
        rival: "33",
        likess: 2,
        colors: ["primary darken-4",  "secondary", "success darken-2"],
        rate: "4",
        price: 105,
        sizes: ["sm", "md", "lg", "xl"],
      },
      {
        img: 1,
        rival: "12",
        title: "Baby Don't Cry Shampoo",
        likes: 1,
        colors: ["primary darken-1", "error", "black", "green"],
        rate: "4.5",
        price: 25,
        sizes: ["sm", "md", "lg", "xl"],
      },
      {
        img: 2,
        rival: "34",
        title: "Funtime Bubble Bath",
        likes: 2,
        colors: ["success", "red", "black", "info"],
        rate: "3.0",
        price: 50,
        sizes: ["sm", "md", "lg", "xl"],
      },
    ],
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
