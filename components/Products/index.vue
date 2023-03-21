<template>
  <!-- <v-app>
    <v-main> -->
  <!-- <section id="products">The Products</section> -->
  <v-container fluid>
    <v-row no-gutters>
      <v-col md="4" lg="3" class="hidden-sm-and-down">
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
