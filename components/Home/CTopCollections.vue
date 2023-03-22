<template>
  <section id="c-top-collections">
    <div class="top-collections-header">
      <div class="text-h4 text-sm-h2 text-center font-weight-bold text-head">
        Top Collections
      </div>
      <div class="text-body-1 text-center text-subhead mt-4">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry.
      </div>
    </div>
    <v-row class="mt-6">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(item, itemInd) in items.slice(0, 6)"
        :key="itemInd"
      >
        <BaseCardItem :item="item" />
      </v-col>
    </v-row>
    <div class="view-all d-flex justify-end mt-2">
      <v-btn
        class="text-capitalize font-w-600"
        nuxt
        to="/products"
        color="primary darken-2"
        text
      >
        <span>view all</span>
        <v-icon right size="25">mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <!-- view-image -->
    <div class="view-image mt-8">
      <!-- aspect-ratio="480/193" -->
      <!-- aspect-ratio="2.4870466321243523" -->
      <!-- eager -->
      <!-- contain -->
      <v-img
        :src="require('@/assets/imgs/home/c-top-collections/view.png')"
        :lazy-src="require('@/assets/imgs/home/c-top-collections/view.png')"
        class="rounded-lg zoom-img-on-hover"
        min-height="160"
      ></v-img>
    </div>
  </section>
</template>

<script>
import products from "@/data/products.json";
export default {
  data: () => ({
    items: products,
  }),
};
</script>

<style lang="scss" scoped>
.image-border {
  border: 1px solid rgb(196, 205, 213);
}
// .mini-image-border {
//   border: 3px solid rgb(13, 68, 251);
// }
.active-mini-image {
  background-color: rgba(22, 28, 36, 0.48);
  border: 3px solid rgb(13, 68, 251);
}
</style>