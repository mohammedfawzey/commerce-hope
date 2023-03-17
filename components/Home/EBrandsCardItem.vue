<template>
  <v-card outlined class="pa-3 text-center rounded-lg mx-auto v-box-shadow">
    <v-btn color="primary darken-2" fab depressed>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
    <div class="mt-3 text-h5 font-weight-bold text--head">
      {{ item.title }}
    </div>
    <div class="mt-2 t text-caption text-md-body-2 blue-grey--text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s.
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    item: { required: true },
  },
};
</script>

<style lang="scss" scoped>
</style>