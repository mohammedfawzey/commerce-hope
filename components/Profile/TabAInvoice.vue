<template>
  <!-- <v-row no-gutters class="bg-shape ma-0" align="center">
    <v-col
      v-for="(item, itemInd) in invoiceItemsModel"
      :key="itemInd"
      :md="item.grid.md"
      :lg="item.grid.lg"
      :class="item.class"
      class="d-flex align-center"
    >
      <span
        class="text-body-2 d-block pa-4 white--text text-capitalize"
        v-text="item.title"
      />
    </v-col>
  </v-row> -->

  <v-simple-table
    height="300px"
    class="pt-3 pt-md-0"
    v-if="$vuetify.breakpoint.mdAndUp"
  >
    <template v-slot:default>
      <thead>
        <tr class="bg-shape">
          <th
            class="text-capitalize white--text"
            :class="item.class"
            v-for="(item, itemInd) in invoiceItemsModel"
            :key="itemInd"
            v-text="item.title"
          />
          <!-- <th class="text-left">Calories</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, itemInd) in invoices" :key="itemInd">
          <td>
            <div class="d-flex align-center">
              <v-img
                :src="item.img"
                width="45"
                height="45"
                aspect-ratio="515/772"
              ></v-img>
              <!-- contain -->
              <v-list-item-title class="text-caption ml-3 font-weight-bold">{{
                item.title
              }}</v-list-item-title>
            </div>
          </td>
          <td>{{ item.quantity }}</td>
          <td>${{ item.price * item.quantity }}</td>
          <td>
            <v-chip color="error-bg" small>
              <span class="error--text text--darken-4 font-weight-bold">
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
  <v-card flat class="mx-auto mt-3 v-scrollbar overflow-y-auto" max-height="200" v-else>
    <template v-for="(item, itemInd) in invoices">
      <!-- <v-row :key="itemInd"> The orw</v-row> -->
      <div :key="itemInd" class="left-shape invoice-item pa-3">
        <!-- 1-row -->
        <div class="d-flex align-center justify-space-between">
          <v-list-item-title
            class="text-body-2 text-sm-body-1  font-weight-bold primary--text"
            >{{ item.title }}</v-list-item-title
          >
          <div class="text-caption">${{ item.price * item.quantity }}</div>
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
            <v-chip color="rgba(255, 72, 66, 0.16)" small>
              <span
                class="
                  error--text
                  text-capitalize text--darken-4
                  font-weight-bold
                "
                style="color: rgb(183, 33, 54)"
              >
                {{ item.status }}
              </span>
            </v-chip>
          </div>
        </div>
      </div>
      <v-divider class="my-3" :key="`divider-${itemInd}`" />
    </template>
  </v-card>
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
  background: rgba(255, 72, 66, 0.16) !important;
}
.invoice-item {
  border-width: 1px 1px 1px 6px;
  border-style: solid;
  border-color: rgba(145, 158, 171, 0.24) rgba(145, 158, 171, 0.24)
    rgba(145, 158, 171, 0.24) rgb(255, 72, 66);
}
</style>