import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

export default createStore({
  plugins: [createPersistedState()],
  state: {
    isAdmin: false,
    // outros estados aqui
  },
  mutations: {
    SET_ADMIN(state, payload) {
      state.isAdmin = payload
    },
    // outras mutações aqui
  },
  actions: {
    setAdmin({ commit }, payload) {
      commit("SET_ADMIN", payload)
    },
    // outras ações aqui
  },
  getters: {
    isAdmin: (state) => state.isAdmin,
    // outros getters aqui
  },
})
