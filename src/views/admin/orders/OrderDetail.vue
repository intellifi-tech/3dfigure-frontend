<template>
  <div class="vx-col w-full mb-base">
    <div class="mt-6">
           <h3 class="py-4">Sipariş Detayları</h3>
          <div class="w-100">
            <div class="row">
                <div class="col-md-3 d-lg-flex px-0 " v-for="concept in order.basketDTO.concepts" :key="concept.id">
                  <div class="col-lg-12" v-for="figure in concept.figures" :key="figure.id">
                    <order-card :isAdmin="true" :order="order" :conceptPrice="concept.price" :figure="figure" :ids="order.basketDTO.id + '-' + concept.id + '-' + figure.id"></order-card>
                  </div>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import OrderService from "@/services/order.service";
import OrderCard from '@/components/orders/OrderCard.vue'
export default {
  data() {
    return {
      order:{
      }
      
    };
  },
  components: {
    OrderCard
  },
  created: async function() {
      this.order = await OrderService.getOrderDetail(this.$route.query.id);
  }
};
</script>
