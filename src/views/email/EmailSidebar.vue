<template>
	<div class="email__email-sidebar h-full mt-5">
		<div class="mx-6 clearfix" v-if="userAuth!='ROLE_ADMIN'">
			<vs-button 
			size="large" 
			class="bg-primary-gradient w-full px-4" 
			icon-pack="feather" 
			icon="icon-edit" 
			@click="activePrompt = true">{{$t('dashboard.ticket.sidebar.newTicket.btnNew')}}</vs-button>
		</div>

		<!-- compose email -->
		<vs-prompt
			class="email-compose"
			:vs-title= "$t('dashboard.ticket.sidebar.newTicket.prompt.title')"
			:vs-accept-text= "$t('dashboard.ticket.sidebar.newTicket.prompt.accept')"
			:vs-cancel-text= "$t('dashboard.ticket.sidebar.newTicket.prompt.cancel')"
			@vs-cancel="clearFields"
			@vs-accept="saveTicket"
			@vs-close="clearFields"
			:vs-is-valid="validateForm"
			:vs-active.sync="activePrompt">
				<VuePerfectScrollbar class="scroll-area p-4" :settings="settings">
					<form @submit.prevent>
						<span class="h6 text-sm font-light">{{$t('dashboard.ticket.sidebar.newTicket.prompt.orderCode')}}</span>
							<div :class="{'vs-select-danger': this.$v.ticket.ordersId.$invalid && !first}">	
								<select 
								v-model="ticket.ordersId" 
								class="w-full mb-6 form-control-lg selecting selectExample select-input"
								  >
									<option
                      				:key="item.id"
                      				:value="item.id"
                      				v-for="(item) in orderList"
                    				>{{item.orderCode}}</option>
								</select>
							</div>
						
						<span class="h6 text-sm font-light">{{$t('dashboard.ticket.sidebar.newTicket.prompt.ticketType')}}</span>
							<div :class="{'vs-select-danger': this.$v.ticket.type.$invalid && !first}">	
								<select
								 v-model="ticket.type" 
								 class="w-full mb-6 form-control-lg selecting selectExample select-input" 
								 >
									<option
                      					:key="index"
                      					:value="item"
                      					v-for="(item,index) in ticketTypeList"
                    				>{{item == 'SALES' ? $t('dashboard.ticket.ticketType.sales') : $t('dashboard.ticket.ticketType.technic')}}</option>
								</select>
							</div>

						<vs-input 
						:label-placeholder="$t('dashboard.ticket.sidebar.newTicket.prompt.subject')" 
						v-model="ticket.subject" 
						class="w-full mb-6"
						:class="{'vs-input-danger':this.$v.ticket.subject.$invalid && !first}"
						 />

						<quill-editor
						 v-model="chat.text"
						 :options="editorOption"
						 :class="{'border-solid border border-theme-danger':this.$v.chat.text.$invalid && !first}"
						  ></quill-editor>
						<!--<input type="file" multiple ref="addTicketFiles" v-on:change="handleFileUpload"
                			accept="*/*" class="input-file" />-->
						<!--<vs-upload ref="addTicketFiles" v-on:change="handleFileUpload" multiple text="Dosya ekle" :show-upload-button="false" />-->
					</form>
				</VuePerfectScrollbar>
		</vs-prompt>

		<VuePerfectScrollbar class="email-scroll-area mt-5" :settings="settings">
			<div class="px-6 pb-2 flex flex-col" v-for="(status, index) in ticketStatusList" :key="index">

				<div class="flex justify-between items-center cursor-pointer" :class="{'text-primary': mailFilter == status}" @click="updateFilter(status)">
					<div class="flex items-center mb-2">
						<feather-icon :icon="status == 'OPEN' ? 'ClockIcon' : status == 'IN_PROGRESS' ? 'Edit2Icon' : 'CheckSquareIcon'" :svgClasses="[{'text-primary stroke-current': mailFilter == status}, 'h-6 w-6']"></feather-icon>
						<span class="text-lg ml-3">{{status == 'OPEN' ? $t('dashboard.ticket.ticketStatus.open') : status == 'IN_PROGRESS' ? $t('dashboard.ticket.ticketStatus.inProgress') : $t('dashboard.ticket.ticketStatus.close')}}</span>
					</div>
					<!-- <vs-chip color="primary" v-if="unreadMails('inboxed') > 0">{{ unreadMails('inboxed') }}</vs-chip> -->
				</div>
				<!-- <div class="flex justify-between items-center mt-4 cursor-pointer" :class="{'text-primary': mailFilter == 'draft'}" @click="updateFilter('draft')">
					<div class="flex items-center mb-2">
						<feather-icon icon="Edit2Icon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'draft'}, 'h-6 w-6']"></feather-icon>
						<span class="text-lg ml-3">Açık</span>
					</div>
					<vs-chip color="warning" v-if="draftMails > 0">{{ draftMails }}</vs-chip>
				</div>
				<div class="flex items-center mt-4 mb-2 cursor-pointer" :class="{'text-primary': mailFilter == 'trash'}" @click="updateFilter('trash')">
					<feather-icon icon="CheckSquareIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'trash'}, 'h-6 w-6']"></feather-icon>
					<span class="text-lg ml-3">Kapandı</span>
				</div> -->
				
			</div>
			<vs-divider></vs-divider>
			<div class="email__labels px-6 py-4" v-if="userAuth=='ROLE_ADMIN'">
				<h5 class="mb-8">{{$t('dashboard.ticket.ticketType.title')}}</h5>
				<div class="email__lables-list">
					<div class="email__label flex items-center mb-4 cursor-pointer" :class="{'text-primary': mailFilter == tag}" v-for="(tag, index) in ticketTypeList" :key="index" @click="updateFilter(tag)">
						<div class="ml-1 h-4 w-4 rounded-full mr-4" :class="tag == 'SALES' ? 'bg-warning' : 'bg-primary'"></div>
						<span class="text-lg">{{tag == 'SALES' ? $t('dashboard.ticket.ticketType.sales') : $t('dashboard.ticket.ticketType.technic')}}</span>
					</div>
				</div>
			</div>
		</VuePerfectScrollbar>
	</div>
</template>

<script>
import {
  required,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import TicketService from "@/services/ticket.service"
import OrderService from "@/services/order.service"

export default{
	props: {
		emailTags: {
			type: Array,
			required: true,
		},
		mailFilter: {
			type: String,
			required: true,
		}
	},
	created: async function() {
		const res = await OrderService.getAllOrdersForTicket();
		this.orderList = res.content;
		
		this.userAuth= this.$store.state.member.authorities[0];
	},
	data() {
		return {
			first: true,
			orderList: [],
			files: [],
			ticket: {
				status: 'OPEN',
				subject: '',
				type: '',
				createDate: new Date(),
				lastModifiedDate: new Date(),
				ordersId: -1

			},
			chat: {
				text: '',
				sendingDate: new Date(),
				ticketId: -1,
				userId: -1
			},
			ticketTypeList: ['SALES', 'TECHNICAL'],
			ticketStatusList: ['OPEN', 'IN_PROGRESS', 'CLOSE'],
			activePrompt: false,
			mailTo: '',
			mailSubject: '',
			mailCC: '',
			mailBCC: '',
			mailMessage: '',
			editorOption: {
				modules: {
					toolbar: [['bold', 'italic', 'underline', 'strike', 'link', 'blockquote', 'code-block'], [{ 'header': 1 }, { 'header': 2 }], [{ 'list': 'ordered'}, { 'list': 'bullet' }], [{ 'font': [] }],],
				},
				placeholder:''
			},
			settings: {
				maxScrollbarLength: 60,
				wheelSpeed: 0.30,
			},
			userAuth:"",
		}
	},
	computed: {
		validateForm() {
			return this.ticket.subject != '';
		},
		unreadMails() {
			return (mailType) => this.$store.getters['email/unreadMails'](mailType);
		},
		draftMails() {
			return this.$store.getters['email/NumdraftMails'];
		},
		/*getAuth() {
			
			return this.$store.state.member.authorities[0];
		}*/
	},
	methods: {
		handleFileUpload() {
			this.files = this.$refs.addTicketFiles.files;
		},
		updateFilter(filterName) {
			this.$store.dispatch(newFunction(), filterName);
			this.$emit('closeSidebar', false);
		},
		saveTicket: async function() {

			if (this.$v.$invalid) {
			     this.$vs.notify({
			       time: 6000,
			       title: `${this.$i18n.messages[this.$i18n.locale].notify.error.title}`,
			       text: `${this.$i18n.messages[this.$i18n.locale].notify.error.text.default}`,
			       color: "danger"
			     });
				 this.first = false;
				 this.activePrompt= true;
			     return;
			  }
			  else{ 
				  const resTicket = await TicketService.saveTicket(this.ticket);

					if (resTicket.status < 400) {
						this.chat.ticketId = resTicket.data.id;
						this.chat.userId = this.$store.state.member.id;
						const resChat = await TicketService.saveChat(this.chat);
						this.$store.commit('email/REMOVE_IS_NOT_READ_LIST');
						await this.$store.dispatch('email/setUserTickets');

						if (resChat.status < 400 && this.file) {
							let formData = new FormData();
							formData.append('tickets', this.file);
							formData.append('ticketId', resTicket.data.id);
							const res = await TicketService.saveTicketImages(formData);
							if (res.status >= 400) {
								this.$vs.notify({
			       					time: 6000,
			       					title: `${this.$i18n.messages[this.$i18n.locale].notify.error.titleFail}`,
			       					text: `${this.$i18n.messages[this.$i18n.locale].notify.error.text.ticket.openFail}`,
			       					color: "danger"
			     				});
							}
						}
					}
			  }

			
			/*let formData = new FormData();
			formData.append('tickets', this.file);
			if (this.file) {
				const res = await TicketService.saveTicketImages(formData);
				if (res.status < 400) {
					const resTicket = await TicketService.saveTicket(this.ticket);
					if (resTicket.status < 400) {
						this.$store.commit('email/ADD_USER_TICKET', this.ticket);
						this.chat.ticketId = resTicket.data.id;
						this.chat.userId = this.$store.state.member.id;
						await TicketService.saveChat(this.chat);
					}
				} else {
					this.$vs.notify({
          				time: 6000,
          				title: "Başarısız!",
          				text: "Dosya yüklenemedi",
          				color: "danger"
        			});
				}
			} else {
				const resTicket = await TicketService.saveTicket(this.ticket);
				if (resTicket.status < 400) {
					this.chat.ticketId = resTicket.data.id;
					this.chat.userId = this.$store.state.member.id;
					await TicketService.saveChat(this.chat);
				}
			}*/
		},
		// compose mail methods
		clearFields() {
			this.ticket.orderCode = '';
			this.ticket.type = '';
			this.ticket.subject = '';
			this.chat.text = '';
			this.first=true;
		},
	},
	components: {
		quillEditor,
		VuePerfectScrollbar
	},
	validations: {
		ticket:{
				ordersId: {required},
	 			type: {required},
	 			subject: {required, minLength: minLength(5), maxLength: maxLength(90) },
		},
		chat:{
			text: {required, minLength: minLength(5), maxLength: maxLength(2000) }
		}
  	},
}

  function newFunction() {
    return 'email/updateMailFilter';
  }
</script>