<template>
  <v-app>
    <v-main class="pt-0">
      <!-- bg-shape -->
      <v-sheet
        min-height="278"
        class="bg-shape pa-3 d-flex align-center align-md-end"
      >
        <v-container fluid class="text-center">
          <div class="d-flex flex-column flex-md-row align-center">
            <div class="avatar-box mr-0 mb-3 mb-md-0 mr-md-8">
              <v-avatar color="white" :size="C_avatarSize + 2">
                <v-avatar color="rgb(255, 193, 7)" :size="C_avatarSize">
                  <div
                    class="
                      text-h3 text-md-h2
                      font-weight-bold
                      text-capitalize text-logo
                    "
                  >
                    m
                  </div>
                </v-avatar>
              </v-avatar>
            </div>
            <div class="bg-shape-info">
              <div class="text-h6 text-md-h5 white--text font-weight-bold">
                Mohammed Shabaan
              </div>
              <p
                class="
                  text-body-2 text-md-body-1
                  mb-0
                  grey--text
                  text--lighten-2
                "
              >
                mohammedalsydy21@gmail.com
              </p>
            </div>
          </div>
        </v-container>
      </v-sheet>
      <!-- content -->
      <v-container class="mt-8" fluid>
        <!-- tabs -->
        <v-tabs
          :show-arrows="$vuetify.breakpoint.smAndDown"
          :vertical="$vuetify.breakpoint.mdAndUp"
          :centered="!$vuetify.breakpoint.mdAndUp"
          color="primary darken-2"
          center-active
        >
          <!-- active-class="primary-lighten" -->
          <v-tab
            class="justify-start"
            v-for="(item, itemInd) in tabs"
            :key="itemInd"
          >
            <v-icon left v-text="item.icon" />
            <span class="text-capitalize ml-2">
              {{ item.title }}
            </span>
          </v-tab>
          <!--  -->
          <v-tab-item v-for="(item, itemInd) in tabs" :key="itemInd">
            <div class="pl-md-6 mt-8 mt-md-0">
              <component :is="item.tabItem" />
            </div>
          </v-tab-item>
        </v-tabs>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    tabs: [
      {
        title: "invoice",
        icon: "mdi-receipt-text",
        tabItem: "ProfileTabAInvoice",
      },
      {
        title: "general",
        icon: "mdi-account",
        tabItem: "ProfileTabBGeneral",
      },
      {
        title: "billing",
        icon: "mdi-list-box",
        tabItem: "ProfileTabCBilling",
      },
      {
        title: "change password",
        icon: "mdi-key",
        tabItem: "ProfileTabDChangePassword",
      },
    ],
  }),
  computed: {
    C_avatarSize() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 128;
      } else {
        return 80;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.text-logo {
  color: rgb(33, 43, 54) !important;
}
.primary-lighten {
  background-color: rgba(0, 125, 252, 0.2) !important;
}
</style>