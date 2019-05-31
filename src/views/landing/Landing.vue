<template>
  <div>
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
    <nav class="navbar navbar-area navbar-expand-lg">
      <div class="container nav-container">
        <div class="logo-wrapper navbar-brand col-7 col-lg-2 col-md-4">
          <a href="/" class="logo">
            <img src="assets/images/logo/logo.png" alt="logo">
          </a>
        </div>
        <div class="collapse navbar-collapse" id="cgency">
          <!-- navbar collapse start -->
          <ul class="navbar-nav" id="primary-menu">
            <!-- navbar- nav -->
            <li class="nav-item active">
              <a class="nav-link pl-0" href="#home">
                {{ $t('landing.navbar.home') }}
                <span class="sr-only">(current)</span>
              </a>
              <!--  <div class="dropdown-menu">
                                <a href="index.html" class="dropdown-item">Home 01</a>
                                <a href="index-2.html" class="dropdown-item">Home 02</a>
                                <a href="index-3.html" class="dropdown-item">Home 03</a>
                                <a href="index-4.html" class="dropdown-item">Home 04</a>
              </div>-->
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#how-to-use">{{ $t('landing.navbar.howToUse') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#concepts">{{ $t('landing.navbar.concepts') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">{{ $t('landing.navbar.about') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#faq">{{ $t('landing.navbar.faq') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pricing">{{ $t('landing.navbar.pricing') }}</a>
            </li>
            <!-- <li class="nav-item">
                            <a class="nav-link" href="#testimonial">Testimonial</a>
            </li>-->
            <!-- <li class="nav-item dropdown">
                            <a class="nav-link pl-0 dropdown-toggle" data-toggle="dropdown" href="#">Blog
                                <span class="sr-only">(current)</span>
                            </a>
                            <div class="dropdown-menu">
                                <a href="blog.html" class="dropdown-item">Blog</a>
                                <a href="blog-details.html" class="dropdown-item">Blog Details</a>
                            </div>
            </li>-->
            <li class="nav-item">
              <a class="nav-link" href="#contact">{{ $t('landing.navbar.contact') }}</a>
            </li>
            <li class="nav-item">
              <!-- <router-link class="nav-link" to="/pages/login">{{ $t('landing.navbar.login') }}</router-link> -->
              <a
                class="nav-link cursor-pointer"
                @click="popupActivo=true"
                href="#"
              >{{ $t('landing.navbar.login') }}</a>
              <vs-popup class="holamundo" :title="$t('login.login')" :active.sync="popupActivo">
                <vs-input
                  icon="icon icon-user"
                  icon-pack="feather"
                  :label-placeholder="$t('login.user')"
                  v-model="login.username"
                  @keyup.enter="login"
                  class="w-full mb-6 no-icon-border"
                />
                <vs-input
                  type="password"
                  icon="icon icon-lock"
                  icon-pack="feather"
                  :label-placeholder="$t('login.pass')"
                  v-model="login.password"
                  @keyup.enter="login"
                  class="w-full mb-4 no-icon-border"
                />
                <div class="flex flex-wrap justify-between pt-4 pb-4">
                  <vs-checkbox v-model="login.remember" class="mb-3">{{$t('login.rem')}}</vs-checkbox>
                  <!-- <router-link to="/pages/forgot-password">{{$t('login.forgot')}}</router-link> -->
                </div>
                <vs-button @click="login">{{$t('login.loginbtn')}}</vs-button>
                <vs-button
                  class="float-right"
                  type="border"
                  @click="openRegister"
                >{{$t('login.reg')}}</vs-button>
                <vs-divider position="center" class="my-8"></vs-divider>
                <div class="social-login mb-4 flex flex-wrap justify-between">
                  <span>{{$t('login.sos')}}</span>
                  <div class="social-login-buttons flex">
                    <vs-button
                      color="#1551b1"
                      class="mr-4 px-8"
                      icon="icon icon-facebook"
                      icon-pack="feather"
                    ></vs-button>
                    <vs-button
                      color="#00aaff"
                      class="px-8"
                      icon="icon icon-twitter"
                      icon-pack="feather"
                    ></vs-button>
                  </div>
                </div>
              </vs-popup>
            </li>
            <li>
              <vs-popup class="holamundo" :title="$t('login.login')" :active.sync="popupActivo2">
                <div class="p-8">
                  <div class="vx-card__title">
                    <h4 class="mb-4">{{$t('register.create')}}</h4>
                  </div>
                  <div class="clearfix">
                    <vs-input
                      label-placeholder="FirstName"
                      :placeholder="$t('register.first')"
                      v-model="register.firstName"
                      class="w-full mb-6"
                    />
                    <vs-input
                      label-placeholder="LastName"
                      :placeholder="$t('register.last')"
                      v-model="register.lastName"
                      class="w-full mb-6"
                    />
                    <vs-input
                      type="email"
                      label-placeholder="Email"
                      :placeholder="$t('register.email')"
                      v-model="register.email"
                      class="w-full mb-6"
                    />
                    <vs-input
                      type="password"
                      label-placeholder="Password"
                      :placeholder="$t('register.pass')"
                      v-model="register.password"
                      class="w-full mb-6"
                    />
                    <vs-input
                      type="password"
                      label-placeholder="Confirm Password"
                      :placeholder="$t('register.confirm')"
                      v-model="register.confirm"
                      class="w-full mb-6"
                    />
                    <vs-checkbox v-model="checkBox1" class="pb-4 pt-2">{{$t('register.terms')}}</vs-checkbox>
                    <vs-button @click="register">{{$t('login.reg')}}</vs-button>
                    <vs-button
                      class="float-right"
                      type="border"
                      @click="openLogin"
                    >{{$t('login.loginbtn')}}</vs-button>
                  </div>
                </div>
              </vs-popup>
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
        <div class="nav-right-content">
          <ul>
            <li>
              <select v-model="$i18n.locale" id="select-lang">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- navbar area end -->

    <!-- header area start -->
    <div class="header-area" id="home">
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
                    @click="popupActivo=true"
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
    <div class="inline-feature-area padding-top-120" id="how-to-use">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 pl-0">
            <div class="how-to-use">
              <div class="row justify-content-center">
                <div class="col-lg-4">
                  <div class="section-title text-center">
                    <!-- section title -->
                    <h2 class="title">{{$t('landing.howtouse.header')}}</h2>
                    <p>{{$t('landing.howtouse.subheader')}}</p>
                  </div>
                </div>
              </div>
              <ul id="ul-man-or-woman" class="row mb-5">
                <p class="btn-switch">
                  <input
                    type="radio"
                    id="yes"
                    name="switchFirst"
                    class="btn-switch__radio btn-switch__radio_yes"
                    v-on:change="change"
                    checked
                  >
                  <input
                    type="radio"
                    id="no"
                    name="switchFirst"
                    class="btn-switch__radio btn-switch__radio_no"
                    v-on:change="change"
                  >
                  <label for="yes" class="btn-switch__label btn-switch__label_yes">
                    <span class="btn-switch__txt">{{$t('landing.howtouse.man.radioText')}}</span>
                  </label>
                  <label for="no" class="btn-switch__label btn-switch__label_no">
                    <span class="btn-switch__txt">{{$t('landing.howtouse.woman.radioText')}}</span>
                  </label>
                </p>
              </ul>

              <!-- how to selfie start-->
              <div class="how-to-selfie inline-feaure-wrap bg-transparent shadow-none">
                <!-- man div start -->
                <div class="man-div model-column row" v-show="man">
                  <div class="card-footer col-lg-5 px-0 rounded-lg">
                    <div class="single-inline-feature-item">
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
                  <div class="col-lg-7 pr-lg-0">
                    <ul id="man-list" class="falseList">
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-3 px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/man/man-false-1.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseFirst')}}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-3 px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/man/man-false-3.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseSecond')}}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-3 px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/man/man-false-2.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseThird')}}</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="card-group bg-light rounded-lg">
                          <div class="portre col-3 px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/man/man-false-4.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseFourth')}}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="inline-feaure-wrap justify-content-center mt-5 rounded-lg">
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
                      <li>
                        <div class="single-inline-feature-item">
                          <div class="content">
                            <vs-radio
                              id="mansampleFirst"
                              v-model="iframeModelID"
                              vs-value="91102961ad1040748145a4c341899840"
                            >
                              <label for="mansampleFirst">
                                <img
                                  src="assets/images/portre/man/man-0.jpg"
                                  class="img-style img-fluid mb-4 rounded"
                                >
                              </label>
                            </vs-radio>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="single-inline-feature-item">
                          <div class="content">
                            <vs-radio
                              id="mansampleSecond"
                              v-model="iframeModelID"
                              vs-value="97c994795c1d4ddbb3ef57af8da88276"
                            >
                              <label for="mansampleSecond" class>
                                <img
                                  src="assets/images/portre/man/man-1.jpg"
                                  class="img-style img-fluid mb-4 rounded"
                                >
                              </label>
                            </vs-radio>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="single-inline-feature-item">
                          <div class="content">
                            <vs-radio
                              id="mansampleThird"
                              v-model="iframeModelID"
                              vs-value="75e5ded5f8c54e5a9a63f3a778abb080"
                            >
                              <label for="mansampleThird" class>
                                <img
                                  src="assets/images/portre/man/man-2.jpg"
                                  class="img-style img-fluid mb-4 rounded"
                                >
                              </label>
                            </vs-radio>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="single-inline-feature-item">
                          <div class="content">
                            <vs-radio
                              id="mansampleFourth"
                              v-model="iframeModelID"
                              vs-value="d187f4d9406b4a07a5b0443b48ddb59c"
                            >
                              <label for="mansampleFourth" class>
                                <img
                                  src="assets/images/portre/man/boy-children.jpg"
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
                            <a @click="popupActivo=true" class="cursor-pointer">
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
                </div>
                <!--man div finish-->

                <!-- woman div start -->
                <div class="woman-div model-column row" v-show="!man">
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
                          <div class="portre col-3 px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/woman/woman-false-1.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseFirst')}}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-3 px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/woman/woman-false-3.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseSecond')}}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card-group bg-light mb-3 rounded-lg">
                          <div class="portre col-3 px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/woman/woman-false-2.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseThird')}}</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="card-group bg-light rounded-lg">
                          <div class="portre col-3 px-0">
                            <img src="assets/images/icon/icon-bad.png" class="selfie-bad-icon">
                            <img
                              src="assets/images/portre/woman/woman-false-4.jpg"
                              class="rounded-l-lg img-scale"
                            >
                          </div>
                          <div class="content col-9 pt-3">
                            <p class="text-base">{{$t('landing.howtouse.falseFourth')}}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="inline-feaure-wrap justify-content-center mt-5 rounded-lg">
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
                      <li>
                        <div class="single-inline-feature-item">
                          <div class="content">
                            <vs-radio
                              id="womansampleFirst"
                              v-model="iframeModelID2"
                              vs-value="ebe0accf659d43068cd774141a5731cb"
                            >
                              <label for="womansampleFirst" class>
                                <img
                                  src="assets/images/portre/woman/woman-0.jpg"
                                  class="img-style img-fluid mb-4 rounded"
                                >
                              </label>
                            </vs-radio>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="single-inline-feature-item">
                          <div class="content">
                            <vs-radio
                              id="womansampleSecond"
                              v-model="iframeModelID2"
                              vs-value="4571b5cb637e464e838f82f12f3293fa"
                            >
                              <label for="womansampleSecond" class>
                                <img
                                  src="assets/images/portre/woman/woman-1.jpg"
                                  class="img-style img-fluid mb-4 rounded"
                                >
                              </label>
                            </vs-radio>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="single-inline-feature-item">
                          <div class="content">
                            <vs-radio
                              id="womansampleThird"
                              v-model="iframeModelID2"
                              vs-value="e51684e803b84f68bdae50e209741bdf"
                            >
                              <label for="womansampleThird" class>
                                <img
                                  src="assets/images/portre/woman/woman-2.jpg"
                                  class="img-style img-fluid mb-4 rounded"
                                >
                              </label>
                            </vs-radio>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="single-inline-feature-item">
                          <div class="content">
                            <vs-radio
                              id="womansampleFourth"
                              v-model="iframeModelID2"
                              vs-value="94bbe2f5ca6347189bcb6dd3d76922be"
                            >
                              <label for="womansampleFourth" class>
                                <img
                                  src="assets/images/portre/woman/girl-children.jpg"
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
                            <a @click="popupActivo=true">
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
            <div class="product-carousel">
              <!-- single product item -->
              <div class="single-product-item" v-for="n in 6" :key="n">
                <div class="thumb">
                  <img src="assets/images/3dmodelornek1.png" alt="product image">
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="#">{{$t('landing.concepts.list.title')}}</a>
                  </h4>
                  <div class="price-wrap">
                    <span class="price">{{$t('landing.concepts.list.price')}}</span>
                  </div>
                  <a href="#" class="boxed-bt">{{$t('landing.concepts.list.buynow')}}</a>
                </div>
              </div>
              <!-- // single product item -->
            </div>
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
                    <span class="price">$34</span>
                    <del>$55</del>
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
                    <span class="price">$34</span>
                    <del>$55</del>
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
                    <span class="price">$34</span>
                    <del>$55</del>
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
                    <span class="price">$34</span>
                    <del>$55</del>
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
                    <span class="price">$34</span>
                    <del>$55</del>
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
                    <span class="price">$34</span>
                    <del>$55</del>
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
        <div class="slide" v-for="n in 6" :key="n">
          <a
            href="assets/images/3dmodelornek1.png"
            data-toggle="lightbox"
            data-gallery="gallery"
            class="col-md-4"
          >
            <img src="assets/images/3dmodelornek1.png" class="img-fluid rounded">
          </a>
        </div>
      </div>
    </section>

    <!-- testimonial area start -->
    <section class="testimonial-area testimonial-bg padding-top-110 padding-bottom-120" id="about">
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
              <div class="author-meta mb-4 col-3">
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
                    >Evet tabiki! Özellikle böyle ihtiyaçlara çözüm bulmak için bu websitesini sizlere hazırladık. Arakdaşınıza özel bir gününde en anlamlı hediyeyi hazırlayabilirsiniz.</div>
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
                    >Evet, gözlüklü bir fotoğraf yüklemesi yapılmamaktadır. Eğer gözlük olmazsa olmaz ise sipariş aşamasında gözlüklü oalcağını belirtirsiniz. Bu durumda talep ettiğiniz gözlük modeline en yakın modelleme yapılarak üretim sonrasında model üzerine gözlük montajı yapılmaktadır. Bununda ek bir ücreti olmaktadır.</div>
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

    <section id="pricing" class="pricing padding-bottom-100 padding-top-50">
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
          <div class="col-lg-3">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5
                  class="card-title text-white text-uppercase text-center"
                >{{$t('landing.pricing.tableFirst.title')}}</h5>
                <h6 class="card-price text-white text-center">
                  $10
                  <span class="period">+ {{$t('landing.pricing.kdv')}}</span>
                </h6>
                <hr>
                <ul class="fa-ul mb-24 pb-24 text-white">
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>fbx + texture
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>ply + texture
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
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5
                  class="card-title text-white text-uppercase text-center"
                >{{$t('landing.pricing.tableSecond.title')}}</h5>
                <h6 class="card-price text-white text-center">
                  $25
                  <span class="period">+ {{$t('landing.pricing.kdv')}}</span>
                </h6>
                <hr>
                <ul class="fa-ul mb-24 pb-24 text-white">
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    fbx, obj, wrl
                  </li>
                  <li>&nbsp;</li>
                </ul>
                <a
                  href="#"
                  class="btn btn-block border-none text-uppercase"
                >{{$t('landing.pricing.buynow')}}</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <div class="card-body">
                <h5
                  class="card-title text-white text-uppercase text-center"
                >{{$t('landing.pricing.tableThird.title')}}</h5>
                <h6 class="card-price text-white text-center">
                  $100
                  <span class="period">+ {{$t('landing.pricing.kdv')}}</span>
                </h6>
                <hr>
                <ul class="fa-ul mb-24 pb-24 text-white">
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    {{$t('landing.pricing.tableThird.listFirst')}}
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    {{$t('landing.pricing.tableThird.listSecond')}} +
                    <span
                      class="underline h4"
                    >
                      $
                      <strong>15</strong>
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  class="btn btn-block border-none text-uppercase"
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
                      <a href="https://api.whatsapp.com/send?phone=905541591525">+90 554 159 1525</a>
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
                      <a href="mailto:info@3dfigur.com">info@3dfigur.com</a>
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
                        :value="contact.nameSurname"
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
    <footer class="footer-area padding-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="footer-inner text-center">
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
              </ul>
              <div class="copyright-text margin-top-30">
                &copy; {{$t('footer.copyright')}}
                <a
                  href="https://intellifi.tech"
                  target="_blank"
                  rel="nofollow"
                >{{$t('footer.company')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer area end -->

    <div class="back-to-top base-color-2">
      <i class="fas fa-rocket"></i>
    </div>
  </div>
</template>
<script>
import {
  required,
  email,
  sameAs,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
import { LoginService } from "@/services/login.service";
import { ContactService } from "@/services/contact.service";
export default {
  data() {
    return {
      iframeModelID: "91102961ad1040748145a4c341899840",
      iframeModelID2: "ebe0accf659d43068cd774141a5731cb",
      man: true,
      sampleiframe: true,
      langs: ["TR", "EN"],
      popupActivo: false,
      popupActivo2: false,
      login: {
        username: "",
        password: "",
        remember: false
      },
      register: {
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        confirm: ""
      },
      activated: false,
      contact: {
        mail: "",
        nameSurname: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    sendMail: async function() {
      ContactService.sendMail(this.contact);
    },
    change() {
      this.man = !this.man;
    },
    changeiframe() {
      /*************************** */
    },
    openRegister() {
      this.popupActivo = false;
      this.popupActivo2 = true;
      // this.$router.push("/register");
    },
    openLogin() {
      this.popupActivo = true;
      this.popupActivo2 = false;
    },
    register: async function() {
      if (registerCheck(this.$v) && !this.checkBox1) {
        this.$vs.notify({
          title: "Color",
          text: "Lorem ipsum dolor sit amet, consectetur",
          color: "danger"
        });
        return;
      }
      var credential = {
        firstName: this.register.firstName,
        lastName: this.register.lastName,
        email: this.register.email,
        login: this.register.email,
        password: this.register.password
      };
      var status = await LoginService.register(credential);
      if (status < 400) {
        this.popupActivo2 = false;
        // Logine yönlendirilebilir ya da otomatik login yapılır
        this.popupActivo = true;
      } else {
        this.$vs.notify({
          title: "Color",
          text: "Lorem ipsum dolor sit amet, consectetur",
          color: "danger"
        });
      }
    },
    login: async function() {
      if (loginCheck(this.$v)) {
        this.$vs.notify({
          title: "Color",
          text: "Lorem ipsum dolor sit amet, consectetur",
          color: "danger"
        });
        return;
      }
      var credential = {
        username: this.login.username,
        password: this.login.password,
        rememberMe: this.login.remember
      };
      var status = await LoginService.login(credential);
      if (status == 200) {
        this.popupActivo = false;
        this.$router.push("/main");
      } else {
        this.$vs.notify({
          title: "Color",
          text: "Lorem ipsum dolor sit amet, consectetur",
          color: "danger"
        });
      }
    }
  },
  validations: {
    login: {
      username: { required, email },
      password: { required, minLength: minLength(5), maxLength: maxLength(15) }
    },
    register: {
      email: { required, email },
      firstName: { required },
      lastName: { required },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(15)
      },
      confirm: { required, sameAsPassword: sameAs("register.password") }
    }
  }
};
function loginCheck(v) {
  return v.username.$invalid || v.password.$invalid;
}

function registerCheck(v) {
  return (
    v.email.$invalid ||
    v.firstName.$invalid ||
    v.lastName.$invalid ||
    v.password.$invalid
  );
}
</script>
<style>
.vs-radio .vs-radio--circle,
.vs-radio .vs-radio--borde {
  display: none !important;
}
</style>