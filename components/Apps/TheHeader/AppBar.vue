<template>
  <v-app-bar class="app-bar-bg v-box-shadow" height="64" app fixed>
    <!-- logo -->
    <div class="logo">
      <div class="logo__wrapper d-flex align-center gap-7">
        <!-- v-ripple -->
        <BaseLogo
          class="pointer"
          @click.native="MX_redirectTo({ path: '/' })"
        />
        <div class="d-inline-block text-uppercase">
          <div class="head font-weight-bold font-s-20 line-1">Commercehope</div>
          <div class="subhead text-small">
            Reactjs ecommerce script you need
          </div>
        </div>
      </div>
    </div>
    <!-- links -->
    <v-spacer />
    <!--  -->
    <AppsTheHeaderAppBarLinks class="hidden-sm-and-down" />
    <!-- notification -->
    <AppsTheHeaderAppBarLinksNotificationMenu />
    <!-- cart -->
    <v-btn
      icon
      color="rgb(99, 115, 129)"
      nuxt
      to="/checkout"
      width="40"
      height="40"
    >
      <!-- :color="active?'primary':'rgb(99, 115, 129)'" -->
      <v-badge
        overlap
        :content="$store.state.S_cart.length || '0'"
        color="rgb(13, 68, 251)"
        offset-x="7"
      >
        <v-icon> mdi-basket </v-icon>
      </v-badge>
    </v-btn>
    <!-- search -->
    <v-btn icon width="40" height="40" @click="openSearchDialog">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <!-- profile -->
    <AppsTheHeaderAppBarProfileMenu />
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    async logout() {
      const result = await this.$auth.logout();
      this.$router.push("/auth/login");
    },
    openSearchDialog() {
      // this.$store.commit("M_setSearchDialog", true);

      this.$store.commit(
        "M_setSearchDialog",
        !this.$store.state.S_searchDialog.status
      );
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
</style>