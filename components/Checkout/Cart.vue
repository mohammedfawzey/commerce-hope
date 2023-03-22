<template>
  <v-stepper-content step="1" id="cart" class="px-0">
    <div class="step-head px-4">
      <span class="text-h5 text-head font-weight-bold">Cart </span>
      <span
        class="font-weight-medium text-body-1"
        style="color: rgb(99, 115, 129)"
        >({{$store.state.S_cart.length}} Items)</span
      >
    </div>
    <!-- with-items -->
    <!-- ss{{ $store.state.S_cart }} -->
    <div class="with-items mt-sm-8" v-if="$store.state.S_cart.length >= 1">
      <!-- preview -->
      <div class="preview hidden-xs-only pr-3">
        <v-row
          id="preview-item"
          class="primary darken-1 white--text text-caption font-w-600"
        >
          <v-col class="text-left d-flex align-center" cols="4" lg="5">
            <span class="pl-3"> Product </span>
          </v-col>
          <v-col class="d-flex align-center" cols="2"><span>Price</span></v-col>
          <v-col class="d-flex align-center" cols="2"
            ><span>Quantity</span></v-col
          >
          <v-col class="d-flex align-center" cols="2"
            ><span> Total Price</span></v-col
          >
          <v-col class="d-flex align-center" cols="2" lg="1">
            <!-- <v-btn block color="error" class="hidden-xs-only"></v-btn> -->
          </v-col>
        </v-row>
      </div>
      <!-- big -->
      <div class="items pr-3 mt-3">
        <template v-for="(item, itemInd) in $store.state.S_cart">
          <v-divider :key="`divider-${itemInd}`" class="my-4" />
          <v-row :key="itemInd">
            <v-col>
              <!-- semi_big -->
              <v-row>
                <!-- image -->
                <v-col cols="12" sm="4" lg="5">
                  <div class="pl-3 d-flex align-center">
                    <v-img
                      class="border-color pl-2 rounded-lg"
                      :src="
                        require(`@/assets/imgs/products/${item.product.img}.png`)
                      "
                      :lazy-src="
                        require(`@/assets/imgs/products/${item.product.img}.png`)
                      "
                      aspect-ratio="1"
                      width="64"
                      max-width="64"
                      max-height="64"
                    ></v-img>
                    <!-- <div class="content d-flex align-center"> -->
                    <v-list-item-content class="ml-3">
                      <v-list-item-title
                        class="text-body-2 font-w-600 text-head"
                        >{{ item.product.title }}</v-list-item-title
                      >
                      <div class="size-color text-caption hidden-xs-only">
                        <span class="size text-subhead"
                          >size: <span class="black--text">XS</span></span
                        >
                        <span class="text-subhead d-none d-lg-inline-block"
                          >|</span
                        >
                        <span
                          class="
                            color
                            d-sm-block d-md-inline-block
                            text-subhead
                          "
                          >color: <span class="black--text">aqua</span></span
                        >
                      </div>
                    </v-list-item-content>
                    <!-- </div> -->
                  </div>
                </v-col>
                <!-- price -->
                <v-col
                  cols="2"
                  class="hidden-xs-only d-sm-flex align-center"
                >
                  <span class="text-caption">US$ {{ item.product.price }}</span>
                </v-col>
                <!-- quantity -->
                <v-col
                  cols="2"
                  class="d-none d-sm-flex align-center"
                >
                  <div
                    class="quantity text-right"
                    style="max-width: 96px; width: 96px"
                  >
                    <div
                      class="
                        quantity-controller
                        d-flex
                        align-center
                        justify-space-between
                        border-color
                        rounded-lg
                        px-md-3 px-2
                        gap-5
                        py-1
                      "
                    >
                      <!-- gap-10 -->
                      <v-btn
                        icon
                        height="26"
                        width="26"
                        :disabled="item.quantity <= 1"
                        @click="
                          $store.commit(
                            'M_decreaseProductQuantity',
                            item.product
                          )
                        "
                      >
                        <v-icon small color="black">mdi-minus</v-icon>
                      </v-btn>
                      <span class="text-caption">{{ item.quantity }}</span>
                      <v-btn
                        icon
                        height="26"
                        width="26"
                        :disabled="item.product.available <= item.quantity"
                        @click="
                          $store.commit(
                            'M_increaseProductQuantity',
                            item.product
                          )
                        "
                      >
                        <v-icon small color="black">mdi-plus</v-icon>
                      </v-btn>
                    </div>
                    <span
                      class="text-caption available text-right text-subhead"
                      style="font-size: 10px !important"
                      >Available {{ item.product.available }}</span
                    >
                  </div>
                </v-col>
                <!-- total price -->
                <v-col
                  cols="2"
                  class="d-none d-sm-flex align-center"
                >
                  <span class="text-caption"
                    >US$ {{ item.product.price * item.quantity }}</span
                  >
                </v-col>
                <!-- delete -->
                <v-col
                  cols="2"
                  lg="1"
                  class="d-none d-sm-flex align-center justify-center justify-lg-start"
                >
                  <v-btn
                    icon
                    color="primary darken-2"
                    @click="
                      $store.commit('M_deleteProductFromCart', item.product)
                    "
                  >
                    <v-icon>mdi-delete-outline</v-icon>
                  </v-btn>
                </v-col>
                <!-- mobile -->
                <v-col>
                  <div
                    class="
                      px-4
                      d-flex d-sm-none
                      align-center
                      justify-space-between
                    "
                  >
                    <div class="content text-caption">
                      <div><b>size</b>: XS</div>
                      <div><b>color</b>: aqua</div>
                      <div><b>Price</b>: US$ {{ item.product.price }}</div>
                      <div>
                        <b>Total</b>: US$
                        {{ item.product.price * item.quantity }}
                      </div>
                    </div>
                    <div class="controller">
                      <div
                        class="quantity text-right ml-auto d-block"
                        style="max-width: 96px; width: 96px"
                      >
                        <div
                          class="
                            quantity-controller
                            d-flex
                            align-center
                            justify-space-between
                            border-color
                            rounded-lg
                            px-3
                            py-1
                          "
                        >
                          <!-- gap-10 -->
                          <v-btn
                            icon
                            height="26"
                            width="26"
                            :disabled="item.quantity <= 1"
                            @click="
                              $store.commit(
                                'M_decreaseProductQuantity',
                                item.product
                              )
                            "
                          >
                            <v-icon small color="black">mdi-minus</v-icon>
                          </v-btn>
                          <span class="text-caption">{{ item.quantity }}</span>
                          <v-btn
                            icon
                            height="26"
                            width="26"
                            :disabled="item.product.available <= item.quantity"
                            @click="
                              $store.commit(
                                'M_increaseProductQuantity',
                                item.product
                              )
                            "
                          >
                            <v-icon small color="black">mdi-plus</v-icon>
                          </v-btn>
                        </div>
                        <span
                          class="
                            text-caption
                            savailable
                            text-right text-subhead
                          "
                          style="font-size: 10px !important"
                          >Available {{ item.product.available }}</span
                        >
                      </div>
                      <v-btn
                        icon
                        color="primary darken-2"
                        class="ml-auto d-block mt-1"
                        @click="
                          $store.commit('M_deleteProductFromCart', item.product)
                        "
                      >
                        <v-icon>mdi-delete-outline</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </template>
      </div>
    </div>
    <!-- no-items -->
    <div class="no-item px-4 mt-8" v-else>
      <v-img
        :src="require('@/assets/imgs/no-item-in-cart.svg')"
        :lazy-src="require('@/assets/imgs/no-item-in-cart.svg')"
        class="mx-auto mt-10"
        max-width="360"
      ></v-img>
    </div>
  </v-stepper-content>
</template>

<script>
import items from "@/data/products.json";
export default {
  data: () => ({
    items,
  }),
};
</script>

<style lang="scss" scoped>
.quantity {
  position: relative;
  span.available {
    position: absolute;
    right: 0;
    top: 100%;
    transform: translateY(5px);
  }
}
</style>
