<template>
  <div
    class="commerce-logo d-flex align-center gap-10"
    :class="{ 'justify-center': hasContent && $vuetify.breakpoint.xsOnly }"
  >
    <div class="logo d-inline-block">
      <svg
        class="MuiBox-root css-10x59zd"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 270.000000 279.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,279.000000) scale(0.100000,-0.100000)"
          fill="#212B36"
          stroke="none"
        >
          <path
            d="M1306 2650 c-471 -60 -874 -387 -1034 -842 -123 -346 -84 -739 103 -1058 125 -212 302 -378 525 -490 279 -140 576 -172 878 -96 235 60 437 178 603 353 103 108 230 299 212 317 -4 3 -19 6 -34 6 -15 0 -56 9 -91 20 -60 19 -64 19 -76 3 -7 -10 -39 -54 -71 -98 -383 -527 -1147 -583 -1607 -118 -272 275 -372 684 -259 1060 98 323 361 593 680 696 197 64 404 70 609 17 92 -23 238 -90 327 -150 87 -58 213 -188 278 -285 30 -44 59 -79 65 -78 21 5 181 48 185 50 2 1 -9 24 -24 50 -191 331 -496 552 -862 628 -92 19 -311 27 -407 15z"
          ></path>
          <path
            fill="#007DFC"
            d="M1317 2225 c-664 -126 -923 -927 -458 -1419 211 -222 536 -311 836 -229 208 57 400 204 505 388 l23 41 -46 62 c-72 98 -92 170 -92 332 0 156 14 204 92 317 l44 65 -33 56 c-46 77 -168 204 -249 258 -77 51 -186 98 -274 120 -92 22 -257 26 -348 9z m328 -292 c83 -21 182 -75 238 -130 26 -25 47 -49 47 -52 0 -7 -119 -116 -167 -154 -23 -19 -24 -19 -63 17 -72 65 -114 81 -215 81 -74 0 -98 -4 -138 -24 -104 -51 -161 -146 -161 -271 -1 -89 21 -160 65 -213 106 -129 319 -135 453 -12 l38 35 94 -87 c52 -47 94 -89 94 -94 0 -17 -116 -111 -173 -139 -118 -57 -295 -76 -440 -45 -248 52 -424 252 -444 503 -27 356 261 630 637 605 41 -2 102 -11 135 -20z"
          ></path>
          <path
            d="M2575 1682 c-77 -33 -77 -33 -66 -83 19 -80 24 -239 11 -334 -7 -49 -13 -99 -14 -109 -1 -26 75 -64 139 -68 l49 -3 14 55 c19 75 22 390 4 488 l-14 72 -41 -1 c-23 0 -60 -8 -82 -17z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="logo-content" v-if="hasContent">
      <div class="d-inline-block text-uppercase">
        <div class="head font-weight-bold font-s-20 line-1">Commercehope</div>
        <div class="subhead text-small">Reactjs ecommerce script you need</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hasContent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.logo {
  width: 45px;
  height: 45px;
}
</style>