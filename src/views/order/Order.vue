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
        @keyup="searchOrder"
      />
    </div>
    <div class="pt-5">
      <div class="orderValues flex" v-for="(order, index) in this.orderValues" :key="index">
        <div class="concepts col-md-3" v-for="concept in order.basketDTO.concepts" :key="concept.id">
          <div class="figures" v-for="figure in concept.figures" :key="figure.id">
            <orders class="orderCard" :isAdmin="false" :order="order" :conceptPrice="concept.price" :figure="figure" :ids="order.basketDTO.id + '-' + concept.id + '-' + figure.id"></orders>
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
      searchQuery: "",
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
  methods: {
    searchOrder: async function() {
      var res; 
      if (this.searchQuery.length == 0) {
          res = await OrderService.getAllOrders(0);
          this.orderValues = res.content;
          this.totalPages = res.totalPages;
      } else {
        res = await OrderService.searchOrder(this.searchQuery);
        this.orderValues = res.content;
        this.totalPages = res.totalPages;
      }
    }
  },
  watch: {
    currentx: async function() {
      var res = await OrderService.getAllOrders(this.currentx - 1);
      this.orderValues = res.content;
    }
  },
  components: {
    Orders
  }
};
</script>