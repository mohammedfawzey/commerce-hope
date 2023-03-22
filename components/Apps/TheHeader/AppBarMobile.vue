<template>
  <v-app-bar app fixed bottom class="toolbar_content_pa_0 app-bar-bg">
    <div class="d-flex align-center justify-space-between" style="width: 100%">
      <div
        class="fourth-width"
        v-for="(item, itemInd) in mobileLinks"
        :key="itemInd"
      >
        <v-btn
          block
          height="56"
          :nuxt="item.route ? true : false"
          :to="item.route ? `${item.route}` : ''"
          text
          @click="item.hasMethod ? openSearchDialog() : ''"
          active-class="primary darken-2 white--text"
        >
          <div
            v-if="item.badge"
            class="d-flex flex-column align-center justify-center"
          >
            <v-badge
              overlap
              offset-x="7"
              :content="$store.state.S_cart.length || '0'"
              color="#D33131"
            >
              <v-icon class="mb-1">{{ item.icon }}</v-icon>
              <!-- d-none d-sm-inline-block -->
            </v-badge>
            <span class="text-capitalize txt-small-no-color">{{
              item.title
            }}</span>
          </div>
          <!-- :to="item.route ? `/${item.route}` : ''" -->
          <div v-else class="d-flex flex-column align-center justify-center">
            <v-icon class="mb-1">{{ item.icon }}</v-icon>
            <!-- d-none d-sm-inline-block -->
            <span class="text-capitalize txt-small-no-color">{{
              item.title
            }}</span>
          </div>
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    mobileLinks: [
      {
        title: "home",
        icon: "mdi-home-outline",
        route: "/",
      },
      {
        title: "search",
        icon: "mdi-magnify",
        hasMethod: true,
      },
      {
        title: "checkout",
        icon: "mdi-basket",
        route: "/checkout",
        badge: true,
      },
      // {
      //   title: "notification",
      //   icon: "mdi-bell-outline",
      // },
      {
        title: "user",
        icon: "mdi-account-outline",
        route: "/profile",
      },
    ],
  }),
  methods: {
    async logout() {
      const result = await this.$auth.logout();
      this.$router.push("/auth/login");
    },
    openSearchDialog() {
      this.$store.commit("M_setSearchDialog", true);
    },
  },
};
</script>
<style scoped lang="scss">
.subhead {
  line-height: 1.5;
  margin-top: 1px;
}
.app-bar-bg {
  background-color: transparent;
  background: rgb(255 255 255 / 62%) !important;
  backdrop-filter: blur(16px);
}
.fifth-width {
  width: 20%;
}
.fourth-width {
  width: 25%;
}
</style>