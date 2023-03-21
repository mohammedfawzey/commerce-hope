<template>
  <v-app style="background-color: #f3f4f8">
    <AppsTheHeader />
    <!-- <BaseToastNotification /> -->
    <v-main class="pt-0 pt-md-16">
      <AppsTheSearch />
      <!-- preview -->
      <AppsCardItemPreviewDialog />
      <!-- preview -->
      <!-- <v-btn @click="pushNotification">push notification</v-btn>
      <v-list>
        <template v-for="(item, itemInd) in $store.state.S_notifications">
          <BaseListItem :key="itemInd" :item="item" :has-icon="false" />
        </template>
      </v-list> -->
      <!-- <v-container :fluid="$route.path=='/auth/login'"> -->
      <Nuxt />
      <!-- <v-sheet height="1500px" color="primary"/> -->
      <!-- </v-container> -->
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
