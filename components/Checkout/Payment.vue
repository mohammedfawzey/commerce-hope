<template>
  <v-stepper-content id="payment" step="3">
    <div class="step-head">
      <span class="text-h5 text-head font-weight-bold">Payment options</span>
    </div>
    <div class="options mt-4">
      <!-- <div class="by-credit pa-3 rounded-lg border-color"></div> -->
      <div
        class="
          on-delivery
          py-3
          px-5
          rounded-lg
          border-color
          d-flex
          align-center
        "
      >
        <!-- mb-4 -->
        <v-radio-group v-model="active">
          <v-radio
            color="primary darken-2"
            on-icon="mdi-check-circle"
            :value="1"
          ></v-radio>
        </v-radio-group>
        <div class="content ml-3">
          <div class="text-body-2 font-w-600">Cash on Delivery</div>
          <div class="text-caption">
            Pay With cash when your order is delivered
          </div>
        </div>
      </div>
    </div>
  </v-stepper-content>
</template>

<script>
export default {
  data: () => ({
    active: 1,
  }),
};
</script>

<style lang="scss" scoped>
</style>