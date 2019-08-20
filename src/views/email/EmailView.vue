<template>
	<div>
		<vs-sidebar click-not-close parent="#email-app-container" :hidden-background="true" class="full-vs-sidebar email-view-sidebar" v-model="isSidebarActive" position-right>
			<div class="mail-sidebar-content px-0 sm:py-6 pt-2 h-full" v-if="openMail.id">
				<div class="flex flex-wrap items-center email-header justify-between md:px-8 px-6 sm:pb-4">
					<div class="w-flex w-1/2">
						<div class="flex items-center">
							<feather-icon icon="ArrowLeftIcon" @click="$emit('closeSidebar')" class="cursor-pointer mr-4" svg-classes="w-6 h-6"></feather-icon>
							<h3 v-if="openMail.subject">{{ openMail.subject }}</h3>
							<h3 v-else>(no subject)</h3>
						</div>
					</div>
					<div class="w-1/5">
						<div class="vx-row">
							<div class="vx-col w-full">
									<div class="vx-row">
										<div class="vx-col w-full flex justify-between">
											<vs-button @click="replyPrompt=true" class="w-full" color="success" type="filled" icon="reply" size="large">Yanıtla</vs-button>
										</div>
									</div>
							</div>
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
				<div v-if="isSidebarActive">
					<div v-for="(chat, index) in ticketChatList" :key="index">
						<chat-card
						:currentMail=chat
						></chat-card>
					</div>
					<!-- reply ticket -->
		<vs-prompt
			class="email-compose"
			vs-title="Mesaj Yaz"
			vs-accept-text= "Gönder"
			vs-cancel-text="İptal"
			@vs-cancel="clearFields"
			@vs-accept="sendChat"
			@vs-close="clearFields"
			:vs-is-valid="validateForm"
			:vs-active.sync="replyPrompt">
				<VuePerfectScrollbar class="scroll-area p-4" :settings="settings">
					<form @submit.prevent>
						<quill-editor v-model="chat.text" :options="editorOption"></quill-editor>
						<!--<vs-upload ref="addTicketFiles" v-on:change="handleFileUpload" multiple text="Dosya ekle" :show-upload-button="false" />-->
					</form>
				</VuePerfectScrollbar>
		</vs-prompt>
					
				</div>
				</VuePerfectScrollbar>
			</div>
		</vs-sidebar>
	</div>
</template>

<script>
import ChatCard from '@/components/chat-card/ChatCard.vue'
import TicketService from "@/services/ticket.service"
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'

export default{
	data() {
		return {
			chat: {
				text: '',
				sendingDate: new Date(),
				ticketId: -1,
				userId: -1
			},
				ticketChatList: [],
				showThread: false,
				replyPrompt:false,
				mailTo: '',
				mailSubject: '',
				mailCC: '',
				mailBCC: '',
				mailMessage: '',
				settings: {
					maxScrollbarLength: 60,
					wheelSpeed: 0.30,
			},
			editorOption: {
				modules: {
					toolbar: [['bold', 'italic', 'underline', 'strike', 'link', 'blockquote', 'code-block'], [{ 'header': 1 }, { 'header': 2 }], [{ 'list': 'ordered'}, { 'list': 'bullet' }], [{ 'font': [] }],],
				},
				placeholder: 'İleti'
			},
		}
	},
	props: {
		emailTags: {
			type: Array,
			required: true,
		},
		openMail: {
			required: true,
			type: Object
		},
		isSidebarActive: {
			type: Boolean,
			required: true
		},
	},
	watch: {
		openMail: async function() {
			if (this.openMail.id) {
				const res = await TicketService.getAllTicketChats(this.openMail.id);
				if (res.status < 400) {
					this.ticketChatList = res.data;
				}
			}
		},
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
		currentMail: function() {
			return this.$store.getters['email/getMail'](this.openMail.id)
		},
		validateForm() {
			return this.chat.text != '';
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
				return this.$store.getters['email/getMail'](this.openMail.id).labels;
			},
			set(value) {
				if(Array.isArray(value)){
					const payload = { mailId: this.openMail.id, value: value }
					this.$store.dispatch('email/updateMailLabels', payload)
				}
			}
		}
	},
	methods: {
		toggleIsStarred() {
			const payload = {mailId: this.openMail.id, value : !this.currentMail.isStarred}
			this.$store.dispatch('email/toggleIsMailStarred', payload)
		},
		moveTo(to) {
			this.$emit('closeSidebar')
			this.$emit('moveTo', to)
		},
		// reply ticket methods
		clearFields() {
			this.mailTo = '';
			this.mailSubject = '';
			this.mailCC = '';
			this.mailBCC = '';
			this.mailMessage = '';
		},
		sendChat: async function() {
			this.chat.ticketId = this.openMail.id;
			this.chat.userId = this.$store.state.member.id;
			const resChat = await TicketService.saveChat(this.chat);
			this.ticketChatList.push(resChat.data);
		},
	},
	components: {
		quillEditor,
		VuePerfectScrollbar,
		ChatCard
	}
}
</script>