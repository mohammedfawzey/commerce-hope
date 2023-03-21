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
    <!-- {{ isLoaded }} -->
    <slot name="showing-numbers" v-if="isLoaded"></slot>
    <div v-else>
      <v-skeleton-loader
        max-width="140"
        width="140"
        class="hidden-sm-and-down custom-card-heading-loader"
        type="card-heading"
      ></v-skeleton-loader>
      <!-- max-width="50"
        min-width="50" -->
      <v-skeleton-loader
        width="50"
        height="30"
        class="hidden-md-and-up"
        type="button"
      ></v-skeleton-loader>
    </div>
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
            @change="changeSort"
            class="rounded-lg"
            :items="selectOptions"
            v-model="selectOptionsStatus"
          ></v-select>
          <!-- item-value="value" -->
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
    <!-- {{ selectOptionsStatus }} -->
  </div>
</template>

<script>
export default {
  data: () => ({
    selectOptionsStatus: "Asceding",
    showNumberStatus: 6,
    selectOptions: [
      "Top Rated",
      "Asceding",
      "Desceding",
      "Price, low - high",
      "Price, high - low",
      // "Oldest",
      // "Newest",
    ],
    showNumber: [6, 12, 18, 24, 30],
  }),
  computed: {
    C_selectedOption() {
      return this.selectOptionsStatus === "Top Rated"
        ? { head: "top", value: 1 }
        : this.selectOptionsStatus === "Asceding"
        ? { head: "name", value: 1 }
        : this.selectOptionsStatus === "Desceding"
        ? { head: "name", value: -1 }
        : this.selectOptionsStatus === "Price, low - high"
        ? { head: "price", value: 1 }
        : this.selectOptionsStatus === "Price, high - low"
        ? { head: "price", value: -1 }
        : { head: "name", value: 1 };
    },
  },
  methods: {
    changeCardLimitsInPage() {
      this.$emit("changeCardLimitsInPage", this.showNumberStatus);
    },
    changeSort() {
      const { name, price, ...queryOptions } = this.$route.query;
      this.$router.replace({
        query: {
          ...queryOptions,
          [this.C_selectedOption.head]: this.C_selectedOption.value,
        },
      });
    },
  },
  props: {
    isLoaded: {
      type: Boolean,
      // default: false,
    },
  },
};
</script>
