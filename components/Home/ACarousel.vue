<template>
  <section id="a-landing">
    <v-carousel
      :show-arrows="false"
      hide-delimiters
      v-model="active"
      style="position: relative"
      :interval="15000"
      cycle
      :continuous="false"
    >
      <!--  -->
      <v-carousel-item
        v-for="(item, itemInd) in items"
        :key="itemInd"
        transition="slide-x-transition"
      >
        <!--  -->
        <v-img
          style="user-select: none"
          :src="require(`@/assets/imgs/home/a-landing/${item.img}.png`)"
          :lazy-src="require(`@/assets/imgs/home/a-landing/${item.img}.png`)"
          eager
          position="center"
          max-height="500"
          height="100%"
          width="100%"
        >
          <v-overlay
            absolute
            class="a-carousel d-md-none"
            :opacity="$vuetify.breakpoint.smAndDown ? 0.1 : 0"
            z-index="1"
          />
          <v-sheet
            height="100%"
            :max-width="$vuetify.breakpoint.mdAndUp ? '70%' : ''"
            color="transparent"
            width="100%"
            style="z-index: 2; position: relative"
            class="d-flex align-center"
          >
            <div class="px-5 sheet-content">
              <div
                :class="{ 'animate-title': active == itemInd }"
                class="text-h6 text-sm-h5 text-md-h2 text-head font-weight-bold"
                v-html="item.title"
              />
              <div
                :class="{ 'animate-text': active == itemInd }"
                class="
                  text-subtitle-2 text-sm-subtitle-1
                  font-weight-medium
                  mt-4
                "
                v-html="item.text"
              />
              <div
                class="sheet-pricing mt-4"
                :class="{ 'animate-btn': active == itemInd }"
              >
                <v-btn
                  dark
                  depressed
                  color="primary darken-2"
                  large
                  class="v-btn-shadow rounded-lg"
                  height="48"
                >
                  <span class="text-capitalize font-weight-bold"
                    >see pricing</span
                  >
                </v-btn>
                <v-btn
                  depressed
                  outlined
                  color="rgb(63, 0, 113)"
                  large
                  class="rounded-lg ml-2"
                  height="48"
                >
                  <span class="text-capitalize font-weight-bold">shop now</span>
                </v-btn>
              </div>
            </div>
          </v-sheet>
        </v-img>
        <!-- :position="$vuetify.breakpoint.xsOnly?'left':''" -->
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data: () => ({
    active: 0,
    items: [
      {
        img: 1,
        title: "Top Products Of <br class='hidden-sm-and-down'/> The Year!",
        text: "It is a long established fact that a reader will be distracted by <br /> the readable.",
      },
      {
        img: 2,
        title:
          "Spring Clean Your<br class='hidden-sm-and-down'/>Beauty Routine",
        text: "30% off on Men Shirts and Free Shipping. Shop Now See All",
      },
      {
        img: 3,
        title: "Save 20% on first<br class='hidden-sm-and-down'/>sale.",
        text: "Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. ",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
$time: 0.6s;
.animate-title {
  animation: animate $time;
}
.animate-text {
  animation: animate $time + 0.1s;
}
.animate-btn {
  animation: animate $time + 0.2s;
}
@keyframes animate {
  from {
    opacity: 0;
    transform: translateX(250px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>