import Vue from 'vue';
import VueResource from 'vue-resource';
import config from '../configs/index';

Vue.use(VueResource);

export default {
	getDataViaApi(path, callback, errorHandler, headerParams) {
		let headerObject = { 'Cache-Control': 'no-cache' };
		Vue.http
			.get(config.getApiPath(path), {
				headers : typeof headerParams !== 'undefined' ? Object.assign(headerObject, headerParams) : headerObject
			})
			.then(
				(response) => callback(response),
				(error) => {
					if (typeof errorHandler === 'function') errorHandler(error);
				}
			);
	},

	postDataViaApi(path, callback, data, errorHandler, headerParams) {
		let headerObject = { 'Cache-Control': 'no-cache' };
		Vue.http
			.post(config.getApiPath(path), data)
			.then(
				(response) => callback(response),
				(error) => {
					if (typeof errorHandler === 'function') errorHandler(error);
				}
			);
	},

	putDataViaApi(path, callback, errorHandler, data, headerParams) {
		let headerObject = { 'Cache-Control': 'no-cache' };
		Vue.http
			.put(config.getApiPath(path), data, {
				headers : typeof headerParams !== 'undefined' ? Object.assign(headerObject, headerParams) : headerObject
			})
			.then(
				(response) => callback(response),
				(error) => {
					if (typeof errorHandler === 'function') errorHandler(error);
				}
			);
	},

	deleteDataViaApi(path, callback, errorHandler, headerParams) {
		let headerObject = { 'Cache-Control': 'no-cache' };
		Vue.http
			.delete(config.getApiPath(path), {
				headers : typeof headerParams !== 'undefined' ? Object.assign(headerObject, headerParams) : headerObject
			})
			.then(
				(response) => callback(response),
				(error) => {
					if (typeof errorHandler === 'function') errorHandler(error);
				}
			);
	}
};

