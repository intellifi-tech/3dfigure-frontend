<template lang="html">
  <div>
    <vs-table
      v-model="selected"
      pagination
      max-items="5"
      search
      :data="users">
      <template slot="header">
        <h3>
          Kullanıcılar
        </h3>
      </template>
      <template slot="thead">
  <vs-th sort-key="email">Email</vs-th>
  <vs-th sort-key="username">Adı Soyadı</vs-th>
  <vs-th sort-key="website">Aktif mi</vs-th>
  <vs-th>Seçenekler</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
    <vs-td :data="data[indextr].email">{{data[indextr].email}}</vs-td>

    <vs-td :data="data[indextr].username">{{data[indextr].firstName + ' ' + data[indextr].lastName}}</vs-td>

    <vs-td :data="data[indextr].activated">{{data[indextr].activated}}</vs-td>

    <vs-td> <div class="flex items-center ">
          <div>
            <vs-button class="px-3"  color="danger" type="relief" @click="userDelete(data[indextr], indextr)">Sil</vs-button>
          </div>
        </div></vs-td>
     
  </vs-tr>
</template>
    </vs-table>
  </div>
</template>

<script>
import UserService from '@/services/user.service.js'
export default {
  data: () => ({
    selected: {},
    users: []
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
    }
  }
};
</script>