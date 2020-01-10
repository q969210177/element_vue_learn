const app = {
  namespaced: 'app',
  state: {
    loading: false,
    collapse: false,
    dictionaries: [],
    organizations: [],
    processConfigs: [
      {
        code: '100',
        desc: '资产新增审核',
        modelId: 1
      },
      {
        code: '101',
        desc: '资产删除审核',
        modelId: 2
      },
      {
        code: 'CONTRACT_CREATE',
        desc: '合同新增审核',
        modelId: 3
      },
      {
        code: 'CONTRACT_DELETE',
        desc: '合同删除审核',
        modelId: 4
      },
      {
        code: 'CONTRACT_COLLECTION',
        desc: '合同收租审核',
        modelId: 5
      },
      {
        code: 'MT_DELETE',
        desc: '维保任务删除审核',
        modelId: 6
      }
    ]
  },
  mutations: {
    // 折叠侧边栏
    TOGGLE_COLLAPSE (state) {
      state.collapse = !state.collapse
    },
    SWITCH_LOADING: state => {
      state.loading = !state.loading
    },
    ADD_DICTIONARIES: (state, dictionaries) => {
      state.dictionaries = dictionaries
    },
    SET_ORGANIZATIONS: (state, organizations) => {
      state.organizations = organizations
    }
  },
  actions: {
    switchLoading ({ commit }) {
      commit('SWITCH_LOADING')
    },
    addDictionaries ({ commit }, dictionaries) {
      commit('ADD_DICTIONARIES', dictionaries)
    },
    setOrientations ({ commit }, organizations) {
      commit('SET_ORGANIZATIONS', organizations)
    },
    toggleCollapse ({ commit }) {
      commit('TOGGLE_COLLAPSE')
    }
  }
}

export default app
