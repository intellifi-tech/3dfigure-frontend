/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
  					path => router path
  					name => router name
  					component(lazy loading) => component to load
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Version: 1.1
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import i18n from '@/plugins/i18n.js'
import ApiService from '@/services/api.service'
import UserService from '@/services/user.service'
import LandingService from '@/services/admin/landing.service'
import store from '@/store/store.js';

Vue.use(Router)


const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [

		{
			// =============================================================================
			// LANDING LAYOUT ROUTES
			// =============================================================================
			path: '/error404',
			component: () => import('./views/pages/Error404.vue'),
			meta: {
				public: true
			},
			children: [
				// =============================================================================
				// Theme Routes
				// =============================================================================

			],
		},
		{
			// =============================================================================
			// LANDING LAYOUT ROUTES
			// =============================================================================
			path: '/',
			component: () => import('./views/landing/Landing.vue'),
			meta: {
				public: true,
				showChat: true 
			},
			children: [
				// =============================================================================
				// Theme Routes
				// =============================================================================

			],
		},
		{
			path: '/activation',
			meta: {
				api: true
			},
			component: () => import('./views/api/Api.vue'),
			props: true
		},
		{
			path: '/uyelik-sozlesmesi',
			component: () => import('./views/pages/UyelikSozlesmesi.vue'),
			meta: {
				public: true
			},
			children: [

			],
		},
		{
			path: '/mesafeli-satis-sozlesmesi',
			component: () => import('./views/pages/MesafeliSatisSozlesmesi.vue'),
			meta: {
				public: true
			},
			children: [

			],
		},
		{
			path: '/siparis-iptal-ve-iade-sartlari',
			component: () => import('./views/pages/SiparisIptalveIade.vue'),
			meta: {
				public: true
			},
			children: [

			],
		},
		{
			path: '/kisisel-veri-kanunu',
			component: () => import('./views/pages/KisiselVeriKanunu.vue'),
			meta: {
				public: true
			},
			children: [

			],
		},
		{
			// =============================================================================
			// MAIN LAYOUT ROUTES
			// =============================================================================
			path: '',
			component: () => import('./layouts/main/Main.vue'),
			meta: {
				public: false,
				showChat: false
			},
			children: [
				// =============================================================================
				// Theme Routes
				// =============================================================================
				{
					path: '/main',
					name: 'main',
					component: () => import('./views/Main.vue'),
					
				},
				{
					path: '/checkout',
					name: 'checkout',
					component: () => import('./views/checkout/Checkout.vue'),
				},
				{
					path: '/ticket',
					name: 'ticket',
					component: () => import('./views/email/Email.vue'),
					beforeEnter: async (to, from, next) => {
						
						await store.dispatch("getCurrentUser")
						next()
                    }
				},
				{
					path: '/order',
					name: 'order',
					component: () => import('./views/order/Order.vue'),
				},
				{
					path: '/profile',
					name: 'profile',
					component: () => import('./views/profile/Profile.vue'),
				}
			],
		},
		// =============================================================================
		// FULL PAGE LAYOUTS
		// =============================================================================
		{
			path: '',
			component: () => import('@/layouts/full-page/FullPage.vue'),
			meta: {
				public: true,
				onlyWhenLoggedOut: true
			},
			children: [
				// =============================================================================
				// PAGES
				// =============================================================================
				{
					path: '/login',
					name: 'pageLogin',
					component: () => import('@/views/login/Login.vue')
				},
				{
					path: '/register',
					name: 'pageRegister',
					component: () => import('@/views/login/Register.vue')
				},
				{
					path: '/forgot-password',
					name: 'pagePassword',
					component: () => import('@/views/login/ForgotPassword.vue'),
					meta: {
						api: true
					}
				},
			]
		},
		{
			path: '/admin',
			component: () => import('@/layouts/admin/Admin.vue'),
			meta: {
				public: false,
				admin: true
				
			},
			children: [
				{
					path: '/admin/dashboard',
					name: 'dashboard-admin',
					component: () => import('@/views/admin/Admin.vue')
				},
				{
					path: '/admin/concept',
					name: 'concept-manage',
					component: () => import('@/views/admin/concept-manage/ConceptManage.vue')
				},
				{
					path: '/admin/category',
					name: 'concept-categories',
					component: () => import('@/views/admin/concept-categories/ConceptCategories.vue')
				},
				{
					path: '/admin/coupon',
					name: 'concept-coupon',
					component: () => import('@/views/admin/concept-coupon/ConceptCoupon.vue')
				},
				{
					path: '/admin/users',
					name: 'users',
					component: () => import('@/views/admin/users/Users.vue')
				},
				{
					path: '/admin/user-detail',
					name: 'user-detail',
					component: () => import('@/views/admin/users/UserDetail.vue')
				},
				{
					path: '/admin/pricing',
					name: 'pricing',
					component: () => import('@/views/admin/pricing/Pricing.vue')
				},
				{
					path: '/admin/projects',
					name: 'example-projects',
					component: () => import('@/views/admin/example-projects/ExampleProjects.vue')
				},
				{
					path: '/admin/model',
					name: '3d-models',
					component: () => import('@/views/admin/3d-models/3dModels.vue')
				},
				{
					path: '/admin/orders',
					name: 'orders',
					component: () => import('@/views/admin/orders/Orders.vue')
				},
				{
					path: '/admin/order-detail',
					name: 'order-detail',
					component: () => import('@/views/admin/orders/OrderDetail.vue')
				},
				{
					path: '/admin/ticket',
					name: 'ticket-admin',
					component: () => import('@/views/email/Email.vue'),
					beforeEnter: async (to, from, next) => {
						
						await store.dispatch("getCurrentUser")
						next()
                    }
				},/*
				{
					path: '/admin/email',
					name: 'email-admin',
					component: () => import('@/views/email/Email.vue')
				},*/
				{
					path: '/admin/landing',
					name: 'landing-admin',
					component: () => import('@/views/admin/landing/Landing.vue')
				},
				
				
				
			]
		},
		// Redirect to 404 page, if no match found
		{
			path: '*',
			redirect: '/error404'
		}
	],
})


router.beforeEach(async (to, from, next) => {
	const isAdmin = to.matched.some(record => record.meta.admin)
	const isPublic = to.matched.some(record => record.meta.public)
	const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
	const api = to.matched.some(record => record.meta.api)
	const loggedIn = !!ApiService.getHeader()
	if (sessionStorage.getItem('lang') !== null && sessionStorage.getItem('lang') !== i18n.locale) {
		sessionStorage.setItem('lang', i18n.locale)
	}

	/*const c = await LandingService.getCountry();
	console.log("router "+c.countryCode)
	const lc =	sessionStorage.getItem('lang')
	const ctr =  c.countryCode

	 if(ctr !== "TR"){
		 	sessionStorage.setItem('lang', i18n.locale)
		}
		else{
			sessionStorage.setItem('lang', i18n.fallbackLocale)
		}	*/
	
	if (!api) {

		if (isAdmin) {
			const res = await UserService.getMember();
			if (res.status >= 400 || res.authorities[0] != 'ROLE_ADMIN') {
				return next('/main')
			}
		}

		if (!isPublic && !loggedIn) {
			return next({
				path: '/login',
				query: {
					redirect: to.fullPath
				} // Store the full path to redirect the user to after login
			});
		}

		// Do not allow user to visit login page or register page if they are logged in
		if (loggedIn && onlyWhenLoggedOut) {
			return next('/main')
		}
	}

	next();
})

router.afterEach(() => {
	// Remove initial loading
	const appLoading = document.getElementById('loading-bg')
	  if (appLoading) {
		  appLoading.style.display = "none";
	  }
  })
export default router;