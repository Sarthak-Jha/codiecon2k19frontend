import MainApi from '../../api/api'

export const state = {
    selectedCategory: '',
    allCategories: [],
    allGroupsByUser: [],
    allLocations: [],
    allTags: [],
    allPostType: [],
    imageUploadLink: '',
    userDetails: {},
    allTypes: [],
    postDetailsPage: {},
    commentList: []
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
    },
    setUserDetails (state, value) {
        state.userDetails = value
    },
    setAllTypes (state, value) {
        state.allTypes = value
    },
    setPostDetailsPage (state, value) {
        state.postDetailsPage = value
    },
    setCommentList (state, value) {
        state.commentList = value
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
        debugger
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
    fetchAllTypes ({commit}, {data, success,fail}) {
        MainApi.getAllTypes( (res) => {
            commit('setAllTypes', res.body.responseObject)
            success && success(res)
        }, (res) => {
            fail && fail()
        })
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
            this.$alert("Form Posted Succesfully")
            success && success(res)
        }, data, (res) => {
            fail && fail(res)
        },headers)
    },
    submitGroupForm ({commit}, {data, head, success, fail}) {
        let headers = {
            Authorization: 'Bearer ' + head.token
        }
        MainApi.addGroup( (res) => {
            this.$alert('Group Created')
            success && success(res)
        }, data, (res) => {
            fail && fail(res)
        }, headers)
    },
    getUserById ({commit}, { success, fail, head, apiParams}) {
        let headers = {
            Authorization: 'Bearer ' + head.token
        }
        console.log('weare here', apiParams)
        MainApi.getUserDetails( (res) => {
            commit('setUserDetails', res.body.responseObject)
            success && success(res)
        }, (res) => {
            fail && fail(res)
        },headers, apiParams)
    },
    addLikeToPost ({commit}, {data, head, success, fail}) {
        let headers = {
            Authorization: 'Bearer ' + head.token
        }
        MainApi.addLike( (res) => {
            success && success(res)
        }, data, (res) => {
            fail && fail()
        }, headers)
    },
    fetchPostDetails ({commit}, {data, head, success, fail}) {
        let headers = {
            Authorization: 'Bearer ' + head.token
        }
        MainApi.getPost( (res) => {
            commit('setPostDetailsPage', res.body.responseObject)
            success && success(res)
        }, data, (res) => {
            fail && fail(res)
        }, headers)
    },
    fetchCommentList ({commit}, {data, success, fail}) {
        MainApi.getCommentsByPostId( (res) => {
            commit('setCommentList', res.body.responseObject)
            success && success(res)
        }, data, (res) => {
            fail && fail(res)
        })
    },
    uploadUserComment ({commit}, {data, head, success, fail}) {
        let headers = {
            Authorization: head.Authorization
        }
        MainApi.addComment( (res) => {
            success && success(res)
        },data , (res) => {
            fail && fail(res)
        }, headers)
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
    },
    getTheUserById (state) {
        return state.userDetails
    },
    getAllType (state) {
        return state.allTypes
    },
    getPostDetails (state) {
        return state.postDetailsPage
    },
    getCommentList (state) {
        return state.commentList
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
