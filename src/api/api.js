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
    }
};