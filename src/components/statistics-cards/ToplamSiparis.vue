<template lang="html">
<div class="col-md-4">
	<total-card
     toLink="/admin/orders"
    :btnColor="isSales ? 'success' : 'primary'"
		:icon="isSales ? 'ShoppingBagIcon' : 'ShoppingCartIcon'"
		icon-right
		:statistic="totalOrder.toFixed(0)"
		:statisticTitle="isSales ? 'Toplam Satış' : 'Toplam Sipariş'" />
	</div>
</template>

<script>
import TotalCard from '@/components/statistics-cards/TotalCard.vue'
import DashboardService from "@/services/admin/dashboard.service.js"
export default {
  components: {
    TotalCard
  },
  props: {
    isSales: {
      type: Boolean,
      required: true
    }
  },
  created: async function() {
    const data = await DashboardService.getTotalOrder()
    this.totalOrder = this.isSales ? Number(data.split("-")[1]) : Number(data.split("-")[0])
  },
  data() {
    return {
        totalOrder: 0
    }
  }
}
</script>