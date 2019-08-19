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
				<!--<div class="vx-row">
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
				</div>-->
				<!-- /LABEL ROW -->
				<br>

				<div class="vx-row" v-if="currentMail.replies.length && !showThread">
					<div class="vx-col w-full">
						<span class="text-primary font-medium ml-10 cursor-pointer" @click="showThread = true">{{ currentMail.replies.length }} Earlier Messages</span>
					</div>
				</div>
				<div v-if="isSidebarActive">

					<div class="vx-row ">
						<div class="vx-col w-full pb-10">
							<vx-card>
								<div class="vx-row">
									<div class="vx-col w-full flex justify-between">
							<vs-button color="dark" type="line" icon="reply">Yanıtla</vs-button>									</div>
								</div>
							</vx-card>
						</div>
					</div>

					<chat-card
					:currentMail=currentMail
					></chat-card>
					
				</div>
				</VuePerfectScrollbar>
			</div>
		</vs-sidebar>
	</div>
</template>

<script>
import ChatCard from '@/components/chat-card/ChatCard.vue'
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
		VuePerfectScrollbar,
		ChatCard
	},
	updated() {
		if(this.currentMail.unread && this.isSidebarActive) this.$store.dispatch('email/updateMailUnread', {mails: [this.openMailId], unread: false});
	},
}
</script>