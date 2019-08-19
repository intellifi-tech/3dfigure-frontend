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
			@vs-accept="sendMail"
			@vs-close="clearFields"
			:vs-is-valid="validateForm"
			:vs-active.sync="activePrompt">
				<VuePerfectScrollbar class="scroll-area p-4" :settings="settings">
					<form @submit.prevent>
						<vs-input v-validate="'required|email'" name="mailTo" label-placeholder="Kime" v-model="mailTo" class="w-full mb-6" :danger="!validateForm && mailTo != ''" val-icon-danger="clear" :success="validateForm" val-icon-success="done" :color="validateForm ? 'success' : 'danger'" />
						<vs-input name="mailSubject" label-placeholder="Konu" v-model="mailSubject" class="w-full mb-6" />
						<vs-input name="mailCC" label-placeholder="CC" v-model="mailCC" class="w-full mb-6" />
						<vs-input name="mailBCC" label-placeholder="BCC" v-model="mailBCC" class="w-full mb-6" />
						<quill-editor v-model="mailMessage" :options="editorOption"></quill-editor>
						<vs-upload multiple text="Dosya ekle" :show-upload-button="false" />
					</form>
				</VuePerfectScrollbar>
		</vs-prompt>

		<VuePerfectScrollbar class="email-scroll-area" :settings="settings">
			<div class="px-6 pb-2 flex flex-col">

				<div class="flex justify-between items-center cursor-pointer" :class="{'text-primary': mailFilter == 'inbox'}" @click="updateFilter('inbox')">
					<div class="flex items-center mb-2">
						<feather-icon icon="MailIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'inbox'}, 'h-6 w-6']"></feather-icon>
						<span class="text-lg ml-3">Yanıtlandı</span>
					</div>
					<vs-chip color="primary" v-if="unreadMails('inboxed') > 0">{{ unreadMails('inboxed') }}</vs-chip>
				</div>
				<div class="flex items-center mt-4 mb-2 cursor-pointer" :class="{'text-primary': mailFilter == 'sent'}" @click="updateFilter('sent')">
					<feather-icon icon="SendIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'sent'}, 'h-6 w-6']"></feather-icon>
					<span class="text-lg ml-3">Müşteri Yanıtı</span>
				</div>
				<div class="flex justify-between items-center mt-4 cursor-pointer" :class="{'text-primary': mailFilter == 'draft'}" @click="updateFilter('draft')">
					<div class="flex items-center mb-2">
						<feather-icon icon="Edit2Icon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'draft'}, 'h-6 w-6']"></feather-icon>
						<span class="text-lg ml-3">Açık</span>
					</div>
					<vs-chip color="warning" v-if="draftMails > 0">{{ draftMails }}</vs-chip>
				</div>
				<div class="flex items-center mt-4 mb-2 cursor-pointer" :class="{'text-primary': mailFilter == 'trash'}" @click="updateFilter('trash')">
					<feather-icon icon="CheckSquareIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'trash'}, 'h-6 w-6']"></feather-icon>
					<span class="text-lg ml-3">Kapandı</span>
				</div>
			</div>
		</VuePerfectScrollbar>
	</div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

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
	data() {
		return {
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
			return this.mailTo != '';
		},
		unreadMails() {
			return (mailType) => this.$store.getters['email/unreadMails'](mailType);
		},
		draftMails() {
			return this.$store.getters['email/NumdraftMails'];
		},
	},
	methods: {
		updateFilter(filterName) {
			this.$store.dispatch(newFunction(), filterName);
			this.$emit('closeSidebar', false);
		},
		// compose mail methods
		clearFields() {
			this.mailTo = '';
			this.mailSubject = '';
			this.mailCC = '';
			this.mailBCC = '';
			this.mailMessage = '';
		},
		sendMail() {},
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