export const state = () => ({
  S_previewDialog: {
    status: false,
    item: {},
  },
  S_searchDialog: {
    status: false,
  },
});
export const mutations = {
  M_setPreviewDialog(state, payload) {
    state.S_previewDialog = payload;
  },
  M_setSearchDialog(state, payload) {
    state.S_searchDialog.status = payload;
  },
};
