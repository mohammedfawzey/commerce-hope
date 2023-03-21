<template>
  <v-snackbar
    v-model="snackbar"
    transition="slide-x-reverse-transition"
    app
    @input="checkNotification"
    top
    right
    color="success"
    :style="[
      {
        transform: `translateY(${C_notificationPosition * 60}px)`,
      },
    ]"
  >
    <!-- timeout="30000" -->
    <!-- :style="[{ transform: `translateY(${C_notificationsLength * 70})px` },{backgroundColor:'red'}]" -->
    <template #action>
      <v-btn icon @click="deleteTheNotification">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
    <span>logged in successfully</span>
    <span>{{ C_notificationPosition }}</span>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    snackbar: true,
  }),
  props: {
    item: {
      required: true,
    },
  },
  computed: {
    C_notificationPosition() {
      //   return this.$store.state.S_notifications;
      const notifications = this.$store.state.S_notifications;
      const THE_NOTIFICATION = notifications.find((el) => {
        return el.id == this.item["id"];
      });
      return notifications.indexOf(THE_NOTIFICATION);
    },
  },
  methods: {
    deleteTheNotification() {
      this.$store.commit("M_deleteNotification", this.item);
    },
    async checkNotification() {
      await this.deleteTheNotification();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>