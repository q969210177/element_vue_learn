import { setLocal, delLocal } from '@/utils/local'
const user = {
  namespaced: true,
  state: {},
  mutations: {
    SET_USER: (state, user) => {
      setLocal('user', JSON.stringify(user))
      const { id, menus, username, name, avatar, components } = user
      state.id = id
      state.menus = menus
      state.username = username
      state.name = name
      state.avatar = avatar
      state.components = components
    },
    CLEAR_USER: (state) => {
      delLocal('user')
      state.id = null
      state.menus = null
      state.username = null
      state.name = null
      state.avatar = null
      state.components = []
    }
  },
  actions: {
    setUser ({ commit }, user) {
      commit('SET_USER', user)
    },
    clearUser ({ commit }) {
      commit('CLEAR_USER')
    }
  }
}

export default user
