export const actions = {
  addNote ({ commit }) {
    commit('ADD_NOTE')
  },

  editNote ({ commit }, text) {
    commit('EDIT_NOTE', text)
  },

  deleteNote ({ commit }) {
    commit('DELETE_NOTE')
  },

  updateActiveNote ({ commit }, note) {
    commit('SET_ACTIVE_NOTE', note)
  },

  toggleFavorite ({ commit }) {
    commit('TOGGLE_FAVORITE')
  }
}
