<template>
  <v-row>
    <v-col v-for="(item, itemInd) in items" :key="itemInd" cols="12" md="4">
      <v-card
        outlined
        class="mx-auto text-center rounded-lg py-5 border-color"
        flat
      >
        <v-card-text>
          <div class="card-icon">
            <v-avatar color="rgba(13, 68, 251, 0.08)" size="64">
              <v-icon color="primary darken-2" large>{{ item.icon }}</v-icon>
            </v-avatar>
          </div>
          <div class="title my-5 text-head text-body-1 font-weight-bold">
            {{ item.title }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: "mdi-check-decagram",
        title: "100% Original",
      },
      {
        icon: "mdi-clock-outline",
        title: "10 Day Replacement",
      },
      {
        icon: "mdi-shield-check-outline",
        title: "1 Year Warranty",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
</style>