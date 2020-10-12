const state = {
  count: 1,
}

const getters = {
  getNumbers: state => state.count,
}

const mutations = {
  addNumber(state) {
    state.count += 1
  },
}

const actions = {
  addNumber({ commit }) {
    commit('addNumber')
  }
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
}
