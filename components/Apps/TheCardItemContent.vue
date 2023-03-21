<template>
  <v-card
    class="product_detail-the_product pa-5 image-border rounded-lg"
    outlined
    flat
  >
    <v-row>
      <!-- The_image -->
      <v-col cols="12" md="6" class="d-flex flex-column gap-15">
        <!-- <div
          class="the_image mx-auto"
          :style="[
            $vuetify.breakpoint.smAndDown
              ? { 'max-width': '66.6667%' }
              : { 'max-width': '85.6667%' },
          ]"
        > -->
        <!-- contain -->
        <!-- width="315" -->
        <!-- max-height="315" -->
        <!-- aspect-ratio="0.6728571428571428" -->
        <v-img
          aspect-ratio="1"
          class="image-border rounded-lg mx-auto"
          :src="require(`@/assets/imgs/products/${C_item.img || 3}.png`)"
          :max-width="$vuetify.breakpoint.smAndDown ? '66.6667%' : '85.6667%'"
          width="100%"
          max-height="534"
          :lazy-src="require(`@/assets/imgs/products/${C_item.img || 3}.png`)"
        >
          <!-- max-height="66.6667%" -->
          <!-- max-height="534"
          max-width="534" -->
          <!-- contain -->
          <v-card-text>
            <v-chip label small color="error lighten-5">
              <span
                class="
                  font-weight-bold
                  text-uppercase
                  error--text
                  text--darken-2
                "
                >sale</span
              >
            </v-chip>
          </v-card-text>
        </v-img>
        <!-- </div> -->
        <div class="mini-images mt-3 d-flex align-center justify-center">
          <div class="box-image">
            <v-img
              v-ripple
              :src="require(`@/assets/imgs/products/${C_item.img || 1}.png`)"
              :lazy-src="require(`@/assets/imgs/products/${C_item.img || 1}.png`)"
              class="active-mini-image pointer rounded-lg"
              width="60"
              aspect-ratio="1"
            ></v-img>
            <!-- contain -->
            <!-- width="72" -->
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <div class="col-body pb-md-16">
          <div class="text-body-1 blue-grey--text font-weight-regular">
            Bubble Bath
          </div>
          <div class="text-h6 text-sm-h5 mt-1 font-weight-bold">
            {{ C_item.title }}
          </div>
          <!-- rating -->
          <div class="rating-price d-flex align-center justify-space-between">
            <div class="rating">
              <v-rating
                dense
                class="d-inline-block"
                :value="Number(C_item.rate)"
                half-increments
                color="orange darken-2"
                small
                readonly
              ></v-rating>
              <span class="text-caption text-sm-body-2">{{ C_item.rate }}</span>
              <span class="text-body-2 font-w-400 indigo--text text--darken-2"
                >Reviews</span
              >
            </div>
            <div class="price d-flex align-center">
              <del
                class="text-body-2 hidden-sm-and-down text-sm-body-1 grey--text"
                >US$ {{ C_item.price }}</del
              >
              <span class="text-body-1 text-sm-h6 font-weight-bold ml-1"
                >US$ {{ C_discountedPrice }}</span
              >
            </div>
          </div>
          <!-- other_details -->
          <div class="other-details">
            <div class="brand text-body-2 text-sm-body-1 mt-2">
              <strong>Brand:</strong>
              <span class="blue-grey--text">Commercehope</span>
            </div>
            <div class="discount my-1 text-body-2 text-sm-body-1">
              <span class="font-w-600">Discount</span>
              <span class="blue-grey--text"
                >US$ 3
                <span class="orange--text text--darken-2"
                  >({{ Number(C_item.rival) }}% Discount)</span
                ></span
              >
            </div>
            <div class="sku">
              <span class="font-w-600">SKU: </span>
              <span class="blue-grey--text">741</span>
            </div>
            <div class="available-items my-1">
              <span class="font-w-600">Available: </span>
              <span class="blue-grey--text">3 items</span>
            </div>
          </div>
          <!-- colors -->
          <div class="colors d-flex align-center justify-space-between">
            <div class="text-body-2 text-sm-body-1 font-w-600">Color:</div>
            <div class="colors-controller" style="max-width: calc(100% - 60px)">
              <!-- style="width: 195px" -->
              <v-btn-toggle
                dense
                v-model="activeColor"
                mandatory
                class="align-center justify-start"
              >
                <div
                  :class="{ 'ml-2': colorInd !== 0 }"
                  v-for="(color, colorInd) in C_item.colors"
                  :key="colorInd"
                >
                  <v-btn
                    @click="checkTransitionDirection(colorInd)"
                    fab
                    small
                    class="v-box-shadow"
                  >
                    <span
                      class="
                        color_box
                        d-flex
                        align-center
                        justify-center
                        transition-swing
                      "
                      :class="[
                        {
                          'active-color': C_stateActiveColor(colorInd),
                        },
                        color,
                      ]"
                    >
                      <!-- right to left -->
                      <v-scroll-x-transition v-if="!leftToRightTransition">
                        <v-icon
                          small
                          color="white"
                          v-if="C_stateActiveColor(colorInd)"
                          >mdi-check-underline</v-icon
                        >
                      </v-scroll-x-transition>
                      <!-- left to right -->
                      <v-scroll-x-reverse-transition v-else>
                        <v-icon
                          small
                          color="white"
                          v-if="C_stateActiveColor(colorInd)"
                          >mdi-check-underline</v-icon
                        >
                      </v-scroll-x-reverse-transition>
                    </span>
                  </v-btn>
                </div>
              </v-btn-toggle>
            </div>
          </div>
          <!-- size -->
          <div class="size my-2 d-flex align-center justify-space-between">
            <div class="text-body-2 text-sm-body-1 font-w-600">Size:</div>
            <div class="size-controller" style="max-width: calc(100% - 60px)">
              <v-chip-group
                active-class="primary darken-2"
                v-model="activeSize"
                center-active
                mandatory
              >
                <v-chip
                  label
                  small
                  :outlined="activeSize !== sizeInd"
                  v-for="(size, sizeInd) in C_item.sizes"
                  :key="sizeInd"
                >
                  <span class="text-uppercase text-caption font-w-300">{{
                    size
                  }}</span>
                </v-chip>
              </v-chip-group>
            </div>
          </div>
          <!-- quantity -->
          <div class="quantity mt-1 d-flex align-center justify-space-between">
            <div class="text-body-2 text-sm-body-1 font-w-600">Quantity:</div>
            <div
              class="
                quantity-controller
                px-2
                py-1
                d-flex
                align-center
                justify-space-between
              "
            >
              <v-btn icon small width="26" height="26">
                <v-icon small>mdi-minus</v-icon>
              </v-btn>
              <span class="text-caption px-2">{{ 1 }}</span>
              <v-btn icon small width="26" height="26">
                <v-icon small>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
          <!-- actions -->
          <div
            class="
              preview-actions
              mt-4
              d-flex
              align-center
              justify-space-between
              gap-10
            "
          >
            <div class="box" style="width: 100%">
              <v-btn
                block
                outlined
                color="orange darken-2"
                class="rounded-lg"
                @click="active = false"
                height="40"
                depressed
              >
                <span class="text-capitalize">add to cart</span>
              </v-btn>
            </div>
            <div class="box" style="width: 100%">
              <v-btn
                block
                color="primary darken-2"
                height="40"
                class="rounded-lg"
                depressed
              >
                <span class="text-capitalize">buy now</span>
              </v-btn>
            </div>
            <div class="box hidden-sm-and-down" v-if="!dialog">
              <v-tooltip
                transition="slide-y-reverse-transition"
                open-delay="750"
                :open-on-click="false"
                content-class="pa-2 custom-line-height arrow-top text-caption rounded-lg"
                color="black"
                bottom
              >
                <template #activator="{ on, attrs }">
                  <v-btn
                    color="rgb(223, 227, 232)"
                    v-on="on"
                    class="rounded-lg"
                    v-bind="attrs"
                  >
                    <v-icon>mdi-heart-outline</v-icon>
                  </v-btn>
                </template>
                <span class="text--xsmall">Add to wishlist</span>
              </v-tooltip>
            </div>
          </div>
          <v-btn
            v-if="!dialog"
            block
            text
            color="primary"
            large
            class="hidden-md-and-up mt-3 rounded-lg"
          >
            <span class="text-capitalize">add to wishlist</span>
            <v-icon class="hidden-sm-and-down" right>mdi-heart-outline</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    // C_item: {},
    active: false,
    activeColor: 0,
    colors: ["primary", "error", "grey", "black"],
    leftToRightTransition: true,
    activeSize: 0,
  }),
  // props: ["C_item"],
  props: {
    C_item: {
      required: true,
    },
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    checkTransitionDirection(colorInd) {
      if (this.activeColor > colorInd) {
        this.leftToRightTransition = false;
      } else {
        this.leftToRightTransition = true;
      }
    },
  },
  computed: {
    C_stateActiveColor() {
      return (colorInd) => {
        return this.activeColor === colorInd;
      };
    },
    C_discountedPrice() {
      return (
        Number(this.C_item["price"]) -
        (Number(this.C_item["price"]) * Number(this.C_item["rival"])) / 100
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.card-image {
  border: 1px solid rgb(196, 205, 213);
  border-radius: 16px;
}
.the_btn {
  width: 38px;
  height: 38px;
}
$box-size: 16px;
.color_box {
  height: $box-size;
  width: $box-size;
  border-radius: 5px;
}
.active-color {
  width: $box-size + 6px !important;
  height: $box-size + 6px !important;
}
.mini-images {
  .box-image {
    border: 3px solid rgb(13, 68, 251);
    background: rgba(22, 28, 36, 0.48);
    border-radius: 8px;
  }
}
.quantity-controller {
  border-radius: 8px;
  min-width: 105px;
  border: 1px solid rgb(196, 205, 213);
}
.custom-border {
  border: 2px solid rgb(196, 205, 213) !important;
  box-shadow: rgb(145 158 171 / 20%) 0px 11px 15px -7px,
    rgb(145 158 171 / 14%) 0px 24px 38px 3px,
    rgb(145 158 171 / 12%) 0px 9px 46px 8px !important;
}
</style>