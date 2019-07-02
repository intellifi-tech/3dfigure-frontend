<template lang="html">
<div class="col-md-4">
	<total-card
		:icon="isSales ? 'ShoppingBagIcon' : 'ShoppingCartIcon'"
		icon-right
		:statistic="totalOrder"
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
    const data = await DashboardService.getTotalOrder().split("-")
    this.totalOrder = this.isSales ? data[1] : data[0]
  },
  data() {
    return {
        totalOrder: 0
    }
  }
}
</script>