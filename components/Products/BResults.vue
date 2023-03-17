<template>
  <section id="b-filter-results">
    <!-- filter-dialog -->
    <v-dialog v-model="filterDialogStatus" fullscreen v-if="$vuetify.breakpoint.smAndDown">
      <ProductsAFilter is-dialog @closeFilterDialog="closeFilterDialog" />
    </v-dialog>
    <div class="The_controller">
      <ProductsBResultsController
        @changeCardLimitsInPage="changeCardLimitsInPage"
      >
        <template #showing-numbers>
          <div class="showing-numbers hidden-sm-and-down">
            Showing {{ C_startCard }}-{{ C_endCard }} of {{ items.length }}
          </div>
          <v-btn
            outlined
            @click="filterDialogStatus = true"
            small
            class="border-btn hidden-md-and-up"
            color="blue-grey"
          >
            <v-icon>mdi-tune</v-icon>
          </v-btn>
        </template>
      </ProductsBResultsController>
    </div>
    <!-- <div class="showing-numbers hidden-sm-and-down">
      Showing {{ C_startCard }}-{{ C_endCard }} of {{ items.length }}
    </div> -->
    <div class="The_products mt-4">
      <v-row>
        <v-col
          cols="6"
          sm="4"
          lg="3"
          v-for="(item, itemInd) in items.slice(
            cardNumberInPage * (page - 1),
            cardNumberInPage * page
          )"
          :key="itemInd"
        >
          <BaseCardItem :item="item" small-text />
        </v-col>
      </v-row>
    </div>
    <!-- pagination -->
    <div class="pagination mt-8">
      <!-- <span>from :{{ cardNumberInPage * (page - 1) + 1 }}</span>
      <span
        >after:
        {{
          cardNumberInPage * page > items.length
            ? items.length
            : cardNumberInPage * page
        }}</span
      > -->
      <v-pagination :length="C_paginationLength" v-model="page" color="primary darken-2"></v-pagination>
    </div>
  </section>
</template>

<script>
import items from "~/data/products.json";
// page 1 : 6*0=>6*1(v)
// page 2 : 6*1=>6*2
// page 3 : 6*2=>6*3
// page(6) * num(6) > 32 ?32:
export default {
  data: () => ({
    filterDialogStatus: false,
    items,
    page: 1,
    cardNumberInPage: 6,
  }),
  methods: {
    changeCardLimitsInPage(cardNumberInPage) {
      // default : 6
      console.log("cardNumberInPage", cardNumberInPage);
      this.cardNumberInPage = cardNumberInPage;
    },
    closeFilterDialog() {
      this.filterDialogStatus = false;
    },
  },
  computed: {
    C_paginationLength() {
      return Math.ceil(Number(this.items.length / this.cardNumberInPage));
    },
    C_startCard() {
      return this.cardNumberInPage * (this.page - 1) + 1;
    },
    C_endCard() {
      return this.cardNumberInPage * this.page > this.items.length
        ? this.items.length
        : this.cardNumberInPage * this.page;
    },
  },
};
</script>

<style lang="scss" scoped>
.border-btn {
  border-color: rgb(196, 205, 213) !important;
}
</style>
