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
import {
	TokenService
} from '@/services/token.service'

Vue.use(Router)


const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [

		{
			// =============================================================================
			// LANDING LAYOUT ROUTES
			// =============================================================================
			path: '/',
			component: () => import('./views/landing/Landing.vue'),
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
			// MAIN LAYOUT ROUTES
			// =============================================================================
			path: '/dashboard',
			component: () => import('./layouts/main/Main.vue'),
			meta: {
				public: false
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
					path: '/apps/email',
					name: 'email',
					component: () => import('./views/email/Email.vue')
				},
				{
					path: '/concepts',
					name: 'concepts',
					component: () => import('./views/concept/Concepts.vue'),
				},
				{
					path: '/onay-bekleyenler',
					name: 'onay-bekleyenler',
					component: () => import('./views/OnayBekleyenler.vue'),
				}
			],
		},
		// =============================================================================
		// FULL PAGE LAYOUTS
		// =============================================================================
		{
			path: '/pages',
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
				}
			]
		},
		// Redirect to 404 page, if no match found
		{
			path: '*',
			redirect: '/pages/error-404'
		}
	],
})

router.beforeEach((to, from, next) => {
	const isPublic = to.matched.some(record => record.meta.public)
	const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
	const loggedIn = !!TokenService.getToken();

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

	next();
})

export default router;