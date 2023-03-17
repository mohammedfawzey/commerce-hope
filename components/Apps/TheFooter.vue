<template>
  <v-footer color="transparent" padless class="mt-100 pb-16 pb-md-0">
    <v-card color="#f6f8fc" flat width="100%" min-height="300">
      <!-- NewsLetter -->
      <v-card
        v-resize="setFooterCardHeight"
        id="footer-card"
        ref="footerCard"
        class="
          bg-shape
          v-box-shadow
          pa-8
          text-center
          mx-auto
          rounded-lg
          absolute-n-top
        "
        :max-width="$vuetify.breakpoint.mdAndUp ? '66%' : '90%'"
        width="100%"
        :style="[{ transform: `translate(-50%,-${footerCardHeight / 2}px)` }]"
      >
        <div
          class="
            text-h5 text-sm-h4 text-md-h3
            font-weight-bold
            custom-line-height
            text-uppercase
            mb-4
            white--text
          "
        >
          join newsletter
        </div>
        <v-sheet max-width="500" color="transparent" class="mx-auto">
          <v-text-field outlined hide-details height="60" dark color="white">
            <template #append>
              <v-btn small color="white" light>
                <span class="text-capitalize black--text font-weight-bold"
                  >subscribe</span
                >
              </v-btn>
            </template>
          </v-text-field>
        </v-sheet>
      </v-card>
      <!-- links -->
      <v-container :fluid="$vuetify.breakpoint.mdAndDown">
        <v-row class="mt-logo">
          <!-- logo-info -->
          <v-col class="text-center text-sm-left" cols="12" sm="">
            <BaseLogo has-content />
            <p class="mt-5 text-m-small">
              Rattokala, PO Khas Tehsil Bhalwal Sargodha,<br />
              Pakistan
            </p>
            <div class="social-list pointer">
              <v-icon small>mdi-email</v-icon>
              <span class="text-m-small">info@commercehope.com</span>
            </div>
            <div class="social-list pointer">
              <v-icon small>mdi-phone</v-icon>
              <span class="text-m-small">+923035501602</span>
            </div>
          </v-col>
          <!-- someLinks(Loop) -->
          <v-col v-for="(item, itemInd) in footerLinks" :key="itemInd" class="text-center text-sm-left">
            <div
              style="color: #212b36"
              class="text-body-1 mb-6 font-w-600 text-capitalize"
              v-text="item.title"
            />
            <v-list nav dense class="pl-0" color="transparent">
              <template v-for="(subItem, subItemInd) in item.sub">
                <BaseListItem
                  :key="subItemInd"
                  :item="subItem"
                  :has-icon="false"
                  dense
                  x-dense
                  content-class="text-caption font-weight-regular custom-color"
                />
              </template>
            </v-list>
          </v-col>
          <!-- social -->
          <v-col>
            <div
              style="color: #212b36"
              class="text-body-1 mb-6 font-w-600 text-capitalize text-center text-sm-left"
              v-text="`follow us`"
            />
            <div class="social-links">
              <div class="wrapper gap-10 d-flex align-center justify-center justify-sm-start">
                <v-btn
                  icon
                  v-for="(item, itemInd) in socialLinks"
                  :key="itemInd"
                >
                  <v-icon :color="item.color" v-text="item.icon" />
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    footerLinks: [
      {
        title: "product",
        sub: ["application", "features", "requirements", "technology"],
      },
      {
        title: "resourses",
        sub: ["changelog", "updates", "providers", "affiliat", "roadmap"],
      },
      {
        title: "company",
        sub: ["blog", "about us", "contact us", "jobs", "team"],
      },
    ],
    socialLinks: [
      {
        icon: "mdi-facebook",
        color: "#1877f2",
      },
      {
        icon: "mdi-instagram",
        color: "#c32aa3",
      },
      {
        icon: "mdi-linkedin",
        color: "#0a66c2",
      },
      {
        icon: "mdi-pinterest",
        color: "#bd081c",
      },
    ],
    footerCardHeight: 203.95,
  }),
  computed: {
    C_cardHeight() {
      // if (!document) return 0;
      // const card = document.getElementById("footer-card");
      // return card.offsetHeight;
      const card = this.$refs.footerCard.$el.clientHeight;
      return card;
    },
  },
  methods: {
    setFooterCardHeight() {
      const cardHeight = this.$refs.footerCard.$el.clientHeight;
      this.footerCardHeight = cardHeight;
      // return card;
    },
  },
  mounted() {
    this.setFooterCardHeight();
  },
};
</script>

<style lang="scss" scoped>
.footer-bg {
  background: #f6f8fc;
}
.custom-line-height {
  line-height: 1.333333 !important;
}
.absolute-n-top {
  position: absolute;
  left: 50%;
  top: 0;
  // top: -25%;
  // top: 50%;
  // transform: translate(-50%, -125%);
  transform: translate(-50%);
}
.mt-100 {
  margin-top: 150px !important;
}
.mt-logo {
  margin-top: 140px !important;
}
</style>