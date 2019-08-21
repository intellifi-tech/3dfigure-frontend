/*=========================================================================================
  File Name: moduleEmailActions.js
  Description: Email Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Version: 1.1
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
import TicketService from "@/services/ticket.service"

export default {
	setMailSearchQuery({ commit }, query){
		commit('SET_MAIL_SEARCH_QUERY', query)
	},
	updateMailFilter({ commit }, filterName){
		commit('UPDATE_MAIL_FILTER', filterName)
	},
	toggleIsMailStarred({ commit }, payload) {
		commit('TOGGLE_IS_MAIL_STARRED', payload);
	},
	moveMailsTo({ commit }, payload) {
		commit('MOVE_MAILS_TO', payload);
	},
	updateMailUnread({ commit }, payload) {
		//TODO UNREAD GUNCELLEMESI BURADA YAPILACAK
		commit('UPDATE_MAIL_UNREAD', payload);
	},
	addLabelToMails({ commit }, payload) {
		commit('ADD_LABEL_TO_MAILS', payload);
	},
	updateMailLabels({ commit }, payload) {
		commit('UPDATE_MAIL_LABELS', payload);
	},
	setUserTickets: async function({ commit }) {
		const res = await TicketService.getAllUsersTickets();
		if (res.status < 400) {
			commit('SET_USER_TICKETS', res.data);
		}
	}
}