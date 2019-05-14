<template>
  <vs-row vs-w="12">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12">
      <vx-card>
      </vx-card>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="12">
      <vx-card>
        <h2>Price Detail</h2>
        <vs-divider color="dark"></vs-divider>
        <div v-for="basket in basketList" :key="basket.showIndex">
          <vs-col
            vs-offset="0"
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="10"
          >
            <div>{{basket.conceptName}}</div>
          </vs-col>
          <vs-col
            vs-offset="10"
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="2"
          >
            <div>{{basket.price}}</div>
          </vs-col>
        </div>
      </vx-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  props: {
    basketList: {
      type: Array
    }
  }
};
</script>

<style>
</style>
