<template>
  <v-card outlined flat class="border-color rounded-lg">
    <v-card-text class="pb-0">
      <v-tabs color="primary darken-2" v-model="activeTab">
        <v-tab>
          <span class="text-capitalize text-body-2 font-weight-medium"
            >Product description</span
          >
        </v-tab>
        <!-- <v-tab>
          <span class="text-capitalize text-body-2 font-weight-medium"
            >Reviews</span
          >
        </v-tab> -->
      </v-tabs>
    </v-card-text>
    <v-divider />
    <v-card-text>
      <v-tabs-items v-model="activeTab">
        <v-tab-item>{{
          C_item.description ||
          "Maybelline is finally here with its first high coverage BB cream, which is known as the Maybelline Super Cover BB Cream."
        }}</v-tab-item>
        <!-- <v-tab-item>review</v-tab-item> -->
      </v-tabs-items>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    activeTab: 0,
  }),
  props: {
    C_item: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>