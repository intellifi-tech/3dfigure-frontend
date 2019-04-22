<template>
  <div class="vx-col w-full mb-base">
    <vx-card>
      <div slot="no-body">
        <iframe
          class="responsive card-img-top"
          style="height: 300px"
          src="https://sketchfab.com/models/27f75fa94c384000bb6a79a3000f8e80/embed"
          frameborder="0"
          allow="autoplay; fullscreen; vr"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>
      <h5 class="mb-2">Template Example</h5>
      <p class="text-grey">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.</p>
      <p class="text-grey">3D Figure</p>
      <div class="flex justify-between flex-wrap">
        <vs-button
          class="mt-4 shadow-lg"
          type="gradient"
          color="#7367F0"
          gradient-color-secondary="#CE9FFC"
        >Download</vs-button>
        <vs-button @click="openAlert('primary')" class="mt-4" type="border" color="#b9b9b9">Detail</vs-button>
      </div>
    </vx-card>
  </div>
</template>

<script>
export default {
  methods: {
    openAlert() {
      this.$vs.dialog({
        color:this.colorAlert,
        title: `Dialog`,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        accept:this.acceptAlert
      })
    }
  }
};
</script>