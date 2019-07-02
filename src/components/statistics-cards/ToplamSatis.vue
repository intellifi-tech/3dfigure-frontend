<template lang="html">
<div class="col-md-4">
	<total-card
		icon="ShoppingBagIcon"
		icon-right
		:statistic="totalPrice.toFixed(2)"
		statisticTitle="Toplam Satış" />
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
      const data = await DashboardService.getTotalPrice()
      this.totalPrice = data === "" ? 0 : data
  },
  data() {
    return {
        totalPrice: 0
    }
  }
}
</script>