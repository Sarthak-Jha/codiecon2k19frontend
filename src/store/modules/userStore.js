import MainApi from '../../api/api'

export const state = {
    userDetails: {
        status : false
    }
}

export const mutations = {
    setUserDetails(state, payload) {
		state.userDetails = payload;
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
    fetchUserDetails ({commit}) {
        MainApi.getUserDetails( (res) => {
            commit('setUserDetails', res.body)
            success && success(res)
        }, (res) => {
            fail && fail(res)
        })
    }
}

export const getters = {
    isLoggedIn(state) {
		return state.userDetails;
	}
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}