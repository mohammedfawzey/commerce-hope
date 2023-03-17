<template>
  <v-card outlined flat class="pa-4 px-3 pa-sm-8 border-color">
    <v-dialog v-model="dialog" />
    <!-- address-info -->
    <div class="text-caption" style="color: rgb(33, 43, 54)">
      <span style="color: #637381"> Address: </span>
      <span>{{ item.address }},</span>
      <span> {{ item.town }},</span>
      <span> {{ item.state }},</span>
      <span> {{ item.country }},</span>
      <span> {{ item.zip }}</span>
    </div>
    <!-- action -->
    <div class="card-action mt-3">
      <v-btn text @click="setDeletedAddressId(item.id)" small color="error">
        <v-icon left>mdi-delete-outline</v-icon>
        <span class="text-capitalize font-weight-bold">delete</span>
      </v-btn>
      <v-btn small text class="ml-1" color="primary">
        <v-icon left>mdi-pencil</v-icon>
        <span class="text-capitalize font-weight-bold">edit</span>
      </v-btn>
      <v-chip
        small
        color="rgba(24, 144, 255, 0.16)"
        label
        class="rounded-lg ml-1"
        v-if="item.default === true"
      >
        <span class="primary--text font-weight-bold">Default</span>
      </v-chip>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    item: {
      required: true,
    },
    setDeletedAddressId: {
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
.border-color {
  border-color: rgb(246, 248, 252) !important;
}
</style>