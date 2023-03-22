<template>
  <div class="with-invoices" v-if="$store.state.S_invoices.length >= 1">
    <v-simple-table
      height="300px"
      class="pt-3 pt-md-0"
      v-if="$vuetify.breakpoint.mdAndUp && false"
    >
      <template v-slot:default>
        <thead>
          <tr class="bg-shape">
            <th
              class="text-capitalize white--text"
              :class="item.class"
              v-for="(item, itemInd) in invoiceItemsModel"
              :key="itemInd"
              v-text="item.product.title"
            />
            <!-- <th class="text-left">Calories</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, itemInd) in $store.state.S_invoices" :key="itemInd">
            <td>
              <div class="d-flex align-center" style="max-width: 240px">
                <v-avatar size="45" class="rounded-lg">
                  <v-img
                    :src="
                      require(`@/assets/imgs/products/${item.product.img}.png`)
                    "
                    :lazy-src="
                      require(`@/assets/imgs/products/${item.product.img}.png`)
                    "
                    aspect-ratio="1"
                  ></v-img>
                  <!-- width="45"
                  height="45" -->
                </v-avatar>
                <!-- aspect-ratio="515/772" -->
                <!-- contain -->
                <v-list-item-title class="text-caption ml-3 font-weight-bold">{{
                  item.product.title
                }}</v-list-item-title>
              </div>
            </td>
            <td>{{ item.quantity }}</td>
            <td>${{ item.product.price * item.quantity }}</td>
            <td>
              <!-- :color="item.status" -->
              <v-chip
                :class="[
                  item.status == 'delivered'
                    ? 'success--text'
                    : 'primary--text',
                ]"
                small
                class="rounded-lg"
              >
                <span
                  :class="[
                    item.status == 'delivered'
                      ? 'success--text'
                      : 'primary--text',
                  ]"
                  class="text--darken-2 font-weight-bold"
                >
                  {{ item.status }}
                </span>
              </v-chip>
            </td>
            <td>
              <span class="text-caption">
                {{ item.date }}
              </span>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-card
      flat
      class="mx-auto mt-3 v-scrollbar overflow-y-auto"
      max-height="800"
      v-else
    >
      <template v-for="(item, itemInd) in $store.state.S_invoices">
        <!-- <v-row :key="itemInd"> The orw</v-row> -->
        <div
          v-if="item"
          :key="itemInd"
          :class="`${item.status}-border`"
          class="invoice-item pa-3"
        >
          <!-- 1-row -->
          <div class="d-flex align-center justify-space-between">
            <div style="max-width: 66.6667%">
              <v-list-item-title
                class="
                  text-body-2 text-sm-body-1
                  font-weight-bold
                  primary--text
                  text--darken-2
                "
                >{{ item.product.title }}</v-list-item-title
              >
            </div>
            <div class="text-caption">
              ${{ item.product.price * item.quantity }}
            </div>
          </div>
          <!-- 2-row -->
          <div class="d-flex mt-1 align-center justify-space-between">
            <div class="box-parent d-flex align-center">
              <div class="child cart-nums mr-2 mr-sm-4">
                <v-icon small color="black" class="mr-1">mdi-cart</v-icon>
                <span class="text-caption text-small"
                  >{{ item.quantity }} items</span
                >
              </div>
              <div class="child date">
                <v-icon small color="black" class="mr-1"
                  >mdi-calendar-range</v-icon
                >
                <span class="text-caption text-small">{{ item.date }}</span>
              </div>
            </div>
            <div class="statue-chip">
              <!-- :class="item.status" -->
              <v-chip class="rounded-lg" small>
                <span
                  :class="[
                    item.status == 'delivered'
                      ? 'success--text'
                      : 'primary--text',
                  ]"
                  class="text-capitalize text--darken-2 font-weight-bold"
                >
                  <!-- style="color: rgb(183, 33, 54)" -->
                  {{ item.status }}
                </span>
              </v-chip>
            </div>
          </div>
        </div>
        <v-divider class="my-3" :key="`divider-${itemInd}`" />
      </template>
    </v-card>
  </div>
  <div v-else>
    <v-img
      :src="require('@/assets/imgs/no-data.svg')"
      :lazy-src="require('@/assets/imgs/no-data.svg')"
      class="mx-auto"
      max-width="400"
    ></v-img>
  </div>
</template>

<script>
export default {
  data: () => ({
    invoiceItemsModel: [
      {
        title: "product",
        grid: {
          lg: 5,
          md: 3,
        },
        class: "justify-start text-left",
      },
      {
        title: "quantity",
        grid: {
          lg: 1,
          md: 2,
        },
        class: "justify-center text-left",
      },
      {
        title: "total",
        grid: {
          lg: 1,
          md: 2,
        },
        class: "justify-center text-left",
      },
      {
        title: "status",
        grid: {
          lg: 1,
          md: 2,
        },
        class: "justify-center text-left",
      },
      {
        title: "date",
        grid: {
          lg: 4,
          md: 3,
        },
        class: "justify-end text-right",
      },
    ],
    invoices: [
      {
        title: "Xarasoft Men Casual Blue Skecher",
        img: "https://res.cloudinary.com/techgater/image/upload/v1671092257/my-uploads/s4wrhgccohktwdby6vcd.jpg",
        quantity: 2,
        price: 60,
        // total = price * 2
        status: "returned",
        date: "28 Dec 2022",
        // date: "28 Dec 2022 13:25",
      },
      {
        title: "Xarasoft Men Casual Blue Skecher",
        img: "https://res.cloudinary.com/techgater/image/upload/v1671092257/my-uploads/s4wrhgccohktwdby6vcd.jpg",
        quantity: 2,
        price: 60,
        // total = price * 2
        status: "returned",
        date: "28 Dec 2022",
      },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
      },
      {
        name: "Eclair",
        calories: 262,
      },
      {
        name: "Cupcake",
        calories: 305,
      },
      {
        name: "Gingerbread",
        calories: 356,
      },
      {
        name: "Jelly bean",
        calories: 375,
      },
      {
        name: "Lollipop",
        calories: 392,
      },
      {
        name: "Honeycomb",
        calories: 408,
      },
      {
        name: "Donut",
        calories: 452,
      },
      {
        name: "KitKat",
        calories: 518,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.error-bg {
  // background: rgba(255, 72, 66, 0.16) !important;
  background: rgb(12, 83, 183) !important;
}
.pending {
  background: rgba(24, 144, 255, 0.16) !important;
}
.pending-border {
  border-color: rgb(196, 205, 213) rgb(196, 205, 213) rgb(196, 205, 213)
    rgb(24, 144, 255) !important;
}
.delivered {
  color: rgb(34, 154, 22) !important;
  background: rgba(84, 214, 44, 0.16) !important;
}
.delivered-border {
  border-color: rgb(196, 205, 213) rgb(196, 205, 213) rgb(196, 205, 213)
    rgb(84, 214, 44) !important;
}
.invoice-item {
  border-width: 1px 1px 1px 6px;
  border-style: solid;
}
</style>