<template>
  <v-menu
    v-model="active"
    offset-y
    left
    max-width="360"
    transition="scale-transition"
    origin="right top"
    @input="MX_toggleOverflowBody({ active })"
  >
    <!-- content-class="pa-3 menu-arrow white" -->
    <template #activator="{ on, attrs }">
      <v-btn depressed v-on="on" v-bind="attrs" icon width="40" height="40">
        <v-badge overlap content="1" color="error" offset-x="10">
          <v-icon :color="active ? 'primary' : 'rgb(99, 115, 129)'"
            >mdi-bell</v-icon
          >
        </v-badge>
      </v-btn>
    </template>
    <v-card class="pa-3" outlined height="517">
      <v-list subheader>
        <v-subheader>
          <div class="text-body-1 black--text font-w-600">Notifications</div>
        </v-subheader>
        <v-divider class="py-1" />
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Black Friday deal</v-list-item-title>
            <v-list-item-subtitle class="text-caption">
              Get up to 35% off on premium templates until November 29th.
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <div class="primary--text text-caption pointer">Read More</div>
          </v-list-item-action>
        </v-list-item>
        <v-divider class="py-1" />
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    active: false,
  }),
};
</script>

<style lang="scss" scoped>
$arrow-width: 8px;
.menu-arrow {
  &::before {
    position: absolute;
    content: "";
    border: $arrow-width solid transparent;
    border-bottom-color: red;
    right: $arrow-width + 2;
    top: -$arrow-width/2;
    z-index: 10000;
  }
}
.after-shadow {
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    // background: red;
    z-index: 1111111111;
    box-shadow: inset 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
  }
}
</style>