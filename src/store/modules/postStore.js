import MainApi from '../../api/api'

export const state = {
    selectedCategory: ''
}

export const mutations = {
    setSelectedCategory (state, value) {
        state.selectedCategory = value
    }
}

export const actions = {
    selectCategory({commit}, value) {
        commit('setSelectedCategory', value)
    }
}

export const getters = {
    selectedCategory (state) {
        return state.selectedCategory
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
