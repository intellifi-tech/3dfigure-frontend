<template lang="html">
  <div>
        <div class="float-right flex items-center col-2 pt-3 ml-0 pr-0">
      <div class="w-full mr-0 pr-0">
        <json-excel
      class="vs-component vs-button w-full vs-button-warning vs-button-filled includeIcon"
      :data="users"
      :fields="json_fields"
      worksheet="My Worksheet"
      name="user.xls">
      Export Excel
    </json-excel>
          </div>
      </div>
    <vs-table
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
  <vs-th sort-key="email">E-posta</vs-th>
  <vs-th sort-key="firstName">Adı Soyad</vs-th>
  <vs-th sort-key="activated">Durum</vs-th> 
  <vs-th>Seçenekler</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
    <vs-td :data="data[indextr].email">{{data[indextr].email}}</vs-td>

    <vs-td :data="data[indextr].firstName">{{data[indextr].firstName + ' ' + data[indextr].lastName}}</vs-td>

    <vs-td :data="data[indextr].activated">{{data[indextr].activated ? 'Aktif' : 'Pasif'}}</vs-td> 

    <vs-td> <div class="flex items-center ">
          <div class="pr-2">
            <vs-button class="px-3"  color="primary" type="relief" @click="$router.push('/admin/user-detail?id='+data[indextr].id)">Detay</vs-button>

          </div>
          <div>
            <vs-button class="px-3"  color="danger" type="relief" @click="userDelete(data[indextr])">Değiştir</vs-button>
          </div>
        </div></vs-td>
     
  </vs-tr>
</template>
    </vs-table>
  </div>
</template>

<script>
import UserService from '@/services/user.service.js'
import JsonExcel from 'vue-json-excel'
export default {
  components: {
    JsonExcel
  },
  data: () => ({
    selected: {},
    users: [],
    json_fields: {
      "Kullanıcı Adı": "login",
      "İlk Adı": "firstName",
      "Soyadı": "lastName",
      "email": "email",
      "Aktif mi": "activated",
      "Cinsiyet": "sex",
      "Kayıt Tarihi": "createdDate",
      "Doğum Günü": "birthDay"
    },
    user: {},
    detailUserPopup: false
  }),

  created: async function() {
    this.users = await UserService.getAllUsers();
  },

  methods: {
    userDelete(user) {
      var self = this
      this.$vs.dialog({
        type:'confirm',
        color: 'danger',
        title: `Confirm`,
        text: `${user.login} güncellemek istiyor musunuz?`,
        accept: async function() {
          user.activated = !user.activated
          await UserService.setMember(user)
          self.$vs.notify({
            color: 'success',
            title:'Kullanıcı güncellendi'
          });
        }
      })
    },
    userDetail(user) {
      this.user = user
      this.detailUserPopup = true
    }
  }
};
</script>