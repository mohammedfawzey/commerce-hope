<template>
  <section id="e-brands">
    <div class="brands-products-header">
      <div class="text-h2 text-center font-weight-bold text-head">Brands</div>
      <div class="text-body-1 text-center text-subhead mt-4">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry.
      </div>
    </div>
    <v-row class="mt-5" justify="center">
      <v-col cols="12" sm="6" md="4" lg="3" v-for="(item, itemInd) in items" :key="itemInd">
        <HomeEBrandsCardItem :item="item" />
      </v-col>
      <v-icon>mdi-van</v-icon>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-van-utility",
          title: "Free Shipping",
        },
        {
          icon: "mdi-face-agent",
          title: "Support 24/7",
        },
        {
          icon: "mdi-backup-restore",
          title: "Return 30 day",
        },
        {
          icon: "mdi-currency-usd",
          title: "Payment Secure",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>