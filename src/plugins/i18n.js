import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'EN': {
        landing: {
            navbar: {
                home: 'Home',
                howToUse: 'How to Use?',
                concepts: 'Concepts',
                about: 'About Us',
                faq: 'FAQ',
                pricing:'Pricing',
                contact: 'Contact',
                login: 'Login'
            },
            first: {
                photo: 'From photo',
                print: 'Create a 3D Figure!',
                model: 'Create Free 3D Figure'
            },
            howtouse:{
                header:'How to Use?',
                subheader:'You can upload your photo by following the warnings below.',

                man:{
                    radioText:'Man',
                },
                woman:{
                    radioText:'Woman',
                },
                
                trueHeader:'Aradığımız fotoğraf tam olarak bu!',
                trueDesc:'Tam karşıdan, <b>yüzde</b> gölge yok, <b>dişler</b> gözükmüyor.<br><b class="text-dark">En doğal duruşunuzu yansıtıyor.</b>',
                falseFirst:'Eğer selfie çekim yaparsan vücudunun duruşu bozulur ve ağzımız açık olursa modelde bozulma olur.',
                falseSecond:'Yüzünüze el ve başka herhangi bir cismin teması modelin bozuk olarak oluşturulmasına sebep olacaktır.',
                falseThird:'Eğer gözlük takarsanız, gözlük yüzünüze birleşik olarak modellenecek ve kötü bir görüntü olacaktır. Eğer gözlük sizin olmazsa olmaz ise bunu biz daha sonradan ekleme yapabiliriz.',
                falseFourth:'Eğer vucüdunun duruşu yan olursa, 3D Modelde de yan olur ve yüzünüzde böyle yan duruyorsa yüzünüzün modellemesinde ufakta olsa kaymalar oluşabilir.',
                createModel:'Create Free!',
            },
            concepts: {
                header: 'Our Concepts',
                subheader:'Choose what suits you with various concepts!',
                list:{
                    title:'Concept Example',
                    price:'$100',
                    buynow:'Buy Now',
                }
            },
            examples:{
                header:'Example Works',
            },
            about:{
                header:'About us',
                subheader:'Who are we? Check out our story!',
            },
            faq:{
                header:'F.A.Q.',
                subheader:'Review the questions of curiosity!',
            },
            pricing:{
                header:'Pricing',
                subheader:'Choose the package that suits you!',
                kdv:'TAX',
                buynow:'Buy Now',
                contactUs:'Contact us',
                tableFirst:{
                    title:'3D MODEL',
                },
                tableSecond:{
                    title:'3D MODEL + EDITING',
                },
                tableThird:{
                    title:'3D PRINT',
                    listFirst:'standard + text',
                    listSecond:'select concept'
                },
                tableFourth:{
                    title:'SPECIAL',
                    subTitle:'Request',
                    listFirst:'Customizations'
                },
            },
            contact: {
                us: 'Contact Us', 
                address: '<a href="https://www.google.com/maps/place/Abbasa%C4%9Fa+Mahallesi,+Bek%C3%A7i+Sk.+No:3,+34353+Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul/@41.0496206,29.0052627,19z/data=!3m1!4b1!4m5!3m4!1s0x14cab7a5d2287bcf:0xe2dc664c4d87a338!8m2!3d41.0496672!4d29.0058455?hl=tr" target="_blank">Ihlamur Yıldız Street No:8/Z1 <br> Bahçeşehir University North Campus <br><b>Beşiktaş / İstanbul</b></a>',
                phone: '+90 850 885 1991',
                whatsapp:'+90 554 159 1525',
                mail: 'info@3dfigur.com',
                submit: 'Submit',
            
                form:{
                    error:'Failed to send message.',
                    fullname:'Full Name ',
                    email:'E-mail',
                    subject:'Subject',
                    message:'Message',
                }

            }
        },
        footer: {
            copyright: '2019 3D Figure. All Rights Reserved.',
            company: 'IntelliFi'
        },
        login: {
            login: 'Login and Create 3D Figure',
            user: 'Username',
            pass: 'Password',
            rem: 'Remember Me',
            forgot: 'Forgot Password',
            reg: 'Register',
            loginbtn:"Login",
            sos: 'Login With',
            alert: {
                title: 'Error',
                message: 'There was an unwanted problem. Please try again later.'
            }
        },
        register: {
            create: 'Create Account',
            first: 'Firstname',
            last: 'Lastname',
            email: 'E-mail',
            pass: 'Password',
            confirm: 'Confirm Password',
            terms: 'I accept the terms & conditions',
            alert: {
                title: 'Error',
                message: 'There was an unwanted problem. Please try again later.'
            }
        },
        welcomeMsg: 'Welcome to Your Vue.js App',
        guide: 'For a guide and recipes on how to configure / customize this project,',
        checkout: 'check out the',
        plugins: 'Installed CLI Plugins',
        links: 'Essential Links',
        ecosystem: 'Ecosystem'
    },
    'TR': {
        landing: {
            navbar: {
                home: 'Giriş',
                howToUse: 'Nasıl Yapılır?',
                concepts: 'Konseptler',
                about: 'Hakkımızda',
                faq: 'S.S.S.',
                pricing:'Fiyatlandırma',
                contact: 'İletişim',
                login: 'Giriş Yap'
            },
            first: {
                photo: 'Fotoğraftan',
                print: '3D Figür oluştur!',
                model: 'Ücretsiz 3D Figür Oluştur'
            },
            howtouse:{
                header:'Nasıl Yapılır?',
                subheader:'Aşağıdaki uyarıları dikkate alarak fotoğrafınızı yükleyebilirsiniz.',

                man:{
                    radioText:'Erkek',
                },
                woman:{
                    radioText:'Kadın',
                },
                
                trueHeader:'Aradığımız fotoğraf tam olarak bu!',
                trueDesc:'Tam karşıdan, <b>yüzde</b> gölge yok, <b>dişler</b> gözükmüyor.<br><b class="text-dark">En doğal duruşunuzu yansıtıyor.</b>',
                falseFirst:'Eğer selfie çekim yaparsan vücudunun duruşu bozulur ve ağzımız açık olursa modelde bozulma olur.',
                falseSecond:'Yüzünüze el ve başka herhangi bir cismin teması modelin bozuk olarak oluşturulmasına sebep olacaktır.',
                falseThird:'Eğer gözlük takarsanız, gözlük yüzünüze birleşik olarak modellenecek ve kötü bir görüntü olacaktır. Eğer gözlük sizin olmazsa olmaz ise bunu biz daha sonradan ekleme yapabiliriz.',
                falseFourth:'Eğer vucüdunun duruşu yan olursa, 3D Modelde de yan olur ve yüzünüzde böyle yan duruyorsa yüzünüzün modellemesinde ufakta olsa kaymalar oluşabilir.',
                createModel:'Ücretsiz Oluştur!',
            },
            concepts: {
                header: 'Konseptler',
                subheader:'Çeşitli konseptlerle size uygun olanı seçin!',
                list:{
                    title:'Örnek Konsept',
                    price:'$100',
                    buynow:'Satın Al',
                }
            },
            examples:{
                header:'Örnek Çalışmalarımız',
            },
            about:{
                header:'Hakkımızda',
                subheader:'Biz kimiz? Hikayemizi inceleyin!',
            },
            faq:{
                header:'Sıkça Sorulan Sorular',
                subheader:'Merak edilenleri inceleyin!',
            },
            pricing:{
                header:'Fiyatlandırma',
                subheader:'Size uygun olan paketi seçin!',
                kdv:'KDV',
                buynow:'Satın Al',
                contactUs:'Bize Ulaşın',
                tableFirst:{
                    title:'3D MODEL',
                },
                tableSecond:{
                    title:'3D MODEL + Düzenleme',
                },
                tableThird:{
                    title:'3D Çıktı',
                    listFirst:'standart + yazılı kaide',
                    listSecond:'konsept seçim'
                },
                tableFourth:{
                    title:'Özel ',
                    subTitle:'Talepler',
                    listFirst:'Özelleştirmeler'
                },
            },
            contact: {
                us: 'İletişim',
                address: '<a href="https://www.google.com/maps/place/Abbasa%C4%9Fa+Mahallesi,+Bek%C3%A7i+Sk.+No:3,+34353+Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul/@41.0496206,29.0052627,19z/data=!3m1!4b1!4m5!3m4!1s0x14cab7a5d2287bcf:0xe2dc664c4d87a338!8m2!3d41.0496672!4d29.0058455?hl=tr" target="_blank">Ihlamur Yıldız Caddesi No:8/Z1 <br> Bahçeşehir Üniversitesi Kuzey Kampüsü <br><b>Beşiktaş / İstanbul</b></a>',
                phone: '+90 850 885 1991',
                whatsapp:'+90 554 159 1525',
                mail: 'info@3dfigur.com',
                submit: 'Gönder',
            
                form:{
                    error:'Mesaj gönderilemedi.',
                    fullname:'Ad Soyad',
                    email:'E-posta',
                    subject:'Konu',
                    message:'Mesaj',
                }
            }

        },
        footer: {
            copyright: '2019 3D Figür. Tüm hakları saklıdır.',
            company: 'IntelliFi'
        },
        login: {
            login: 'Giriş Yap ve 3D Figürünü Oluştur',
            user: 'Kullanıcı Adı',
            pass: 'Parola',
            rem: 'Beni Hatırla',
            forgot: 'Parolamı Unuttum',
            loginbtn:"Giriş Yap",
            reg: 'Kayıt Ol',
            sos: 'İle Giriş Yap',
            alert: {
                title: 'Hata Oluştu',
                message: 'İstenmeyen bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz.'
            }
        },
        register: {
            create: 'Kayıt ol ve 3D Figürünü oluşturmaya başla!',
            first: 'Ad',
            last: 'Soyad',
            email: 'E-posta',
            pass: 'Parola',
            confirm: 'Parola Onayı',
            terms: 'Kullanım şartlarını kabul ediyorum',
            alert: {
                title: 'Hata Oluştu',
                message: 'İstenmeyen bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz.'
            }
        },
        welcomeMsg: 'Bienvenido a tu aplicación Vue.js',
        guide: 'Para una guía y recetas sobre cómo configurar / personalizar este proyecto,',
        checkout: 'revisar la',
        plugins: 'Plugins de CLI instalados',
        links: 'Enlaces esenciales',
        ecosystem: 'Ecosistema'
    }
};

const i18n = new VueI18n({
    locale: 'TR', // set locale
    fallbackLocale: 'EN', // set fallback locale
    messages, // set locale messages
});

export default i18n;