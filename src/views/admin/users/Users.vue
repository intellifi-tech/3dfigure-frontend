<template lang="html">
  <div>
    <vs-table
      pagination
      max-items="5"
      search
      :sst="true"
      @change-page="handleChangePage"
      @search="sscb"
      :data="users">
      <template slot="header">
        <h3>
          Kullanıcılar
        </h3>
      </template>
      <template slot="thead">
  <vs-th sort-key="email">Email</vs-th>
  <vs-th sort-key="firstName">Adı Soyadı</vs-th>
  <vs-th sort-key="activated">Aktif mi</vs-th>
  <vs-th>Seçenekler</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
    <vs-td :data="data[indextr].email">{{data[indextr].email}}</vs-td>

    <vs-td :data="data[indextr].firstName">{{data[indextr].firstName + ' ' + data[indextr].lastName}}</vs-td>

    <vs-td :data="data[indextr].activated">{{data[indextr].activated}}</vs-td>

    <vs-td> <div class="flex items-center ">
          <div>
            <vs-button class="px-3"  color="primary" type="relief" @click="userDetail(data[indextr])">Detay</vs-button>
          </div>
          <div>
            <vs-button class="px-3"  color="danger" type="relief" @click="userDelete(data[indextr], indextr)">Sil</vs-button>
          </div>
        </div></vs-td>
     
  </vs-tr>
</template>
    </vs-table>
    <vs-popup :active.sync="detailUserPopup">
      <vs-card>
      <div slot="header">
        <h3>
          {{this.user.login}}
        </h3>
      </div>
      </vs-card>
    </vs-popup>
  </div>
</template>

<script>
import UserService from '@/services/user.service.js'
export default {
  data: () => ({
    selected: {},
    users: [],
    user: {},
    detailUserPopup: false
  }),

  created: async function() {
    this.users = await UserService.getAllUsers();
  },

  methods: {
    userDelete(user, index) {
      var self = this
      this.$vs.dialog({
        type:'confirm',
        color: 'danger',
        title: `Confirm`,
        text: `${user.login} silmek istiyor musunuz?`,
        accept: async function() {
          await UserService.userDelete(user.login)
          self.users.splice(index, 1)
          self.$vs.notify({
            color: 'success',
            title:'Kullanıcı silindi'
          });
        }
      })
    },
    userDetail(user) {
      this.user = user
      this.detailUserPopup = true
    },
    handleChangePage(page) {
      debugger
    },
    sscb(searching) {
      debugger
    }
  }
};
</script>