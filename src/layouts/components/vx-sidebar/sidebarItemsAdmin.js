/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
  				url 		=> router path
  				name 		=> name to display in sidebar
  				slug 		=> router path name
  				icon 		=> Feather Icon component/icon name
  				tag 		=> text to display on badge
  				tagColor 	=> class to apply on badge element
  				i18n 		=> Internationalization
  				submenu 	=> submenu of current item (current item will become dropdown )
  							NOTE: Submenu don't have any icon(you can add icon if u want to display)
  				isDisabled 	=> disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Version: 1.1
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
	{
		url: "/admin/dashboard",
		name: "Dashboard",
		slug: "dashboard",
		icon: "HomeIcon",
	},
	{
		url: null,
		name: "Konsept Yönetimi",
		slug: "concept-manage",
		icon: "EditIcon",
	
		submenu: [
			{
				url: "/admin/concept",
				name: "Konseptler",
				slug: "concept-manage",
			},
			{
				url: "/admin/category",
				name: "Kategoriler",
				slug: "concept-categories",
			},
			{
				url: "/admin/coupon",
				name: "Kuponlar",
				slug: "concept-coupon",
			}
		]
	},
	{
		url: "/admin/users",
		name: "Kullanıcılar",
		slug: "users",
		icon: "UsersIcon",
	},
	{
		url: "/admin/landing",
		name: "Ön Sayfa",
		slug: "landing",
		icon: "LayoutIcon",
	},
	{
		url: "/admin/catalog",
		name: "Landing",
		slug: "catalog",
		icon: "LayersIcon",
	},
	
	{
		url: "/admin/orders",
		name: "Siparişler",
		slug: "orders",
		icon: "ShoppingCartIcon",
	},
	{
		url: null,
		name: "Kullanıcı Etkileşimi",
		slug: "user-action",
		icon: "BellIcon",

		submenu: [
			{
				url: "/admin/ticket",
				name: "Destek",
				slug: "ticket-admin",
			},
			{
				url: "/admin/email",
				name: "Posta",
				slug: "email-admin",
			}
		]
	}	
]