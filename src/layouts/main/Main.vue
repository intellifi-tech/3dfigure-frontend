<template>
  <div class="layout--main" :class="[navbarClasses, footerClasses, {'app-page': isAppPage}]">
    <vx-sidebar
      :sidebarItems="sidebarItems"
      :logo="require('@/assets/images/logo/logo.png')"
      parent=".layout--main"
    />

    <div id="content-area" :class="[contentAreaClass, {'show-overlay': bodyOverlay}]">
      <div id="content-overlay"></div>

      <div class="content-wrapper contentLayout">
        <the-navbar class="navbarCustom" :memberName="member.firstName" :navbarColor="navbarColor" :class="[{'text-white': isNavbarDark && !isThemeDark}, {'text-base': !isNavbarDark && isThemeDark}]" />

        <vs-popup
          class="holamundo sidebarPopup"
          title="3D Figür"
          :active.sync="this.$store.state.member.firstLogin || this.$store.state.sidebarHowtoUse"
        >
          <div class="pt-0">
            <form-wizard
              ref="wizard"
              title="3D Figürünü Oluştur!"
              subtitle=""
              nextButtonText="Sonraki adım"
              backButtonText="Önceki adım"
              finishButtonText="BAŞLA!"
              @on-complete="finish"
            >
              <tab-content title="Fotoğraf Yükle" icon="feather icon-upload">
                <img src="assets/images/info/1.png" alt>
              </tab-content>
              <tab-content title="Konsept Seç" icon="feather icon-check-square">
                <img src="assets/images/info/2.png" alt>
              </tab-content>
              <tab-content title="Sipariş Süreci" icon="feather icon-truck">
                <img src="assets/images/info/3.png" alt>
              </tab-content>
            </form-wizard>
          </div>
        </vs-popup>
        <div class="router-view pt-4">
          <div class="router-content mt-16">
            <!--:class="{'mt-0': navbarType == 'hidden'}"-->
            <transition :name="routerTransition">
              <div
                class="router-header flex flex-wrap items-center mb-6"
                v-if="$route.meta.breadcrumb || $route.meta.pageTitle"
              >
                <div
                  class="content-area__heading"
                  :class="{'pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light' : $route.meta.breadcrumb}"
                >
                  <h2 class="mb-1">{{ routeTitle }}</h2>
                </div>
                <vx-breadcrumb class="ml-4 md:block hidden" v-if="$route.meta.breadcrumb"/>
                <vs-dropdown class="ml-auto md:block hidden" vs-trigger-click>
                  <vs-button radius icon="icon-settings" icon-pack="feather"></vs-button>

                  <vs-dropdown-menu class="w-32">
                    <vs-dropdown-item>
                      <router-link to="/pages/profile" class="flex items-center">
                        <feather-icon
                          icon="UserIcon"
                          class="inline-block mr-2"
                          svgClasses="w-4 h-4"
                        />
                        <span>Profile</span>
                      </router-link>
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                      <router-link to="/apps/todo" class="flex items-center">
                        <feather-icon
                          icon="CheckSquareIcon"
                          class="inline-block mr-2"
                          svgClasses="w-4 h-4"
                        />
                        <span>Tasks</span>
                      </router-link>
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                      <router-link to="/apps/email" class="flex items-center">
                        <feather-icon
                          icon="MailIcon"
                          class="inline-block mr-2"
                          svgClasses="w-4 h-4"
                        />
                        <span>Inbox</span>
                      </router-link>
                    </vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </div>
            </transition>
            <div class="content-area__content">
              <transition :name="routerTransition" mode="out-in">
                <router-view @changeRouteTitle="changeRouteTitle"></router-view>
              </transition>
            </div>
          </div>
        </div>
      </div>

      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import VxSidebar from "@/layouts/components/vx-sidebar/VxSidebar.vue";
import { FormWizard, TabContent } from "vue-form-wizard";
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
import themeConfig from "@/../themeConfig.js";
import sidebarItems from "@/layouts/components/vx-sidebar/sidebarItems.js";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      navbarType: themeConfig.navbarType || "sticky",
      navbarColor: themeConfig.navbarColor || "#fff",
      footerType: themeConfig.footerType || "static",
      routerTransition: themeConfig.routerTransition || "none",
      isNavbarDark: false,
      routeTitle: this.$route.meta.pageTitle,
      sidebarItems: sidebarItems,
      disableCustomizer: themeConfig.disableCustomizer,
      windowWidth: window.innerWidth //width of windows
    };
  },
  watch: {
    $route() {
      this.routeTitle = this.$route.meta.pageTitle;
    },
    isThemeDark(val) {
      if (this.navbarColor == "#fff" && val) {
        this.updateNavbarColor("#10163a");
      } else {
        this.updateNavbarColor("#fff");
      }
    }
  },
  computed: {
    isAppPage() {
      if (this.$route.path.includes("/apps/")) return true;
      else return false;
    },
    isThemeDark() {
      return this.$store.state.theme == "dark";
    },
    sidebarWidth() {
      return this.$store.state.sidebarWidth;
    },
    bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    member() {
      return this.$store.state.member;
    },
    contentAreaClass() {
      if (this.sidebarWidth == "default") return "content-area-default";
      else if (this.sidebarWidth == "reduced") return "content-area-reduced";
      else if (this.sidebarWidth) return "content-area-full";
    },
    navbarClasses() {
      return {
        "navbar-hidden": this.navbarType == "hidden",
        "navbar-sticky": this.navbarType == "sticky",
        "navbar-static": this.navbarType == "static",
        "navbar-floating": this.navbarType == "floating"
      };
    },
    footerClasses() {
      return {
        "footer-hidden": this.footerType == "hidden",
        "footer-sticky": this.footerType == "sticky",
        "footer-static": this.footerType == "static"
      };
    }
  },
  methods: {
    ...mapActions(["getCurrentUser", "updateFirstLogin"]),
    changeRouteTitle(title) {
      this.routeTitle = title;
    },
    finish() {
      this.$store.commit("FIRST_LOGIN_CLOSE", false);
      this.$store.commit("OPEN_SIDEBAR_POPUP", false);
      this.$refs.wizard.reset();
      this.updateFirstLogin(this.$store.state.member);
    },
    updateNavbar(val) {
      this.navbarType = val;
    },
    updateNavbarColor(val) {
      this.navbarColor = val;
      if (val == "#fff") this.isNavbarDark = false;
      else this.isNavbarDark = true;
    },
    updateFooter(val) {
      this.footerType = val;
    },
    updateRouterTransition(val) {
      this.routerTransition = val;
    },
    handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth() {
      if (this.windowWidth < 1200) {
        this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE", false);
        this.$store.dispatch("updateSidebarWidth", "no-sidebar");
      } else if (this.windowWidth < 1200) {
        this.$store.dispatch("updateSidebarWidth", "reduced");
      } else {
        this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE", true);
      }
    }
  },
  beforeCreate: async function() {
    await this.$store.dispatch("getCurrentUser");
    this.$cookie.set('gender', this.$store.state.member.sex == 'M' ? 'male' : 'female')
  },
  components: {
    VxSidebar,
    TheNavbar,
    TheFooter,
    FormWizard,
    TabContent
  }
};
</script>
<style>
.sidebarPopup .vs-popup--close {
  display: none !important;
}
</style>
