<template>
  <section class="links mr-4">
    <div
      class="links__wrapper d-flex align-center justify-space-between gap-25"
    >
      <span class="link">
        <v-hover v-slot="{ hover }">
          <nuxt-link to="/">
            <span
              :class="{ 'grey--text': hover }"
              class="text-capitalize font-s-14 font-w-600"
              >home</span
            >
          </nuxt-link>
        </v-hover>
      </span>
      <!-- menu -->
      <AppsTheHeaderAppBarLinksCategoriesMenu />
      <!-- other links -->
      <span
        class="link"
        v-for="(link, linkInd) in links.slice(2)"
        :key="linkInd"
      >
        <v-hover v-slot="{ hover }">
          <nuxt-link :to="link.route">
            <span
              :class="{ 'grey--text': hover }"
              class="text-capitalize font-s-14 font-w-600"
              v-text="link.title"
            />
          </nuxt-link>
        </v-hover>
      </span>
    </div>
  </section>
</template>

<script>
import links from "@/data/links.json";
export default {
  data: () => ({
    links,
  }),
};
</script>
<style lang="scss" scoped>
</style>