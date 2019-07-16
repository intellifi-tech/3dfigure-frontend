<template>
	<div class="h-screen flex w-full bg-img">
		<div class="vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
			<vx-card>
				<div slot="no-body" class="full-page-bg-color">
					<div class="vx-row">
						<div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
							<img src="@/assets/images/pages/forgot-password.png" alt="login" class="mx-auto">							
						</div>
						<div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center bg-white">
							<div class="p-8">
								<div class="vx-card__title mb-8">
									<h4 class="mb-4">Parola sıfırlama</h4>
									<p >Lütfen e-posta adresinizi girin, parolanızı sıfırlamak için kullanacağınız bağlantıyı içeren bir e-posta göndereceğiz.</p>
								</div>
								
								<vs-input type="email" label-placeholder="E-posta" v-model="value1" class="w-full mb-8" />				
								<vs-button type="border" to="/login" class="px-4 w-full md:w-auto">Girişe Dön</vs-button>
								<vs-button class="float-right px-4 w-full md:w-auto mb-8 md:mt-0 md:mb-0">Parola Sıfırla</vs-button>
							</div>
						</div>
					</div>
				</div>
			</vx-card>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
            value1: ''
		}
	}
}
</script>