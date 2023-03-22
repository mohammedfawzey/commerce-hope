<template>
  <v-card outlined flat class="pa-4 px-3 pa-sm-8 border-color">
    <div class="card-heading mb-5">
      <div class="sub-title-color text-caption font-weight-bold text-uppercase">
        CHANGE PASSWORD
      </div>
    </div>
    <v-form>
      <v-text-field
        outlined
        label="Old Password"
        class="rounded-lg"
        color="primary darken-3"
      ></v-text-field>
      <v-text-field
        outlined
        color="primary darken-3"
        class="rounded-lg"
        label="New Password"
        hint="Password must be minimum 6+"
      ></v-text-field>
      <v-text-field
        color="primary darken-3"
        class="rounded-lg"
        outlined
        label="Confirm New Password"
      ></v-text-field>
      <v-btn color="primary darken-2" width="135" class="rounded-lg d-block ml-auto" depressed large height="40">
        <span class="text-capitalize font-weight-bold">save changes</span>
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sub-title-color {
  color: #637381;
}
.border-color {
  border-color: rgb(246, 248, 252) !important;
}
</style>