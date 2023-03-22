<template>
  <v-card
    class="mx-auto"
    :class="{
      'sticky-card card-border rounded-lg v-box-shadow':
        $vuetify.breakpoint.mdAndUp,
    }"
    :outlined="$vuetify.breakpoint.mdAndUp"
    flat
    max-width="315"
  >
    <!-- header -->
    <v-card-text
      :class="{ 'pt-3 pl-2': isDialog }"
      class="d-flex align-center justify-space-between"
    >
      <div class="filter-header d-flex align-center justify-center">
        <v-btn
          fab
          text
          small
          @click="closeFilterDialog"
          v-if="isDialog"
          class="mr-3"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="text-h6 font-weight-bold black--text"> Filter </span>
      </div>
      <div
        class="reset-filter-btn"
        :class="{ 'mr-3': isDialog }"
        style="min-height: 40px"
      >
        <v-tooltip
          v-if="C_resetFilterStatus"
          color="black"
          content-class="rounded-lg text--caption pa-2 custom-line-height arrow-top"
          open-delay="750"
          transition="slide-y-reverse-transition"
          bottom
        >
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              height="40"
              width="40"
              @click="resetAllFilters"
              v-on="on"
              v-bind="attrs"
            >
              <!-- <v-icon>mdi-close</v-icon> -->
              <v-icon>mdi-backup-restore</v-icon>
            </v-btn>
          </template>
          <span class="text--xsmall">Remove filters</span>
        </v-tooltip>
      </div>
    </v-card-text>
    <v-divider />
    <!-- Gender -->
    <v-card-text class="pt-2">
      <div class="gender-header d-flex align-center mb-2 justify-space-between">
        <div class="text-body-1 text-head d-flex align-center">
          <v-icon left color="black">mdi-account-group-outline</v-icon>
          <span>
            Gender<span v-show="genderStatus.length >= 1"
              >({{ genderStatus.length }})</span
            >
          </span>
        </div>
        <div class="filter-reset" style="min-height: 28px">
          <!-- <v-expand-transition> -->
          <v-btn
            v-show="genderStatus.length >= 1"
            outlined
            small
            color="primary darken-3"
            class="rounded-lg"
            @click="resetGendersFilter"
          >
            <span class="text-capitalize font-weight-bold">reset</span>
          </v-btn>
          <!-- </v-expand-transition> -->
        </div>
      </div>
      <v-item-group
        multiple
        active-class="primary darken-3"
        v-model="genderStatus"
        @change="checkGenderChanges"
      >
        <template v-for="(item, itemInd) in genders">
          <v-spacer
            v-if="itemInd === 2 && isDialog && $vuetify.breakpoint.xsOnly"
            :key="`divider-${itemInd}`"
          />
          <v-item
            :key="itemInd"
            v-slot="{ active, toggle }"
            :value="item.title"
          >
            <v-chip
              class="my-1 mr-2"
              filter
              :color="active ? 'white' : ''"
              @click="toggle"
              :input-value="active"
            >
              <v-icon left :dark="active">{{ item.icon }}</v-icon>
              <span class="text-capitalize">{{ item.title }}</span>
            </v-chip>
          </v-item>
        </template>
      </v-item-group>
    </v-card-text>
    <v-divider />
    <!-- Colors -->
    <v-card-text class="pt-2">
      <div class="color-header d-flex align-center mb-2 justify-space-between">
        <div class="text-body-1 text-head d-flex align-center">
          <v-icon left color="black">mdi-palette</v-icon>

          <span>
            Color<span v-show="colorStatus.length >= 1"
              >({{ colorStatus.length }})</span
            >
          </span>
        </div>
        <div class="filter-reset" style="min-height: 28px">
          <!-- <v-expand-transition> -->
          <v-btn
            v-show="colorStatus.length >= 1"
            outlined
            small
            color="primary darken-3"
            class="rounded-lg"
            @click="resetColorsFilter"
          >
            <span class="text-capitalize font-weight-bold">reset</span>
          </v-btn>
          <!-- </v-expand-transition> -->
        </div>
      </div>
      <v-item-group
        v-model="colorStatus"
        multiple
        class="pr-1"
        @change="checkColorChagnes"
      >
        <v-item
          v-slot="{ active, toggle }"
          v-for="(item, itemInd) in colors"
          :key="itemInd"
          class="my-1"
          :value="item"
          :class="{ 'ml-2': itemInd !== 0 }"
        >
          <v-btn
            width="24"
            height="24"
            @click="toggle"
            depressed
            :color="item"
            :class="[active ? 'active-btn-border' : 'custom-btn-border']"
            class="btn-border"
            min-width="24"
            max-width="24"
            x-small
          >
            <v-icon small color="white" v-if="active">mdi-check</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
    </v-card-text>
    <v-divider />
    <!-- Sizes -->
    <v-card-text class="pt-2">
      <div class="color-header d-flex align-center mb-2 justify-space-between">
        <div class="text-body-1 text-head d-flex align-center">
          <v-icon left color="black">mdi-format-size</v-icon>

          <span>
            Size<span v-show="sizeStatus.length >= 1"
              >({{ sizeStatus.length }})</span
            >
          </span>
        </div>
        <div class="filter-reset" style="min-height: 28px">
          <!-- <v-expand-transition> -->
          <v-btn
            v-show="sizeStatus.length >= 1"
            outlined
            small
            color="primary darken-3"
            class="rounded-lg"
            @click="resetSizesFilter"
          >
            <span class="text-capitalize font-weight-bold">reset</span>
          </v-btn>
          <!-- </v-expand-transition> -->
        </div>
      </div>
      <v-item-group v-model="sizeStatus" multiple @change="checkSizeChanges">
        <v-item
          style="width: 50%"
          v-slot="{ active, toggle }"
          v-for="(item, itemInd) in sizes"
          :key="itemInd"
          :value="item.value"
        >
          <!-- class="my-1 mx-2" -->
          <v-checkbox
            class="d-inline-block rounded-xl"
            dense
            hide-details
            color="primary darken-3"
            :input-value="active"
            @click="toggle"
          >
            <template #label>
              <span class="text-caption">{{ item.title }}</span>
            </template>
          </v-checkbox>
        </v-item>
      </v-item-group>
    </v-card-text>
    <v-divider />
    <!-- Price Range -->
    <v-card-text class="pt-2">
      <div class="price-head text-body-1 text-head">
        <v-icon left color="black">mdi-chart-areaspline</v-icon>
        <span>Price Range</span>
      </div>
      <v-range-slider
        v-model="range"
        :max="max"
        dense
        :thumb-label="true"
        :min="min"
        @change="checkPriceChanges"
        hide-details
        color="primary darken-4"
        step="5"
        class="align-center"
      />
    </v-card-text>
    <!-- <div class="d-none" v-mutate="onMutate" v-show="false">
      {{ genderStatus }}{{ colorStatus }}{{ sizeStatus }}{{ range }}
    </div> -->
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      mutation: 0,
      min: 0,
      max: 50,
      range: [0, 50],
      genderStatus: [],
      colorStatus: [],
      sizeStatus: [],
      genders: [
        {
          icon: "mdi-human-male",
          title: "men",
        },
        {
          icon: "mdi-human-female-female",
          title: "women",
        },
        {
          icon: "mdi-teddy-bear",
          title: "kids",
        },
        {
          icon: "mdi-octahedron",
          title: "others",
        },
      ],
      colors: [
        "primary",
        "error",
        "success",
        "info",
        "indigo",
        "orange",
        "black",
        // "primary darken-4",
        // "error darken-4",
        // "success darken-4",
        // "info darken-4",
        // "indigo darken-4",
        // "orange darken-4",
      ],
      // sizes: ["xs", "SM", "LG", "XL", "Large", "Md", "Sm", "Lg"],
      // sizes: ["xs", "SM", "LG", "XL", "Large", "Md"],
      sizes: [
        {
          title: "xs",
          value: "xs",
        },
        {
          title: "SM",
          value: "sm",
        },
        {
          title: "LG",
          value: "lg",
        },
        {
          title: "XL",
          value: "xl",
        },
        // {
        //   title: "Large",
        //   value: "large",
        // },
        {
          title: "XXL",
          value: "xxl",
        },
        {
          title: "Md",
          value: "md",
        },
      ],
    };
  },
  mounted() {
    this.loadFilterOptions();
  },
  methods: {
    // onMutate() {
    //   this.mutation++;
    // },
    resetAllFilters() {
      this.genderStatus = [];
      this.colorStatus = [];
      this.sizeStatus = [];
      this.range = [this.min, this.max];
      this.$router.replace({ query: {} });
      // setTimeout(() => {
      // this.mutation = 0;
      // }, 10);
    },
    closeFilterDialog() {
      this.$emit("closeFilterDialog");
    },
    checkGenderChanges() {
      this.$router.replace({
        query: { ...this.$route.query, gender: this.genderStatus },
      });
    },
    checkColorChagnes() {
      this.$router.replace({
        query: { ...this.$route.query, color: this.colorStatus },
      });
    },
    checkSizeChanges() {
      this.$router.replace({
        query: { ...this.$route.query, size: this.sizeStatus },
      });
    },
    checkPriceChanges() {
      this.$router.replace({
        query: { ...this.$route.query, min: this.range[0], max: this.range[1] },
      });
    },
    resetGendersFilter() {
      this.genderStatus = [];
      const { gender, ...queryOptions } = this.$route.query;
      // this.$route.query = { ...this.$route.query, gender: [] };
      this.$router.replace({ query: queryOptions });
    },
    resetColorsFilter() {
      this.colorStatus = [];
      const { color, ...queryOptions } = this.$route.query;
      // this.$route.query = { ...this.$route.query, color: [] };
      this.$router.replace({ query: queryOptions });
    },
    resetSizesFilter() {
      this.sizeStatus = [];
      const { size, ...queryOptions } = this.$route.query;
      this.$router.replace({ query: queryOptions });
    },
    resetPricesFilter() {
      this.range = [this.min, this.max];
      const { min, max, ...queryOptions } = this.$route.query;
      this.$router.replace({ query: queryOptions });
    },
    loadFilterOptions() {
      const genders = this.$route.query.gender || [];
      const colors = this.$route.query.color || [];
      const sizes = this.$route.query.size || [];
      // const min = Number(this.$route.query.min) ?? this.min;
      // const max = Number(this.$route.query.max) ?? this.max;
      this.genderStatus = genders;
      this.colorStatus = colors;
      this.sizeStatus = sizes;
      // if (this.range[0] != min) {
      //   this.$set(this.range, 0, min);
      // }
      // if (this.range[1] != max) {
      //   this.$set(this.range, 1, max);
      // }
      if (!Array.isArray(genders)) {
        this.genderStatus = [genders];
      }
      if (!Array.isArray(colors)) {
        this.colorStatus = [colors];
      }
      if (!Array.isArray(sizes)) {
        this.sizeStatus = [sizes];
      }
    },
  },
  computed: {
    C_resetFilterStatus() {
      return (
        this.genderStatus.length >= 1 ||
        this.colorStatus.length >= 1 ||
        this.sizeStatus.length >= 1 ||
        JSON.stringify(this.range) !==
          JSON.stringify([Number(this.min), Number(this.max)])
      );
    },
  },
  watch: {
    "$route.query"() {
      this.loadFilterOptions();
    },
  },
  props: {
    isDialog: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.text--xsmall {
  font-size: 10px !important;
}
.btn-border {
  border: 1px solid transparent;
}
.custom-btn-border {
  border-color: rgb(196, 205, 213) !important;
}
.active-btn-border {
  border-color: #00258b !important;
}
.sticky-card {
  position: sticky;
  top: 76px;
}
.card-border {
  border: 1px solid rgb(196, 205, 213) !important;
}
</style>