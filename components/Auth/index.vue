<template>
  <section id="auth-login" class="pb-16">
    <!-- welcome-bg -->
    <v-sheet
      dark
      class="welcome-bg d-flex align-center justify-center text-center"
      height="270"
    >
      <div class="mb-10">
        <div class="font-s-30 font-w-300">Welcome to the</div>
        <div class="font-s-44 font-weight-bold" style="line-height: 1.33333">
          COMMERCEHOPE
        </div>
        <div class="text-body-1">Reactjs Ecommerce script you need.</div>
      </div>
    </v-sheet>
    <!-- login/register -->
    <v-card
      outlined
      class="mx-auto v-box-shadow mt-n16 pa-6 text-center"
      max-width="560"
    >
      <!-- headers -->
      <v-card-title
        class="pt-0 text-center justify-center font-weight-bold text-h5"
        >{{ register ? "Get Started" : "Login" }}</v-card-title
      >
      <v-card-subtitle class="mt-0 mb-4 text-color">{{
        register
          ? "Create an account for free."
          : "Login to your account to continue"
      }}</v-card-subtitle>
      <!-- inputs -->
      <v-row>
        <template v-for="(item, itemInd) in inputs">
          <v-col
            v-if="!register ? item.loginOnly : true"
            :cols="item.loginOnly ? 12 : 6"
            :key="itemInd"
          >
            <!-- select -->
            <v-select
              v-if="item.isSelect && register"
              outlined
              eager
              full-width
              menu-props="offset-y dense"
              hide-details
              :prepend-inner-icon="item.icon"
              :items="item.enum"
              v-model="item.state"
            >
              <template #label>
                <span class="text-capitalize text-color" v-text="item.title" />
              </template>
            </v-select>
            <!-- fields -->
            <!-- v-else-if="!register ? item.loginOnly : true" -->
            <v-text-field
              v-else
              :prepend-inner-icon="item.icon"
              hide-details
              v-model="item.state"
              outlined
              :append-icon="
                item.isPassword && item.isTypePassword
                  ? 'mdi-eye-off'
                  : item.isPassword && !item.isTypePassword
                  ? 'mdi-eye'
                  : ''
              "
              :type="
                item.type
                  ? item.type
                  : item.isTypePassword
                  ? 'password'
                  : 'text'
              "
              @click:append="item.isTypePassword = !item.isTypePassword"
            >
              <template #label>
                <span class="text-capitalize" v-text="item.title" />
              </template>
            </v-text-field>
          </v-col>
        </template>
      </v-row>
      <div class="forgot-password mt-3" v-if="!register">
        <div class="wrapper d-flex align-center justify-space-between">
          <div class="remember-me">
            <v-checkbox label="Remember me" color="primary">
              <template #label>
                <span class="text-caption">Remember me</span>
              </template>
            </v-checkbox>
          </div>
          <div class="forgot-password">
            <v-hover v-slot="{ hover }">
              <span
                :class="{ 'text-decoration-underline': hover }"
                class="primary--text text-body-2 font-w-600 pointer"
                >Forgot password?</span
              >
            </v-hover>
          </div>
        </div>
      </div>
      <!-- submit -->
      <v-btn
        block
        color="primary"
        depressed
        @click="submit"
        :loading="isSubmitBtnClicked"
        :disabled="isSubmitBtnClicked"
        class="v-btn-box-shadow"
        :class="[register ? 'mt-8' : 'mt-4']"
        height="48"
      >
        <span class="text-capitalize">{{
          register ? "register" : "login"
        }}</span>
      </v-btn>
      <!-- redirect to login/register -->
      <div class="text-center mt-6">
        <span class="text-caption">{{
          register ? "Already have an account?" : "Don't have an account?"
        }}</span>
        <v-hover v-slot="{ hover }">
          <nuxt-link :to="register ? '/auth/login' : '/auth/register'">
            <span
              :class="{ 'text-decoration-underline': hover }"
              class="primary--text text-body-2 font-w-600 pointer"
            >
              {{ register ? "Login" : "Get Started" }}
            </span>
          </nuxt-link>
        </v-hover>
        <div class="text-caption mt-3" v-if="register">
          By registering, I agree to Commercehope
          <span class="custom-underline pointer"> Terms</span>
          and
          <span class="custom-underline pointer"> Privacy Policy.</span>
        </div>
      </div>
    </v-card>
  </section>
</template>

<script>
// default login
export default {
  data: () => ({
    inputs: [
      {
        title: "first name",
        icon: "mdi-account",
        state: "",
      },
      {
        title: "last name",
        icon: "mdi-account",
        state: "",
      },
      {
        title: "gender",
        isSelect: true,
        enum: ["Male", "Female"],
        icon: "mdi-gender-male",
        state: "Male",
      },
      {
        title: "phone no.",
        icon: "mdi-phone",
        state: "",
        type: "number",
      },
      {
        title: "email address",
        icon: "mdi-email",
        state: "m.fawzey.work@gmail.com",
        loginOnly: true,
        type: "email",
      },
      {
        title: "password",
        icon: "mdi-lock",
        state: "user-1",
        loginOnly: true,
        isPassword: true,
        isTypePassword: true,
        // type: "password",
      },
    ],
    rules: {
      required: (v) => !!v || "field required",
    },
    isSubmitBtnClicked: false,
    delay: 750,
  }),
  props: {
    register: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    C_userInfo() {
      //this.inputs
      return ({ login }) => {
        let userInfo = {};
        this.inputs.forEach((input) => {
          // return login
          if (login && !input.loginOnly) return; //false
          let c_inputTitle = input.title.split(" "); //[last,name]
          if (c_inputTitle.length > 1) {
            c_inputTitle =
              c_inputTitle[0] +
              c_inputTitle[1][0].toUpperCase() +
              c_inputTitle[1].substr(1);
          }
          if (Array.isArray(c_inputTitle)) {
            c_inputTitle = c_inputTitle.join("");
          }
          c_inputTitle = c_inputTitle.replace(".", "");
          c_inputTitle = c_inputTitle.replace("emailAddress", "email");
          userInfo[c_inputTitle] = input.state;
        });
        return userInfo;
      };
    },
    C_userLoginInfo() {
      // email | password
      return this.C_userInfo({ login: true });
    },
    C_userRegisterInfo() {
      return this.C_userInfo({ login: false });
    },
  },
  methods: {
    submit() {
      this.isSubmitBtnClicked = true;
      if (this.register) {
        this.M_register();
      } else {
        setTimeout(() => {
          this.login();
        }, this.delay);
      }
    },
    async login() {
      try {
        let result = await this.$auth.loginWith("local", {
          data: this.C_userLoginInfo,
        });
        this.isSubmitBtnClicked = false;
      } catch (err) {
        this.isSubmitBtnClicked = false;
      }
      // try {
      //   await this.$axios
      //     .post("/api/v1/auth/login", this.C_userLoginInfo)
      //     .then((result) => {
      //       this.$store.commit("M_setUserAuth", true);
      //       this.$store.commit("M_setUser", result.data.user);
      //     });
      // } catch (err) {
      //   this.$store.commit("M_setUserAuth", false);
      //   this.$store.commit("M_setUser", null);
      // }
      // email && password
      // const userInfo = {email:this.email,password:this.password}
      //
    },
    M_register() {
      // first|last name | gender | phone | email | password
      // const userInfo
    },
  },
};
</script>

<style lang="scss" scoped>
.welcome-bg {
  // linear-gradient(to right bottom, rgb(0, 125, 252), rgb(1, 71, 140) 120%)
  //   background: rgb(0, 125, 252);
  background-image: linear-gradient(
    to right bottom,
    rgb(0, 125, 252),
    rgb(1, 71, 140) 120%
  );
  border-radius: 0px 0px 40px 40px;
  div:nth-child(1) {
    line-height: 0.7;
  }
  div:nth-child(3) {
    line-height: 0.9;
  }
}
.v-btn-box-shadow {
  box-shadow: 0px 8px 16px 0px rgb(0 125 252 / 24%) !important;
}
.custom-underline {
  text-decoration: underline;
  text-decoration-color: rgb(99, 115, 129) !important;
  &:hover {
    text-decoration-color: rgb(0, 0, 0) !important;
  }
}
</style>