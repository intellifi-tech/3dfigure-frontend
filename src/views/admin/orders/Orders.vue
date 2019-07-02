<template lang="html">
  <div>
    <vs-table
      v-model="selected"
      pagination
      max-items="5"
      search
      :data="orders">
      <template slot="header">
        <h3>
          Kategoriler
        </h3>
      </template>
      
      <template slot="thead">
  <vs-th sort-key="orderCode">Sipariş Kodu</vs-th>
  <vs-th sort-key="status">Sipariş Durumu</vs-th>
  <vs-th sort-key="totalPriceNet">Kazanç</vs-th>
  <vs-th sort-key="userLogin">Sipariş Sahibi</vs-th>
  <vs-th>Seçenekler</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
    <vs-td :data="data[indextr].orderCode">{{data[indextr].orderCode}}</vs-td>

    <vs-td :data="data[indextr].status">{{data[indextr].status}}</vs-td>

    <vs-td :data="data[indextr].totalPriceNet">{{data[indextr].totalPriceNet}}</vs-td>

    <vs-td :data="data[indextr].userLogin">{{data[indextr].userLogin}}</vs-td>

    <vs-td>
      <div class="flex items-center">
        <div class="mr-2">
          <vs-button class="px-3" color="primary" type="relief">Güncelle</vs-button>
        </div>
        <div>
          <vs-button class="px-3" color="danger" type="relief">Sil</vs-button>
        </div>
      </div>
    </vs-td>
  </vs-tr>
</template>
    </vs-table>
  </div>
</template>

<script>
import OrderService from '@/services/order.service.js'

export default {
  data: () => ({
    selected: [],
    orders: [
      
    ]
  }),
  created: async function() {
    this.orders = await OrderService.getAllOrdersForAdmin()
  },
  methods: {
    
  }
};
</script>