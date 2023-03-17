<template>
  <!-- <v-app>
    <v-main> -->
  <!-- <section id="products">The Products</section> -->
  <v-container fluid>
    <v-row>
      <v-col md="4" lg="3" v-if="$vuetify.breakpoint.mdAndUp">
        <ProductsAFilter />
      </v-col>
      <v-col md="8" lg="9">
        <!-- <v-sheet min-height="2000px" color="transparent"> -->
          <ProductsBResults />
        <!-- </v-sheet> -->
      </v-col>
    </v-row>
  </v-container>
  <!-- </v-main> -->
  <!-- </v-app> -->
</template>

<script>

export default {};
</script>

<style lang="scss" scoped>
</style>