/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Version: 1.1
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
import UserService from '@/services/user.service';

const actions = {

	// ////////////////////////////////////////////
	// SIDEBAR & UI UX
	// ////////////////////////////////////////////

	updateSidebarWidth({ commit }, width) {
		commit('UPDATE_SIDEBAR_WIDTH', width);
	},
	updateI18nLocale({ commit }, locale) {
		commit('UPDATE_I18N_LOCALE', locale);
	},
	toggleContentOverlay({ commit }) {
		commit('TOGGLE_CONTENT_OVERLAY');
	},
	updateTheme({ commit }, val) {
		commit('UPDATE_THEME', val);
	},

	// ////////////////////////////////////////////
	// COMPONENT
	// ////////////////////////////////////////////	
	
	// VxAutoSuggest
	updateStarredPage({commit}, payload) {
		commit('UPDATE_STARRED_PAGE', payload)
	},

	async getCurrentUser({ commit }){
		const res = await UserService.getMember();
		commit('CURRENT_USER', res)
	},

	async updateFirstLogin({ commit }, member) {
		await UserService.setMember(member)
		commit('CURRENT_USER', member)
	}
}

export default actions