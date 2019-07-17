<template>
	<footer class="the-footer flex-wrap justify-between" :class="classes">
		<span>© 2019 3D Figür. Tüm hakları saklıdır. <!--<a href="https://intellifi.tech" target="_blank" rel="nofollow">IntelliFi</a>--></span>
	<!--	<span class="md:flex hidden items-center">
			<span>Hand-crafted & Made with</span>
			<feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2" />
		</span>
		-->
	</footer>
</template>

<script>

export default {
	name: "the-footer",
	props: {
		classes: {
			type: String,
		},
	},
}
</script>