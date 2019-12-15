import MainApi from '../../api/api'

export const state = {
    selectedCategory: '',
    allCategories: [],
    allGroupsByUser: [],
    allLocations: [],
    allTags: [],
}

export const mutations = {
    setSelectedCategory (state, value) {
        state.selectedCategory = value
    },
    setAllCategories (state, value) {
        console.log("mutation", value)
        state.allCategories = value
    },
    setAllGroupsByUser (state, value) {
        state.allGroupsByUser = value
    },
    setAllLocations (state, value) {
        state.allLocations = value
    },
    setAllTags (state, value) {
        state.allTags = value
    }
}

export const actions = {
    selectCategory ({commit}, value) {
        commit('setSelectedCategory', value)
    },
    allCategories ({commit}, {success,fail}) {
        MainApi.getAllCategories( (res) => {
            commit('setAllCategories', res.body.responseObject)
            success && success(res)
        }, (res) => {
            fail && fail()
        })
    },
    allGroupsByUser ({commit}, {data, success,fail}) {
        let headers = {
            Authorization: 'Bearer ' + data.token
        }
        MainApi.getGroupsByUser( (res) => {
            console.log('categories' ,res.body.responseObject)
            commit('setAllGroupsByUser', res.body.responseObject)
            success && success(res)
        }, (res) => {
            fail && fail()
        },headers)
    },
    allLocations ({commit}, {data, success,fail}) {
        MainApi.getAllLocations( (res) => {
            console.log('locations' ,res.body.responseObject)
            commit('setAllLocations', res.body.responseObject)
            success && success(res)
        }, (res) => {
            fail && fail()
        })
    },
    allTags ({commit}, {data, success,fail}) {
        MainApi.getAllTags( (res) => {
            console.log('allTags' ,res.body.responseObject)
            commit('setAllTags', res.body.responseObject)
            success && success(res)
        }, (res) => {
            fail && fail()
        })
    }
}

export const getters = {
    selectedCategory (state) {
        return state.selectedCategory
    },
    getAllCategories (state) {
        console.log("getters", state.allCategories)
        return state.allCategories
    },
    getAllGroupsByUser (state) {
        return state.allGroupsByUser
    },
    getAllLocations (state) {
        return state.allLocations
    },
    getAllTags (state) {
        return state.allTags
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
