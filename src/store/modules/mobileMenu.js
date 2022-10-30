const state = {
  isOpen: false
}

export const mutationTypes = {
  openMenuSuccess: '[menu] open menu success',
  closeMenuSuccess: '[menu] close menu success'
}

export const actionTypes = {
  openMenu: '[menu] open menu',
  closeMenu: '[menu] close menu'
}

const mutations = {
  [mutationTypes.openMenuSuccess](state) {
    state.isOpen = true
  },
  [mutationTypes.closeMenuSuccess](state) {
    state.isOpen = false
  }
}

const actions = {
  [actionTypes.openMenu](context) {
    context.commit(mutationTypes.openMenuSuccess)
  },
  [actionTypes.closeMenu](context) {
    context.commit(mutationTypes.closeMenuSuccess)
  }
}

export default {
  state,
  mutations,
  actions
}
