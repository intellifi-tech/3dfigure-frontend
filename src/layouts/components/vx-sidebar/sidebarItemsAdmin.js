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
		url: "/dashboard-admin",
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
				url: "/concept-categories",
				name: "Kategoriler",
				slug: "concept-categories",
			},
			{
				url: "/concept-manage",
				name: "Kategori Düzenle",
				slug: "concept-manage",
			}
		]
	},
	{
		url: "/users",
		name: "Kullanıcılar",
		slug: "users",
		icon: "UsersIcon",
	},
	{
		url: null,
		name: "Katalog",
		slug: "catalog",
		icon: "LayersIcon",
		
		submenu: [
			{
				url: "/3d-models",
				name: "3D Modeller",
				slug: "3d-models",
			},
			{
				url: "/example-projects",
				name: "Örnek Çalışmalar",
				slug: "example-projects",
			},
			{
				url: "/pricing",
				name: "Fiyatlandırma",
				slug: "pricing",
			}
		]
	},
	
	{
		url: "/orders",
		name: "Siparişler",
		slug: "orders",
		icon: "ShoppingCartIcon",
	},
	{
		url: "/user-action",
		name: "Kullanıcı Etkileşimi",
		slug: "user-action",
		icon: "BellIcon",

		submenu: [
			{
				url: "/ticket-admin",
				name: "Destek",
				slug: "ticket-admin",
			},
			{
				url: "/email-admin",
				name: "Posta",
				slug: "email-admin",
			}
		]
	}	
]