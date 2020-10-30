import Vue from 'vue'
import Vuex from 'vuex'

// main store
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// spa
import task from '@/utils/task/store/'
// app
import app from '@/utils/app/store/'

import customModules from '@/config/store-modules'

const mainModules = { task, app }
const modules = Object.assign(customModules, mainModules)

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state,
  getters,
  mutations,
  actions,
})
