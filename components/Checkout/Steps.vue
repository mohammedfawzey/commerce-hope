<template>
  <v-container fluid>
    <v-row>
      <v-col class="d-flex flex-column align-center text-center pos-relative">
        <v-avatar
          class="z-index-1"
          :class="[step >= 1 ? 'completed' : 'not-completed']"
          size="50"
        >
          <v-icon color="white">mdi-basket</v-icon>
        </v-avatar>
        <div
          :class="[
            step < 1 ? 'not-completed-text' : 'black--text font-weight-medium',
          ]"
          class="text-caption mt-2"
        >
          Cart
        </div>
        <span class="line" :class="{ 'l-completed': step >= 2 }"></span>
      </v-col>
      <v-col class="d-flex flex-column align-center text-center pos-relative">
        <v-avatar
          fab
          class="z-index-1"
          :class="[step >= 2 ? 'completed' : 'not-completed']"
        >
          <v-icon color="white">mdi-receipt-text</v-icon>
        </v-avatar>
        <!-- :class="{ 'not-completed-text': step < 2 }" -->
        <div
          :class="[
            step < 2 ? 'not-completed-text' : 'black--text font-weight-medium',
          ]"
          class="text-caption mt-2"
        >
          Billing & Address
        </div>
        <span class="line" :class="{ 'l-completed': step >= 3 }"></span>
      </v-col>
      <v-col class="d-flex flex-column align-center text-center pos-relative">
        <v-avatar
          fab
          class="z-index-1"
          :class="[step >= 3 ? 'completed' : 'not-completed']"
        >
          <v-icon color="white">mdi-currency-usd</v-icon>
        </v-avatar>
        <!-- :class="{ 'not-completed-text': step < 3 }" -->
        <div
          :class="[
            step < 3 ? 'not-completed-text' : 'black--text font-weight-medium',
          ]"
          class="text-caption mt-2"
        >
          Payment
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    // step: 1,
  }),
  props: {
    step: {
      required: true,
    },
  },
};
</script>


<style lang="scss" scoped>
.z-index-1 {
  z-index: 1;
}
.pos-relative {
  position: relative;
}
.line {
  position: absolute;
  content: "";

  width: 100%;
  height: 3px;
  background: rgb(234, 234, 240);
  transform: translate(0, 25px);
  z-index: 0;
  left: 50%;
  &.l-completed {
    background-image: linear-gradient(
      95deg,
      rgb(0, 39, 183) 0%,
      50%,
      rgb(102, 151, 255) 100%
    ) !important;
  }
}

.completed {
  background-image: linear-gradient(
    136deg,
    rgb(0, 39, 183) 0%,
    50%,
    rgb(102, 151, 255) 100%
  ) !important;
  box-shadow: grey 0px 0px 1px inset !important;
}
.not-completed {
  background-color: rgb(204, 204, 204) !important;
}
.not-completed-text {
  color: rgb(99, 115, 129) !important;
}
</style>