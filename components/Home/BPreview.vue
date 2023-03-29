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
            <!-- height="100%" -->
            <div class="overflow-hidden rounded-lg fill-width fill-height">
              <nuxt-img  format="webp"
                src="/imgs/home/b-preview/1.png"
                class="rounded-lg fill-width zoom-img-on-hover border-img fill-height"
              ></nuxt-img>
            </div>
            <!-- max-width="580" -->
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="d-flex align-center justify-space-between flex-column"
          >
            <!-- max-width="580" -->
            <div class="overflow-hidden rounded-lg fill-width">
              <nuxt-img  format="webp"
                src="/imgs/home/b-preview/2.png"
                class="rounded-lg fill-width zoom-img-on-hover border-img fill-height"
                style="max-height:266px"
              ></nuxt-img>
            </div>
            <div class="overflow-hidden rounded-lg fill-width">
              <nuxt-img  format="webp"
                src="/imgs/home/b-preview/3.png"
                class="rounded-lg fill-width zoom-img-on-hover border-img fill-height"
                style="max-height:266px"

              ></nuxt-img>
            </div>
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