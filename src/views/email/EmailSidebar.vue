<template>
	<div class="email__email-sidebar h-full">
		<div class="m-6 clearfix">
			<vs-button size="large" class="bg-primary-gradient w-full" icon-pack="feather" icon="icon-edit" @click="activePrompt = true">Yeni Talep</vs-button>
		</div>

		<!-- compose email -->
		<vs-prompt
			class="email-compose"
			vs-title="Yeni Talep"
			vs-accept-text= "Gönder"
			vs-cancel-text="İptal"
			@vs-cancel="clearFields"
			@vs-accept="saveTicket"
			@vs-close="clearFields"
			:vs-is-valid="validateForm"
			:vs-active.sync="activePrompt">
				<VuePerfectScrollbar class="scroll-area p-4" :settings="settings">
					<form @submit.prevent>
						<select v-model="ticket.ordersId" class="w-full mb-6 form-control form-control-lg selecting selectExample" >
							<option
                      			:key="item.id"
                      			:value="item.id"
                      			v-for="(item) in orderList"
                    		>{{item.orderCode}}</option>
						</select>
						<select v-model="ticket.type" class="w-full mb-6 form-control form-control-lg selecting selectExample" >
							<option
                      			:key="index"
                      			:value="item"
                      			v-for="(item,index) in ticketTypeList"
                    		>{{item}}</option>
						</select>
						<vs-input label-placeholder="Konu" v-model="ticket.subject" class="w-full mb-6" />
						<quill-editor v-model="chat.text" :options="editorOption"></quill-editor>
						<input type="file" multiple ref="addTicketFiles" v-on:change="handleFileUpload"
                			accept="*/*" class="input-file" />
						<!--<vs-upload ref="addTicketFiles" v-on:change="handleFileUpload" multiple text="Dosya ekle" :show-upload-button="false" />-->
					</form>
				</VuePerfectScrollbar>
		</vs-prompt>

		<VuePerfectScrollbar class="email-scroll-area" :settings="settings">
			<div class="px-6 pb-2 flex flex-col" v-for="(status, index) in ticketStatusList" :key="index">

				<div class="flex justify-between items-center cursor-pointer" :class="{'text-primary': mailFilter == status}" @click="updateFilter(status)">
					<div class="flex items-center mb-2">
						<feather-icon :icon="status == 'OPEN' ? 'ClockIcon' : status == 'IN_PROGRESS' ? 'Edit2Icon' : 'CheckSquareIcon'" :svgClasses="[{'text-primary stroke-current': mailFilter == status}, 'h-6 w-6']"></feather-icon>
						<span class="text-lg ml-3">{{status}}</span>
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
		</VuePerfectScrollbar>
	</div>
</template>

<script>
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
	},
	data() {
		return {
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
				placeholder: 'İleti'
			},
			settings: {
				maxScrollbarLength: 60,
				wheelSpeed: 0.30,
			},
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
			let formData = new FormData();
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
			}
		},
		// compose mail methods
		clearFields() {
			this.mailTo = '';
			this.mailSubject = '';
			this.mailCC = '';
			this.mailBCC = '';
			this.mailMessage = '';
		},
	},
	components: {
		quillEditor,
		VuePerfectScrollbar
	}	
}

  function newFunction() {
    return 'email/updateMailFilter';
  }
</script>