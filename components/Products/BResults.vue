<template>
  <section id="b-filter-results" class="ml-md-3 ml-lg-1">
    <!-- filter-dialog -->
    <v-dialog
      v-model="filterDialogStatus"
      fullscreen
      v-if="$vuetify.breakpoint.smAndDown"
    >
      <ProductsAFilter is-dialog @closeFilterDialog="closeFilterDialog" />
    </v-dialog>
    <div class="The_controller">
      <ProductsBResultsController
        @changeCardLimitsInPage="changeCardLimitsInPage"
        :is-loaded="loaded"
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
    <div class="loaded-state" v-show="loaded && items.length >= 1">
      <div class="The_products mt-4">
        <v-row id="products">
          <v-col
            lg="3"
            cols="6"
            sm="4"
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
        <v-pagination
          :length="C_paginationLength"
          v-model="page"
          @input="checkPageChange"
          class="custom_pagination_styles"
          color="transparent"
        ></v-pagination>
      </div>
    </div>
    <div class="in-loading-state" v-show="!loaded">
      <div class="the_products mt-4">
        <v-row id="products">
          <v-col
            v-for="n in items.slice(0, 6).length"
            :key="n"
            cols="6"
            sm="4"
            lg="3"
          >
            <!-- min-height="380" -->
            <!-- type="card, list-item-two-line, actions" -->
            <v-skeleton-loader
              height="380"
              type="image, list-item, list-item-two-line, actions"
              class="custom_btn_loader"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="empty-state" v-show="loaded && items.length <= 0">
      <nuxt-img  format="webp"
        src="/imgs/no-data.svg"
        width="500"
        height="500"
        class="mx-auto d-block"
      ></nuxt-img>
    </div>
  </section>
</template>

<script>
import products from "@/data/products.json";
// page 1 : 6*0=>6*1(v)
// page 2 : 6*1=>6*2
// page 3 : 6*2=>6*3
// page(6) * num(6) > 32 ?32:
export default {
  data: () => ({
    filterDialogStatus: false,
    items: products,
    page: 1,
    cardNumberInPage: 6,
    loaded: false,
  }),
  mounted() {
    this.filterProductsWithBounce();
  },
  methods: {
    applySort() {
      // if(this.$route.query.sort==="Asceding"){

      // }
      if (this.$route.query.top == 1) {
        this.items = this.items.sort((a, b) => Number(b.rate) - Number(a.rate));
      }
      if (this.$route.query.name == -1) {
        this.items = this.items.reverse();
      }
      if (this.$route.query.price == 1) {
        this.items = this.items.sort((a, b) => a.price - b.price);
      }
      if (this.$route.query.price == -1) {
        this.items = this.items.sort((a, b) => b.price - a.price);
      }
      // if (this.$route.query.name == -1) {
      // }
    },
    changeCardLimitsInPage(cardNumberInPage) {
      // default : 6
      this.cardNumberInPage = cardNumberInPage;
      this.$router.replace({ query: { ...this.$route.query, page: 1 } });
      this.filterProductsWithBounce();
    },
    closeFilterDialog() {
      this.filterDialogStatus = false;
    },
    checkPageChange() {
      this.$router.replace({
        query: { ...this.$route.query, page: this.page },
      });
    },
    // gender | color | size | price
    //el{gender,colors[],sizes[],price}
    filterProducts() {
      this.page = 1;
      const genders = this.$route.query.gender || []; // genders["man","women"]
      const colors = this.$route.query.color || []; //colors["primary","error"]
      const sizes = this.$route.query.size || []; // sizes["xs","lg"]
      const minPrice = this.$route.query.min || 0;
      const maxPrice = this.$route.query.max || 50;
      this.items = products.filter((el) => {
        //el{gender:"men",colors:["primary","error"],sizes:["sm","md"]}
        const gendersState =
          genders && genders.length >= 1 ? genders.includes(el.gender) : el;

        const colorsState = el.colors.some((colorEle) => {
          return colors.length >= 1 ? colors.includes(colorEle) : true;
        });
        const sizesState = el.sizes.some((sizeEle) => {
          return sizes.length >= 1 ? sizes.includes(sizeEle) : true;
        });
        const pricesState =
          Number(el.price) >= Number(minPrice) &&
          Number(el.price) <= Number(maxPrice);
        // return colorsState && gendersState && sizesState;
        return gendersState && colorsState && sizesState && pricesState;
        //
      });
      this.applySort();
    },
    filterProductsWithBounce() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.filterProducts();
        this.loaded = false;
        this.$vuetify.goTo("#products", { duration: 750 });
        setTimeout(() => {
          this.$nuxt.$loading.finish();
          this.loaded = true;
          // this.$vuetify.goTo("#products", { duration: 750 });
          this.page = Number(this.$route.query.page) || 1;
        }, 2000);
      });
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
  watch: {
    "$route.query"() {
      this.filterProductsWithBounce();
    },
  },
};
</script>

<style lang="scss" scoped>
.border-btn {
  border-color: rgb(196, 205, 213) !important;
}
</style>
