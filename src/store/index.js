import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		encodeedHtml: '',
		backToTopshow: false, //控制返回顶部按钮是否展示
		role: '1',
		isLogined: false,
		username: ''
	},
	mutations: {
		saveEcodeedHtml(state, encodeedHtml) {
			state.encodeedHtml = encodeedHtml;
		},
		changeBackToTopShowable(state, payload) {
			state.backToTopshow = payload.show ? true : false;
		},
		saveUserProfile(state, payload) {
			state.role = payload.role;
			state.isLogined = payload.isLogined;
			state.username = payload.username;
		}
	},
	actions: {},
	modules: {}
});
