<template>
  <v-list-item
    link
    nuxt
    :to="item.route"
    :class="[
      { 'dense-list-item': dense },
      { 'x-small-list-item pl-1': xDense },
    ]"
  >
    <v-list-item-icon class="mr-3" v-if="hasIcon">
      <v-icon color="black">{{ item.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title class="text-capitalize" :class="contentClass">{{
        item.title || item
      }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
    },
    hasIcon: {
      type: Boolean,
      default: true,
    },
    dense: {
      type: Boolean,
      default: false,
    },
    xDense: {
      type: Boolean,
      default: false,
    },
    contentClass: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-color {
  color: #212b36 !important;
}
</style>