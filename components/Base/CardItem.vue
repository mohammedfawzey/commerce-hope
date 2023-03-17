<template>
  <!-- max-width="340" -->
  <v-card
    flat
    class="card-border rounded-lg"
    :class="[miniSlider ? 'ma-2 ma-md-3' : 'mx-auto']"
    max-width="340"
    max-height="495"
  >
    <!-- <span class="error--text">
      {{ item.id }}
    </span> -->
    <!-- max-width="340" -->
    <div class="image d-flex align-center justify-center">
      <v-hover v-slot="{ hover }">
        <!-- contain -->
        <!-- src="https://picsum.photos/id/11/500/300" -->
        <v-img
          :src="require(`@/assets/imgs/home/c-top-collections/${item.img}.png`)"
          aspect-ratio="1"
          class="rounded-lg pointer"
          @click="redirectToProductDetail(item.id)"
        >
          <!-- max-height="300" -->
          <template #placeholder>
            <v-skeleton-loader></v-skeleton-loader>
          </template>
          <v-sheet
            height="100%"
            color="transparent"
            :class="{ 'bg-blur': hover }"
            class="s transition-fast-in-fast-out"
          >
            <v-card-text class="d-flex justify-space-between">
              <div class="rival">
                <v-chip label color="primary darken-2" small @click.stop>
                  <span class="font-weight-bold">-{{ item.rival }}%</span>
                </v-chip>
              </div>
              <!-- v-if="$vuetify.breakpoint.smAndUp" -->
              <div
                @click.stop
                class="
                  hidden-xs-only
                  card-control
                  d-sm-flex
                  align-center
                  justify-center
                  flex-column
                "
              >
                <v-slide-x-reverse-transition>
                  <div class="add-to-favourite" v-if="hover">
                    <v-btn icon small width="30" height="30" @click.stop>
                      <v-icon size="20">mdi-heart-outline</v-icon>
                    </v-btn>
                  </div>
                </v-slide-x-reverse-transition>
                <v-slide-y-reverse-transition>
                  <div class="view-card-details mt-1" v-if="hover">
                    <v-btn
                      @click.stop="openPreviewDialog"
                      icon
                      small
                      width="30"
                      height="30"
                    >
                      <v-icon size="20">mdi-eye-outline</v-icon>
                    </v-btn>
                  </div>
                </v-slide-y-reverse-transition>
              </div>
            </v-card-text>
          </v-sheet>
        </v-img>
      </v-hover>
    </div>
    <div class="card-content pa-3">
      <div class="card-title">
        <v-list-item-title
          :class="{
            'text-body-2':
              (miniSlider || smallText) && $vuetify.breakpoint.smAndDown,
          }"
          class="text-body-1 font-weight-medium"
          >{{ item.title }}</v-list-item-title
        >
      </div>
      <div
        class="card-content-details d-flex align-center justify-space-between"
      >
        <div class="likes">
          <v-icon size="20" color="primary">mdi-thumb-up-outline</v-icon>
          <span class="text-body-2">{{ item.likes }}</span>
        </div>
        <div class="colors d-flex align-center">
          <!-- { backgroundColor: color }, -->
          <span
            :class="color"
            :style="[
              $vuetify.breakpoint.smOnly
                ? { width: '15px !important', height: '15px !important' }
                : '',
            ]"
            v-for="(color, colorInd) in item.colors.slice(0, 3)"
            :key="colorInd"
            class="card-color ml-n1"
          ></span>
          <span class="text-caption ml-1" v-if="item.colors.length > 3"
            >+{{ item.colors.length - 3 }}</span
          >
        </div>
      </div>
      <div
        class="
          card-content-rating-price
          d-flex
          align-center
          justify-space-between
        "
      >
        <div class="rating d-flex align-center">
          <v-icon size="17" color="rgb(237, 108, 2)">mdi-star</v-icon>
          <span class="text-body-2 ml-1">{{ item.rate }}</span>
        </div>
        <div
          class="price text-body-1 font-w-600"
          style="color: rgb(33, 43, 54)"
        >
          US$ <span>{{ item.price }}</span>
        </div>
      </div>
      <div class="card-action mt-2">
        <v-btn
          block
          color="primary darken-2"
          class="rounded-lg"
          dark
          height="40"
          depressed
        >
          <span class="text-capitalize">add to cart</span>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    active: true,
  }),
  props: {
    item: {
      // required: true,
      type: Object,
      default() {
        return {
          img: 1,
          id: 1,
          rival: "12",
          title: "Baby Don't Cry Shampoo",
          likes: 1,
          colors: ["primary", "red", "black", "green"],
          rate: "4.5",
          price: 25,
          sizes: ["sm", "md", "lg", "xl"],
        };
      },
      // }
    },
    miniSlider: {
      default: false,
      type: Boolean,
    },
    smallText: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    openPreviewDialog() {
      this.$store.commit("M_setPreviewDialog", {
        status: true,
        item: this.item,
      });
    },
    redirectToProductDetail(itemId) {
      this.$router.push({ path: `/products/${itemId}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.card-border {
  border: 1px solid rgb(196, 205, 213);
}
$size: 20px;
.card-color {
  display: inline-block;
  border: 2px solid white !important;
  width: $size;
  height: $size;
  border-radius: 50%;
}
.bg-blur {
  backdrop-filter: blur(2px);
}
.card-control {
  cursor: auto !important;
}
</style>