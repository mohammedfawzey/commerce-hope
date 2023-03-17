<template>
  <v-app style="background-color: #f3f4f8">
    <v-main class="pt-10 pb-0">
      <section id="product-detail">
        <v-container>
          <!-- header -->
          <div class="product_detail-header">
            <div
              class="text-h6 text-sm-h5 text-md-h4 text-head font-weight-bold"
            >
              {{ C_item["title"] }}
            </div>
            <v-breadcrumbs :items="C_path">
              <template #divider>
                <v-icon small class="px-0">mdi-chevron-right</v-icon>
              </template>
              <template #item="{ item }">
                <v-breadcrumbs-item
                  :disabled="item.disabled"
                  nuxt
                  :to="item.route"
                  link
                >
                  <span class="text-caption">{{ item.text }}</span>
                </v-breadcrumbs-item>
              </template>
            </v-breadcrumbs>
          </div>
          <!-- theProduct -->
          <AppsTheCardItemContent :C_item="C_item"/>
          <!-- Product_tabs -->
          <TheProductTabs :C_item="C_item" class="mt-4"/>
          <!-- Product_Services -->
          <div class="product_services mt-8">
            <TheProductServices />
          </div>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script>
import products from "~/data/products.json";
export default {
  data: () => ({
    products,
    C_item: {},
  }),
  mounted() {
    this.getTheProduct();
  },
  methods: {
    getTheProduct() {
      this.C_item = this.products.find((el) => el.id == this.$route.params.id);
    },
  },
  computed: {
    C_path() {
      return [
        {
          text: "Home",
          route: "/",
        },
        {
          text: this.C_item["title"] ? this.C_item["title"] : "title",
          disabled: true,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.card-image {
  border: 1px solid rgb(196, 205, 213);
  border-radius: 16px;
}
.the_btn {
  width: 38px;
  height: 38px;
}
$box-size: 16px;
.color_box {
  height: $box-size;
  width: $box-size;
  border-radius: 5px;
}
.active-color {
  width: $box-size + 6px !important;
  height: $box-size + 6px !important;
}
.mini-images {
  .box-image {
    border: 3px solid rgb(13, 68, 251);
    background: rgba(22, 28, 36, 0.48);
    border-radius: 8px;
  }
}
.quantity-controller {
  border-radius: 8px;
  min-width: 105px;
  border: 1px solid rgb(196, 205, 213);
}
.custom-border {
  border: 2px solid rgb(196, 205, 213) !important;
  box-shadow: rgb(145 158 171 / 20%) 0px 11px 15px -7px,
    rgb(145 158 171 / 14%) 0px 24px 38px 3px,
    rgb(145 158 171 / 12%) 0px 9px 46px 8px !important;
}
</style>