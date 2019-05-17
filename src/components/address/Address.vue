<template>
  <vs-row vs-w="12">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12">
      <vx-card>
        <vs-row>
          <vs-column vs-justify="center" vs-align="left" vs-lg="6">
            <vs-input label="Name" placeholder="Placeholder" v-model="value1"/>
            <vs-input label="Name" placeholder="Placeholder" v-model="value1"/>
            <vs-input label="Name" placeholder="Placeholder" v-model="value1"/>
            <vs-input label="Name" placeholder="Placeholder" v-model="value1"/>
          </vs-column>
          <vs-column vs-justify="center" vs-align="right" vs-lg="6">
            <vs-input label="Name" placeholder="Placeholder" v-model="value1"/>
            <vs-input label="Name" placeholder="Placeholder" v-model="value1"/>
            <vs-input label="Name" placeholder="Placeholder" v-model="value1"/>
            <vs-input label="Name" placeholder="Placeholder" v-model="value1"/>
          </vs-column>
        </vs-row>
      </vx-card>
    </vs-col>
    <!--<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="12">
      <vx-card>
        <h2>Price Detail</h2>
        <vs-divider color="dark"></vs-divider>
        <div v-for="address in addressList" :key="address.id">
          <vs-col vs-offset="0" vs-type="flex" vs-justify="center" vs-align="left" vs-w="10">
            <div>{{address.conceptName}}</div>
          </vs-col>
          <vs-col vs-offset="10" vs-type="flex" vs-justify="center" vs-align="right" vs-w="2">
            <div>{{address.price}}</div>
          </vs-col>
        </div>
      </vx-card>
    </vs-col>-->
  </vs-row>
</template>

<script>
export default {
  data() {
    return {
        value1:""
    };
  }
};
</script>

<style>
</style>
