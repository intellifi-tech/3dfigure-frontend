<template>
<div>
    <div><unity></unity></div>
    <div class="mt-5"><upload></upload></div>
    <div><concepts></concepts></div>


</div>
</template>

<script>
import Unity from '@/components/unity/Unity.vue'
import Upload from '@/components/upload/UploadMultiple.vue'
import Concepts from '@/views/concept/Concepts.vue'

export default {
	components: {
        Unity,
        Upload,
        Concepts
	}
}

</script>