<template>
  <v-stepper-content step="2" id="billing-info">
    <div class="step-head">
      <span class="text-h5 text-head font-weight-bold">Guest Information </span>
    </div>
    <v-row class="mt-4">
      <v-col
        cols="12"
        :sm="item.grid ? item.grid : 12"
        v-for="(item, itemInd) in inputs"
        :key="itemInd"
      >
        <v-select
          v-model="item.state"
          outlined
          :label="item.label"
          hide-details
          :items="item.enum"
          v-if="item.isSelect"
          class="rounded-lg"
        ></v-select>
        <v-text-field
          v-else
          class="rounded-lg"
          hide-details
          outlined
          :label="item.label"
          v-model="item.state"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn
      color="primary darken-3"
      class="rounded-lg mt-6"
      block
      large
      @click="nextStep(3)"
      height="48"
    >
      <span class="text-capitalize font-weight-bold"
        >deliver to this address</span
      >
    </v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  data: () => ({
    inputs: [
      {
        label: "First Name",
        state: "",
        grid: 6,
      },
      {
        label: "Last Name",
        state: "",
        grid: 6,
      },
      {
        label: "Email",
        state: "",
        grid: 6,
      },
      {
        label: "Phone",
        state: "",
        grid: 6,
      },
      {
        label: "Address",
        state: "",
        grid: 12,
      },
      {
        label: "Town/City",
        state: "",
        grid: 4,
      },
      {
        label: "State",
        state: "",
        grid: 4,
      },
      {
        label: "Zip/Postal Code",
        state: "",
        grid: 4,
      },
      {
        label: "Country",
        state: "",
        enum: ["oman", "egypt", "cairo", "dandil"],
        isSelect: true,
        grid: 12,
      },
    ],
  }),
  props: {
    nextStep: {
      type: Function,
    },
  },
};
</script>
