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
          <vs-button class="px-3" color="primary" type="relief" @click="updateOrder">Güncelle</vs-button>
        </div>
        <div>
          <vs-button class="px-3" color="danger" type="relief">Sil</vs-button>
        </div>
      </div>
    </vs-td>
  </vs-tr>
</template>
    </vs-table>
    <vs-popup :active.sync="updatePopup">
        <div>
          <vs-input label-placeholder="Konsept Adı" v-model="selected.orderCode"/>
          <select class="form-control" v-model="selected.status">
                <option
                  :key="index"
                  v-for="(item,index) in statusList"
                  :value="item.status"
                >{{item.text}}</option>
          </select>
          <vs-button class="float-right" @click="updateOrder">Güncelle</vs-button>
        </div>
      </vs-popup>
  </div>
</template>

<script>
import OrderService from '@/services/order.service.js'

export default {
  data: () => ({
    selected: {},
    updatePopup: false,
    newPopup: false,
    orders: [],
    statusList: [{text: 'Analiz', status: 'ANALYSIS'}, {text: 'Kabul', status: 'ACCEPT'}, {text: 'Red', status: 'REJECT'}, {text: 'Yapılıyor', status: 'BUILD'},
    {text: 'Kargoda', status: 'CARGO'},{text: 'Tamamlandı', status: 'DONE'}]
  }),
  created: async function() {
    this.orders = await OrderService.getAllOrdersForAdmin()
  },
  methods: {
    updateOrder: async function() {
      this.updatePopup = !this.updatePopup
      if (!this.updatePopup) {
        await OrderService.updateOrder(this.selected)
      }
    },
    deleteOrder: function(order, index) {
      var self = this
      this.$vs.dialog({
        type:'confirm',
        color: 'danger',
        title: `Confirm`,
        text: `${order.orderCode} silmek istiyor musunuz?`,
        accept: async function() {
          await OrderService.deleteOrder(order.id)
          self.orders.splice(index, 1)
          self.$vs.notify({
            color: 'success',
            title:'Sipariş silindi'
          });
        }
      })
    },
  }
};
</script>