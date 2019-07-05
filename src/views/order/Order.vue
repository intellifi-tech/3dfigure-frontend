<template>
  <vx-card class="mt-5 pt-2 px-2">
    <h4>Figür Geçmişi</h4>
    <div class="search-page__search-bar flex items-center pt-4">
      <vs-input
        placeholder="Ara"
        v-model="searchQuery"
        class="w-full input-rounded-full no-icon-border"
        icon="icon-search"
        icon-pack="feather"
      />
    </div>
    <div class="vx-row pt-5">
      <div v-for="(order, index) in this.orderValues" :key="index">
        <div v-for="concept in order.basketDTO.concepts" :key="concept.id">
          <div v-for="figure in concept.figures" :key="figure.id">
            <orders :order="order" :conceptPrice="concept.price" :figure="figure" :ids="order.basketDTO.id + '-' + concept.id + '-' + figure.id"></orders>
          </div>
        </div>
      </div>
    </div>
    <div class="my-5">
      <vs-pagination :total="this.totalPages" v-model="currentx"></vs-pagination>
    </div>
  </vx-card>
</template>

<script>
import Orders from "@/components/orders/OrderCard.vue";
import OrderService from "@/services/order.service";

export default {
  data() {
    return {
      searchQuery: null,
      currentx: 1,
      orderValues: null,
      totalPages: 0
    };
  },
  created: async function() {
    var res = await OrderService.getAllOrders(0);
    this.orderValues = res.content;
    this.totalPages = res.totalPages;
  },
  watch: {
    currentx: async function() {
      var res = await OrderService.getAllOrders(this.currentx - 1);
      this.orderValues = res.content;
    }
  },
  methods: {},
  components: {
    Orders
  }
};
</script>