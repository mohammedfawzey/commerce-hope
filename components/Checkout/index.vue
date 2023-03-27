<template>
  <v-app class="transparent">
    <v-main class="pt-5">
      <section id="checkout">
        <v-container :fluid="$vuetify.breakpoint.mdAndDown">
          <AppsThePageInfo title="Checkout" />
          <!-- header -->
          <CheckoutSteps :step="step" class="mb-10 mt-5" />

          <v-row>
            <!-- info -->
            <v-col cols="12" md="8">
              <v-stepper v-model="step" outlined flat class="border-color py-2">
                <v-stepper-items class="pa-0">
                  <CheckoutCart />
                  <CheckoutBillingInfo
                    :next-step="nextStep"
                    @setUserInfo="getUserInfo"
                  />
                  <CheckoutPayment />
                </v-stepper-items>
              </v-stepper>
              <div class="routing mt-4">
                <v-btn
                  text
                  depressed
                  @click="step--"
                  v-if="step == 2 || step == 3"
                >
                  <v-icon left>mdi-arrow-left</v-icon>
                  <span class="font-weight-bold text-capitalize"> back </span>
                </v-btn>
                <v-btn text depressed nuxt to="/products" v-if="step <= 1">
                  <v-icon left>mdi-arrow-left</v-icon>
                  <span class="font-weight-bold text-capitalize">
                    continue shopping
                  </span>
                </v-btn>
              </div>
            </v-col>
            <!-- checkout summary -->
            <v-col cols="12" md="4">
              <v-card
                outlined
                flat
                class="mb-5 border-color pa-3 rounded-lg"
                v-if="step >= 3"
              >
                <v-card-title class="text-h5 text-head font-weight-bold"
                  ><span>Billing & Address</span>
                  <v-tooltip
                    color="black"
                    content-class="rounded-lg text--caption custom-line-height arrow-top"
                    open-delay="750"
                    transition="slide-y-reverse-transition"
                    bottom
                  >
                    <template #activator="{ on, attrs }">
                      <v-btn
                        v-on="on"
                        v-bind="attrs"
                        icon
                        @click="step = 2"
                        class="ml-auto"
                        color="primary darken-2"
                      >
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                    </template>
                    <span class="text--xsmall">Edit address</span>
                  </v-tooltip>
                </v-card-title>
                <div class="billing-info mt-0 pa-3">
                  <v-list-item-title class="text-h6 font-weight-bold">{{
                    userInfo.fullName
                  }}</v-list-item-title>
                  <v-list-item-subtitle class="text-caption">
                    <!-- undefined undefined undefined undefined -->
                    {{ userInfo.text }}
                  </v-list-item-subtitle>
                </div>
              </v-card>
              <v-card outlined flat class="border-color pa-3 rounded-lg">
                <v-card-title
                  class="
                    text-h5 text-md-h6 text-lg-h5 text-head
                    font-weight-bold
                  "
                  ><span>Checkout Summary</span>
                  <v-btn
                    icon
                    class="ml-auto"
                    @click="step = 1"
                    v-if="step >= 3"
                    color="primary darken-2"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-text class="pb-0 d-flex align-center">
                  <span class="text-caption">Sup Total</span>
                  <span
                    class="ml-auto text-body-2 font-weight-medium black--text"
                    >US$ {{ $store.getters["G_totalPrice"] }}</span
                  >
                </v-card-text>
                <v-card-text class="d-flex align-center">
                  <span class="text-caption text--darken-3">Shipping</span>
                  <v-spacer />
                  <span class="text-body-2 font-weight-medium black--text"
                    >US$ {{ $store.state.S_cart.length >= 1 ? 5 : 0 }}</span
                  >
                </v-card-text>
                <div class="px-3">
                  <v-divider></v-divider>
                </div>
                <v-card-text class="d-flex align-center">
                  <span class="text-body-1 font-w-600 black--text">Total</span>
                  <span
                    class="
                      ml-auto
                      text-body-1
                      font-weight-medium
                      error--text
                      text--darken-1
                    "
                    >US$
                    {{
                      $store.state.S_cart.length
                        ? $store.getters["G_totalPrice"] + 5
                        : 0
                    }}</span
                  >
                </v-card-text>
              </v-card>
              <v-expand-transition>
                <v-btn
                  block
                  color="primary darken-2"
                  class="rounded-lg mt-6"
                  depressed
                  v-if="step <= 1 && $store.state.S_cart.length >= 1"
                  large
                  @click="step = 2"
                  height="48"
                >
                  <span class="text-capitalize font-weight-bold">checkout</span>
                </v-btn>
                <v-btn
                  block
                  color="primary darken-2"
                  class="rounded-lg mt-6"
                  depressed
                  v-if="step >= 3"
                  large
                  @click="completeOrder"
                  height="48"
                  :disabled="isBtnClicked"
                  :loading="isBtnClicked"
                >
                  <!-- @click="step = 2" -->
                  <span class="text-capitalize font-weight-bold"
                    >complete order</span
                  >
                </v-btn>
              </v-expand-transition>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      done: false,
      step: 1,
      timeout: 2000,
      isBtnClicked: false,
      userInfo: {},
    };
  },
  methods: {
    nextStep(n) {
      this.step = n;
    },
    completeOrder() {
      this.isBtnClicked = true;
      new Promise((resolve, reject) => {
        setTimeout(() => {
          this.$store.commit("M_completeOrder");
          this.isBtnClicked = false;
          resolve("end");
        }, this.timeout);
      }).then(() => {
        this.$toast.success("Order Completed", { timeout: this.timeout });
        setTimeout(() => {
          this.$router.push({ path: "/profile" });
        }, this.timeout);
      });
    },
    getUserInfo(value) {
      this.userInfo = value;
    },
  },
};
</script>