</<template>
  <div class="h-screen flex w-full bg-img">
  <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto self-center">
    <login :isPopup=false></login>
    </div>
  </div>
</template>

<script>
import Login from "@/components/login/Login.vue";
export default {
  components: {
    Login
  }
};
</script>

<style>
</style>
