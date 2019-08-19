<template>
            <div class="chat-cards">
                <!-- TODO bu row CHAT CARD COMPONENTE DONUSTURULECEK -- LATEST MESSAGE -->
                 <div class="vx-row">
						<div class="vx-col w-full pb-24">
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
															<p class="text-sm mb-1">Kimden: <span class="font-semibold"> {{ currentMail.sender }} </span></p>
															<p class="text-sm mb-1">Kime: <span class="font-semibold"> {{ currentMail.to }} </span></p>
															<p class="text-sm mb-1">Tarih: <span class="font-semibold"> {{ currentMail.time }} {{ currentMail.time }} </span></p>
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
										<span class="block py-4">Ekler</span>
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
                </div>
</template>

<script>

export default {
	props: {
        currentMail:{
            type:Object,
        }
	},
	data() {
		return {

		}
	},
	watch: {
	},
	computed: {
	
	},
	methods: {
	},
	components: {
	},
}

</script>

<style>

</style>
