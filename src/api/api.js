import config from '../configs';
import httpApi from '../api/index';
import { serializeQueryParams } from '../util';

export default {
	getAllQuestions (cb, data, errHandler) {
		httpApi.getDataViaApi(config.api.placement.allQuestions, cb, data, errHandler);
	},
	getQuestionById (cb, data, errHandler) {
		httpApi.getDataViaApi(config.api.placement.singleQuestion + serializeQueryParams(data), cb, errHandler);
	},
	validateLogin (cb, data, errHandler) {
		httpApi.postDataViaApi(config.api.placement.login, cb, data, errHandler)
	},
	validateRegister (cb, data, errHandler) {
		httpApi.postDataViaApi(config.api.placement.register, cb, data, errHandler)
	}
};