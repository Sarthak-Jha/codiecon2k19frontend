import MainApi from '../../api/api'

export const state = {
    searchData: {},
    userList: []
}

export const mutations = {
    setSearchResult (state, data) {
        state.searchData = data
    },
    setUserList (state, data) {
        state.userList = data
    }
}

export const actions = {
    makeSearch ({commit}, {data, success,fail, apiParam}) {
        MainApi.search( (res) => {
            commit('setSearchResult', res.body.responseObject)
            success && success(res)
        }, data, (res) => {
            fail && fail()
        }, apiParam)
    },
    fetchUserList ({commit}, {data, success, fail}) {
        debugger
        MainApi.userList( (res) => {
            commit('setUserList', res.body.responseObject)
            success && success(res)
        }, data, (res) => {
            fail && fail(res)
        })
    }
}

export const getters = {
    getSearchResult (state) {
        return state.searchData
    },
    getUserList (state) {
        return state.userList
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
