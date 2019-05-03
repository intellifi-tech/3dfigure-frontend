import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        landing: {
            navbar: {
                home: 'Home',
                about: 'About',
                feature: 'Feature',
                product: 'Product',
                contact: 'Contact',
                login: 'Login'
            },
            first: {
                photo: '2D Photo to',
                print: '3D Print',
                model: 'Create Model'
            },
            concept: {
                header: 'Our Concepts'
            },
            contact: {
                us: 'Contact Us',
                info: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor incididunt ut labore et dolore',
                address: '143 castle road 517',
                phone: '+3 123 456 789',
                mail: 'info@yourmail.com',
                submit: 'Submit Now'

            }
        },
        footer: {
            copyright: '2019 Copyright 3D Figure',
            company: 'IntelliFi'
        },
        login: {
            login: 'Login',
            user: 'Username',
            pass: 'Password',
            rem: 'Remember Me',
            forgot: 'Forgot Password',
            reg: 'Register',
            sos: 'Login With',
            alert: {
                title: 'Error',
                message: 'Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.'
            }
        },
        register: {
            create: 'Create Account',
            first: 'Firstname',
            last: 'Lastname',
            email: 'Email',
            pass: 'Password',
            confirm: 'Confirm Password',
            terms: 'I accept the terms & conditions',
            alert: {
                title: 'Error',
                message: 'Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.'
            }
        },
        welcomeMsg: 'Welcome to Your Vue.js App',
        guide: 'For a guide and recipes on how to configure / customize this project,',
        checkout: 'check out the',
        plugins: 'Installed CLI Plugins',
        links: 'Essential Links',
        ecosystem: 'Ecosystem'
    },
    'tr': {
        landing: {
            navbar: {
                home: 'Ana Sayfa',
                about: 'Hakkımızda',
                feature: 'Özellik',
                product: 'Ürün',
                contact: 'İletişim',
                login: 'Giriş Yap'
            },
            first: {
                photo: '2D Photo to',
                print: '3D Print',
                model: 'Model Oluştur'
            },
            concept: {
                header: 'Our Concepts'
            },
            contact: {
                us: 'İletişim',
                info: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor incididunt ut labore et dolore',
                address: '143 castle road 517',
                phone: '+3 123 456 789',
                mail: 'info@yourmail.com',
                submit: 'Gönderin'
            }
        },
        footer: {
            copyright: '2019 3D Figür. Tüm hakları saklıdır.',
            company: 'IntelliFi'
        },
        login: {
            login: 'Giriş Yap',
            user: 'Kullanıcı Adı',
            pass: 'Parola',
            rem: 'Beni Hatırla',
            forgot: 'Parolamı Unuttum',
            reg: 'Kayıt Ol',
            sos: 'İle Giriş Yap',
            alert: {
                title: 'Hata Oluştu',
                message: 'Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.'
            }
        },
        register: {
            create: 'Hesap Oluştur',
            first: 'İsim',
            last: 'Soyisim',
            email: 'Email',
            pass: 'Parola',
            confirm: 'Parola Onayı',
            terms: 'Kullanım şartlarını kabul ediyorum',
            alert: {
                title: 'Hata Oluştu',
                message: 'Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.'
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
    locale: 'tr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;