import MainApi from '../../api/api'

export const state = {
    searchData: {}
}

export const mutations = {
    setSearchResult (state, data) {
        state.searchData = data
    }
}

export const actions = {
    makeSearch ({commit}, {data, success,fail, apiParam}) {
        MainApi.search( (res) => {
            console.log('locationshhhhh' ,res.body.responseObject)
            commit('setSearchResult', res.body.responseObject)
            success && success(res)
        }, data, (res) => {
            fail && fail()
        }, apiParam)
    }
}

export const getters = {
    getSearchResult (state) {
        return state.searchData
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}