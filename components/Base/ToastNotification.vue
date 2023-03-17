<template>
  <section id="notifications">
    <template v-for="(item, itemInd) in $store.state.S_notifications">
      <BaseToastNotificationListItem :key="itemInd" :item="item" />
    </template>
  </section>
</template>

<script>
export default {
  data: () => ({
    snackbar: true,
  }),
};
</script>

<style lang="scss" scoped>
</style>