<template>
  <div class="product_detail-header">
    <div class="text-h6 text-sm-h5 text-md-h4 text-head font-weight-bold">
      {{ title }}
    </div>
    <v-breadcrumbs :items="C_path">
      <template #divider>
        <v-icon small class="px-0">mdi-chevron-right</v-icon>
      </template>
      <template #item="{ item }">
        <v-breadcrumbs-item
          :disabled="item.disabled"
          nuxt
          :to="item.route"
          link
        >
          <span class="text-caption">{{ item.text }}</span>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      default: "title",
    },
  },
  computed: {
    C_path() {
      return [
        {
          text: "Home",
          route: "/",
        },
        {
          text: this.title,
          disabled: true,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>