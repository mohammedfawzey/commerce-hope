<template>
  <section id="b-preview">
    <v-container>
      <v-card
        class="mx-auto shrink-width-on-sm-and-down"
        flat
        color="transparent"
      >
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="d-flex align-start align-md-center justify-center"
          >
            <v-img
              contain
              :src="require('@/assets/imgs/home/b-preview/1.png')"
              height="100%"
              class="rounded-lg zoom-img-on-hover border-img"
            ></v-img>
            <!-- max-width="580" -->
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="d-flex align-center justify-space-between flex-column"
          >
            <!-- max-width="580" -->
            <v-img
              max-height="266"
              class="rounded-lg zoom-img-on-hover border-img"
              :src="require('@/assets/imgs/home/b-preview/2.png')"
            ></v-img>
            <!-- max-width="580" -->
            <v-img
              max-height="266"
              class="mt-3 rounded-lg zoom-img-on-hover border-img"
              :src="require('@/assets/imgs/home/b-preview/3.png')"
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";
.shrink-width-on-sm-and-down {
  @media #{map-get($display-breakpoints,"sm-and-down")} {
    max-width: 580px;
  }
}
.border-img {
  border: 1px solid rgb(196, 205, 213);
}
</style>