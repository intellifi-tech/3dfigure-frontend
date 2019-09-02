<template>
  <div id="home">
    <!-- search Popup -->
    <div class="body-overlay" id="body-overlay"></div>
    <!--<div class="search-popup" id="search-popup">
      <form action="/" class="search-popup-form">
        <div class="form-element">
          <input type="text" class="input-field" placeholder="Search.....">
        </div>
        <button type="submit" class="submit-btn">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>-->
    <!-- //. search Popup -->

    <!-- navbar area start -->
    <nav class="navbar navbar-area navbar-expand-lg bg-white" :class="{'sticky': isVisible,'fixed-top':isVisible}">
      <div class="container nav-container">
        <div class="logo-wrapper navbar-brand col-7 col-lg-2 col-md-4">
          <a href="/" class="logo">
            <img src="assets/images/logo/logo.png" alt="logo">
          </a>
        </div>
        <div class="collapse navbar-collapse pl-3" id="cgency">
          <!-- navbar collapse start -->
          <ul class="navbar-nav lg:items-center" id="primary-menu">
            <!-- navbar- nav -->
            <li class="nav-item" :class="{'active':index == clicked}" @click="clicked = index" v-for="(value, index) in navbarList" :key=value :index=index>
              <a class="nav-link" href="#"  v-scroll-to="'#'+value" >{{ $t('landing.navbar.'+value) }}</a>
            </li>  
            <!--<li class="nav-item">
              <a class="nav-link pl-0" href="#">
                {{ $t('landing.navbar.home') }}
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-scroll-to="'#howToUse'">{{ $t('landing.navbar.howToUse') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-scroll-to="'#concepts'">{{ $t('landing.navbar.concepts') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-scroll-to="'#about'">{{ $t('landing.navbar.about') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-scroll-to="'#faq'">{{ $t('landing.navbar.faq') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-scroll-to="'#pricing'">{{ $t('landing.navbar.pricing') }}</a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" href="#" v-scroll-to="'#contact'">{{ $t('landing.navbar.contact') }}</a>
            </li> -->
            <li class="nav-item pr-3 py-2 py-sm-0">
              <div class="loginLink" v-if="!this.$store.state.member.firstName">
              <!-- <router-link class="nav-link" to="/pages/login">{{ $t('landing.navbar.login') }}</router-link> -->
              <a
                class="nav-link font-bold my-1 px-2 text-white btn vs-button-filled vs-button-primary"
                @click="openLogin"
              ><i class="fas fa-sign-in-alt"></i> {{ $t('landing.navbar.login') }}</a>

              <vs-popup
                class="holamundo login-popup"
                :title="$t('login.login')"
                @close="closePopup"
                :active.sync="this.$store.state.landing.loginPopup"
              >
                <div class="position-relative">
                  <login ref="login" :isPopup="true"></login>
                  <!--<button
                    class="position-absolute btn btn-danger"
                    style="top:0px;right:0px;z-index:99999"
                    @click="closePopup"
                  >x</button>-->
                </div>
              </vs-popup>
              </div>
              <!-- loginLink finish -->
               <div class="the-navbar__user-meta flex" v-else>
                <div class="text-right leading-tight sm:block">
                  <p class="font-semibold h-4 nav-link">{{this.$store.state.member.firstName}}</p>
                </div>
                <vs-dropdown vs-custom-content vs-trigger-click>
                  <div class="con-img ml-3">
                    <img
                      :src="require(`@/assets/images/avatar/${activeMemberImg}`)"
                      alt
                      width="40"
                      height="40"
                      class="rounded-full shadow-md cursor-pointer block"
                    >
                  </div>
                  <vs-dropdown-menu>
                    <ul style="min-width: 10rem">
                      <li
                        class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                        @click="$router.push('/profile')"
                      >
                        <feather-icon icon="UserIcon" svgClasses="w-4 h-4"></feather-icon>
                        <span class="ml-2">Profil</span>
                      </li>
                      <li
                        class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                        @click="$router.push('/ticket')"
                      >
                        <feather-icon icon="MailIcon" svgClasses="w-4 h-4"></feather-icon>
                        <span class="ml-2">Destek</span>
                      </li>
                      <vs-divider class="m-1"></vs-divider>
                      <li
                        class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                        @click="logout()"
                      >
                        <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4"></feather-icon>
                        <span class="ml-2">Çıkış yap</span>
                      </li>
                    </ul>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </div>
              <!--user meta finish -->
            </li>
            <li>
              <vs-popup
                class="holamundo login-popup"
                :title="$t('login.register')"
                ref="register"
                :active.sync="this.$store.state.landing.registerPopup"
                @close="closePopup"
              >
                <!--<button
                  class="position-relative btn btn-danger float-right"
                  style="top:10px;right:10px;z-index:99"
                  @click="closePopup"
                >x</button>-->
                <register :isPopup="true"></register>
              </vs-popup>
            </li>
            <li>
              <vs-popup
                class="holamundo login-popup"
                :title="$t('login.forgot')"
                ref="forgot-password"
                :active.sync="this.$store.state.landing.forgotPopup"
                @close="closePopup"
              >
                <!--<button
                  class="position-relative btn btn-danger float-right"
                  style="top:10px;right:10px;z-index:99"
                  @click="closePopup"
                >x</button>-->
                <forgot-password :isPopup="true"></forgot-password>
              </vs-popup>
            </li>
            <li class="nav-item">
             
            </li>
          </ul>
          <!-- /.navbar-nav -->
        </div>
        <!-- /.navbar btn wrapper -->
        <div class="responsive-mobile-menu">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#cgency"
            aria-controls="cgency"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <!-- navbar collapse end -->
        <!--<div class="nav-right-content">
          <ul>
            <li>
              <select v-model="$i18n.locale" id="select-lang" @change="changeLang">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
              </select>
            </li>
          </ul>
        </div>-->
      </div>
    </nav>
    <!-- navbar area end -->

    <!-- header area start -->
    <div class="header-area" >
      <div class="span-1">
        <img src="../../assets/images/landing/trinagle.png" alt="tringle">
      </div>
      <div class="span-2">
        <img src="../../assets/images/landing/circle-shape.png" alt="tringle">
      </div>
      <div class="span-3">
        <img src="../../assets/images/landing/square-shape.png" alt="tringle">
      </div>
      <div class="span-4">
        <img src="../../assets/images/landing/ball.png" alt="tringle">
      </div>
      <div class="header-area-inner">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="header-inner">
                <!-- header inner -->
                <h1 class="title wow FadeInDown">
                  {{$t('landing.first.photo')}}
                  <br>
                  {{$t('landing.first.print')}}
                </h1>
                <div class="btn-wrapper">
                  <a
                    @click="openLogin"
                    class="boxed-btn btn-rounded reverse-color text-white cursor-pointer"
                  >
                    <i class="fas fa-shopping-cart"></i>
                    {{$t('landing.first.model')}}
                  </a>
                </div>
              </div>
              <!-- //. header inner -->
            </div>
          </div>
        </div>
      </div>
      <div class="header-right-image">
        <div class="right-image-with-price header-right-image-animation">
          <!--<div class="price-wrap">
            <span class="price">
              <strong>50%</strong> Off
            </span>
          </div>-->
          <img src="assets/images/3dmodel-man.png" alt="header right image">
        </div>
      </div>
    </div>
    <!-- header area end -->

    <!-- inline feature area start -->
    <div class="inline-feature-area padding-top-120" id="howToUse">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-lg-12 mx-4 mx-md-0 pl-md-0">
            <div class="how-to-use">

                <div id="div-man-or-woman" class="option-group">
                  <div class="option-container">

                    <input class="option-input" id="option-1" type="radio" name="options" v-on:change="change" checked/>
                    <input class="option-input" id="option-2" type="radio" name="options" v-on:change="change"/>

                    <label class="option" for="option-1">
                      <span class="option__indicator"></span>
                      <span class="option__label">
                        ♀<sub>{{$t('landing.howtouse.woman.radioText')}}</sub>
                      </span>
                    </label>

                    <label class="option" for="option-2">
                      <span class="option__indicator"></span>
                      <span class="option__label">
                        ♂<sub>{{$t('landing.howtouse.man.radioText')}}</sub>
                      </span>
                    </label>

                  </div>
                </div>
             <!-- <ul id="ul-man-or-woman" class="row items-center mb-5">
                <p class="btn-switch mb-0 w-1/6">
                  <input
                    type="radio"
                    id="yes"
                    name="switchFirst"
                    class="btn-switch__radio btn-switch__radio_yes"
                    v-on:change="change"
                  >
                  <input
                    type="radio"
                    id="no"
                    name="switchFirst"
                    class="btn-switch__radio btn-switch__radio_no"
                    v-on:change="change"
                    checked
                  >
                  <label for="yes" class="btn-switch__label btn-switch__label_yes">
                    <span class="btn-switch__txt">{{$t('landing.howtouse.man.radioText')}}</span>
                  </label>
                  <label for="no" class="btn-switch__label btn-switch__label_no">
                    <span class="btn-switch__txt">{{$t('landing.howtouse.woman.radioText')}}</span>
                  </label>
                </p>
              </ul>-->

              <!-- how to selfie start-->
              <div class="how-to-selfie inline-feaure-wrap bg-transparent shadow-none">
                <!-- man div start -->
                <div class="man-div model-column row m-auto" v-show="!man">
                  <div class="inline-feaure-wrap justify-content-center rounded-lg mb-5">
                    <div class="col-lg-12 px-0">
                      <div class="sketchfab-embed-wrapper rounded-lg">
                        <iframe
                          width="100%"
                          height="500"
                          :src='"https://sketchfab.com/models/"+iframeModelID+"/embed"'
                          frameborder="0"
                          allow="autoplay; fullscreen; vr"
                          mozallowfullscreen="true"
                          webkitallowfullscreen="true"
                        ></iframe>
                      </div>
                    </div>
                    <ul class="concepts-list">
                      <li v-for="(model, index) in menModel" :key="index">
                        <div class="single-inline-feature-item">
                          <div class="content">
                            <vs-radio
                              :id="model.title"
                              v-model="iframeModelID"
                              :vs-value="model.description"
                            >
                              <label :for="model.title">
                                <img
                                  :src="'assets/images/models/'+model.imagePath"
                                  class="img-style img-fluid mb-4 rounded"
                                >
                              </label>
                            </vs-radio>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="single-inline-feature-item pt-3">
                          <div class="content">
                            <a @click="openLogin" class="cursor-pointer">
                              <img
                                src="assets/images/icon/icon-plus.png"
                                class="border-0 img-scale img-thumbnail"
                              >
                              <h4 class="title">{{$t('landing.howtouse.createModel')}}</h4>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="w-full justify-content-center">
                      <div class="col-lg-4 mx-auto">
                        <div class="section-title text-center">
                          <!-- section title -->
                          <h2 class="title">{{$t('landing.howtouse.header')}}</h2>
                          <p>{{$t('landing.howtouse.subheader')}}</p>
                        </div>
                      </div>
                    </div>
                  <div class="card-footer col-lg-5 px-0 rounded-lg">
                    <div class="single-inline-feature-item pr-5 pr-md-3">
                      <img src="assets/images/icon/icon-true.png" class="selfie-true-icon">
                      <img
                        src="assets/images/portre/man/man-true.jpg"
                        class="img-fluid -mt-4 rounded-t-lg"
                      >
                      <div class="content pt-4 px-4">
                        <h4>{{$t('landing.howtouse.trueHeader')}}</h4>
                        <p class="pt-3" v-html="$t('landing.howtouse.trueDesc')"></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7 col-lg-7 mt-4 mt-md-0 pr-lg-0">
                    <ul id="man-list" class="falseList">
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-12 col-md-3  px-0 ">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/man/man-false-1.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-12 col-md-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseFirst')}}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-12 col-md-3 px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/man/man-false-3.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-12 col-md-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseSecond')}}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-12 col-md-3  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/man/man-false-2.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-12 col-md-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseThird')}}</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="card-group bg-light rounded-lg">
                          <div class="portre col-12 col-md-3  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/man/man-false-4.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-12 col-md-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseFourth')}}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--man div finish-->

                <!-- woman div start -->
                <div class="woman-div model-column row m-auto" v-show="man">
                  <div class="inline-feaure-wrap justify-content-center rounded-lg mb-5">
                    <div class="col-lg-12 px-0">
                      <div class="sketchfab-embed-wrapper rounded-lg">
                        <iframe
                          width="100%"
                          height="500"
                          :src='"https://sketchfab.com/models/"+iframeModelID2+"/embed"'
                          frameborder="0"
                          allow="autoplay; fullscreen; vr"
                          mozallowfullscreen="true"
                          webkitallowfullscreen="true"
                        ></iframe>
                      </div>
                    </div>
                    <ul class="concepts-list">
                      <li v-for="(model, index) in womenModel" :key="index">
                        <div class="single-inline-feature-item">
                          <div class="content">
                            <vs-radio
                              :id="model.title"
                              v-model="iframeModelID2"
                              :vs-value="model.description"
                            >
                              <label :for="model.title">
                                <img
                                  :src="'assets/images/models/'+model.imagePath"
                                  class="img-style img-fluid mb-4 rounded"
                                >
                              </label>
                            </vs-radio>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="single-inline-feature-item pt-3">
                          <div class="content">
                            <a @click="openLogin">
                              <img
                                src="assets/images/icon/icon-plus.png"
                                class="border-0 img-scale img-thumbnail"
                              >
                              <h4 class="title">{{$t('landing.howtouse.createModel')}}</h4>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="w-full justify-content-center">
                      <div class="col-lg-4 mx-auto">
                        <div class="section-title text-center">
                          <!-- section title -->
                          <h2 class="title">{{$t('landing.howtouse.header')}}</h2>
                          <p>{{$t('landing.howtouse.subheader')}}</p>
                        </div>
                      </div>
                    </div>
                  <div class="card-footer col-lg-5 px-0 rounded-lg">
                    <div class="single-inline-feature-item">
                      <img src="assets/images/icon/icon-true.png" class="selfie-true-icon">
                      <img
                        src="assets/images/portre/woman/woman-true.jpg"
                        class="-mt-4 img-fluid rounded-t-lg"
                      >
                      <div class="content pt-4 px-4">
                        <h4>{{$t('landing.howtouse.trueHeader')}}</h4>
                        <p class="pt-3" v-html="$t('landing.howtouse.trueDesc')"></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7 pr-lg-0">
                    <ul id="woman-list" class="falseList">
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-12 col-md-3  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/woman/woman-false-1.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-12 col-md-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseFirst')}}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-12 col-md-3  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/woman/woman-false-3.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-12 col-md-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseSecond')}}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-12 col-md-3  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/woman/woman-false-2.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-12 col-md-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseThird')}}</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="card-group bg-light rounded-lg">
                          <div class="portre col-12 col-md-3  px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/woman/woman-false-4.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-12 col-md-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseFourth')}}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- woman div finish-->
              </div>
              <!-- how to selfie finish-->
            </div>
            <!--how to use finish-->
          </div>
        </div>
      </div>
    </div>
    <!-- inline feature area end -->

    <!-- list feature area start -->
    <!-- <section class="list-feature-area padding-top-110 padding-bottom-115">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="left-content-area">
                            <div class="img-wrap">
                                <img src="../../assets/images/landing/list-feature-image.png" alt="list feature">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="right-content-area">
                            <h3 class="title">More then watch that fill your needs in time</h3>
                            <div class="list-feature-wrap">
                             
                                <ul>
                                    <li>
                                        <div class="single-list-feature-item">
                                            <div class="icon">
                                                <i class="flaticon-alarm-clock"></i>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Alarm Counter</h4>
                                                <p> Intention age nay otherwise but breakfast. Around garden beyond to
                                                    extent by. </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="single-list-feature-item">
                                            <div class="icon">
                                                <i class="flaticon-chat-1"></i>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Live Chat</h4>
                                                <p> Intention age nay otherwise but breakfast. Around garden beyond to
                                                    extent by. </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="single-list-feature-item">
                                            <div class="icon">
                                                <i class="flaticon-heart"></i>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Heartbeat Check</h4>
                                                <p> Intention age nay otherwise but breakfast. Around garden beyond to
                                                    extent by. </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="single-list-feature-item">
                                            <div class="icon">
                                                <i class="flaticon-route"></i>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Location Trace</h4>
                                                <p> Intention age nay otherwise but breakfast. Around garden beyond to
                                                    extent by. </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
       <section class="list-feature-area padding-top-110 padding-bottom-115 list-feature-bg">
            <div class="container">
                <div class="row reorder-xs">
                    <div class="col-lg-6">
                        <div class="right-content-area white">
                            <h3 class="title">More then watch that fill your needs in time</h3>
                            <div class="list-feature-wrap white">
                               
                                <ul>
                                    <li>
                                        <div class="single-list-feature-item">
                                            <div class="icon">
                                                <i class="flaticon-alarm-clock"></i>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Alarm Counter</h4>
                                                <p> Intention age nay otherwise but breakfast. Around garden beyond to
                                                    extent by. </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="single-list-feature-item">
                                            <div class="icon">
                                                <i class="flaticon-chat-1"></i>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Live Chat</h4>
                                                <p> Intention age nay otherwise but breakfast. Around garden beyond to
                                                    extent by. </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="single-list-feature-item">
                                            <div class="icon">
                                                <i class="flaticon-heart"></i>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Heartbeat Check</h4>
                                                <p> Intention age nay otherwise but breakfast. Around garden beyond to
                                                    extent by. </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="single-list-feature-item">
                                            <div class="icon">
                                                <i class="flaticon-route"></i>
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Location Trace</h4>
                                                <p> Intention age nay otherwise but breakfast. Around garden beyond to
                                                    extent by. </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="left-content-area">
                            <div class="img-wrap">
                                <img src="../../assets/images/landing/list-feature-image-2.png" alt="list feature">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <div class="block-feature-area padding-top-120" id="feature">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-block-feature">
                           
                            <div class="icon">
                                <i class="flaticon-charging"></i>
                            </div>
                            <div class="content">
                                <h4 class="title">Battery Backup</h4>
                                <p> Intention age nay otherwise but breakfast. Around garden beyond to extent by. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-block-feature">
                         
                            <div class="icon">
                                <i class="flaticon-wifi"></i>
                            </div>
                            <div class="content">
                                <h4 class="title">Support Wifi</h4>
                                <p> Intention age nay otherwise but breakfast. Around garden beyond to extent by. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-block-feature">
                            
                            <div class="icon">
                                <i class="flaticon-rocket-1"></i>
                            </div>
                            <div class="content">
                                <h4 class="title">Backups</h4>
                                <p> Intention age nay otherwise but breakfast. Around garden beyond to extent by. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-block-feature">
                           
                            <div class="icon">
                                <i class="flaticon-compass"></i>
                            </div>
                            <div class="content">
                                <h4 class="title">GPS Control</h4>
                                <p> Intention age nay otherwise but breakfast. Around garden beyond to extent by. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-block-feature">
                            
                            <div class="icon">
                                <i class="flaticon-photo-camera"></i>
                            </div>
                            <div class="content">
                                <h4 class="title">Camera</h4>
                                <p> Intention age nay otherwise but breakfast. Around garden beyond to extent by. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-block-feature">
                        
                            <div class="icon">
                                <i class="flaticon-fingerprint-2"></i>
                            </div>
                            <div class="content">
                                <h4 class="title">Battery Backup</h4>
                                <p> Intention age nay otherwise but breakfast. Around garden beyond to extent by. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 ">
                        <div class="bottom-image text-center margin-top-30 fadeInUp wow">
                            <img src="../../assets/images/landing/feature-blcok-img.png" alt="block feature image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="intro-video-area intro-video-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="intro-video-wrap">
                            <a href="https://www.youtube.com/watch?v=HVFgMNclzcw" class="video-play-btn"><i
                                    class="fas fa-play"></i></a>
                            <h2 class="title">About Our Features</h2>
                        </div>
                    </div>
                </div>
            </div>
    </div>-->
    <!-- intro video area end -->

    <!-- our product area start -->
    <section class="product-area padding-top-110 padding-bottom-20" id="concepts">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="section-title text-center">
              <!-- section title -->
              <h2 class="title">{{$t('landing.concepts.header')}}</h2>
              <p>{{$t('landing.concepts.subheader')}}</p>
            </div>
            <!-- //. section title -->
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
              <!-- main slides -->
              <hooper :itemsToShow="4" :infiniteScroll="true" :autoPlay="true" :playSpeed="4000">
                <template v-if="conceptList && conceptList .length">
                 <slide v-for="(n, index) in conceptList" :key="index" class="py-3">
                   <div class="single-product-item">
                    <div class="thumb">
                      <img :src="'assets/images/models/'+n.imagePath" alt="product image">
                    </div>
                    <div class="content">
                      <h4 class="title themecolor-blue">
                        <a @click="toMain" class="cursor-pointer">{{n.title}}</a>
                      </h4>
                      <div class="price-wrap">
                        <span class="price">₺{{n.price}} <span class="h6 text-secondary">+{{$t('landing.pricing.kdv')}}</span></span>
                      </div>
                      <a @click="toMain" class="boxed-bt cursor-pointer">{{$t('landing.concepts.list.buynow')}}</a>
                    </div>
                  </div>
                 </slide>
                </template>
                   <!-- placeholder slides -->
                   <template v-else>
                     <slide v-for="(n, indx) in 4" :key="indx" :index="indx" class="py-3">
                       <div class="single-product-item">
                          <div class="thumb pt-3">
                              <img src="assets/images/logo/logo.png" alt="product image"/>
                          </div>
                          <div class="content">
                            <h5>
                              <a>Konsept Bulunamadı</a>
                            </h5>
                          </div>
                        </div>
                    </slide>
                   </template>
              </hooper>
              <!-- // concept items -->
          </div>
        </div>
      </div>
    </section>
    <!-- our product area end -->

    <!-- <section class="product-area padding-top-110 padding-bottom-90" id="concepts">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="section-title text-center">
           
              <h2 class="title">{{$t('landing.concepts.header')}}</h2>
              <p>Çeşitli konseptlerle size uygun olanı seçin!</p>
            </div>
           
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="product-carousel">
              <div class="single-product-item">
              
                <div class="thumb">
                  <a
                    href="https://unsplash.it/1200/768.jpg?image=251"
                    data-toggle="lightbox"
                    data-gallery="gallery"
                  >
                    <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid">
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="#">Smart Watch</a>
                  </h4>
                  <div class="price-wrap">
                    <span class="price">₺34</span>
                    <del>₺55</del>
                  </div>
                  <a href="#" class="boxed-bt">Buy Now</a>
                </div>
              </div>
              
               <div class="single-product-item">
           
                <div class="thumb">
                  <a
                    href="https://unsplash.it/1200/768.jpg?image=252"
                    data-toggle="lightbox"
                    data-gallery="gallery"
                  >
                    <img src="https://unsplash.it/1200/768.jpg?image=252" class="img-fluid">
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="#">Smart Watch</a>
                  </h4>
                  <div class="price-wrap">
                    <span class="price">₺34</span>
                    <del>₺55</del>
                  </div>
                  <a href="#" class="boxed-bt">Buy Now</a>
                </div>
              </div>
             
               <div class="single-product-item">
              
                <div class="thumb">
                  <a
                    href="https://unsplash.it/1200/768.jpg?image=253"
                    data-toggle="lightbox"
                    data-gallery="gallery"
                  >
                    <img src="https://unsplash.it/1200/768.jpg?image=253" class="img-fluid">
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="#">Smart Watch</a>
                  </h4>
                  <div class="price-wrap">
                    <span class="price">₺34</span>
                    <del>₺55</del>
                  </div>
                  <a href="#" class="boxed-bt">Buy Now</a>
                </div>
              </div>
              
               <div class="single-product-item">
             
                <div class="thumb">
                  <a
                    href="https://unsplash.it/1200/768.jpg?image=254"
                    data-toggle="lightbox"
                    data-gallery="gallery"
                  >
                    <img src="https://unsplash.it/1200/768.jpg?image=254" class="img-fluid">
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="#">Smart Watch</a>
                  </h4>
                  <div class="price-wrap">
                    <span class="price">₺34</span>
                    <del>₺55</del>
                  </div>
                  <a href="#" class="boxed-bt">Buy Now</a>
                </div>
              </div>
             
               <div class="single-product-item">
              
                <div class="thumb">
                  <a
                    href="https://unsplash.it/600.jpg?image=255"
                    data-toggle="lightbox"
                    data-gallery="gallery"
                  >
                    <img src="https://unsplash.it/600.jpg?image=255" class="img-fluid">
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="#">Smart Watch</a>
                  </h4>
                  <div class="price-wrap">
                    <span class="price">₺34</span>
                    <del>₺55</del>
                  </div>
                  <a href="#" class="boxed-bt">Buy Now</a>
                </div>
              </div>
            
              <div class="single-product-item">
              
                <div class="thumb">
                  <a
                    href="https://unsplash.it/600.jpg?image=256"
                    data-toggle="lightbox"
                    data-gallery="gallery"
                  >
                    <img src="https://unsplash.it/600.jpg?image=256" class="img-fluid">
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="#">Smart Watch</a>
                  </h4>
                  <div class="price-wrap">
                    <span class="price">₺34</span>
                    <del>₺55</del>
                  </div>
                  <a href="#" class="boxed-bt">Buy Now</a>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>-->

    <section class="container padding-top-90 padding-bottom-20" id="examples">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-title text-left dark">
            <h2 class="title font-light font-sans">{{$t('landing.examples.header')}}</h2>
          </div>
        </div>
      </div>
      <div class="customer-logos slider padding-bottom-30">
              <!-- main slides -->
              <hooper :itemsToShow="4" :infiniteScroll="true" :autoPlay="true" :playSpeed="4000">
                <template v-if="exampleList && exampleList .length">
                <slide v-for="(n, index) in exampleList" :key="index">
                  <a
                   :href="'assets/images/models/'+n.imagePath"
                   data-toggle="lightbox"
                   data-gallery="gallery"
                   class="col-md-4"
                 >
                <img :src="'assets/images/models/' + n.imagePath" class="img-fluid rounded">
                 </a>
                </slide>
                </template>
                   <!-- placeholder slides -->
                   <template v-else>
                     <slide v-for="(n, indx) in 4" :key="indx" :index="indx" class="py-3">
                       <div class="single-product-item">
                          <div class="thumb pt-3">
                              <img src="assets/images/logo/logo.png" alt="product image"/>
                          </div>
                          <div class="content">
                            <h5>
                              <a>Örnek Bulunamadı</a>
                            </h5>
                          </div>
                        </div>
                    </slide>
                   </template>
              </hooper>
      </div>
    </section>

    <!-- testimonial area start -->
    <section class="testimonial-area testimonial-bg padding-top-110" id="about" style="padding-bottom: 125px;">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="section-title text-center white">
              <h2 class="title">{{$t('landing.about.header')}}</h2>
              <p>{{$t('landing.about.subheader')}}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="single-testimonial-item rounded-lg">
              <div class="author-meta col-8 col-md-4 col-lg-3 mb-4">
                <div class>
                  <img src="assets/images/logo/logo.png" alt="testimonial image">
                </div>
              </div>

              <div class="description px-3 text-justify">
                <p>2015 yılında başlayan çalışmalarımız ile yıllar içerisinde 3D Tarama, 3D Modelleme ve 3D Baskı alanında kendimizi çok iyi bir şekilde geliştirdik. Bu süre içerisinde 1000’i aşkın kişinin 3D Taramasını yaparken ortalama 500 kişinin de renkli olarak 3D baskısını yaptık.</p>

                <p>Bu rakamların daha yüksek olması için önümüzde ki tek engel 3D Tarama yaparken, 3D Taraması yapılacak kişi ile buluşmak zorunda olmamızdı. Artık bu zorunluluğu da ortadan kaldırdık ve yıllar içerisinde yapılan 3D Tarama dataları ile eğitilen yapay zeka alt yapısını kullanarak, tam karşıdan net bir şekilde çekilmiş fotoğraf yollayan bir kişinin 3D Modelini oluşturmamız artık online ve neredeyse saniyeler içerisinde gerçekleşmektedir.</p>

                <p>Yılların tecrübesi ve yapay zekanın gücü ile sizlere daha kaliteli ve hızlı hizmet sunmak için kendimizi yeniledik. Yenilenen altyapımızı test etmek, kendinizin ve sevdiklerinizin 3D Modelini oluşturmak hatta onlara güzel bir hediye vermek için sistemimizi hemen test edebilirsiniz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-area padding-top-110 padding-bottom-120" id="faq">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="section-title text-center">
              <h2 class="title">{{$t('landing.faq.header')}}</h2>
              <p>{{$t('landing.faq.subheader')}}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="accordion-wrapper">
            <div id="accordion" class="col-lg-12 d-lg-flex">
              <div class="col-lg-6 col-12 mb-4">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <a
                        class
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <span class="count-sss">1.&nbsp;</span> Sitenizden sipariş vermek istiyorum. Nasıl sipariş vereceğim?
                      </a>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div
                      class="card-body"
                    >3DFigur olarak tüm sipariş süreçlerimizi online olarak sürdürmekteyiz. Öncelikle sistemimize kaydınızı yaptıktan sonra karşınıza çıkacak olan kontrol paneline fotoğraflarınızı yükleyin ve sonrasında dilediğiniz konseptin seçimini yapıp ödemenizi yapıp siparişinizi tamamlayın.</div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <span class="count-sss">2.&nbsp;</span>Siparişlerim ne kadar sürede elime ulaşır?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div
                      class="card-body"
                    >Siparişinizi verdikten sonra 3 farklı adımda ilerlemekteyiz. İlk adımda siparişinizin tasarımının istediğiniz konsepte göre hazırlanması ve sizin onayınıza sunulması. İkinci aşama ise onayladığınız tasarımın üretim süreci ve son olarakta siparişinizin teslimat süreci. Yüklemiş olduğumuz fotoğraf üretime uygun kalite de ve standartlarda ise yaklaşık 5 ile 7 iş günü içerisinde ürününüz kargoya verilecek şekilde hazır edilmektedir.</div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <span class="count-sss">3.&nbsp;</span>Fotoğraftan 3D Model oluşturmanız ne kadar süre almaktadır?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div
                      class="card-body"
                    >Eğer doğru fotoğraf yüklemesi yaptıysanız, 15 ile 45 saniye içerisinde 3D Modelinizi otomatik olarak görebileceksiniz.</div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <span class="count-sss">4.&nbsp;</span>Baskı öncesi kontrol yapıyor musunuz?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div
                      class="card-body"
                    >Üretim öncesinde tasarım süreci yer almaktadır. Tasarım sürecinin başında ise ilk olarak bizlere yollamış olduğunuz fotoğrafın kalitesi, çözünürlüğü ve modellemeye uygunluğunu test etmekteyiz. Sonrasında ise konsepte uygun olarak modellemesini gerçekleştirip sizin onayınıza sunmaktayız. Tüm bu süreç ortalama 1 iş günü sürmektedir.</div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <span class="count-sss">5.&nbsp;</span>Üretimden kaynaklı oluşabilecek bir hata durumunda ürün iadesi veya değişimi yapabilir miyim?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    class="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      Sizlere tasarım onayında sunduğumuz üründen farklı bir ürün ile karşılaşmışsanız mutlaka değişimi yapılmaktadır. Değişim sürecinin hızlı ilerlemesini adına sorunu bizlere görselleri ile birlikte bildirmeniz önemlidir. Taleplerinizi
                      <a
                        href="mailto:siparis@3dfigur.com"
                        class="text-primary font-semibold"
                      >siparis@3dfigur.com</a> adresine göndererek oluşturabilirsiniz.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingSix">
                    <h5 class="mb-0">
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        <span class="count-sss">6.&nbsp;</span>Siparişimi verdikten sonra değişiklik yapabilir miyim?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseSix"
                    class="collapse"
                    aria-labelledby="headingSix"
                    data-parent="#accordion"
                  >
                    <div
                      class="card-body"
                    >Eğer süreç henüz tasarım onayında ise değişim talebinizi bildirdiğiniz takdirde 1 kereye mahsus olmak üzere değişiminiz onaylanacaktır.</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-header" id="headingSeven">
                    <h5 class="mb-0">
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        <span class="count-sss">7.&nbsp;</span>Kargo ücreti ücrete dahil midir?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseSeven"
                    class="collapse"
                    aria-labelledby="headingSeven"
                    data-parent="#accordion"
                  >
                    <div
                      class="card-body"
                    >Kargo ücreti tarafımıza aittir, müşterilerimiz herhangi bir şekilde kargo masrafı ile karşılaşmayacaktır. Eğer kargo firmasından kaynaklı sorunlar olursa, bunun telafisi firmamız tarafından yapılacaktır.</div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingEight">
                    <h5 class="mb-0">
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        <span class="count-sss">8.&nbsp;</span>Arkadaşımın 3D Figürünü yaptırabilir miyim?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseEight"
                    class="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordion"
                  >
                    <div
                      class="card-body"
                    >Evet tabiki! Özellikle böyle ihtiyaçlara çözüm bulmak için bu websitesini sizlere hazırladık. Arkadaşınıza özel bir gününde en anlamlı hediyeyi hazırlayabilirsiniz.</div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingNine">
                    <h5 class="mb-0">
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                      >
                        <span class="count-sss">9.&nbsp;</span>Daha önce vermiş olduğum siparişimin aynısından ürettirmek istiyorum. Ne yapmalıyım?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseNine"
                    class="collapse"
                    aria-labelledby="headingNine"
                    data-parent="#accordion"
                  >
                    <div
                      class="card-body"
                    >Sisteme girişinizi yaptıktan sonra kontrol paneliniz üzerinden ‘’önceki siparişlerim’’ sekmesine gelip oradan siparişinizi tekrarlayabilirsiniz.</div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTen">
                    <h5 class="mb-0">
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                      >
                        <span class="count-sss">10.&nbsp;</span>İstediğim kadar fotoğraf yüklemesi yaparak 3D Model görüntülemesi sağlayabilir miyim?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseTen"
                    class="collapse"
                    aria-labelledby="headingTen"
                    data-parent="#accordion"
                  >
                    <div
                      class="card-body"
                    >Eğer üyeliğin kurumsal üyelik olarak tanımlı değilse, bir sipariş verene kadar sadece 10 adet fotoğrafın 3D Modellemesini gösterebilirsin. Dahası için ya sipariş verip fotoğraf yükleme hakkını sıfırlaman lazım ya da arkadaşlarını sitemize davet ederek ek model yükleme hakkı kazanman lazım.</div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingEleven">
                    <h5 class="mb-0">
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseEleven"
                        aria-expanded="false"
                        aria-controls="collapseEleven"
                      >
                        <span class="count-sss">11.&nbsp;</span>Gözlüklü fotoğraf yüklenmiyor ama gözlük kişinin karakteristik özelliği, ne yapmalıyım?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseEleven"
                    class="collapse"
                    aria-labelledby="headingEleven"
                    data-parent="#accordion"
                  >
                    <div
                      class="card-body"
                    >Evet, gözlüklü bir fotoğraf yüklemesi yapılmamaktadır. Eğer gözlük olmazsa olmaz ise sipariş aşamasında gözlüklü olacağını belirtirsiniz. Bu durumda talep ettiğiniz gözlük modeline en yakın modelleme yapılarak üretim sonrasında model üzerine gözlük montajı yapılmaktadır. Bununda ek bir ücreti olmaktadır.</div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwelve">
                    <h5 class="mb-0">
                      <a
                        class
                        data-toggle="collapse"
                        data-target="#collapseTwelve"
                        aria-expanded="false"
                        aria-controls="collapseTwelve"
                      >
                        <span class="count-sss">12.&nbsp;</span>Ürünlerin boyaması nasıl yapılmaktadır? 3D Yazıcıdan renkli olarak mı üretilmektedir?
                      </a>
                    </h5>
                  </div>

                  <div
                    id="collapseTwelve"
                    class="collapse"
                    aria-labelledby="headingTwelve"
                    data-parent="#accordion"
                  >
                    <div
                      class="card-body"
                    >Tüm renkli üretimlerimiz 3D Systems adlı firmanın Projet660 Pro adlı 3D Yazıcısında yapılmaktadır. Bu 3D Yazıcı hammadde olarak kumtaşı kullanmaktadır ve tüm renklendirme işlemlerini üretim esnasında yapmaktadır. Hiç bir ürünümüz el ile boyama sürecine girmemektedir.</div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThirteen">
                    <h5 class="mb-0">
                      <a
                        class
                        data-toggle="collapse"
                        data-target="#collapseThirteen"
                        aria-expanded="false"
                        aria-controls="collapseThirteen"
                      >
                        <span class="count-sss">13.&nbsp;</span>Siparişim kargodan hasarlı çıktı ne yapmalıyım?
                      </a>
                    </h5>
                  </div>

                  <div
                    id="collapseThirteen"
                    class="collapse"
                    aria-labelledby="headingThirteen"
                    data-parent="#accordion"
                  >
                    <div
                      class="card-body"
                    >Siparişlerinizi teslim alırken lütfen kurye ile birlikte kontrolünü sağlayınız. Gönderileriniz hasarlı olması durumunda kurye ile konuşarak teslim almadan iade edebilirsiniz. Bu durumda tekrar modelin tekrar üretimi yapılarak tarafınıza gönderimi sağlanacaktır.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- faq area end -->

    <!--pricing tables start-->

    <section hidden id="pricing" class="pricing padding-bottom-100 padding-top-50">
      <div class="container">
        <div class="row">
          <center class="col-12">
            <div class="col-lg-6">
              <div class="section-title text-center">
                <h2 class="title">{{$t('landing.pricing.header')}}</h2>
                <p>{{$t('landing.pricing.subheader')}}</p>
              </div>
            </div>
          </center>
          <div class="col-lg-3" v-for="(p, index) in packageList" :key=index>
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5
                  class="card-title text-white text-uppercase text-center"
                >{{p.title}}</h5>
                <h6 class="card-price text-white text-center">
                  ${{p.price}}
                  <span class="period">+ {{$t('landing.pricing.kdv')}}</span>
                </h6>
                <hr>
                <ul class="fa-ul mb-24 pb-24 text-white">
                  <li v-for="(des, index2) in p.description.split(',')" :key="index2">
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>{{des}}
                  </li>
                </ul>
                <a
                  href="#"
                  class="btn btn-block text-uppercase border-none"
                >{{$t('landing.pricing.buynow')}}</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <div class="card-body">
                <h5
                  class="card-title text-white text-uppercase text-center"
                >{{$t('landing.pricing.tableFourth.title')}}</h5>
                <h6
                  class="card-price text-white text-center"
                >{{$t('landing.pricing.tableFourth.subTitle')}}</h6>
                <hr>
                <ul class="fa-ul mb-24 pb-24 text-white">
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-question"></i>
                    </span>
                    {{$t('landing.pricing.tableFourth.listFirst')}}
                  </li>
                  <li>&nbsp;</li>
                </ul>
                <a
                  href="#contact"
                  class="btn btn-block border-none text-uppercase"
                >{{$t('landing.pricing.contactUs')}}</a>
              </div>
            </div>
          </div>
        

        </div>
      </div>
    </section>
    <!--pricing tables end-->

    <!-- contact area start -->
    <section class="contact-area contact-bg padding-120" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-info-area">
              <!-- contact infor area -->
              <h3 class="title">{{$t('landing.contact.us')}}</h3>
              <ul class="contact-info-list">
                <li class="single-info-item">
                  <!-- single info item -->
                  <div class="icon">
                    <i class="fas fa-building"></i>
                  </div>
                  <div class="content">
                    <span v-html="$t('landing.contact.address')"></span>
                  </div>
                </li>
                <!-- //. single info item -->
                <li class="single-info-item">
                  <!-- single info item -->
                  <div class="icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="content">
                    <span class="details">
                      <a href="tel:+90 850 885 1991">+90 850 885 1991</a>
                    </span>
                  </div>
                </li>
                <li class="single-info-item">
                  <!-- single info item -->
                  <div class="icon">
                    <i class="fab fa-whatsapp"></i>
                  </div>
                  <div class="content">
                    <span class="details">
                      <a href="https://api.whatsapp.com/send?phone=905541591525" target="_blank">+90 554 159 1525</a>
                    </span>
                  </div>
                </li>
                <!-- //. single info item -->
                <li class="single-info-item">
                  <!-- single info item -->
                  <div class="icon">
                    <i class="far fa-envelope"></i>
                  </div>
                  <div class="content">
                    <span class="details">
                      <a href="mailto:order@3dfigur.com">order@3dfigur.com</a>
                    </span>
                  </div>
                </li>
                <!-- //. single info item -->
              </ul>
            </div>
            <!-- // contact info area -->
          </div>
          <div class="col-lg-6">
            <div class="contact-form-area">
              <!-- contact form are -->
              <form action="/" id="get_in_touch" class="contact-form">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        id="name"
                        class="form-control"
                        :value="contact.fullname"
                        v-bind:placeholder="$t('landing.contact.form.fullname')"
                      >
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="email"
                        id="email"
                        v-model="contact.mail"
                        class="form-control"
                        v-bind:placeholder="$t('landing.contact.form.email')"
                      >
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <input
                        type="text"
                        id="subject"
                        v-model="contact.subject"
                        class="form-control"
                        v-bind:placeholder="$t('landing.contact.form.subject')"
                      >
                    </div>
                    <div class="form-group textarea">
                      <textarea
                        name="message"
                        id="message"
                        class="form-control"
                        cols="30"
                        v-model="contact.message"
                        v-bind:placeholder="$t('landing.contact.form.message')"
                        rows="10"
                      ></textarea>
                    </div>
                    <button
                      @click="sendMail"
                      class="submit-btn"
                      type="submit"
                    >{{$t('landing.contact.submit')}}</button>
                  </div>
                </div>
              </form>
            </div>
            <!-- //. contact form area -->
          </div>
        </div>
      </div>
    </section>
    <!-- contact area end -->

    <!-- footer area start -->
    <footer class="footer-area pb-4">
      <div class="bg-secondary mb-5 pb-3 pt-4 w-full">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-xl-3 pl-md-4 py-1 py-md-0">
              <a class="flex hover:text-white" href="/uyelik-sozlesmesi">
                 <i class="fas fa-file-alt text-2xl text-dark"></i>
                 <h6 class="hover:underline pl-3 mt-1 text-white">Üyelik Sözleşmesi</h6>
             </a>     
             </div>    
            <div class="col-md-3 col-xl-3 py-1 py-md-0">
              <a class="flex hover:text-white" href="/kisisel-veri-kanunu">
                 <i class="fas fa-file-alt text-2xl text-dark"></i>
                 <h6 class="hover:underline pl-3 mt-1 text-white">Kişisel Veri Kanunu</h6>
             </a>     
             </div> 
             <div class="col-md-3 col-xl-3 py-1 py-md-0">
              <a class="flex hover:text-white" href="/siparis-iptal-ve-iade-sartlari">
                 <i class="fas fa-file-alt text-2xl text-dark"></i>
                 <h6 class="hover:underline pl-3 mt-1 text-white">Sipariş İptal ve İade Şartları</h6>
             </a>     
             </div>
              <div class="col-md-3 col-xl-3 py-1 py-md-0">
              <a class="flex hover:text-white" href="/mesafeli-satis-sozlesmesi">
                 <i class="fas fa-file-alt text-2xl text-dark"></i>
                 <h6 class="hover:underline pl-3 mt-1 text-white">Mesafeli Satış Sözleşmesi</h6>
             </a>     
             </div>             
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="footer-inner text-left">
              <div class="copyright-text">
                &copy; {{$t('footer.copyright')}}
                <a
                  href="https://intellifi.tech"
                  target="_blank"
                  rel="nofollow"
                >{{$t('footer.company')}}</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="footer-inner pt-3 pt-sm-0 text-center text-sm-right">
              <ul class="social-icon">
                <li>
                  <a href="https://www.instagram.com/3dfigur/" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/3dfigur" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                 <li>
                  <img src="assets/images/card/master_card.jpg"/>
                </li>
                 <li>
                   <img src="assets/images/card/visa_card.jpg"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer area end -->
    <div class="back-to-top base-color-2" v-if="isVisible">
      <i class="fas fa-rocket" v-scroll-to="'#body-overlay'"></i>
    </div>
  </div>
</template>
<script>
import Login from "@/components/login/Login.vue";
import Register from "@/components/login/Register.vue";
import { LoginService } from "@/services/login.service";
import LandingService from "@/services/admin/landing.service";
import { ContactService } from "@/services/contact.service";
import ForgotPassword from "@/components/login/ForgotPassword.vue";
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import '@/assets/css/manormowan.less';
export default {
  components: {
    ForgotPassword,
    Register,
    Login,
    Hooper,
    Slide
  },
  data() {
    return {
      iframeModelID: "91102961ad1040748145a4c341899840",
      iframeModelID2: "ebe0accf659d43068cd774141a5731cb",
      man: true,
      sampleiframe: true,
      langs: ["TR", "EN"],
      menModel: [],
      womenModel: [],
      conceptList: [],
      exampleList: [],
      packageList: [],
      checkBox1: false,
      isVisible: false,
      clicked: -1,
      navbarList:['home', 'howToUse', 'concepts', 'about', 'faq', 'contact'],
      contact: {
        fullname:"",
        mail: "",
        subject: "",
        message: ""
      }
    };
  },
  computed: {
    activeMemberImg() {
      if (this.$store.state.member.sex == 'F') {
        return 'female-avatar.png';
      }
      return 'male-avatar.png';
    },
  },
  beforeCreate: async function() {
    await this.$store.dispatch('getCurrentUser');
    document.body.addEventListener('scroll', this.handleScroll);
    const res = await LandingService.getFirst()
    let halfWayThough = Math.floor(res.length / 2)
    this.menModel = res.slice(0, halfWayThough);
    this.womenModel = res.slice(halfWayThough, res.length);

    this.conceptList = await LandingService.getSecond()
    this.exampleList = await LandingService.getThird()
    this.packageList = await LandingService.getFourth()
  },
  destroyed() {
    document.body.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
     toMain: function() {
        this.$router.push("/main")
     },
    handleScroll() {
      let scroll = document.body.scrollTop
      this.isVisible = scroll > 2
    },
    logout: function() {
      LoginService.logout()
      this.$vs.loading({
          text: "Yükleniyor...",
          clickEffect: true,
          textAfter: true
        });
        setTimeout(() => {
          this.$vs.loading.close();}, 5000)
      this.$router.push("/")
      location.reload()
    },
    changeLang() {
      sessionStorage.setItem("lang", this.$i18n.locale);
    },
    closePopup() {
      this.$store.commit("UPDATE_LOGIN_POPUP", false);
      this.$store.commit("UPDATE_REGISTER_POPUP", false);
      this.$store.commit("UPDATE_FORGOT_POPUP", false);
      this.$refs.login.username = ""
      this.$refs.login.password = ""
      this.$refs.login.remember= false
      this.$refs.register.firstName = "",
      this.$refs.register.lastName = "",
      this.$refs.register.email = "",
      this.$refs.register.password = "",
      this.$refs.register.confirm = "",
      this.$refs.register.checkBox1 = false
    },
    sendMail: async function() {
      await ContactService.sendMail(this.contact);
      /*this.$vs.notify({
          time: 6000,
          title: "Başarılı",
          text: "Teşekkür ederiz :)",
          color: "success"
      })*/
    },
    change() {
      this.man = !this.man;
    },
    changeiframe() {
      /*************************** */
    },
    openRegister() {
      this.$store.commit("UPDATE_LOGIN_POPUP", false);
      this.$store.commit("UPDATE_FORGOT_POPUP", false);
      this.$store.commit("UPDATE_REGISTER_POPUP", true);
      // this.$router.push("/register");
    },
    openLogin() {
      var isLogin = this.$store.state.member.firstName
      if(isLogin!=null && isLogin!=" "){
         this.$router.push("/main")
      }
      this.$store.commit("UPDATE_FORGOT_POPUP", false);
      this.$store.commit("UPDATE_REGISTER_POPUP", false);
      this.$store.commit("UPDATE_LOGIN_POPUP", true);
    },
    openForgot() {
      this.$store.commit("UPDATE_FORGOT_POPUP", true);
      this.$store.commit("UPDATE_LOGIN_POPUP", false);
      this.$store.commit("UPDATE_REGISTER_POPUP", false);
    }
  }
};
</script>
<style>
.model-column .vs-radio .vs-radio--circle,
.model-column .vs-radio .vs-radio--borde {
  display: none !important;
}
.login-popup .vs-popup {
  width: 900px !important;
}
.login-popup .vs-popup--content {
  width: 100%;
  overflow-x:hidden;
  padding:0 !important;
  margin: 0 !important;
  border-bottom-left-radius:.5rem !important;
  border-bottom-right-radius:.5rem !important;
}
.login-popup .vs-popup--header {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
/*.vs-popup--close{
  display: none !important;
}*/
.hooper{
  height: auto;
}
.hooper-slide{
  padding: 0 20px;
}
nav{
  transition: 0.5s;
  }
nav.sticky{
  transition: 0.5s;
  box-shadow:0 2px 5px 0 rgba(0,0,0,0.1);
  }
  .back-to-top{
    display:inherit;
  }
  ul.concepts-list li img {
    cursor: pointer;
}
@media (max-width: 489px) {
  .hooper-slide{
     width: 100% !important;
     padding: 0px 62px;

   }
  .hooper-slide .thumb img{
       width: 250px !important;
      height: 250px !important;
      object-fit: cover !important;

      }
  }

</style>
