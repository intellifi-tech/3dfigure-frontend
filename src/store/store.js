/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Version: 1.1
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

import moduleEmail from './email/moduleEmail.js'
import moduleCheckout from './checkout/moduleCheckout.js'
import moduleApi from './api/moduleApi.js'


export default new Vuex.Store({
	getters,
	mutations,
	state,
  actions,
  modules: {
    email: moduleEmail,
    checkout: moduleCheckout,
    api: moduleApi
	},
	strict: process.env.NODE_ENV !== 'production'
})
