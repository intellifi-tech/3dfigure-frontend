<template lang="html">
<div class="col-md-4">
	<total-card
		icon="ShoppingCartIcon"
		icon-right
		:statistic="totalOrder"
		statisticTitle="Toplam Sipariş" />
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
      this.totalOrder = await DashboardService.getTotalOrder()
  },
  data() {
    return {
        totalOrder: 0
    }
  }
}
</script>