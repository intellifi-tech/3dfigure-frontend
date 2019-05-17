<template>
  <div class="conatiner-fluid">
    <div class="row">
      <div class="row vx-card col-lg-8 py-4">
        <div class="col-lg-2 px-0">
          <img src="assets/images/3dmodelornek1.png">
        </div>
        <div class="border-black border-right col-lg-7 pl-5">
          <h3 class="card-title pb-3">Mezuniyet Konsepti</h3>
          <h5 class="text-gray">
            Konsept:
            <span class="text-success">Mezuniyet</span>
          </h5>
          <p
            class="col-lg-10 pl-0 text-gray"
          >Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.</p>
        </div>
        <div class="col-lg-3 pt-3 text-center">
          <h4>$100</h4>
          <feather-icon icon="checkIcon" class="m-0 cursor-pointer"></feather-icon>
          <h6 class="mt-4 text-success" icon-pack="feather" icon="icon-check">Kargo Ücretsiz</h6>
          <input type="button" value="KALDIR" class="btn btn-block btn-danger mt-4">
        </div>
      </div>

      <div class="vx-card col-lg-4 py-8 ml-8">
        <input type="button" value="SİPARİŞ VER" class="vs-button vs-button-filled vs-button-success btn-block "/>
      </div>
    </div>
  </div>
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
