export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    let result = await this.$axios.get('https://614c947459e92d00176ad364.mockapi.io/menuItem');

    commit('setMenuItems', result.data)
  },
};

export const mutations = {
  setMenuItems(state, items) {
    state.menuItems = items;
  }
};
