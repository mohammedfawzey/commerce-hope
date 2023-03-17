//
// export default async function ({ $axios, store }) {
//   try {
//     const result = await $axios.get("/api/v1/auth/me");
//     console.log("result from plugins", result);
//     store.commit("M_setUser", result.data.user);
//     store.commit("M_setUserAuth", true);
//   } catch (err) {
//     console.log("Err", err);
//     store.commit("M_setUser", null);
//     store.commit("M_setUserAuth", false);
//   }
// }
