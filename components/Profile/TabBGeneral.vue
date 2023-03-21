<template>
  <v-row>
    <!-- img -->
    <v-col cols="12" md="5">
      <!-- min-height="400" -->
      <v-card
        class="d-flex pa-16 pa-md-6 text-center align-center justify-center"
        height="100%"
        outlined
        flat
      >
        <div class="card-body">
          <!-- <input type="file" accept  class="d-none" id="uploaded-photo"/> -->
          <v-file-input
            class="d-none"
            v-model="image"
            id="image"
            accept="image/*"
          />
          <div class="upload-photo pointer mb-2" @click="openFileInput">
            <div class="dashed-border">
              <v-avatar size="126" color="#f6f8fc">
                <div class="uploaded-photo">
                  <div class="icon">
                    <v-icon size="20" class="mb-1">mdi-image-plus</v-icon>
                  </div>
                  <span class="text-caption xsmall-text text-small"
                    >Uploaded photo</span
                  >
                </div>
              </v-avatar>
            </div>
          </div>
          <div class="text-caption xsmall-text text-small">
            <span class="d-block"> Allowed *.jpeg.*.jpg.*.png.*.gif </span>
            <span class="">max size of 3145728</span>
          </div>
        </div>
      </v-card>
    </v-col>
    <!-- account-info -->
    <v-col cols="12" md="7">
      <v-card flat height="100%" outlined class="card-body pa-6">
        <v-row>
          <template v-for="(item, itemInd) in inputs">
            <!-- <v-menu ></v-menu> -->
            <v-col
              :cols="12"
              :sm="item.grid.sm"
              :md="item.grid.md"
              :key="itemInd"
            >
              <v-select
                v-if="item.isSelect"
                v-model="item.state"
                :items="item.enum"
                hide-details
                menu-props="offset-y"
                outlined
                :label="item.label"
              />
              <v-textarea
                v-else-if="item.isTextArea"
                v-model="item.state"
                hide-details
                outlined
                :label="item.label"
                no-resize
              />
              <v-text-field
                v-else
                v-model="item.state"
                :disabled="item.isDisabled"
                hide-details
                outlined
                :label="item.label"
              />
            </v-col>
          </template>
        </v-row>
        <div class="card-actions mt-6">
          <v-btn color="primary" class="shadow-btn d-block ml-auto">
            <span class="text-capitalize">save changes</span>
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    image: null,
    inputs: [
      {
        label: "First Name",
        state: "Mohammed",
        grid: {
          sm: 12,
          md: 6,
        },
      },
      {
        label: "Last Name",
        state: "Shabaan",
        grid: {
          sm: 12,
          md: 6,
        },
      },
      {
        label: "Email Address",
        state: "mohammedalsydy21@gmail.com",
        grid: {
          sm: 12,
        },
        isDisabled: true,
      },
      {
        label: "Phone Number",
        state: "01220314609",
        grid: {
          sm: 12,
          md: 6,
        },
      },
      {
        label: "Gender",
        state: "Male",
        grid: {
          sm: 12,
          md: 6,
        },
        isSelect: true,
        enum: ["Male", "Female"],
      },
      {
        label: "About",
        state: "",
        grid: {
          sm: 12,
        },
        isTextArea: true,
      },
    ],
  }),
  methods: {
    uploadPhoto() {},
    openFileInput() {
      const img = document.querySelector("#image");
      img.click();
    },
  },
};
</script>

<style lang="scss" scoped>
.xsmall-text {
  font-size: 10px !important;
}
.dashed-border {
  border-radius: 50%;
  border: 1px dashed rgba(145, 158, 171, 0.32);
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.upload-photo:hover {
  opacity: 0.72;
}
.shadow-btn {
  box-shadow: rgb(0 125 252 / 24%) 0px 8px 16px 0px;
  &:hover {
    box-shadow: none !important;
  }
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
</style>