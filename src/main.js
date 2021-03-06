/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Version: 1.1
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax

// Custom Framework
import Vuelidate from 'vuelidate'
import VeeValidate from 'vee-validate'
import i18n from '@/plugins/i18n'
import ApiService from '@/services/api.service'
import AvatarSdkService from '@/services/avatarsdk.service'
import VueAuthenticate from 'vue-authenticate'
import VueScrollTo from 'vue-scrollto'
import VueCookie from 'vue-cookie'
import VueAxios from 'vue-axios'
import axios from 'axios';
import VueCardPayment from 'vue-card-payment'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-card-payment/dist/vue-card-payment.css'
import {
  TokenService
} from '@/services/token.service'


Vue.use(VueCardPayment)
Vue.use(VeeValidate)
Vue.use(Vuelidate)
Vue.use(Vuesax)
Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://3dfigur.com',
  providers: {
    facebook: {
      clientId: process.env.VUE_APP_FACEBOOK_TOKEN, //your Facebook App ID e.g. 12345667890
      redirectUri: 'http://3dfigur.com', // Your client app URL
      responseType: 'token',
      authorizationEndpoint: 'https://www.facebook.com/v3.0/dialog/oauth',
    },
    twitter: {}
  }
})
Vue.use(VueScrollTo)
Vue.use(VueCookie);

// Theme Configurations
import '../themeConfig.js'

// Globally Registered Components
import './globalComponents.js'

// Styles: SCSS
import './assets/scss/main.scss'

// Tailwind
import '@/assets/css/main.css';

// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism.css'

// Feather font icon
require('./assets/css/iconfont.css')

//landing page


require('./assets/css/bootstrap.min.css')
require('./assets/css/fontawesome.min.css')
require('./assets/css/flaticon.css')
require('./assets/css/animate.css')
require('./assets/css/style.css')
require('./assets/css/responsive.css')
require('./assets/css/ekko-lightbox.min.css')


// Set the base URL of the API
if (process.env.NODE_ENV === 'production') {
  ApiService.init(process.env.VUE_APP_PROD_ROOT_API)
} else {
  ApiService.init(process.env.VUE_APP_DEV_ROOT_API)
}

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
  AvatarSdkService.setToken()
}




Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')