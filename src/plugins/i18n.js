import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'EN': {
        notify:{
            error:{
                title:'ERROR!',
                titleFail:'Failed!',
                text:{
                    default:'Please check the information.',
                    fail:'Process failed.',
                    systemError:'An error has occurred.',
                    checkout:{
                        discountCode:'Discount code invalid!',
                        step1:'Please check the notes!',
                        step2:'Please select an address!',
                        step3:'Please select an address!',
                    },
                    preview:{
                        isSelect:'You must upload or select photos!',
                        invite:'Check the entered e-mails.',
                        inviteLimit:'You are no longer entitled to send an invitation.',
                        upload:{
                            default:'Could not create figure! Please try another photo!',
                            selectLimit:'You can select up to 2 photos!',
                            byteLimit:'You can upload photos up to 8 MB!'
                        }
                    },
                    registration:{ 
                        default:'Please check your information.',                       
                        email:{
                            default:'Please check the email.',
                            notfound:'Email not found.'
                        },
                        register:{
                            already:'This email is already registered.'
                        }
                    },
                    profile:{
                        address:{
                            delete:'This address cannot be deleted because it is registered with an order.',
                        },
                        password:{
                            minLenght:'You must enter at least 6 characters in your password.',
                            notConfirm:"New Passwords Don't Match!"
                        }
                    },
                    ticket:{
                        openFail:'Ticket opened but file could not be loaded.'
                    }
                }
            },
            success:{
                title:'Successful!',
                text:{
                    default:'Operation performed successfully.',
                    thanks:'We thank you :)',
                    address:{
                        add:'Address successfully added.'
                    },
                    checkout:{
                        discountCode:'Discount code applied.',
                        pay:'You are redirected to the 3D Payment Screen...'
                    },
                    preview:{
                        invite:'Invitation sent.',
                        upload:{
                            default:'The figure was created.',
                            loading:{
                                one:'Uploading photo to our cloud server..',
                                two:'Now the photos are analyzed..',
                                three:'Creating the right geometry and texture with deep learning..',
                                four:"We're waiting for a while, but think about the sculptors..",
                                five:'We are close to the result .. Are you ready…?',
                                six:'We know you are curiously waiting..',
                                seven:'We prepare this work with great care for you..'
                            }
                        }
                    },
                    registration:{                       
                        email:{
                            reset:'A reset email has been sent..',
                        },
                        register:{
                            activation:'The activation link has been sent to your e-mail. It may take some time for the email to arrive.',
                            accept:'I understand'
                        }
                    },
                    profile:{
                        update:'Your information has been updated.',
                    },
                }
            }
        },
        landing: {
            loading:'Loading...',
            navbar: {
                home: 'Home',
                howToUse: 'How it Works?',
                concepts: 'Concepts',
                about: 'About Us',
                faq: 'FAQ',
                pricing:'Pricing',
                contact: 'Contact',
                login: 'Login'
            },
            first: {
                photo: 'Turn Your',
                print: 'Photos Into 3D Figure!',
                model: 'Try For Free!'
            },
            howtouse:{
                header:'How it Works?',
                subheader:'You can upload your photos by following the instructions below.',

                man:{
                    radioText:'Man',
                },
                woman:{
                    radioText:'Woman',
                },
                
                trueHeader:'This photo is obviously/exactly what we are looking for!',
                trueDesc:'No shade on the <b>face</b>, <b>teeth</b> are not seen and pose straight ahead with your natural posture!',
                falseFirst:'If you take a selfie, a posture disorder will occur. When your mouth is open, your 3D model will not be printed properly.',
                falseSecond:'Hands or any other material shouldn’t be in touch with your face in order to avoid disruptions on the 3D Model.',
                falseThird:'If you use a glasses, it will be printed with your face and the view will not be proper. Glasses can be added later.',
                falseFourth:'Body posture is important for the printing process. Right/Left sided posing is not recommended.',
                createModel:'Create a Free 3D Model',
            },
            concepts: {
                header: 'Concepts',
                subheader:'Choose your own concept!',
                empty:'Concept Not Found',
                list:{
                    title:'Concept Example',
                    price:'$100',
                    buynow:'Buy Now',
                }
            },
            examples:{
                header:'Examples',
                empty:'Example Not Found'
            },
            about:{
                header:'About us',
                subheader:'Who are we? Take a look at our story!',
                descFirst:'Since 2015, we’ve been leading the way on 3D Scanning, 3D Modelling and 3D Printing not just in Turkey but the whole world.',
                descSecond:'Since inception, we did 3D scan on more than 1000 people and 3D print on 500 people.',
                descThird:'The only obstacle to reach more people on 3D Scanning was meeting with customers but now we made it possible with only one properly taken photo! We used artificial intelligence technology by teaching it with the data collected for years from 3D Scanning platforms. Now, customers are able to create a 3D Model just in seconds and online.',
                descFourth:'With 4 years of experience and the artificial intelligence supported system, we improve day by day in order to serve you better. Don’t forget to test our new system, create 3D models and moreover make gifts for your friends, family and others!',
            },
            faq:{
                header:'F.A.Q.',
                subheader:'Review the questions of curiosity!',
                question:{
                    one:'I want to order online, how can I?',
                    two:'How soon can I get my order?',
                    three:'How long does it take to turn my photo into a 3D Model?',
                    four:'Do you check the model before manufacturing?',
                    five:'Do I have the right to change or return the product if any problem occurs on manufacturing?',
                    six:'Can I change anything after I order my product?',
                    seven:'Is delivery fee included in payment?',
                    eight:'Am I able to create a 3D Model for my friend?',
                    nine:'I want to order the same model once again, what should I do?',
                    ten:'By uploading too much photos, can I view all of them in 3D Modelling?',
                    eleven:'I am not able to upload my photos with glasses but it’s a characteristic, what should I do?',
                    twelve:'What about dying the products? Are the products printed colored from the 3D Printer?',
                    thirteen:'If I see my product damaged in cargo, what can I do?',
                },
                answer:{
                    one:'As 3D Figure, we run all ordering process online. Firstly sign up the website, upload your photos on your Dashboard and then choose your concept before making the payment and completing your order.',
                    two:'After your order, we move in 3 steps. First, we prepare your order      through the concept you chose and serve it to your approval. With your approval, we start the second step which is manufacturing process and the last step is delivery. If the photo you uploaded is in proper quality and standards, your 3D model will be ready for delivery in 5 to 7 days.',
                    three:'If your photo is proper, you’ll be able to see your 3D Model in 15 to 45 seconds.',
                    four:'Before manufacturing, we have designing process. At the beginning of the process; the quality, resolution and the suitability of the photo is tested. Then according to your concept, the photo is modelled and served to your approval. All of this work takes approximately 1 workday.',
                    five:'If you get a different or unexpected product than planned, change is done in any case. In order to speed the changing process, you need to report us the problem with the visuals. You can reach us using <a href="mailto:order@3dfigur.com" class="text-primary font-semibold">order@3dfigur.com</a> address.',
                    six:'If the process is just on designing process, your changing request is accepted only for once. ',
                    seven:'Delivery costs belong to us, customers don’t pay anything about it. In any problem with cargo, 3D Figure covers the expenses.',
                    eight:'Yes, of course! Our website is renewed to find solution especially for this kind of necessities. It will be the most meaningful gift to give a friend in a special day.',
                    nine:'After logging in the system, click on ‘my previous orders’ which is on the controlling pannel. You can reorder the same product.',
                    ten:'If your membership is not institutional, you can only view 10 photos as a 3D Model. For more you need to complete your order and start all again or you need to invite your friends in order to get extra model uploading right.',
                    eleven:'Yes, photos with glasses are not uploaded. If glasses is a must, you report us so we can add the most similiar glasses to your model during the process. After manufacturing, the montage of the glasses is done with an <b>extra cost.</b>',
                    twelve:'All colored products are prepared by the company named 3D Systems and their 3D Printer called Projet660. This printer uses sandstone as material so that all coloring stuff is done during the manufacturing process. Any product is colored by hand.',
                    thirteen:'While receiving your product, keep in touch with the courier. If any damage seen, you can return the product directly to the courier. In this situation, your 3D model will be prepared once again and sent to you.',
                },
            },
            pricing:{
                header:'Pricing',
                subheader:'Choose the package that suits you!',
                kdv:'TAX',
                symbol:'$',
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
            },
            docs:{
                membership:'Membership Agreement',
                personal:'Personal Data Act',
                orderReturn:'Order Cancellation and Refund Policy',
                sales:'Distance Sales Agreement'
            }
        },
        footer: {
            copyright: 'All Rights Reserved.',
            company: 'IntelliFi'
        },
        forgot:{
            title:'Reset Password',
            btn:'Reset Password',
            email:{
                subtitle:'Please enter your email address, and we will send you an email with a link to reset your password.',
                placeholder:'E-mail',
            },
            reset:{
                subtitle:'Enter your new password',
                placeholder:'New Password',
            },
        },
        login: {
            login: 'Login and Create 3D Figure',
            register:'Register and Create 3D Figure',
            user: 'E-mail',
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
            sex:{
                label:'Select Gender',
                man:'Male',
                woman:'Female'
            },
            tcno:'ID No',
            pass: 'Password',
            confirm: 'Confirm Password',
            terms: 'I accept the <a href="/uyelik-sozlesmesi" target="_blank" class="underline hover:text-primary"> terms & conditions.</a>',
            alert: {
                title: 'Error',
                message: 'There was an unwanted problem. Please try again later.'
            }
        },
        dashboard:{
            startPopup:{
                title:'3D FIGUR',
                subTitle:'Create 3D Figure!',
                wizard:{
                    tabOne:'Upload Photo',
                    tabTwo:'Select Concept',
                    tabThree:'Order Process',
                    btnBack:'Previous step',
                    btnNext:'Next step',
                    btnFinish:'START!',
                }
            },
            avatarMenu:{
                profile:'Profile',
                ticket:'Support',
                logout:'Log out',
            },
            sidebar:{
                newModel:'New Model',
                orderHistory:'Figure History',
                cart:'My Cart',
                ticket:'Support',
                profile:'Profile',
                footer:{
                    title:'Information',
                    subtitle:'How it work?',
                }
            },
            main:{
                wizard:{
                    btnBack:'Back',
                    btnNext:'Next',
                    btnFinish:'Go to Cart',
                    tabOne:{
                        title:'Create 3D Figure',
                        infoBoard:{
                            title:'Information Board',
                            descOne:"There may be some shortcomings in the model, <b class='text-primary'>so don't worry!</b>",
                            descTwo:'Just choose your <b class="text-primary">concept!</b> We do every other stuff on designing process. Then, in order to verify we will show you the product before manufacturing.',
                            descLimit:'If your limit has expired, you may have the right to upload photos by sharing our application.',
                        },
                        gallery:{
                            title:'My Photos',
                            subTitle:'Your right to upload photos:',
                            descOneFirst:'To create the best 3D Figure,',
                            descOneSecond:'most accurate photo,',
                            descOneThird:'choose from gallery and upload new ones.',
                            descTwo:'To use the <b class="text-primary">double concept</b>, you must upload and select <b class="text-primary">2 photos.</b>',
                            invitePopup:{
                                title:'Invite a Friend',
                                descOne:'When you have finished uploading photos, you can earn <b>up to 3 more</b> by sending invitations to <b>3 friends</b> email addresses.',
                                descTwo:'All rights are <b>renewed</b> after you place an order.',
                                inputOne:'1.E-mail',
                                inputTwo:'2.E-mail',
                                inputThree:'3.E-mail',
                                btnSubmit:'Invite',
                            },
                            howToPopup:{
                                title:'How To?'
                            }
                        },
                    },
                    tabTwo:{
                        title:'Select Concept',
                        cardTitle:'Concepts',
                        searchBar:'Find concept',
                        selectBox:'Select Concept',
                        conceptCard:{
                            addCart:'Add Cart',
                            removeCart:'Remove Cart',
                            detail:'Detail',
                            popup:{
                                title:'Concept Details',
                                priceText:'Price',
                            }
                        }
                    },
                },
            },
            order:{
                cardTitle:'Figure History',
                searchBar:'Search',
                card:{
                    detail:'Detail',
                    popup:{
                        title:'Order Information',
                        orderCode:'Order Number',
                        cargoCode:'Shipping Code',
                        notAvailable:'Not available.',
                        deliveryDate:'Delivery Date :',
                        total:'Amount :',
                    }
                }
            },
            checkout:{
                wizard:{
                    btnBack:'Back',
                    btnNext:'Next',
                    btnFinish:'Finish!',
                    totalCard:{
                        netTotal:'Net Total',
                        discountTotal:'Discount Amount',
                        tax:'TAX(%18)',
                        grandTotal:'General Total (TL)',
                        freeCargo:'Shipping is free for all orders.',
                        discountCode:'Discount Code :',
                        btnActiveDiscount:'Activate Code',
                        orderNote:'Order Note :',
                        btnCreateModel:'Create New Model',
                    },
                    tabOne:{
                        title:'Cart',
                        checkoutList:{
                            emptyCart:'No products in cart.',
                            createModel:'Create New Model!',
                            removeItem:'REMOVE'
                        }
                    },
                    tabTwo:{
                        title:'Billing Address',
                        addressSelect:'Select Address',
                        addressAdd:'Add Address',
                        addressList:{
                            emptyList:'There is no registered address.',
                            createAddress:'Add New Address!'
                        },
                        newAddress:{
                            cardTitle:'New Address',
                            name:'Address Name',
                            firstName:'Firstname',
                            lastName:'Lastname',
                            phone:'Phone',
                            phoneNumber:'(555) 000 0000',
                            address:'Address',
                            postCode:'Post Code',
                            taxOffice:'Tax Office',
                            taxNo:'ID/Tax No',
                            city:'City',
                            town:'Town/District',
                            btnSave:'Save',
                        }
                    },
                    tabThree:{
                        title:'Cargo Address',
                    },
                    tabFour:{
                        title:'Payment',
                        cardPayment:{
                            title:'Card Information',
                            cardNumber:'Card Number',
                            month:'Month',
                            year:'Year',
                            cvv:'CVV',
                            cardOwner:'Card Owner',
                            fullName:'FULL NAME',
                            btnPayment:'Pay'
                        }
                    },
                }
            },
            ticket:{
                sidebar:{
                    newTicket:{
                      btnNew:'New Ticket',
                      prompt:{
                          title:'New Ticket',
                          accept:'Send',
                          cancel:'Cancel',
                          orderCode:'Related Order Code',
                          ticketType:'Support Department',
                          subject:'Subject',
                         /* message:'İleti'*/
                      }  
                    }
                },
                ticketType:{
                    title:'Departments',
                    sales:'SALES',
                    technic:'TECHNICAL SUPPORT'
                },
                ticketStatus:{
                     title:'Status',
                     open:'OPEN',
                     inProgress:'PROCESSING',
                     close:'CLOSED'
                },
                ticketDetail:{
                    subject:'Subject',
                    reply:'Reply',
                    orderCode:'Related Order Code :',
                    replyPrompt:{
                        title:'Write message',
                        accept:'Send',
                        cancel:'Cancel'
                    }
                }
            },
            profile:{
                tabOne:{
                    title:'My Profile',
                    subTitle:'Profile Info',
                    card:{
                        firstName:'Firstname',
                        lastName:'Lastname',
                        email:'E-mail',
                        idNo:'ID Number',
                        birthDay:'Date of Birth',
                        dayMonthYear:'dd.mm.yyyy',
                        sex:{
                            label:'Gender',
                            man:'Male',
                            woman:'Female'
                        },
                        btnUpdate:'Update',
                        btnEdit:'Edit'
                    }
                },
                tabTwo:{
                    title:'My address',
                    subTitle:'Addresses',
                    table:{
                        th:{
                            one:'Person',
                            two:'Address Name',
                            three:'Phone',
                            four:'Delete'
                        }
                    },
                    card:{
                        firstName:'Firstname',
                        lastName:'Lastname',
                        addressName:'Address Name',
                        address:'Address',
                        phone:'Phone',
                        taxNo:'ID/Tax No',
                        postCode:'Post Code',
                        btnAdd:'Add',
                        btnUpdate:'Update',
                        btnClear:'Clear'
                    }
                },
                tabThree:{
                    title:'Change Password',
                    subTitle:'Change Password',
                    card:{
                        oldPsw:'Old Password',
                        newPsw:'New Password',
                        newPswConfirm:'Confirm New Password',
                        btnUpdate:'Update',
                        btnShow:'Show',
                        btnHide:'Hide'
                    }
                }
            }
            
        }
    },
    'TR': {
        notify:{
            error:{
                title:'HATA!',
                titleFail:'Başarısız!',
                text:{
                    default:'Lütfen bilgileri kontrol ediniz.',
                    fail:'İşlem başarısız.',
                    systemError:'Bir hata meydana geldi.',
                    checkout:{
                        discountCode:'İndirim kodu geçersiz!',
                        step1:'Lütfen notları kontrol ediniz!',
                        step2:'Lütfen Adres seçiniz!',
                        step3:'Lütfen Adres seçiniz!',
                    },
                    preview:{
                        isSelect:'Fotoğraf yüklemeli ya da seçmelisiniz!',
                        invite:'Girilen e-postaları kontrol ediniz.',
                        inviteLimit:'Davet gönderme hakkınız dolmuştur.',
                        upload:{
                            default:'Figür oluşturulamadı! Lütfen başka fotoğraf deneyiniz!',
                            selectLimit:'En fazla 2 fotoğraf seçebilirsiniz!',
                            byteLimit:'En fazla 8 MB fotoğraf yükleyebilirsiniz!'
                        }
                    },
                    registration:{ 
                        default:'Lütfen bilgilerinizi kontrol ediniz.',                       
                        email:{
                            default:'Lütfen e-postayı kontrol ediniz.',
                            notfound:'E-posta bulunamadı.'
                        },
                        register:{
                            already:'Bu e-posta zaten kayıtlıdır.'
                        }
                    },
                    profile:{
                        address:{
                            delete:'Bu adres bir sipariş ile kayıtlı olduğundan dolayı silinemez.',
                        },
                        password:{
                            minLenght:'Şifrenizi en az 6 karakter girmelisiniz.',
                            notConfirm:'Yeni Şifreler Uyuşmuyor!'
                        }
                    },
                    ticket:{
                        openFail:'Ticket açıldı fakat dosya yüklenemedi.'
                    }
                }
            },
            success:{
                title:'Başarılı!',
                text:{
                    default:'İşlem başarıyla gerçekleştirildi.',
                    thanks:'Teşekkür ederiz :)',
                    address:{
                        add:'Adres başarılı bir şekilde eklendi.'
                    },
                    checkout:{
                        discountCode:'İndirim kodu uygulandı.',
                        pay:'3D Ödeme Ekranına yönlendiriliyorsunuz...'
                    },
                    preview:{
                        invite:'Davet gönderildi.',
                        upload:{
                            default:'Figür oluşturuldu.',
                            loading:{
                                one:'Fotoğraf, bulut sunucumuza yükleniyor..',
                                two:'Şimdi fotoğraflar üzerinden analiz yapılıyor..',
                                three:'Derin öğrenme ile en doğru geometri ve doku oluşturuluyor..',
                                four:'Biraz bekletiyoruz ama bir de heykeltraşları düşünün..',
                                five:'Sonuca yaklaştık.. Hazır mısınız…?',
                                six:'Biliyoruz merakla bekliyorsunuz..',
                                seven:'Biz de bu çalışmayı büyük bir özenle size özel hazırlıyoruz..'
                            }
                        }
                    },
                    registration:{                       
                        email:{
                            reset:'Sıfırlama e-postası gönderildi.',
                        },
                        register:{
                            activation:'Aktivasyon linki e-postanıza gönderilmiştir.  E-postanın ulaşması biraz zaman alabilir.',
                            accept:'Anladım'
                        }
                    },
                    profile:{
                        update:'Bilgileriniz güncellendi.',
                    },
                }
            }
        },
        landing: {
            loading:'Yükleniyor...',
            navbar: {
                home: 'Anasayfa',
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
                empty:'Konsept Bulunamadı',
                list:{
                    title:'Örnek Konsept',
                    price:'$100',
                    buynow:'Satın Al',
                }
            },
            examples:{
                header:'Örnek Çalışmalarımız',
                empty:'Örnek Bulunamadı'
            },
            about:{
                header:'Hakkımızda',
                subheader:'Biz kimiz? Hikayemizi inceleyin!',
                descFirst:'2015 yılında başlayan çalışmalarımız ile yıllar içerisinde 3D Tarama, 3D Modelleme ve 3D Baskı alanında kendimizi çok iyi bir şekilde geliştirdik.',
                descSecond:'Bu süre içerisinde 1000’i aşkın kişinin 3D Taramasını yaparken ortalama 500 kişinin de renkli olarak 3D baskısını yaptık.',
                descThird:'Bu rakamların daha yüksek olması için önümüzde ki tek engel 3D Tarama yaparken, 3D Taraması yapılacak kişi ile buluşmak zorunda olmamızdı. Artık bu zorunluluğu da ortadan kaldırdık ve yıllar içerisinde yapılan 3D Tarama dataları ile eğitilen yapay zeka alt yapısını kullanarak, tam karşıdan net bir şekilde çekilmiş fotoğraf yollayan bir kişinin 3D Modelini oluşturmamız artık online ve neredeyse saniyeler içerisinde gerçekleşmektedir.',
                descFourth:'Yılların tecrübesi ve yapay zekanın gücü ile sizlere daha kaliteli ve hızlı hizmet sunmak için kendimizi yeniledik. Yenilenen altyapımızı test etmek, kendinizin ve sevdiklerinizin 3D Modelini oluşturmak hatta onlara güzel bir hediye vermek için sistemimizi hemen test edebilirsiniz.',
            },
            faq:{
                header:'Sıkça Sorulan Sorular',
                subheader:'Merak edilenleri inceleyin!',
                question:{
                    one:'Sitenizden sipariş vermek istiyorum. Nasıl sipariş vereceğim?',
                    two:'Siparişlerim ne kadar sürede elime ulaşır?',
                    three:'Fotoğraftan 3D Model oluşturmanız ne kadar süre almaktadır?',
                    four:'Baskı öncesi kontrol yapıyor musunuz?',
                    five:'Üretimden kaynaklı oluşabilecek bir hata durumunda ürün iadesi veya değişimi yapabilir miyim?',
                    six:'Siparişimi verdikten sonra değişiklik yapabilir miyim?',
                    seven:'Kargo ücreti ücrete dahil midir?',
                    eight:'Arkadaşımın 3D Figürünü yaptırabilir miyim?',
                    nine:'Daha önce vermiş olduğum siparişimin aynısından ürettirmek istiyorum. Ne yapmalıyım?',
                    ten:'İstediğim kadar fotoğraf yüklemesi yaparak 3D Model görüntülemesi sağlayabilir miyim?',
                    eleven:'Gözlüklü fotoğraf yüklenmiyor ama gözlük kişinin karakteristik özelliği, ne yapmalıyım?',
                    twelve:'Ürünlerin boyaması nasıl yapılmaktadır? 3D Yazıcıdan renkli olarak mı üretilmektedir?',
                    thirteen:'Siparişim kargodan hasarlı çıktı ne yapmalıyım?',
                },
                answer:{
                    one:'3DFigur olarak tüm sipariş süreçlerimizi online olarak sürdürmekteyiz. Öncelikle sistemimize kaydınızı yaptıktan sonra karşınıza çıkacak olan kontrol paneline fotoğraflarınızı yükleyin ve sonrasında dilediğiniz konseptin seçimini yapıp ödemenizi yapıp siparişinizi tamamlayın.',
                    two:'Siparişinizi verdikten sonra 3 farklı adımda ilerlemekteyiz. İlk adımda siparişinizin tasarımının istediğiniz konsepte göre hazırlanması ve sizin onayınıza sunulması. İkinci aşama ise onayladığınız tasarımın üretim süreci ve son olarakta siparişinizin teslimat süreci. Yüklemiş olduğumuz fotoğraf üretime uygun kalite de ve standartlarda ise yaklaşık 5 ile 7 iş günü içerisinde ürününüz kargoya verilecek şekilde hazır edilmektedir.',
                    three:'Eğer doğru fotoğraf yüklemesi yaptıysanız, 15 ile 45 saniye içerisinde 3D Modelinizi otomatik olarak görebileceksiniz.',
                    four:'Üretim öncesinde tasarım süreci yer almaktadır. Tasarım sürecinin başında ise ilk olarak bizlere yollamış olduğunuz fotoğrafın kalitesi, çözünürlüğü ve modellemeye uygunluğunu test etmekteyiz. Sonrasında ise konsepte uygun olarak modellemesini gerçekleştirip sizin onayınıza sunmaktayız. Tüm bu süreç ortalama 1 iş günü sürmektedir.',
                    five:'Sizlere tasarım onayında sunduğumuz üründen farklı bir ürün ile karşılaşmışsanız mutlaka değişimi yapılmaktadır. Değişim sürecinin hızlı ilerlemesini adına sorunu bizlere görselleri ile birlikte bildirmeniz önemlidir. Taleplerinizi <a href="mailto:order@3dfigur.com" class="text-primary font-semibold">order@3dfigur.com</a> adresine göndererek oluşturabilirsiniz.',
                    six:'Eğer süreç henüz tasarım onayında ise değişim talebinizi bildirdiğiniz takdirde 1 kereye mahsus olmak üzere değişiminiz onaylanacaktır.',
                    seven:'Kargo ücreti tarafımıza aittir, müşterilerimiz herhangi bir şekilde kargo masrafı ile karşılaşmayacaktır. Eğer kargo firmasından kaynaklı sorunlar olursa, bunun telafisi firmamız tarafından yapılacaktır.',
                    eight:'Evet tabiki! Özellikle böyle ihtiyaçlara çözüm bulmak için bu websitesini sizlere hazırladık. Arkadaşınıza özel bir gününde en anlamlı hediyeyi hazırlayabilirsiniz.',
                    nine:'Sisteme girişinizi yaptıktan sonra kontrol paneliniz üzerinden ‘’önceki siparişlerim’’ sekmesine gelip oradan siparişinizi tekrarlayabilirsiniz.',
                    ten:'Eğer üyeliğin kurumsal üyelik olarak tanımlı değilse, bir sipariş verene kadar sadece 10 adet fotoğrafın 3D Modellemesini gösterebilirsin. Dahası için ya sipariş verip fotoğraf yükleme hakkını sıfırlaman lazım ya da arkadaşlarını sitemize davet ederek ek model yükleme hakkı kazanman lazım.',
                    eleven:'Evet, gözlüklü bir fotoğraf yüklemesi yapılmamaktadır. Eğer gözlük olmazsa olmaz ise sipariş aşamasında gözlüklü olacağını belirtirsiniz. Bu durumda talep ettiğiniz gözlük modeline en yakın modelleme yapılarak üretim sonrasında model üzerine gözlük montajı yapılmaktadır. Bununda ek bir ücreti olmaktadır.',
                    twelve:'Tüm renkli üretimlerimiz 3D Systems adlı firmanın Projet660 Pro adlı 3D Yazıcısında yapılmaktadır. Bu 3D Yazıcı hammadde olarak kumtaşı kullanmaktadır ve tüm renklendirme işlemlerini üretim esnasında yapmaktadır. Hiç bir ürünümüz el ile boyama sürecine girmemektedir.',
                    thirteen:'Siparişlerinizi teslim alırken lütfen kurye ile birlikte kontrolünü sağlayınız. Gönderileriniz hasarlı olması durumunda kurye ile konuşarak teslim almadan iade edebilirsiniz. Bu durumda tekrar modelin tekrar üretimi yapılarak tarafınıza gönderimi sağlanacaktır.',
                },
            },
            pricing:{
                header:'Fiyatlandırma',
                subheader:'Size uygun olan paketi seçin!',
                kdv:'KDV',
                symbol:'₺',
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
            },
            docs:{
                membership:'Üyelik Sözleşmesi',
                personal:'Kişisel Veri Kanunu',
                orderReturn:'Sipariş İptal ve İade Şartları',
                sales:'Mesafeli Satış Sözleşmesi'
            }
        },
        footer: {
            copyright: 'Tüm hakları saklıdır.',
            company: 'IntelliFi'
        },
        forgot:{
            title:'Parola Sıfırlama',
            btn:'Parolayı Sıfırla',
            email:{
                subtitle:'Lütfen e-posta adresinizi girin, parolanızı sıfırlamak için kullanacağınız bağlantıyı içeren bir e-posta göndereceğiz.',
                placeholder:'E-posta',
            },
            reset:{
                subtitle:'Yeni parolanızı giriniz',
                placeholder:'Yeni Parola',
            },
        },
        login: {
            login: 'Giriş Yap ve 3D Figürünü Oluştur',
            register: 'Kayıt Ol ve 3D Figürünü Oluştur',
            user: 'E-posta',
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
            sex:{
                label:'Cinsiyet seç',
                man:'Erkek',
                woman:'Kadın'
            },
            tcno:'T.C. No',
            pass: 'Parola',
            confirm: 'Parola Onayı',
            terms: '<a href="/uyelik-sozlesmesi" target="_blank" class="underline hover:text-primary">Kullanım şartlarını </a> kabul ediyorum.',
            alert: {
                title: 'Hata Oluştu',
                message: 'İstenmeyen bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz.'
            }
        },
        dashboard:{
            startPopup:{
                title:'3D Figür',
                subTitle:'3D Figürünü Oluştur!',
                wizard:{
                    tabOne:'Fotoğraf Yükle',
                    tabTwo:'Konsept Seç',
                    tabThree:'Sipariş Süreci',
                    btnBack:'Önceki adım',
                    btnNext:'Sonraki adım',
                    btnFinish:'BAŞLA!',
                }
            },
            avatarMenu:{
                profile:'Profil',
                ticket:'Destek',
                logout:'Çıkış Yap',
            },
            sidebar:{
                newModel:'Yeni Model',
                orderHistory:'Figür Geçmişi',
                cart:'Sepetim',
                ticket:'Destek',
                profile:'Profil',
                footer:{
                    title:'Bilgilendirme',
                    subtitle:'Nasıl Çalışır?',
                }
            },
            main:{
                wizard:{
                    btnBack:'Geri dön',
                    btnNext:'Devam et',
                    btnFinish:'Sepete Git',
                    tabOne:{
                        title:'3D Figür Oluştur',
                        infoBoard:{
                            title:'Bilgilendirme Panosu',
                            descOne:"Modelde bazı eksiklikler olabilir, hiç <b class='text-primary'>endişe etmeyin!</b>",
                            descTwo:'Siz istediğiniz <b class="text-primary">konsepti</b> seçin. Geri kalan tüm düzenlemeler, alanında uzman tasarımcılarımız tarafından düzenlenecektir.',
                            descLimit:'Limitiniz dolduysa uygulamamızı paylaşarak fotoğraf yükleme hakkına sahip olabilirsiniz.',
                        },
                        gallery:{
                            title:'Fotoğraflarım',
                            subTitle:'Fotoğraf yükleme hakkınız:',
                            descOneFirst:'En iyi 3D Figürünü oluşturmak için, ',
                            descOneSecond:'en doğru fotoğrafı',
                            descOneThird:'yükle ve galerinden fotoğrafını seç!',
                            descTwo:'<b class="text-primary">Çift kişilik</b> konsept kullanabilmek için <b class="text-primary">2 fotoğraf</b> yükleyip seçmelisiniz. ',
                            invitePopup:{
                                title:'Arkadaşını Davet Et',
                                descOne:'Fotoğraf yükleme hakkınız bittiğinde <b>3 arkadaşınızın</b> e-posta adresine davet yollayarak <b>3 yükleme hakkı</b> daha kazanabilirsiniz.',
                                descTwo:'Ayrıca sipariş verdikten sonra tüm haklarınız <b>yenilenir.</b>',
                                inputOne:'1.E-posta',
                                inputTwo:'2.E-posta',
                                inputThree:'3.E-posta',
                                btnSubmit:'Davet et',
                            },
                            howToPopup:{
                                title:'Nasıl Yapılır?'
                            }
                        },
                    },
                    tabTwo:{
                        title:'Konsept Seç',
                        cardTitle:'Konseptler',
                        searchBar:'Konsept bul',
                        selectBox:'Konsept Seç',
                        conceptCard:{
                            addCart:'Sepete Ekle',
                            removeCart:'Sepetten Çıkar',
                            detail:'Detayı gör',
                            popup:{
                                title:'Konsept Detayları',
                                priceText:'Fiyat',
                            }
                        }
                    },
                },
            },
            order:{
                cardTitle:'Figür Geçmişi',
                searchBar:'Ara',
                card:{
                    detail:'Detayı gör',
                    popup:{
                        title:'Sipariş Bilgilendirmesi',
                        orderCode:'Sipariş No',
                        cargoCode:'Kargo Kodu',
                        notAvailable:'Mevcut değil.',
                        deliveryDate:'Teslim Tarihi :',
                        total:'Tutar :',
                    }
                }
            },
            checkout:{
                wizard:{
                    btnBack:'Geri dön',
                    btnNext:'İleri',
                    btnFinish:'Bitti!',
                    totalCard:{
                        netTotal:'Net Toplam',
                        discountTotal:'İndirim Tutarı',
                        tax:'KDV(%18)',
                        grandTotal:'Genel Toplam (TL)',
                        freeCargo:'Tüm siparişlerinizde kargo ücretsizdir.',
                        discountCode:'İndirim Kodu :',
                        btnActiveDiscount:'Kodu Aktifleştir',
                        orderNote:'Sipariş Notu :',
                        btnCreateModel:'Yeni Model Oluştur',
                    },
                    tabOne:{
                        title:'Sepet',
                        checkoutList:{
                            emptyCart:'Sepette ürün bulunmuyor.',
                            createModel:'Yeni Model Oluştur!',
                            removeItem:'KALDIR'
                        }
                    },
                    tabTwo:{
                        title:'Fatura Adresi',
                        addressSelect:'Adres Seç',
                        addressAdd:'Adres Ekle',
                        addressList:{
                            emptyList:'Kayıtlı adres bulunmuyor.',
                            createAddress:'Yeni Adres Ekle!'
                        },
                        newAddress:{
                            cardTitle:'Yeni Adres',
                            name:'Adres Adı',
                            firstName:'Ad',
                            lastName:'Soyad',
                            phone:'Telefon',
                            phoneNumber:'(555) 000 0000',
                            address:'Adres',
                            postCode:'Posta kodu',
                            taxOffice:'Vergi Dairesi',
                            taxNo:'TCKN/Vergi No',
                            city:'Şehir',
                            town:'İlçe/Semt',
                            btnSave:'Kaydet',
                        }
                    },
                    tabThree:{
                        title:'Kargo Adresi',
                    },
                    tabFour:{
                        title:'Ödeme',
                        cardPayment:{
                            title:'Kart Bilgileri',
                            cardNumber:'Kart Numarası',
                            month:'Ay',
                            year:'Yıl',
                            cvv:'CVV',
                            cardOwner:'Kart Sahibi',
                            fullName:'AD SOYAD',
                            btnPayment:'Ödeme Yap'
                        }
                    },
                }
            },
            ticket:{
                sidebar:{
                    newTicket:{
                      btnNew:'Yeni Talep',
                      prompt:{
                          title:'Yeni Talep',
                          accept:'Gönder',
                          cancel:'İptal',
                          orderCode:'İlgili Sipariş Kodu',
                          ticketType:'Destek Alanı',
                          subject:'Konu',
                         /* message:'İleti'*/
                      }  
                    }
                },
                ticketType:{
                    title:'Departmanlar',
                    sales:'SATIŞ',
                    technic:'TEKNİK DESTEK'
                },
                ticketStatus:{
                     title:'Durum',
                     open:'AÇIK',
                     inProgress:'İŞLENİYOR',
                     close:'KAPALI'
                },
                ticketDetail:{
                    subject:'Konu',
                    reply:'Yanıtla',
                    orderCode:'İlgili Sipariş Kodu :',
                    replyPrompt:{
                        title:'Mesaj Yaz',
                        accept:'Gönder',
                        cancel:'İptal'
                    }
                }
            },
            profile:{
                tabOne:{
                    title:'Profilim',
                    subTitle:'Profil Bilgileri',
                    card:{
                        firstName:'Ad',
                        lastName:'Soyad',
                        email:'E-posta',
                        idNo:'T.C No',
                        birthDay:'Doğum Tarihi',
                        dayMonthYear:'gg.aa.yyyy',
                        sex:{
                            label:'Cinsiyet',
                            man:'Erkek',
                            woman:'Kadın'
                        },
                        btnUpdate:'Güncelle',
                        btnEdit:'Düzenle'
                    }
                },
                tabTwo:{
                    title:'Adreslerim',
                    subTitle:'Adresler',
                    table:{
                        th:{
                            one:'Kişi',
                            two:'Adres Adı',
                            three:'Telefon',
                            four:'Sil'
                        }
                    },
                    card:{
                        firstName:'Ad',
                        lastName:'Soyad',
                        addressName:'Adres Adı',
                        address:'Adres',
                        phone:'Telefon',
                        taxNo:'TCKN/Vergi No',
                        postCode:'Posta kodu',
                        btnAdd:'Ekle',
                        btnUpdate:'Güncelle',
                        btnClear:'Temizle'
                    }
                },
                tabThree:{
                    title:'Şifre Değiştir',
                    subTitle:'Şifre Değiştir',
                    card:{
                        oldPsw:'Eski Şifre',
                        newPsw:'Yeni Şifre',
                        newPswConfirm:'Tekrar Yeni Şifre',
                        btnUpdate:'Güncelle',
                        btnShow:'Göster',
                        btnHide:'Gizle'
                    }
                }
            }
            
        }
    }
};

const i18n = new VueI18n({
    locale: 'EN', // set locale
    fallbackLocale: 'TR', // set fallback locale
    messages, // set locale messages
});

export default i18n;