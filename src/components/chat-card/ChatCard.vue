<template>
            <div class="chat-cards">
                 <div class="vx-row">
						<div class="vx-col w-full pb-24">
							<vx-card class="px-4 text-black" :class="{'bg-img': currentMail.userId != getUser}">
								<!-- MAIL META ROW -->
								<div class="vx-row w-full border-b border-l-0 border-r-0 border-t-0 border-grey-light border-solid flex justify-between flex items-center">
									<div class="vx-col sm:w-1/2 flex flex-wrap items-center mb-2">
										<!-- <vs-avatar class="sender__avatar--single flex-no-shrink mr-3 border-2 border-solid border-white" :src="require(`@/assets/images/portrait/small/${currentMail.img}`)" size="65px"></vs-avatar> -->
										<div class="flex flex-col my-2">
											<h5 class="mb-1 text-uppercase" :class="{'text-primary': currentMail.userId != getUser}">{{ currentMail.firstName + ' ' + currentMail.lastName }}</h5>
											<!--<div class="flex items-center">
												<span class="text-sm">{{ currentMail.sender }}</span>
											</div>-->
										</div>
									</div>
									<div class="vx-col sm:w-1/ flex sm:flex-col items-center sm:justify-end mb-2">
										<span class="flex self-end sm:mt-2 mt-0 ">{{ getDate }}</span>
									</div>
								</div>

								<!-- MAIL CONTENT -->
								<div class="vx-row">
									<div class="vx-col w-full">
										<div class="mail__content break-words mt-8 mb-4" v-html="currentMail.text"></div>
									</div>
								</div>

								<!-- MAIL ATTACHMENTS -->
								<!-- <div class="vx-row" v-if="currentMail.attachments.length">
									<div class="vx-col w-full border-b border-l-0 border-r-0 border-t-0 border-grey-light border-solid mb-6 flex">
										<feather-icon icon="PaperclipIcon"></feather-icon>
										<span class="block py-4">Ekler</span>
									</div>
									<div class="flex">
										<div class="mail__attachment" v-for="(attachment, index) in currentMail.attachments" :key="index">
											<vs-chip color="primary" class="px-4 py-2 mr-3">{{ attachment }}</vs-chip>
										</div>
									</div>

								</div>-->
							</vx-card>
						</div>
					</div>
                </div>
</template>

<script>

export default {
	props: {
        currentMail:{
            type:Object
        }
	},
	computed: {
		getUser() {
			return this.$store.state.member.id;
		},
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
			var date = new Date(this.currentMail.sendingDate)
			return weekday[date.getDay()] + '  ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ' - ' + date.getDate() + '.' + addZero((date.getMonth()+1)) + '.' + (date.getFullYear())
		}
	}
}

</script>

<style>
.chat-cards p{
	color:#000;
}
</style>
