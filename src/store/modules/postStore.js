import MainApi from '../../api/api'

export const state = {
    selectedCategory: '',
    allCategories: [],
    allGroupsByUser: [],
    allLocations: [],
    allTags: [],
    allPostType: [],
    imageUploadLink: ''
}

export const mutations = {
    setSelectedCategory (state, value) {
        state.selectedCategory = value
    },
    setAllCategories (state, value) {
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
    },
    allPostType(state, value) {
        state.allPostType = value
    },
    setImageLink (state, value) {
        state.imageUploadLink = value
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
        MainApi.getGroupsByUser( (res) => {
            commit('setAllGroupsByUser', res.body.responseObject)
            success && success(res)
        }, (res) => {
            fail && fail()
        },data)
    },
    allLocations ({commit}, {data, success,fail}) {
        MainApi.getAllLocations( (res) => {
            commit('setAllLocations', res.body.responseObject)
            success && success(res)
        }, (res) => {
            fail && fail()
        })
    },
    allTags ({commit}, {data, success,fail}) {
        MainApi.getAllTags( (res) => {
            commit('setAllTags', res.body.responseObject)
            success && success(res)
        }, (res) => {
            fail && fail()
        })
    },
    setAllPostType ({commit}, data) {
        commit('allPostType', data)
    },
    getUploadLinkImage({commit}, {data, success, fail}) {
        let headers = {
            'Content-Type': 'multipart/form-data',
        }
        MainApi.uploadFile( (res) => {
            commit('setImageLink', res.body)
            success && success(res)
        }, data, (res) => {
            fail && fail()
        },headers)
    },
    submitPostForm ({commit}, {data, head, success, fail}) {
        let headers = {
            Authorization: 'Bearer ' + head.token
        }
        MainApi.addPost( (res) => {
            alert("form Posted Succesfully")
            success && success(res)
        }, data, (res) => {
            fail && fail(res)
        },headers)
    }
}

export const getters = {
    selectedCategory (state) {
        return state.selectedCategory
    },
    getAllCategories (state) {
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
    },
    getAllPostType (state) {
        return state.allPostType
    },
    getImageUploadLink (state) {
        return state.imageUploadLink
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
