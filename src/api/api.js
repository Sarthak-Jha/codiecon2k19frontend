import config from '../configs';
import httpApi from '../api/index';
import { serializeQueryParams } from '../util';

export default {
	validateLogin (cb, data, errHandler) {
		httpApi.postDataViaApi(config.api.users.login, cb, data, errHandler)
	},
	validateRegister (cb, data, errHandler) {
		httpApi.postDataViaApi(config.api.users.register, cb, data, errHandler)
    },
    verifyRegister (cb, data, errHandler) {
        httpApi.postDataViaApi(config.api.users.validate, cb, data, errHandler)
    },
    doLogout (cb, data, errHandler) {
        httpApi.deleteDataViaApi(config.api.users.logout, cb, data, errHandler)
    },
    addPost (cb, data, errHandler, headerParams) {
        httpApi.postDataViaApi(config.api.posts.addPost, cb, data, errHandler, headerParams) 
    },
    deletePost (cb, data, errHandler, headerParams, apiParam) {
        httpApi.deleteDataViaApi(config.api.posts.deletePost(apiParam), cb, data, errHandler, headerParams)
    },
    addComment (cb, data, errHandler, headerParams, apiParam) {
        httpApi.postDataViaApi(config.api.posts.addComment(apiParam), cb, data, errHandler, headerParams)
    },
    closePost (cb, data, errHandler, headerParams, apiParam) {
        httpApi.putDataViaApi(config.api.posts.closePost(apiParam), cb, data, errHandler, headerParams)
    },
    getCommentsByPostId (cb, data, errHandler, headerParams, apiParam) {
        httpApi.getDataViaApi(config.api.posts.getCommentsByPostId(apiParam), cb, data, errHandler, headerParams)
    },
    addLike (cb, data, errHandler, headerParams, apiParam) {
        httpApi.putDataViaApi(config.api.posts.addLike(apiParam), cb, data, errHandler, headerParams)
    },
    addGroup (cb, data, errHandler, headerParams) {
        httpApi.postDataViaApi(config.api.posts.addGroup, cb, data, errHandler, headerParams)
    },
    addMember (cb, data, errHandler, headerParams, apiParam) {
        httpApi.postDataViaApi(config.api.posts.addMember(apiParam), cb, data, errHandler, headerParams)
    },
    addViewCount (cb, data, errHandler, headerParams, apiParam) {
        httpApi.postDataViaApi(config.api.posts.addViewCount(apiParam), cb, data, errHandler, headerParams)
    },
    deleteMember (cb, data, errHandler, headerParams, apiParam) {
        httpApi.deleteDataViaApi(config.api.posts.deleteMember(apiParam), cb, data, errHandler, headerParams)
    },
    getAllCategories (cb, data, errHandler, headerParams) {
        httpApi.getDataViaApi(config.api.posts.getAllCategories, cb, data, errHandler, headerParams)
    },
    getAllGroups (cb, data, errHandler, headerParams) {
        httpApi.getDataViaApi(config.api.posts.getAllGroups, cb, data, errHandler, headerParams)
    },
    getAllTags (cb, data, errHandler, headerParams) {
        httpApi.getDataViaApi(config.api.posts.getAllTags, cb, data, errHandler, headerParams)
    },
    getAllLocations (cb, data, errHandler, headerParams) {
        httpApi.getDataViaApi(config.api.posts.getAllLocations, cb, data, errHandler, headerParams)
    },
    getFormFeilds (cb, data, errHandler, headerParams, apiParam) {
        httpApi.getDataViaApi(config.api.posts.getFormFeilds(apiParam), cb, data, errHandler, headerParams)
    },
    getGroupsByUser (cb, data, errHandler, headerParams) {
        httpApi.getDataViaApi(config.api.posts.getGroupsByUser, cb, data, errHandler, headerParams)
    },
    setCategory (cb, data, errHandler, headerParams) {
        httpApi.postDataViaApi(config.api.posts.setCategory, cb, data, errHandler, headerParams)
    },
    setForm (cb, data, errHandler, headerParams) {
        httpApi.postDataViaApi(config.api.posts.setForm, cb, data, errHandler, headerParams)
    },
    getUserDetails (cb, data, errHandler, headerParams, apiParam) {
        httpApi.getDataViaApi(config.api.posts.getUserDetails(apiParam), cb, data, errHandler, headerParams)
    },
    getSelf (cb, data, errHandler, headerParams) {
        httpApi.getDataViaApi(config.api.posts.getSelf, cb, data, errHandler, headerParams)
    }
};