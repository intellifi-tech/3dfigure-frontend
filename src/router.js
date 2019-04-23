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

Vue.use(Router)

export default new Router({
	base: process.env.BASE_URL,
	routes: [

		{
			// =============================================================================
			// LANDING LAYOUT ROUTES
			// =============================================================================
			path: '/',
			component: () => import('./views/landing/Landing.vue'),
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
			children: [
				// =============================================================================
				// PAGES
				// =============================================================================
				{
					path: '/pages/login',
					name: 'pageLogin',
					component: () => import('@/views/login/Login.vue')
				},
				{
					path: '/apps/email',
					name: 'email',
					component: () => import('./views/email/Email.vue')
				},
				{
					path: '/pages/error-404',
					name: 'pageError404',
					component: () => import('@/views/pages/Error404.vue')
				},
				{
					path: '/pages/unity',
					name: 'unity',
					component: () => import('@/components/unity/Unity.vue')
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