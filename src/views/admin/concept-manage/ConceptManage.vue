<template>
  <div class="vx-col w-full mb-base pt-3">
     <h3>
          Konseptler
        </h3>
    <div class="row">
      <div class="col-md-9">
        <div class="search-page__search-bar flex items-center pt-3">
          <vs-input
            v-model="searchQuery"
            class="w-full input-rounded-full no-icon-border"
            icon="icon-search"
            icon-pack="feather"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="flex items-center float-right pt-3">
          <div class="mr-2">
            <vs-button color="warning" type="relief">Export</vs-button>
          </div>
          <div>
            <vs-button color="success" type="relief">Yeni ekle</vs-button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 my-3" v-for="n in 8" :key="n">
        <vx-card class="shadow">
          <div slot="no-body">
            <iframe
              class="responsive card-img-top"
              style="height: 170px"
              src="https://sketchfab.com/models/a560204fc01f484fb85d0e710fc055bf/embed"
              frameborder="0"
              allow="autoplay; fullscreen; vr"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          </div>
          <h5 class="mb-2">FGR3799</h5>
          <p class="text-grey font-light h6 pb-3">Lorem Ipsum endüstrisinde kullanılan metindir.</p>
          <h4>
            $70
            <span class="float-right text-grey h6">Tek Kişilik</span>
          </h4>
          <div class="flex justify-between flex-wrap">
            <vs-button
              class="shadow-md w-full px-1 mt-3"
              type="gradient"
              color="#7367F0"
              gradient-color-secondary="#CE9FFC"
            >Düzenle</vs-button>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 0,
      search: ""
    };
  }
};
</script>