<template>
  <v-app style="background-color: #f3f4f8">
    <!-- <nuxt-img src="/imgs/home/a-landing/1.png"></nuxt-img> -->
    <AppsTheHeader />
    <v-main class="pt-0 pt-md-16">
      <AppsTheSearch />
      <AppsCardItemPreviewDialog />
      <Nuxt />
    </v-main>
    <AppsTheFooter />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  methods: {
    async auth() {
      try {
        const result = await this.$axios.get("/api/v1/auth/me");
      } catch (err) {
        this.$store.commit("M_setUserAuth", false);
        this.$store.commit("M_setUser", null);
      }
    },
    pushNotification() {
      const payload = { title: "hello" };
      this.$store.commit("M_addNotification", payload);
    },
  },
};
</script>
