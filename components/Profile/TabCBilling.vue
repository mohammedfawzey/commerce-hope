<template>
  <v-card flat outlined class="pa-4 pa-md-6 mt-4">
    <!-- delete dialog -->
    <!-- dialog-bottom-transition -->
    <v-dialog
      transition="dialog-bottom-transition"
      v-model="dialog"
      max-width="400"
      content-class="rounded-lg v-box-shadow-second"
    >
      <v-card flat class="pa-6">
        <!-- <v-card-title> -->
        <div class="d-flex align-center">
          <v-icon color="black" left>mdi-alert</v-icon>
          <!-- <v-icon>mdi-alert-octagon</v-icon> -->
          <div class="text-h6 font-weight-bold">Warning</div>
        </div>
        <div class="mt-4 text-body-2">
          Are you sure you want to delete this Address?
        </div>
        <v-card-actions class="pa-0 mt-11 justify-end">
          <v-btn @click="dialog = false" text depressed color="primary">
            <span class="text-capitalize">cancel</span>
          </v-btn>
          <v-btn color="primary" @click="deleteAddress" depressed>
            <span class="text-capitalize">delete</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- add new address dialog -->
    <v-dialog v-model="newAddressDialog" max-width="515">
      <v-card class="pa-6 v-box-shadow-second" flat>
        <v-row>
          <template v-for="(item, itemInd) in newAddressInputs">
            <v-col cols="12" :sm="item.grid ? 6 : 12" :key="itemInd">
              <v-checkbox
                v-if="item.isCheckBox"
                hide-details
                outlined
                class="mt-0"
                v-model="item.state"
              >
                <!-- :label="item.label" -->
              <template #label>
                <span style="color:#212b36" class="text-caption" v-text="item.label"/>
              </template>
              </v-checkbox>
              <v-text-field
                v-else
                hide-details
                outlined
                :label="item.label"
                v-model="item.state"
              />
            </v-col>
          </template>
        </v-row>
      </v-card>
    </v-dialog>
    <div class="sub-title-color text-caption font-weight-bold text-uppercase">
      billing info
    </div>
    <!-- all address-cards -->
    <v-row class="mt-4">
      <v-col cols="12" v-for="(item, itemInd) in addresses" :key="itemInd">
        <!-- single item -->
        <ProfileTabCBillingAddressItem
          :setDeletedAddressId="setDeletedAddressId"
          :item="item"
        />
      </v-col>
    </v-row>
    <!-- add-new-address -->
    <v-btn
      class="mt-4"
      text
      color="primary"
      small
      @click="newAddressDialog = true"
    >
      <v-icon left size="20">mdi-plus</v-icon>
      <span class="text-capitalize font-weight-bold">add new address</span>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    newAddressDialog: false,
    addresses: [
      {
        id: 1,
        address: "german",
        alternativePhone: "637381",
        town: "Ludwigsburg", //Town/City
        state: "Germany",
        zip: "62511", //Zip/Postal Code
        country: "Czech Republic",
        default: true,
      },
      {
        id: 2,
        address: "Egypt",
        alternativePhone: "637381",
        town: "Ludwigsburg", //Town/City
        state: "Germany",
        zip: "62511", //Zip/Postal Code
        country: "Czech Republic",
      },
    ],
    newAddressInputs: [
      {
        label: "Address",
        state: "",
      },
      {
        label: "Alternative Phone",
        state: "",
        grid: true,
      },
      {
        label: "Town/City",
        state: "",
        grid: true,
      },
      {
        label: "State",
        state: "",
        grid: true,
      },
      {
        label: "Zip/Postal Code",
        state: "",
        grid: true,
      },
      {
        label: "Country",
        state: "",
      },
      {
        label: "Use this address as default",
        state: false,
        isCheckBox: true,
      },
    ],
    deleteAddressId: null,
  }),
  methods: {
    setDeletedAddressId(itemId) {
      this.dialog = true;
      this.deleteAddressId = itemId;
    },
    deleteAddress() {
      this.addresses = this.addresses.filter(
        (el) => el.id != this.deleteAddressId
      );
      this.dialog = false;
    },
    addAddress() {
      this.addresses.push();
    },
  },
  watch: {
    dialog(value) {
      if (value && value == true) {
        // this.test();
        this.MX_toggleOverflowBody({ active: this.dialog });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sub-title-color {
  color: #637381;
}
.border-color {
  border-color: rgb(246, 248, 252) !important;
}
</style>