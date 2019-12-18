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
    doLogout (cb, data, errHandler, headerParams) {
        httpApi.deleteDataViaApi(config.api.users.logout, cb, data, errHandler, headerParams)
    },
    addPost (cb, data, errHandler, headerParams) {
        httpApi.postDataViaApi(config.api.posts.addPost, cb, data, errHandler, headerParams)
    },
    deletePost (cb, data, errHandler, headerParams, apiParam) {
        httpApi.deleteDataViaApi(config.api.posts.deletePost(apiParam), cb, data, errHandler, headerParams)
    },
    addComment (cb, data, errHandler, headerParams) {
        httpApi.postDataViaApi(config.api.posts.addComment(data.postId), cb, data, errHandler, headerParams)
    },
    closePost (cb, data, errHandler, headerParams, apiParam) {
        httpApi.putDataViaApi(config.api.posts.closePost(apiParam), cb, data, errHandler, headerParams)
    },
    getCommentsByPostId (cb, data, errHandler, headerParams) {
        httpApi.getDataViaApi(config.api.posts.getCommentsByPostId(data.postId), cb, data, errHandler, headerParams)
    },
    addLike (cb, data, errHandler, headerParams) {
        httpApi.putDataViaApi(config.api.posts.addLike(data), cb, data, errHandler, headerParams)
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
    getAllCategories (cb, data, errHandler) {
        httpApi.getDataViaApi(config.api.posts.getAllCategories, cb, data, errHandler)
    },
    getAllGroups (cb, data, errHandler, headerParams) {
        httpApi.getDataViaApi(config.api.posts.getAllGroups, cb, errHandler, headerParams)
    },
    getAllTags (cb, data, errHandler) {
        httpApi.getDataViaApi(config.api.posts.getAllTags, cb, data, errHandler)
    },
    getAllLocations (cb, data, errHandler) {
        httpApi.getDataViaApi(config.api.posts.getAllLocations, cb, data, errHandler)
    },
    getAllTypes (cb, data, errHandler) {
        httpApi.getDataViaApi(config.api.posts.getAllTypes, cb, data, errHandler)
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
    getUserDetails (cb, errHandler, headerParams, apiParams) {
        httpApi.getDataViaApi(config.api.posts.getUserDetails(apiParams), cb, errHandler, headerParams)
    },
    getSelf (cb, data, errHandler, headerParams) {
        httpApi.getDataViaApi(config.api.posts.getSelf, cb, data, errHandler, headerParams)
    },
    uploadFile (cb, data, errHandler, headerParams) {
	    let formdata = new FormData()
        formdata.append('file', data.file)
        formdata.append('fileType', data.fileType)
        formdata.append('type', data.type)
        httpApi.postDataViaApi(config.api.posts.imageUpload(data), cb, formdata, errHandler, headerParams)
    },
    search (cb, data, errHandler, apiParam) {
        httpApi.postDataViaApi(config.api.search.search(apiParam), cb, data, errHandler)
    },
    userList(cb,errHandler) {
	    httpApi.getDataViaApi(config.api.search.userAutoComplete, cb, errHandler)
    },
    getPost(cb, data, errHandler, headerParams) {
	    httpApi.getDataViaApi(config.api.posts.getPost(data), cb, data, errHandler, headerParams)
    }
};
