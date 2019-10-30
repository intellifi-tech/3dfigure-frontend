<template>
<!-- :class="{'mail__opened-mail': !mail.unread}" -->
	<div class="mail__mail-item sm:px-4 px-2 py-6 pl-3" >

		<!-- MAIL ROW 1 : META -->
		<div class="flex w-full">
			
			<div class="flex w-full justify-between items-start">
				<div class="mail__details">
					<!-- <h5 class="mb-1" :class="{'font-semibold': mail.unread}">{{ mail.sender_name }}</h5> -->
					<span v-if="mail.subject" class="text-dark font-medium text-uppercase">{{ mail.subject }}</span>
					<span v-else>(no subject)</span>
				</div>

				<div class="mail-item__meta flex items-center">
					<div class="email__labels hidden sm:flex items-center">
						<!--<div class="h-3 w-3 rounded-full mr-2" :class="'bg-' + labelColor(label)" v-for="(label, index) in mail.labels" :key="index"></div>-->
					</div>
					<span>{{  getDate }}</span>
					<span>{{isNotRead}}</span>
				</div>
			</div>
		</div>
		<!-- /MAIL ROW 1 -->

		<!-- MAIL ROW 2 : MSG & ACTIONS -->
		<div class="flex w-full justify-between">
			<div class="mail__message truncate pt-2">
				<span class="font-light">{{ mail.status  == 'OPEN' ? $t('dashboard.ticket.ticketStatus.open') : mail.status == 'IN_PROGRESS' ? $t('dashboard.ticket.ticketStatus.inProgress') : $t('dashboard.ticket.ticketStatus.close')}}</span>
			</div>
			<div class="flex items-baseline pt-3">
				<h6>{{mail.type == 'SALES' ? $t('dashboard.ticket.ticketType.sales') : $t('dashboard.ticket.ticketType.technic')}}</h6>
				<div class="mx-3 h-4 w-4 rounded-full " :class="mail.type == 'SALES' ? 'bg-warning' : 'bg-primary'"></div>
			</div>
		</div>
		<!-- /MAIL ROW 2 -->
	</div>
</template>

<script>
import TicketService from "@/services/ticket.service"
export default{
	props: {
		mail: {
			type: Object,
			required: true
		},
		isMailOpen: {
			type: Boolean
		},
		isSelected: {
			type: Boolean
		}
	},
	created: async function() {
		if (this.mail.id) {
				const res = await TicketService.getAllTicketChats(this.mail.id);
				if (res.status < 400) {
					const lastChat = res.data.slice().reverse()[0]
					if (lastChat.userId) {
					if ((this.$store.state.member.id != lastChat.userId) && this.mail.status != 'CLOSE') {
						this.$store.commit('email/ADD_IS_NOT_READ_LIST', lastChat.ticketId);
					}
					}
				}
			}
	},
	data() {
		return {
			isSelectedMail: this.isSelected,
		}
	},
	watch: {
		isSelected(value) {
			this.isSelectedMail = value
		},
	},
	computed: {
		
		getDate() {
			function addZero(i) {
			  if (i < 10) {
			    i = "0" + i;
			  }
			  return i;
			}
			/*TODO çeviri*/
  			 var weekday = new Array(7);
  			 weekday[0] = "Pazar";
  			 weekday[1] = "Pazartesi";
  			 weekday[2] = "Salı";
  			 weekday[3] = "Çarşamba";
  			 weekday[4] = "Perşembe";
  			 weekday[5] = "Cuma";
  			 weekday[6] = "Cumartesi";
			var date = new Date(this.mail.lastModifiedDate)
			return weekday[date.getDay()] + '  ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ' - ' + date.getDate() + '.' + addZero((date.getMonth()+1)) + '.' + (date.getFullYear())
		},
		labelColor() {
			return (label) => {
				const tags = this.$store.state.email.mailTags;
				return tags.find((tag) => {
					return tag.value == label
				}).color
			}
		},
		isNotRead() {
			return this.$store.state.email.isNotReadList.includes(this.mail.id);
		},
	},
	methods: {
		toggleIsStarred() {
			const payload = {mailId: this.mail.id, value : !this.mail.isStarred}
			this.$store.dispatch('email/toggleIsMailStarred', payload)
		},
		toggleIsSelected() {
			if(!this.isSelectedMail) this.$emit('addToSelected', this.mail.id)
			else this.$emit('removeSelected', this.mail.id)
		},

	}
}
</script>