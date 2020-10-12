import { createStore } from 'vuex'
import test from './test/index'
const state = {
  version: '1.0.0'
}

const store = createStore({
  state,
  modules: {
    test,
  },
})

export default store
