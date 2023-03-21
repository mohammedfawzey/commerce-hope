<template>
  <v-menu
    offset-y
    v-model="active"
    nudge-bottom="8"
    class="outlined"
    right
    content-class="v-box-shadow"
    transition="scale-transition"
    origin="top right"
    min-width="230"
  >
    <template #activator="{ attrs }">
      <!-- v-on="on"
        v-bind="attrs" -->
      <v-btn
        :input-value="active"
        icon
        v-bind="attrs"
        @click.stop="openProfileMenu"
        width="56"
        height="56"
        nuxt
      >
        <!-- to="/auth/login" -->
        <v-avatar color="rgb(196, 205, 213)" size="40">
          <v-icon color="white">mdi-account</v-icon>
          <!-- {{ S_auth }} -->
        </v-avatar>
      </v-btn>
    </template>
    <v-list nav dense outlined subheader>
      <div class="list-subheader pa-2 pt-4">
        <div class="text-capitalize line-1 font-w-600 black--text text-body-1">
          <!-- mohammed shabaan -->
          <!-- {{ user.fullName }} -->
          mohammed fawzey
        </div>
        <span class="text-caption">
          <!-- {{ user.email }} -->
          mohammedlasydy21@gmail.com
        </span>
      </div>
      <v-divider class="mb-2" />
      <!-- <v-list-item-subtitle> </v-list-item-subtitle> -->
      <template v-for="(item, itemInd) in items">
        <BaseListItem
          content-class="text-body-1 font-weight-regular"
          :key="itemInd"
          :item="item"
        />
      </template>
      <div class="pa-2">
        <v-btn class="btn-custom-border-color" block outlined @click="logout">
          <v-icon left>mdi-logout</v-icon>
          <span class="text-capitalize text-body-2 font-weight-bold"
            >logout</span
          >
        </v-btn>
      </div>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    active: false,
    items: [
      {
        title: "home",
        icon: "mdi-home",
        route: "/",
      },
      {
        title: "profile",
        icon: "mdi-account",
        route: "/profile",
      },
    ],
  }),
  methods: {
    openProfileMenu() {
      // if (!this.$store.state.auth.loggedIn) {
      //   return this.$router.push({ path: "/auth/login" });
      // }
      this.active = !this.active;
    },
    async logout() {
      // await this.$auth.logout();
      this.$router.push({ path: "/auth/login" });
    },
  },
  watch: {
    active(value) {
      this.MX_toggleOverflowBody({ active: value });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>