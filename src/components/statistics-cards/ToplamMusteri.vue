<template lang="html">
<div class="col-md-4">
	<total-card
		icon="UsersIcon"
		icon-right
		:statistic='customerCount'
		statisticTitle="Toplam Müşteri" />
	</div>
</template>

<script>
import TotalCard from '@/components/statistics-cards/TotalCard.vue'
import DashboardService from "@/services/admin/dashboard.service.js"
export default {
  components: {
    TotalCard
  },
  created: async function() {
      this.customerCount = await DashboardService.getCustomerCard()
  },
  data() {
    return {
        customerCount: 0
    }
  }
}
</script>