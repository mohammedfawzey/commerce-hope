<template>
  <v-menu
    v-model="active"
    :close-on-content-click="false"
    min-width="calc(100% - 32px)"
    left
    nudge-bottom="54"
    origin="left top"
    @input="MX_toggleOverflowBody({ active })"
    transition="scale-transition"
  >
    <template #activator="{ on, attrs }">
      <div v-on="on" v-bind="attrs" class="link">
        <v-hover v-slot="{ hover }">
          <div class="link__content" :class="{ 'grey--text': hover || active }">
            <span class="link__menu font-s-14 font-w-600"> Categories </span>
            <v-icon small>mdi-chevron-{{ active ? "up" : "down" }}</v-icon>
          </div>
        </v-hover>
      </div>
    </template>
    <v-card class="v-box-shadow pa-8 pb-0 overflow-x-auto v-scrollbar-menu">
      <v-container class="mr-auto ml-0">
        <!-- <v-row > -->
        <!-- <v-col cols="2" v-for="(item, itemInd) in items" :key="itemInd"> -->
        <div class="parent gap-5">
          <div
            class="box-child"
            v-for="(item, itemInd) in items"
            :key="itemInd"
          >
            <v-card min-width="200" flat>
              <div class="header mb-6 d-flex align-center">
                <span class="shape mr-3"></span>
                <span class="text-caption font-weight-bold text-uppercase">{{
                  item.title
                }}</span>
              </div>
              <ul class="pl-4">
                <li
                  class="mb-6 text-caption custom-list"
                  v-for="(sub, subInd) in item.sub"
                  :key="subInd"
                >
                  <v-hover v-slot="{ hover }">
                    <span
                      :class="{ 'black--text': hover }"
                      class="pointer text-capitalize white-space"
                      >{{ sub }}</span
                    >
                  </v-hover>
                </li>
              </ul>
            </v-card>
          </div>
        </div>

        <!-- </v-col> -->
        <!-- </v-row> -->
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
import categories from "@/data/categories.json";
export default {
  data: () => ({
    active: false,
    items: categories,
  }),
};
</script>

<style lang="scss">
.white-space {
  white-space: nowrap !important;
}
.custom-padding {
  padding: 40px 24px 24px;
}
.custom-menu {
  left: 50% !important;
  transform: translateX(-50%) !important;
  transition: opacity 310ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 206ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.shape {
  width: 8px;
  background: black;
  height: 2px;
  display: inline-block;
}
.custom-list {
  color: rgb(99, 115, 129) !important;
}
.parent{
  display:flex;
  // align-items:center;
  .box-child{

  }
}
</style>