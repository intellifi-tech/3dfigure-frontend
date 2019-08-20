<template>
<!-- :class="{'mail__opened-mail': !mail.unread}" -->
	<div class="mail__mail-item sm:px-4 px-2 py-6 pl-3" >

		<!-- MAIL ROW 1 : META -->
		<div class="flex w-full">
			
			<div class="flex w-full justify-between items-start">
				<div class="mail__details">
					<!-- <h5 class="mb-1" :class="{'font-semibold': mail.unread}">{{ mail.sender_name }}</h5> -->
					<span v-if="mail.subject" class="text-dark font-medium">{{ mail.subject }}</span>
					<span v-else>(no subject)</span>
				</div>

				<div class="mail-item__meta flex items-center">
					<div class="email__labels hidden sm:flex items-center">
						<!--<div class="h-3 w-3 rounded-full mr-2" :class="'bg-' + labelColor(label)" v-for="(label, index) in mail.labels" :key="index"></div>-->
					</div>
					<span>{{  getDate }}</span>
				</div>
			</div>
		</div>
		<!-- /MAIL ROW 1 -->

		<!-- MAIL ROW 2 : MSG & ACTIONS -->
		<div class="flex w-full justify-between">
			<div class="mail__message truncate pt-2">
				<span class="font-light">{{ mail.status  == 'OPEN' ? 'AÇIK' : mail.status == 'IN_PROGRESS' ? 'İŞLENİYOR' : 'KAPALI'}}</span>
			</div>
			<div class="flex items-baseline pt-3">
				<h6>{{mail.type == 'SALES' ? 'SATIŞ' : 'TEKNİK DESTEK'}}</h6>
				<div class="mx-3 h-4 w-4 rounded-full " :class="mail.type == 'SALES' ? 'bg-warning' : 'bg-primary'"></div>
			</div>
		</div>
		<!-- /MAIL ROW 2 -->
	</div>
</template>

<script>
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
	},
	methods: {
		toggleIsStarred() {
			const payload = {mailId: this.mail.id, value : !this.mail.isStarred}
			this.$store.dispatch('email/toggleIsMailStarred', payload)
		},
		toggleIsSelected() {
			if(!this.isSelectedMail) this.$emit('addToSelected', this.mail.id)
			else this.$emit('removeSelected', this.mail.id)
		}
	}
}
</script>