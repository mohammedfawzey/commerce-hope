<template>
  <v-stepper-content step="2" id="billing-info">
    <div class="step-head">
      <span class="text-h5 text-head font-weight-bold">Guest Information </span>
    </div>
    <v-form v-model="form" lazy-validation @submit.prevent="M_submit" ref="form">
      <v-row class="mt-4">
        <v-col
          cols="12"
          :sm="item.grid ? item.grid : 12"
          v-for="(item, itemInd) in inputs"
          :key="itemInd"
          class="py-0"
        >
          <v-select
            v-model="item.state"
            outlined
            :label="item.label"
            hide-details
            :rules="[rules.required]"
            :items="item.enum"
            v-if="item.isSelect"
            class="rounded-lg"
          ></v-select>
          <!-- hide-details -->
          <v-text-field
            :rules="[rules.required]"
            v-else
            class="rounded-lg"
            :ref="item.ref"
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
        :disabled="!form"
        large
        type="submit"
        height="48"
      >
        <span class="text-capitalize font-weight-bold"
          >deliver to this address</span
        >
      </v-btn>
    </v-form>
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
        ref: "fName",
      },
      {
        label: "Last Name",
        state: "",
        grid: 6,
        ref: "lName",
      },
      {
        label: "Email",
        state: "",
        grid: 6,
        ref: "email",
      },
      {
        label: "Phone",
        state: "",
        grid: 6,
        ref: "phone",
      },
      {
        label: "Address",
        state: "",
        grid: 12,
        ref: "address",
      },
      {
        label: "Town/City",
        state: "",
        grid: 4,
        ref: "town",
      },
      {
        label: "State",
        state: "",
        grid: 4,
        ref: "state",
      },
      {
        label: "Zip/Postal Code",
        state: "",
        grid: 4,
        ref: "zip",
      },
      {
        label: "Country",
        state: "",
        enum: ["oman", "egypt", "cairo", "dandil"],
        isSelect: true,
        grid: 12,
        ref: "country",
      },
    ],
    form: null,
    rules: {
      required: (v) => !!v || "filled is required",
    },
  }),
  methods: {
    M_submit() {
      if (this.$refs.form.validate()) {
        const fName = this.$refs.fName[0]._props.value;
        const lName = this.$refs.lName[0]._props.value;
        const address = this.$refs.address[0]._props.value;
        const town = this.$refs.town[0]._props.value;
        const state = this.$refs.state[0]._props.value;
        const zip = this.$refs.zip[0]._props.value;
        const fullName = fName + " " + lName;
        const text = address + " " + town + " " + state + " " + zip;
        this.$emit("setUserInfo", { fullName, text });
        this.nextStep(3);

      }
    },
  },
  props: {
    nextStep: {
      type: Function,
    },
  },
};
</script>
