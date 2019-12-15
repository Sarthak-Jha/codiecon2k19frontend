import MainApi from '../../api/api'

export const state = {
    userDetails: {
        status : false
    },
    userSelfDetails: {}
}

export const mutations = {
    setUserDetails(state, payload) {
		state.userDetails = payload;
	},
    setUserSelfDetails(state, payload) {
        state.userSelfDetails = payload
    }
}

export const actions = {
    validateLogin ({commit}, {data, success, fail}) {
        MainApi.validateLogin( (res) => {
            success && success(res)
        }, data, (res) => {
            fail && fail()
        })
    },
    validateRegister ({commit}, {data, success, fail}) {
        MainApi.validateRegister( (res) => {
            success && success(res)
        }, data, (res) => {
            fail && fail()
        })
    },
    verifyRegister ({commit}, {data, success, fail}) {
        MainApi.verifyRegister( (res) => {
            success && success(res)
        }, data, (res) => {
            fail && fail()
        })
    },
    doLogout ({commit}, {data, success,fail}) {
        let headers = {
            Authorization: 'Bearer ' + data.token
        }
        MainApi.doLogout( (res) => {
            success && success(res)
        }, (res) => {
            fail && fail()
        },headers)
    },
    fetchUserDetails ({commit},{data, success, fail}) {
        MainApi.getSelf( (res) => {
            commit('setUserSelfDetails', res.body)
            success && success(res)
        }, (res) => {
            fail && fail(res)
        },data)
    }
}

export const getters = {
    isLoggedIn(state) {
		return state.userDetails;
	},
    userSelfDetails(state) {
        return state.userSelfDetails;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
