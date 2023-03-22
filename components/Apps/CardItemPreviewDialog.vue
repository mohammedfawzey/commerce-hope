<template>
  <v-dialog
    v-model="active"
    max-width="900"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    content-class="hidden-xs-only"
    v-if="$vuetify.breakpoint.smAndUp"
  >
    <AppsTheCardItemContent :C_item="C_item" dialog />
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    active: false,
  }),
  computed: {
    C_item() {
      return this.$store.state.S_previewDialog.item;
    },
  },
  watch: {
    "$store.state.S_previewDialog.status"(value) {
      this.active = value;
    },
    active(value) {
      this.$store.commit("M_setPreviewDialog", {
        status: value,
        item: this.$store.state.S_previewDialog.item,
      });
    },
  },
};
</script>
