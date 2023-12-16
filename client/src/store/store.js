import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

export default createStore({
  plugins: [createPersistedState()],
  state: {
    isAdmin: false,
    storeStatus: false,
  },
  mutations: {
    SET_ADMIN(state, payload) {
      state.isAdmin = payload
    },
    SET_STORE_STATUS(state, payload) {
      state.storeStatus = payload
    },
  },
  actions: {
    setAdmin({ commit }, payload) {
      commit("SET_ADMIN", payload)
    },
    setStoreStatus({ commit }, payload) {
      commit("SET_STORE_STATUS", payload)
    },
  },
  getters: {
    isAdmin: (state) => state.isAdmin,
    storeStatus: (state) => state.storeStatus,
  },
})
