export const state = () => ({
  S_previewDialog: {
    status: false,
    item: {},
  },
  S_searchDialog: {
    status: false,
  },
  S_cart: [], //{product:{id},quantity:2}
  S_fav: [],
  S_invoices: [],
});
export const getters = {
  G_totalPrice(state) {
    if (state.S_cart.length <= 0) return 0;
    return state.S_cart.reduce((a, c) => a + c.product.price * c.quantity, 0);
  },
};
export const mutations = {
  M_setPreviewDialog(state, payload) {
    state.S_previewDialog = payload;
  },
  M_setSearchDialog(state, payload) {
    state.S_searchDialog.status = payload;
  },
  M_addToCart(state, payload) {
    const isProductInCart = state.S_cart.find(
      (el) => el.product.id == payload.id
    );
    let toastMessage = "item added in cart.";
    let timeout = 2000;
    let toastStatus = "success";
    let toastOption = {};
    if (!isProductInCart) {
      state.S_cart.push({ product: payload, quantity: 1 });
    } else {
      toastMessage = "Quantity Added";
      timeout = 2500;
      if (isProductInCart.quantity >= isProductInCart.product.available) {
        toastMessage = "your reached limited amount";
        toastStatus = "info";
        toastOption = {};
      } else {
        isProductInCart.quantity++;
      }
    }
    this.$toast[toastStatus](toastMessage, { timeout, ...toastOption });
  },
  M_increaseProductQuantity(state, payload) {
    const isProductInCart = state.S_cart.find(
      (el) => el.product.id == payload.id
    );
    let toastMessage = "Quantity Added";
    if (!isProductInCart) {
      state.S_cart.push({ product: payload, quantity: 1 });
      this.$toast.success(toastMessage, { timeout: 2000 });
    } else {
      if (isProductInCart.quantity >= isProductInCart.product.available) return;
      isProductInCart.quantity++;
    }
  },
  M_decreaseProductQuantity(state, payload) {
    const isProductInCart = state.S_cart.find(
      (el) => el.product.id == payload.id
    );
    if (isProductInCart && isProductInCart.quantity >= 2) {
      isProductInCart.quantity--;
    }
  },
  M_deleteProductFromCart(state, payload) {
    const isProductInCart = state.S_cart.find(
      (el) => el.product.id == payload.id
    );
    if (!isProductInCart) return;
    state.S_cart = state.S_cart.filter((el) => el.product.id != payload.id);
    let toastMessage = "item removed from cart.";
    this.$toast.success(toastMessage, { timeout: 2000 });
  },
  M_deleteCart(state) {
    state.S_cart = [];
  },
  M_completeOrder(state) {
    const time = new Date().getHours() + ":" + new Date().getMinutes();
    const date = new Date().toLocaleDateString("en-us");
    const CART_WITH_STATUS_DATE = state.S_cart.map((el) => {
      el.date = date + " " + time;
      el.status = "pending";
      return el;
    });
    state.S_invoices.push(...CART_WITH_STATUS_DATE);
    state.S_cart = [];
  },
  // M_addToFav(state, payload) {},
  // M_deleteProductFromFav(state, payload) {},
};
