<template>
  <div
    class="
      result-controller
      blue-grey--text
      text-body-1
      d-flex
      align-center
      justify-space-between
      gap-20
    "
  >
    <!-- <div class="number-show">Showing 1-12 Of 13 Items</div> -->
    <!-- <div class="showing-numbers hidden-sm-and-down">
      Showing {{ C_startCard }}-{{ C_endCard }} of {{ items.length }}
    </div> -->
    <slot name="showing-numbers"></slot>
    <div class="result-filter d-flex align-center">
      <span class="mr-2 hidden-sm-and-down">Sort:</span>
      <div
        class="result-filter-options d-flex align-center justify-space-between"
      >
        <div class="f-select">
          <v-select
            outlined
            style="max-width: 150px"
            dense
            color="primary darken-3"
            hide-details
            class="rounded-lg"
            :items="selectOptions"
            v-model="selectOptionsStatus"
          ></v-select>
        </div>
        <div class="s-select ml-2">
          <v-select
            dense
            hide-details
            color="primary darken-3"
            outlined
            class="rounded-lg"
            style="max-width: 150px"
            @change="changeCardLimitsInPage"
            :items="showNumber"
            v-model="showNumberStatus"
          ></v-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectOptionsStatus: "Top Rated",
    showNumberStatus: 6,
    selectOptions: [
      "Top Rated",
      "Asceding",
      "Desceding",
      "Price,low - high",
      "Price, high - low",
      "Oldest",
      "Newest",
    ],
    showNumber: [6, 12, 18, 24, 30],
  }),
  methods: {
    changeCardLimitsInPage() {
      console.log("changed");
      this.$emit("changeCardLimitsInPage", this.showNumberStatus);
    },
  },
};
</script>
