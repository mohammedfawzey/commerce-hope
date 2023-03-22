<template>
  <v-dialog
    v-model="active"
    width="600"
    class="pa-0 ma-0"
    content-class="elevation-0"
    :fullscreen="$vuetify.breakpoint.xsOnly"
  >
    <!-- min-height="400" -->
    <!-- max-height="475" -->
    <v-card
      color="#f3f4f8"
      max-width="600"
      flat
      :outlined="$vuetify.breakpoint.smAndUp"
      :class="{ 'border-color': $vuetify.breakpoint.smAndUp }"
      class="pa-0 ma-0 rounded-lg d-flex flex-column"
    >
      <!-- search -->
      <div class="search_input">
        <v-text-field
          v-if="active"
          class="custom-prepend-icon pa-0 ma-0"
          hide-details
          height="72"
          @input="bounce"
          ref="search"
          placeholder="search for product..."
          v-model="search"
          color="primary darken-3"
          autofocus
          @focus="isFocus = true"
          @blur="isBlur = false"
        >
          <!-- prepend-inner-icon="mdi-magnify" -->
          <template #prepend-inner>
            <v-icon
              class="mx-auto"
              v-if="$refs.search && loaded"
              :color="$refs.search._data.isFocused ? 'primary darken-3' : ''"
              >mdi-magnify</v-icon
            >
            <!-- <v-icon>
              mdi-cached
            </v-icon> -->
            <v-progress-circular
              v-if="!loaded"
              color="primary darken-3"
              indeterminate
              size="24"
              width="2"
              class="mx-auto"
            ></v-progress-circular>
          </template>
        </v-text-field>
      </div>
      <!-- result -->
      <!-- max-height="100" -->
      <v-sheet
        max-height="400"
        height="400"
        class="overflow-y-auto"
        color="transparent"
      >
        <v-card-text class="px-2 mt-2 py-0">
          <v-list color="transparent" v-if="!loaded && C_items.length >= 1">
            <template v-for="itemInd in C_items.slice(0, 6).length">
              <v-skeleton-loader
                type="list-item-avatar-two-line"
                min-height="57"
                max-height="57"
                :key="`loader-${itemInd}`"
              ></v-skeleton-loader>
            </template>
          </v-list>
          <v-list color="transparent" v-if="loaded && C_items.length >= 1">
            <template v-for="(item, itemInd) in C_items">
              <v-hover v-slot="{ hover }" :key="`hover-${itemInd}`">
                <v-list-item
                  @click="redirectToTheProduct(item.id)"
                  link
                  dense
                  class="list-border px-4 py-1 custom-list-height"
                  :class="{ 'active-list-border': hover }"
                >
                  <v-list-item-icon style="height: 40px" class="mr-3">
                    <v-avatar size="40">
                      <v-img
                        :src="require(`@/assets/imgs/products/${item.img}.png`)"
                        :lazy-src="require(`@/assets/imgs/products/${item.img}.png`)"
                        height="40"
                        width="40"
                        aspect-ratio="1"
                      ></v-img>
                    </v-avatar>
                  </v-list-item-icon>
                  <v-list-item-content class="pa-0">
                    <v-list-item-title class="text-body-1 font-w-600">{{
                      item.title
                    }}</v-list-item-title>
                    <v-list-item-subtitle
                      style="color: rgb(99, 115, 129)"
                      class="text-caption"
                      >Baby Shampoo</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-hover>
            </template>
          </v-list>
          <v-img
            :src="require('@/assets/imgs/no-data.svg')"
            :lazy-src="require('@/assets/imgs/no-data.svg')"
            v-if="C_items.length <= 0 && loaded"
            max-height="calc(400px - 8px)"
          ></v-img>
        </v-card-text>
      </v-sheet>
      <v-card-text class="mt-auto pa-0 hidden-sm-and-up">
        <v-btn
          @click="active = false"
          block
          color="primary darken-3 rounded-0"
          large
        >
          <v-icon left>mdi-arrow-left-thin</v-icon>
          <span class="text-capitalize font-weight-medium">back</span>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import products from "@/data/products.json";
export default {
  data: () => ({
    items: products,
    search: "",
    active: false,
    loaded: false,
    timer: null,
    time: 750,
  }),
  computed: {
    C_items() {
      return this.items.filter(
        (el) => el.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1
      );
    },
  },
  mounted() {
    setTimeout(() => {
      this.bounce();
    }, this.time);
  },
  methods: {
    bounce() {
      this.loaded = false;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.loaded = true;
      }, this.time);
    },
    redirectToTheProduct(productId) {
      this.$router.push({ path: `/products/${productId}` });
      this.active = false;
    },
  },
  watch: {
    active(value) {
      this.$store.commit("M_setSearchDialog", value);
      this.MX_toggleOverflowBody({ active: value });
      if (value === true) {
        this.bounce();
      }
    },
    "$store.state.S_searchDialog.status"(value) {
      // if (value === true) {
      //   this.active = true;
      // }
      this.active = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.list-border {
  border-radius: 8px;
  border: 1px solid transparent;
}
.active-list-border {
  border-color: rgb(13, 68, 251) !important;
  background: rgba(13, 68, 251, 0.16) !important;
}
</style>