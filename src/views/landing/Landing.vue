<template>
    <div>
        <!-- search Popup -->
        <div class="body-overlay" id="body-overlay"></div>
        <div class="search-popup" id="search-popup">
            <form action="index.html" class="search-popup-form">
                <div class="form-element">
                    <input type="text" class="input-field" placeholder="Search.....">
                </div>
                <button type="submit" class="submit-btn"><i class="fas fa-search"></i></button>
            </form>
        </div>
        <!-- //. search Popup -->




        <!-- navbar area start -->
        <nav class="navbar navbar-area navbar-expand-lg">
            <div class="container nav-container">
                <div class="logo-wrapper navbar-brand">
                    <a href="index.html" class="logo ">
                        <img src="assets/images/3dfigurlogo_website2.png" alt="logo">
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="cgency">
                    <!-- navbar collapse start -->
                    <ul class="navbar-nav" id="primary-menu">
                        <!-- navbar- nav -->
                        <li class="nav-item active dropdown">
                            <a class="nav-link pl-0 dropdown-toggle" data-toggle="dropdown" href="#">{{ $t('landing.navbar.home') }}
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
                            <a class="nav-link" href="#about">{{ $t('landing.navbar.about') }}</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#about">{{ $t('landing.navbar.feature') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#product">{{ $t('landing.navbar.product') }}</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#testimonial">Testimonial</a>
                        </li> -->
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link pl-0 dropdown-toggle" data-toggle="dropdown" href="#">Blog
                                <span class="sr-only">(current)</span>
                            </a>
                            <div class="dropdown-menu">
                                <a href="blog.html" class="dropdown-item">Blog</a>
                                <a href="blog-details.html" class="dropdown-item">Blog Details</a>
                            </div>
                        </li> -->
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">{{ $t('landing.navbar.contact') }}</a>
                        </li>
                         <li class="nav-item">
                            <!-- <router-link class="nav-link" to="/pages/login">{{ $t('landing.navbar.login') }}</router-link> -->
                            <a class="nav-link" href="#/pages/login" >{{ $t('landing.navbar.login') }}</a>
                        </li>
                    </ul>
                    <!-- /.navbar-nav -->
                </div>
                <!-- /.navbar btn wrapper -->
                <div class="responsive-mobile-menu">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#cgency"
                        aria-controls="cgency" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <!-- navbar collapse end -->
                <div class="nav-right-content">
                    <ul>
                        <li class="search" id="search">
                            <i class="fas fa-search"></i>
                        </li>
                        <li class="cart">
                            <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- navbar area end -->

        <!-- header area start -->
        <div class="header-area" id="home" >
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
                                <h1 class="title wow FadeInDown">{{$t('landing.first.photo')}} <br>{{$t('landing.first.print')}}</h1>
                                <div class="btn-wrapper">
                                    <a href="#/pages/login" class="boxed-btn btn-rounded reverse-color"><i
                                            class="fas fa-shopping-cart"></i> {{$t('landing.first.model')}}</a>
                                </div>
                            </div><!-- //. header inner -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-right-image">
                <div class="right-image-with-price header-right-image-animation">
                    <!-- <div class="price-wrap">
                       <span class="price"><strong>50%</strong> Off</span>
                    </div>-->
                    <img src="assets/images/3model-character2.png" alt="header right image">
                </div>
            </div>
        </div>
        <!-- header area end -->

        <!-- inline feature area start -->
        <div class="inline-feature-area padding-top-120" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inline-feaure-wrap">
                         <!-- <unity></unity> -->
                            <!-- inline feature wrap -->
                            <!-- <ul>
                                <li>
                                    <div class="single-inline-feature-item">
                                       
                                        <div class="icon">
                                            <i class="flaticon-chat"></i>
                                        </div>
                                        <div class="content">
                                            <a href="#">
                                                <h4 class="title">Live Chat</h4>
                                            </a>
                                            <p>Fat decisively pursuit regular so calling. West he plan girl been my then
                                                up no. </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-inline-feature-item">
                                       
                                        <div class="icon">
                                            <i class="flaticon-value"></i>
                                        </div>
                                        <div class="content">
                                            <a href="#">
                                                <h4 class="title">Easy Configure</h4>
                                            </a>
                                            <p>Fat decisively pursuit regular so calling. West he plan girl been my then
                                                up no. </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-inline-feature-item">
                                      
                                        <div class="icon">
                                            <i class="flaticon-rocket"></i>
                                        </div>
                                        <div class="content">
                                            <a href="#">
                                                <h4 class="title">User Friendly</h4>
                                            </a>
                                            <p>Fat decisively pursuit regular so calling. West he plan girl been my then
                                                up no. </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-inline-feature-item">
                                      
                                        <div class="icon">
                                            <i class="flaticon-shield"></i>
                                        </div>
                                        <div class="content">
                                            <a href="#">
                                                <h4 class="title">High Security</h4>
                                            </a>
                                            <p>Fat decisively pursuit regular so calling. West he plan girl been my then
                                                up no. </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>-->
                        </div>
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
        <section class="product-area padding-top-110 padding-bottom-90" id="product">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-title text-center">
                            <!-- section title -->
                            <h2 class="title">{{$t('landing.concept.header')}}</h2>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor
                                incididunt ut labore et dolore </p>
                        </div><!-- //. section title -->
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product-carousel">
                            <div class="single-product-item">
                                <!-- single product item -->
                                <div class="thumb">
                                    <img src="assets/images/3dmodelornek1.png" alt="product image">
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="#">Smart Watch</a></h4>
                                    <div class="price-wrap"><span class="price">$34</span> <del>$55</del></div>
                                    <a href="#" class="boxed-bt">Buy Now</a>
                                </div>
                            </div><!-- //. single product item -->
                            <div class="single-product-item">
                                <!-- single product item -->
                                <div class="thumb">
                                    <img src="assets/images/3dmodelornek1.png" alt="product image">
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="#">V7t watch</a></h4>
                                    <div class="price-wrap"><span class="price">$34</span> <del>$55</del></div>
                                    <a href="#" class="boxed-bt">Buy Now</a>
                                </div>
                            </div><!-- //. single product item -->
                            <div class="single-product-item">
                                <!-- single product item -->
                                <div class="thumb">
                                    <img src="assets/images/3dmodelornek1.png" alt="product image">
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="#">t2f Watch</a></h4>
                                    <div class="price-wrap"><span class="price">$34</span> <del>$55</del></div>
                                    <a href="#" class="boxed-bt">Buy Now</a>
                                </div>
                            </div><!-- //. single product item -->
                            <div class="single-product-item">
                                <!-- single product item -->
                                <div class="thumb">
                                    <img src="assets/images/3dmodelornek1.png" alt="product image">
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="#">i21 Watch</a></h4>
                                    <div class="price-wrap"><span class="price">$34</span> <del>$55</del></div>
                                    <a href="#" class="boxed-bt">Buy Now</a>
                                </div>
                            </div><!-- //. single product item -->
                            <div class="single-product-item">
                                <!-- single product item -->
                                <div class="thumb">
                                    <img src="assets/images/3dmodelornek1.png" alt="product image">
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="#">f25 Watch</a></h4>
                                    <div class="price-wrap"><span class="price">$34</span> <del>$55</del></div>
                                    <a href="#" class="boxed-bt">Buy Now</a>
                                </div>
                            </div><!-- //. single product item -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- our product area end -->
        <!-- testimonial area start -->
       <!-- <section class="testimonial-area testimonial-bg padding-top-110 padding-bottom-120" id="testimonial">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-title text-center white">
                         
                            <h2 class="title">What users Says</h2>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor
                                incididunt ut labore et dolore </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="testimonial-carousel">
                            <div class="single-testimonial-item">
                                
                                <div class="description">
                                    They provide innovative solutions with the best. tempor incididunt utla bore et
                                    dolor tempor incididunt .
                                </div>
                                <div class="author-meta">
                                    <div class="thumb">
                                        <img src="../../assets/images/landing/testimonial/01.png" alt="testimonial image">
                                        <div class="icon"> <i class="fas fa-quote-left"></i> </div>
                                    </div>
                                    <div class="content">
                                        <h4 class="name">Mark Anthony</h4>
                                        <span class="post">Director</span>
                                    </div>
                                </div>
                            </div>
                            <div class="single-testimonial-item">
                        
                                <div class="description">
                                    They provide innovative solutions with the best. tempor incididunt utla bore et
                                    dolor tempor incididunt .
                                </div>
                                <div class="author-meta">
                                    <div class="thumb">
                                        <img src="../../assets/images/landing/testimonial/02.png" alt="testimonial image">
                                        <div class="icon"> <i class="fas fa-quote-left"></i> </div>
                                    </div>
                                    <div class="content">
                                        <h4 class="name">Mark Anthony</h4>
                                        <span class="post">Director</span>
                                    </div>
                                </div>
                            </div>
                            <div class="single-testimonial-item">
                            
                                <div class="description">
                                    They provide innovative solutions with the best. tempor incididunt utla bore et
                                    dolor tempor incididunt .
                                </div>
                                <div class="author-meta">
                                    <div class="thumb">
                                        <img src="../../assets/images/landing/testimonial/03.png" alt="testimonial image">
                                        <div class="icon"> <i class="fas fa-quote-left"></i> </div>
                                    </div>
                                    <div class="content">
                                        <h4 class="name">Mark Anthony</h4>
                                        <span class="post">Director</span>
                                    </div>
                                </div>
                            </div>
                            <div class="single-testimonial-item">
                             
                                <div class="description">
                                    They provide innovative solutions with the best. tempor incididunt utla bore et
                                    dolor tempor incididunt .
                                </div>
                                <div class="author-meta">
                                    <div class="thumb">
                                        <img src="../../assets/images/landing/testimonial/04.png" alt="testimonial image">
                                        <div class="icon"> <i class="fas fa-quote-left"></i> </div>
                                    </div>
                                    <div class="content">
                                        <h4 class="name">Mark Anthony</h4>
                                        <span class="post">Director</span>
                                    </div>
                                </div>
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
                      
                            <h2 class="title">Frequently Asked Questions</h2>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor
                                incididunt ut labore et dolore </p>
                        </div>
                    </div>
                </div>
                <div class="row reorder-xs">
                    <div class="col-lg-7">
                        <div class="accordion-wrapper">
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <a class="" data-toggle="collapse" data-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                                Agreed but expect repair she nay sir silent person
                                            </a>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                        data-parent="#accordion">
                                        <div class="card-body">
                                            My possible peculiar together to. Desire so better am cannot he up before
                                            points. Remember mistaken opinions it pleasure of debating. Court front
                                            maids forty if aware their at. Chicken use are pressed removed.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <a class="collapsed" data-toggle="collapse" data-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                                It surprise informed mr advanced do outweigh.
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                        data-parent="#accordion">
                                        <div class="card-body">
                                            My possible peculiar together to. Desire so better am cannot he up before
                                            points. Remember mistaken opinions it pleasure of debating. Court front
                                            maids forty if aware their at. Chicken use are pressed removed.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h5 class="mb-0">
                                            <a class="collapsed" data-toggle="collapse" data-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Appetite welcomed interest the goodness boy not
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                        data-parent="#accordion">
                                        <div class="card-body">
                                            My possible peculiar together to. Desire so better am cannot he up before
                                            points. Remember mistaken opinions it pleasure of debating. Court front
                                            maids forty if aware their at. Chicken use are pressed removed.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingFour">
                                        <h5 class="mb-0">
                                            <a class="collapsed" data-toggle="collapse" data-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">
                                                Expenses as material breeding insisted building to
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                                        data-parent="#accordion">
                                        <div class="card-body">
                                            My possible peculiar together to. Desire so better am cannot he up before
                                            points. Remember mistaken opinions it pleasure of debating. Court front
                                            maids forty if aware their at. Chicken use are pressed removed.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingFive">
                                        <h5 class="mb-0">
                                            <a class="collapsed" data-toggle="collapse" data-target="#collapseFive"
                                                aria-expanded="false" aria-controls="collapseFive">
                                                No in he real Wandered or strictly raillery stanhill a
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive"
                                        data-parent="#accordion">
                                        <div class="card-body">
                                            My possible peculiar together to. Desire so better am cannot he up before
                                            points. Remember mistaken opinions it pleasure of debating. Court front
                                            maids forty if aware their at. Chicken use are pressed removed.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="right-content-area">
                            <div class="img-wrapper">
                                <img src="../../assets/images/landing/faq-image.png" alt="faq image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>-->
        <!-- faq area end -->

        <!-- contact area start -->
        <section class="contact-area contact-bg padding-120" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="contact-info-area">
                            <!-- contact infor area -->
                            <h3 class="title">{{$t('landing.contact.us')}}</h3>
                            <p>{{$t('landing.contact.info')}}</p>
                            <ul class="contact-info-list ">
                                <li class="single-info-item">
                                    <!-- single info item -->
                                    <div class="icon">
                                        <i class="fas fa-home"></i>
                                    </div>
                                    <div class="content">
                                        <span class="details"> {{$t('landing.contact.address')}} </span>
                                        <span class="details"> {{$t('landing.contact.address')}}</span>
                                    </div>
                                </li> <!-- //. single info item -->
                                <li class="single-info-item">
                                    <!-- single info item -->
                                    <div class="icon">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <div class="content">
                                        <span class="details"> {{$t('landing.contact.phone')}}</span>
                                        <span class="details"> {{$t('landing.contact.phone')}}</span>
                                    </div>
                                </li> <!-- //. single info item -->
                                <li class="single-info-item">
                                    <!-- single info item -->
                                    <div class="icon">
                                        <i class="far fa-envelope"></i>
                                    </div>
                                    <div class="content">
                                        <span class="details"> {{$t('landing.contact.mail')}} </span>
                                        <span class="details"> {{$t('landing.contact.mail')}}</span>
                                    </div>
                                </li> <!-- //. single info item -->
                            </ul>
                        </div><!-- // contact info area -->
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-form-area">
                            <!-- contact form are -->
                            <form action="index.html" id="get_in_touch" class="contact-form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" id="name" class="form-control" placeholder="Your Name">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" id="email" class="form-control" placeholder="Your Email">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input type="text" id="subject" class="form-control"
                                                placeholder="Your Name">
                                        </div>
                                        <div class="form-group textarea">
                                            <textarea name="message" id="message" class="form-control" cols="30"
                                                placeholder="Message" rows="10"></textarea>
                                        </div>
                                        <button class="submit-btn" type="submit">{{$t('landing.contact.submit')}}</button>
                                    </div>
                                </div>

                            </form>
                        </div><!-- //. contact form area -->
                    </div>
                </div>
            </div>
        </section>
        <!-- contact area end -->

        <!-- footer area start -->
        <footer class="footer-area padding-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer-inner text-center">
                            <ul class="social-icon">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                            <div class="copyright-text margin-top-30">
                                &copy; {{$t('footer.copyright')}} <a href="https://intellifi.tech" target="_blank" rel="nofollow"> {{$t('footer.company')}} </a>
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
export default {

}

</script>