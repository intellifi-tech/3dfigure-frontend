/*=========================================================================================
  File Name: mutations.js
  Description: Vuex Store - mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Version: 1.1
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

const mutations = {

	// ////////////////////////////////////////////
	// SIDEBAR & UI UX
	// ////////////////////////////////////////////

	UPDATE_SIDEBAR_WIDTH(state, width) {
		state.sidebarWidth = width;
	},
	UPDATE_SIDEBAR_ITEMS_MIN(state, val) {
		state.sidebarItemsMin = val;
	},
	TOGGLE_REDUCE_BUTTON(state, val) {
		state.reduceButton = val;
	},
	TOGGLE_CONTENT_OVERLAY(state, val) {
		state.bodyOverlay = val;
	},
	TOGGLE_IS_SIDEBAR_ACTIVE(state, value) {
		state.isSidebarActive = value;
	},
	UPDATE_THEME(state, val) {
		state.theme = val;
	},
	UPDATE_WINDOW_BREAKPOINT(state, val) {
		state.breakpoint = val;
	},
	UPDATE_PRIMARY_COLOR(state, val) {
		state.themePrimaryColor = val;
	},
	CURRENT_USER(state, val) {
		state.member = val;
	},

	// ////////////////////////////////////////////
	// COMPONENT
	// ////////////////////////////////////////////

	// VxAutoSuggest
	UPDATE_STARRED_PAGE(state, payload) {
		const index = state.navbarSearchAndPinList.data.findIndex((item) => item.index == payload.index)
		state.navbarSearchAndPinList.data[index].highlightAction = payload.val;
	},

	UPDATE_LOGIN_POPUP(state, value) {
		state.landing.loginPopup = value;
	},

	UPDATE_REGISTER_POPUP(state, value) {
		state.landing.registerPopup = value;
	},

	DELETE_FIGURE_FROM_SELECTED(state, indexes) {
		state.selectedFigures.avatarKey.splice(indexes.f, 1);
		state.selectedFigures.imagePath.splice(indexes.m, 1);
	},

	ADD_FIGURE_SELECTED(state, value) {
		state.selectedFigures.avatarKey.push(value.a);
		state.selectedFigures.imagePath.push(value.s);
	},

	INIT_CONCEPT(state, value) {
		state.conceptPage.conceptList = value
	},

	INIT_CONCEPT_PAGE(state, pages) {
		state.conceptPage.totalPages = pages
	}
}

export default mutations