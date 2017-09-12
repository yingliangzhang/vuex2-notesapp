import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from './actions'
import { mutations } from './mutations'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {}
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {
    favoriteNotes: state => {
      return state.notes.filter(note => note.favorite)
    }
  }
})