<template>
  <!-- <nav class="transparent"> -->
  <div>
    <AppsTheHeaderAppBar class="hidden-sm-and-down"/>
    <AppsTheHeaderAppBarMobile class="hidden-md-and-up"/>

  </div>
  <!-- <v-navigation-drawer v-model="drawer" app fixed></v-navigation-drawer> -->
  <!-- </nav> -->
</template>
<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>
