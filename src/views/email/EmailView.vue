<!-- =========================================================================================
	File Name: EmailView.vue
	Description: Email Application - Single Email View (Inbox)
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Version: 1.1
	Author: Pixinvent
	Author URL: hhttp://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<div>
		<vs-sidebar click-not-close parent="#email-app-container" :hidden-background="true" class="full-vs-sidebar email-view-sidebar" v-model="isSidebarActive" position-right>
			<div class="mail-sidebar-content px-0 sm:py-6 pt-2 h-full" v-if="currentMail">
				<div class="flex flex-wrap items-center email-header justify-between md:px-8 px-6 sm:pb-2">
					<div class="flex mb-4">
						<div class="flex items-center">
							<feather-icon icon="ArrowLeftIcon" @click="$emit('closeSidebar')" class="cursor-pointer mr-4" svg-classes="w-6 h-6"></feather-icon>
							<h3 v-if="currentMail.subject">{{ currentMail.subject }}</h3>
							<h3 v-else>(no subject)</h3>
						</div>
					</div>
					
				</div>

				<VuePerfectScrollbar class="scroll-area md:px-8 pt-4 px-6" :settings="settings">
				<!-- LABEL ROW -->
				<div class="vx-row">
					<div class="vx-col w-full">
						<div class="email__labels--single flex ml-10 items-center mt-2">
							<transition-group name="list" tag="div" class="flex">
								<div v-for="label in currentMail.labels" :key="label" class="open-mail-label flex items-center mr-4">
									<div class="h-3 w-3 rounded-full mr-1" :class="'bg-' + labelColor(label)"></div>
									<span class="text-sm">{{ label }}</span>
								</div>
							</transition-group>
						</div>
					</div>
				</div>
				<!-- /LABEL ROW -->
				<br>

				<div class="vx-row" v-if="currentMail.replies.length && !showThread">
					<div class="vx-col w-full">
						<span class="text-primary font-medium ml-10 cursor-pointer" @click="showThread = true">{{ currentMail.replies.length }} Earlier Messages</span>
					</div>
				</div>
				<div v-if="isSidebarActive">

					<!-- ALL MESSAGES - THREAD -->
					<div class="vx-row" v-for="threadMail in currentMail.replies.slice().reverse()" :key="threadMail.id" v-if="showThread">
						<div class="vx-col w-full">
							<vx-card class="px-4 mb-10">

								<!-- MAIL META ROW -->
								<div class="vx-row">
									<div class="vx-col w-full border-b border-l-0 border-r-0 border-t-0 border-grey-light border-solid flex justify-between flex items-center">
										<div class="flex items-center">
											<div>
												<vs-avatar class="sender__avatar--single flex-no-shrink mr-3 border-2 border-solid border-white" :src="require(`@/assets/images/portrait/small/${threadMail.img}`)" size="65px"></vs-avatar>
											</div>
											<div class="flex flex-col">
												<h4 class="mb-1">{{ threadMail.sender_name }}</h4>
												<div class="flex items-center">
													<span class="text-sm">{{ threadMail.sender }}</span>

													<vs-dropdown vs-custom-content vs-trigger-click>
														<feather-icon icon="ChevronDownIcon" style="width:1rem; height:1rem" class="cursor-pointer"></feather-icon>

														<vs-dropdown-menu style="z-index: 40001">
															<div class="p-2">
																<p class="text-sm mb-1">From: <span class="font-semibold"> {{ threadMail.sender }} </span></p>
																<p class="text-sm mb-1">To: <span class="font-semibold"> {{ threadMail.to }} </span></p>
																<p class="text-sm mb-1">Date: <span class="font-semibold"> {{ threadMail.time }} {{ threadMail.time | date(true) }} </span></p>
																<p class="text-sm mb-1" v-if="threadMail.cc.length">cc: <span class="font-semibold"> {{ threadMail.cc }} </span></p>
															</div>
														</vs-dropdown-menu>
													</vs-dropdown>
												</div>
											</div>
										</div>
										<div class="flex flex-col justify-end">
											<span class="text-right">{{ threadMail.time | date(true) }}</span>
											<div class="flex justify-end mt-2">
												<span class="text-right">{{ threadMail.time }}</span>
											</div>
										</div>
									</div>
								</div>

								<!-- MAIL CONTENT -->
								<div class="vx-row">
									<div class="vx-col w-full">
										<div class="mail__content break-words mt-8 mb-4" v-html="threadMail.message"></div>
									</div>
								</div>

								<!-- MAIL ATTACHMENTS -->
								<div class="vx-row" v-if="threadMail.attachments.length">
									<div class="vx-col w-full border-b border-l-0 border-r-0 border-t-0 border-grey-light border-solid mb-6 flex">
										<feather-icon icon="PaperclipIcon"></feather-icon>
										<span class="block py-4">ATTACHMENTS</span>
									</div>
									<div class="flex">
										<div class="mail__attachment" v-for="(attachment, index) in threadMail.attachments" :key="index">
											<vs-chip color="primary" class="px-4 py-2 mr-3">{{ attachment }}</vs-chip>
										</div>
									</div>

								</div>
							</vx-card>
						</div>
					</div>

					<!-- LATEST MESSAGE -->
					<div class="vx-row">
						<div class="vx-col w-full">
							<vx-card class="px-4">

								<!-- MAIL META ROW -->
								<div class="vx-row w-full border-b border-l-0 border-r-0 border-t-0 border-grey-light border-solid flex justify-between flex items-center">
									<div class="vx-col sm:w-4/5 w-full flex flex-wrap items-center mb-2">
										<vs-avatar class="sender__avatar--single flex-no-shrink mr-3 border-2 border-solid border-white" :src="require(`@/assets/images/portrait/small/${currentMail.img}`)" size="65px"></vs-avatar>
										<div class="flex flex-col my-2">
											<h4 class="mb-1">{{ currentMail.sender_name }}</h4>
											<div class="flex items-center">
												<span class="text-sm">{{ currentMail.sender }}</span>

												<vs-dropdown vs-custom-content vs-trigger-click class="inline-flex">
													<feather-icon icon="ChevronDownIcon" style="width:1rem; height:1rem" class="cursor-pointer"></feather-icon>

													<vs-dropdown-menu style="z-index: 40001">
														<div class="p-2">
															<p class="text-sm mb-1">From: <span class="font-semibold"> {{ currentMail.sender }} </span></p>
															<p class="text-sm mb-1">To: <span class="font-semibold"> {{ currentMail.to }} </span></p>
															<p class="text-sm mb-1">Date: <span class="font-semibold"> {{ currentMail.time }} {{ currentMail.time }} </span></p>
															<p class="text-sm mb-1" v-if="currentMail.cc.length">cc: <span class="font-semibold"> {{ currentMail.cc }} </span></p>
														</div>
													</vs-dropdown-menu>
												</vs-dropdown>
											</div>
										</div>
									</div>
									<div class="vx-col sm:w-1/5 w-full flex sm:flex-col items-center sm:justify-end mb-2">
											<span class="flex sm:mr-0 mr-2 self-end whitespace-no-wrap">{{ currentMail.time }}</span>
										<span class="flex self-end sm:mt-2 mt-0 whitespace-no-wrap">{{ currentMail.time }}</span>
									</div>
								</div>

								<!-- MAIL CONTENT -->
								<div class="vx-row">
									<div class="vx-col w-full">
										<div class="mail__content break-words mt-8 mb-4" v-html="currentMail.message"></div>
									</div>
								</div>

								<!-- MAIL ATTACHMENTS -->
								<div class="vx-row" v-if="currentMail.attachments.length">
									<div class="vx-col w-full border-b border-l-0 border-r-0 border-t-0 border-grey-light border-solid mb-6 flex">
										<feather-icon icon="PaperclipIcon"></feather-icon>
										<span class="block py-4">ATTACHMENTS</span>
									</div>
									<div class="flex">
										<div class="mail__attachment" v-for="(attachment, index) in currentMail.attachments" :key="index">
											<vs-chip color="primary" class="px-4 py-2 mr-3">{{ attachment }}</vs-chip>
										</div>
									</div>

								</div>
							</vx-card>
						</div>
					</div>
					<div class="vx-row" style="margin-top: 2.2rem">
						<div class="vx-col w-full pb-10">
							<vx-card>
								<div class="vx-row">
									<div class="vx-col w-full flex justify-between">
										<span class="text-lg">Click here to <span class="text-primary font-semibold cursor-pointer">Reply</span> or <span class="text-primary font-semibold cursor-pointer">Forward</span></span>
										<feather-icon icon="PaperclipIcon"></feather-icon>
									</div>
								</div>
							</vx-card>
						</div>
					</div>
				</div>
				</VuePerfectScrollbar>
			</div>
		</vs-sidebar>
	</div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default{
	props: {
		emailTags: {
			type: Array,
			required: true,
		},
		openMailId: {
			required: true,
			validator: prop => typeof prop === 'number' || prop === null
		},
		isSidebarActive: {
			type: Boolean,
			required: true
		},
	},
	data() {
		return {
			showThread: false,
			settings: {
				maxScrollbarLength: 60,
				wheelSpeed: 0.30,
			},
		}
	},
	watch: {
		isSidebarActive(value) {
			if(!value) {
				this.$emit('closeSidebar');
				setTimeout(() => {
					this.showThread = false;
				}, 500)
			}
		},
	},
	computed: {
		currentMail() {
			return this.$store.getters['email/getMail'](this.openMailId)
		},
		labelColor() {
			return (label) => {
				const tags = this.$store.state.email.mailTags;
				return tags.find((tag) => {
					return tag.value == label
				}).color
			}
		},
		currentMailLabels: {
			get() {
				return this.$store.getters['email/getMail'](this.openMailId).labels;
			},
			set(value) {
				if(Array.isArray(value)){
					const payload = { mailId: this.openMailId, value: value }
					this.$store.dispatch('email/updateMailLabels', payload)
				}
			}
		}
	},
	methods: {
		toggleIsStarred() {
			const payload = {mailId: this.openMailId, value : !this.currentMail.isStarred}
			this.$store.dispatch('email/toggleIsMailStarred', payload)
		},
		moveTo(to) {
			this.$emit('closeSidebar')
			this.$emit('moveTo', to)
		}
	},
	components: {
		VuePerfectScrollbar
	},
	updated() {
		if(this.currentMail.unread && this.isSidebarActive) this.$store.dispatch('email/updateMailUnread', {mails: [this.openMailId], unread: false});
	},
}
</script>