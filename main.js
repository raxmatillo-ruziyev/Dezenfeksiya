const modal = document.querySelector(".modal")
const hamburger =document.querySelector("#hamburger")
const close = document.querySelector(".close")

hamburger.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.style.display = "block"
})
close.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.style.display = "none"
})



const acc = document.querySelector(".accordion");
const acc2 = document.querySelector(".accordion2");
const acc3 = document.querySelector(".accordion3");
const panel = document.querySelector(".faq__text");
const panel2 = document.querySelector(".faq__text2");
const panel3 = document.querySelector(".faq__text3");
const closeAcc = document.querySelector(".closeAcc");
const closeAcc2 = document.querySelector(".closeAcc2");
const closeAcc3 = document.querySelector(".closeAcc3");


acc.addEventListener('click',(e)=>{
    e.preventDefault();
    panel.style.display = 'block';
    acc.style.display = "none";
    closeAcc.style.display ="block";
})
closeAcc.addEventListener('click',(e)=>{
    e.preventDefault();
    panel.style.display = 'none';
    closeAcc.style.display ="none";
    acc.style.display = 'block';


})
acc2.addEventListener('click',(e)=>{
    e.preventDefault();
    panel2.style.display = 'block';
    acc2.style.display = "none";
    closeAcc2.style.display ="block";
})
closeAcc2.addEventListener('click',(e)=>{
    e.preventDefault();
    panel2.style.display = 'none';
    closeAcc2.style.display ="none";
    acc2.style.display = 'block';


})

acc3.addEventListener('click',(e)=>{
    e.preventDefault();
    panel3.style.display = 'block';
    acc3.style.display = "none";
    closeAcc3.style.display ="block";
})
closeAcc3.addEventListener('click',(e)=>{
    e.preventDefault();
    panel3.style.display = 'none';
    closeAcc3.style.display ="none";
    acc3.style.display = 'block';


})




const language = {
    eng: {
        service: "Service",
        serviceNext: "Service",
        about: "About",
        faq: "Faq",
        contact: "Contact",
        kirish: "Login",
        hero__text: "Our company has been providing our services for many years. Our customers are satisfied with us.",
        hero__title: "Disinfection Service",
        boglanish: "Contact",
        service__title: "Our Services",
        service__text: "Our company has been providing our services for many years. Our customers are satisfied with us.", 
        service__textTwo: "Our company has been providing our services for many years. Our customers are satisfied with us.",
        service__textThree: "Our company has been providing our services for many years. Our customers are satisfied with us.",
        serviceOne: "Fast service delivery",
        serviceTwo: "Qualified specialists",
        serviceThree: "Convenient time for you",
        sectionTitle: "Consider the muzzle and harmful pollution gone now !!!",
        sectionText: "Our company has been providing our services for many years. Our customers are satisfied with us.",
        sectionLink: "Contact",
        oneTitle: "These lessons will help you achieve a high level",
        twoTitle: "Basic Concepts",
        threeTitle: "Theoretical Knowledge",
        oneLink: "16 lessons",
        twoLink: "23 lessons",
        threeLink: "16 lessons",
        oneText: "Intermediate",
        twoText: "Theoretical and Practical Knowledge",
        threeText: "Advanced",
        fiveText: "Practical Knowledge",
        avtoTitle: "For many years, those who have trusted our company",
        avtoLink: "Contact",
        faqOne:"What will I get from the course?",
        faqTwo: "If you can't attend the class just like a loaf of bread, a recording of the zoom session will be provided to your group after the class.",
        faqThree: "What will I get from the course?",
        faqFour: "If you can't attend the class just like a loaf of bread, a recording of the zoom session will be provided to your group after the class.",
        faqFive: "What will I get from the course?",
        faqSix: "If you can't attend the class just like a loaf of bread, a recording of the zoom session will be provided to your group after the class.",
        contactOne: "Leave your feedback",
        contactTwo: "Privacy policy",
        contactThree: "Writing",
        contactFour: "Trust us, many years have trusted our company",
        footerTwo:"Facebook ",
        footerThree: "Instagram ",
        footerFour:"Telegram",
        footerOne: "4 Sergeli district, Mo'ljal, Yashnabad district, Tashkent city"

    },
    ru: {
        service: "Сервис",
        serviceNext: "Сервис",
        about: "О нас",
        faq: "Фaқ",
        contact: "Контакты",
        kirish: "Вход",
        hero__text: "Наша компания уже много лет предоставляет наши услуги. Наши клиенты довольны нами.",
        hero__title: "Услуга дезинфекции",
        boglanish: "Контакты",
        service__title: "Наши Услуги",
        service__text: "Наша компания уже много лет предоставляет наши услуги. Наши клиенты довольны нами.",
        service__textTwo: "Наша компания уже много лет предоставляет наши услуги. Наши клиенты довольны нами.",
        service__textThree  : "Наша компания уже много лет предоставляет наши услуги. Наши клиенты довольны нами.",
        serviceOne: "Быстрая доставка услуг",
        serviceTwo: "Квалифицированные специалисты",
        serviceThree: "Удобное время для вас",
        sectionTitle: "Представьте, что маска загрязнение ушли сейчас !!!",
        sectionText: "Наша компания уже много лет предоставляет наши услуги. Наши клиенты довольны нами.",
        sectionLink: "Контакт",
        oneTitle: "Эти уроки помогут вам достичь высокого уровня",
        twoTitle: "Основные понятия",
        threeTitle: "Теоретические знания",
        oneLink: "16 уроков",
        twoLink: "23 уроков",
        threeLink: "16 уроков",
        oneText: "Средний",
        twoText: "Теоретические и Практические знания",
        threeText: "Высокий",
        fiveText: "Практические знания",
        avtoTitle: "Тем, кто доверился нашей компании на протяжении многих лет",
        avtoLink: "Контакт",
        faqOne:"Что я получу от курса?",
        faqTwo: "Если вы не можете присутствовать на уроке, как на хлебе, запись зум-сессии будет предоставлена вашей группе после урока.",
        faqThree: "Что я получу от курса?",
        faqFour: "Если вы не можете присутствовать на уроке, как на хлебе, запись зум-сессии будет предоставлена вашей группе после урока.",
        faqFive: "Что я получу от курса?",
        faqSix: "Если вы не можете присутствовать на уроке, как на хлебе, запись зум-сессии будет предоставлена вашей группе после урока.",
        contactOne: "Оставьте свой отзыв",
        contactTwo: "Kонфиденциальности",
        contactThree: "Письмо",
        contactFour: "Доверьтесь нам, многие годы доверяли нашей компании",
        footerTwo: "Фейсбук",
        footerThree: "Инстаграм",
        footerFour: "Телеграм",
        footerOne: "Тошкент шаҳри Ёшнабод тумани Мўлжал Сергели-4 бекат"


    },
    uz: {
        service: "Xizmatlar",
        serviceNext: "Xizmatlar",
        about: "Biz haqimizda",
        faq: "Faq",
        contact: "Kontakt",
        kirish: "Kirish",
        hero__text: "Bizning kompaniyamiz ko'p yillardan beri xizmatlarimizni taklif qilmoqda. Mijozlarimiz bizdan mamnun.",
        hero__title: "Dizinfeksiya xizmati",
        boglanish: "Bog'lanish",
        service__title: "Bizning Xizmatlarimiz",
        service__text: "Bizning kompaniyamiz ko'p yillardan beri xizmatlarimizni taklif qilmoqda. Mijozlarimiz bizdan mamnunlar.",
        service__textTwo: "Bizning kompaniyamiz ko'p yillardan beri xizmatlarimizni taklif qilmoqda. Mijozlarimiz bizdan mamnunlar.",
        service__textThree: "Bizning kompaniyamiz ko'p yillardan beri xizmatlarimizni taklif qilmoqda. Mijozlarimiz bizdan mamnunlar.",
        serviceOne: "Tez xizmat ko'rsatish",
        serviceTwo: "Malakali mutaxassislar",
        serviceThree: "Sizga qulay vaqt",
        sectionTitle: "Hozir o'ngacha maktub  tashlangan deb o'ylang !!!",
        sectionText: "Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
        sectionLink: "Bog'lanish",
        oneTitle: "Bu darsliklari sizning yuqori daraja olishingizga yordam beradi",
        twoTitle: "Boshlang’ich tushunchalar",
        threeTitle: "Nazariy bilimlar",
        oneLink: "16 dars",
        twoLink: "23 dars",
        threeLink: "16 dars",
        oneText: "O'rta",
        twoText: "Nazariy va Amaliy bilimlar",
        threeText: "Yuqori" ,
        fiveText: "Amaliy bilimlar",
        avtoTitle: "Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar talaygina",
        avtoLink: "Bog'lanish",
        faqOne:"Kursdan nima topaman",
        faqTwo: "Bu bir nonsti kaypiday kapy darsga qatnasha olmasangiz, darsdan so‘ng guruhingizga zoom zapisi tashlab beriladi",
        faqThree: "Kursdan nima topaman",
        faqFour: "Bu bir nonsti kaypiday kapy darsga qatnasha olmasangiz, darsdan so‘ng guruhingizga zoom zapisi tashlab beriladi",
        faqFive: "Kursdan nima topaman",
        faqSix: "Bu bir nonsti kaypiday kapy darsga qatnasha olmasangiz, darsdan so‘ng guruhingizga zoom zapisi tashlab beriladi",
        contactOne: "Malumotingizni qoldiring",
        contactTwo: "Maxfiylik siyosati",
        contactThree: "Yozilish",
        contactFour: "Bizga ko'p yillardan beri  kompaniyamizga ishonch bildirganlar talaygina",
        footerOne: "Toshkent shahri Yashnabod tumani Mo’ljal Sergeli-4 bekat",
        footerTwo:"Facebook ",
        footerThree: "Instagram ",
        footerFour:"Telegram"

    }
};

function changeLanguage() {
    const selectedLang = document.getElementById("changelang").value;
    localStorage.setItem('lng', selectedLang);
    updateContent(selectedLang);
}

function updateContent(lang) {
    // Access the translation based on the selected language
    document.getElementById('service').textContent = language[lang].service;
    document.getElementById('serviceNext').textContent = language[lang].service;
    document.getElementById('about').textContent = language[lang].about;
    document.getElementById('faq').textContent = language[lang].faq;
    document.getElementById('contact').textContent = language[lang].contact;
    document.getElementById('kirish').textContent = language[lang].kirish;
    document.getElementById('hero__text').textContent = language[lang].hero__text;
    document.getElementById('hero__title').textContent = language[lang].hero__title;
    document.getElementById('boglanish').textContent = language[lang].boglanish;
    document.getElementById('service__title').textContent = language[lang].service__title;
    document.getElementById('service__text').textContent = language[lang].service__text;
    document.getElementById('service__textTwo').textContent = language[lang].service__textTwo;
    document.getElementById('service__textThree').textContent = language[lang].service__textThree;
    document.getElementById('serviceOne').textContent = language[lang].serviceOne;
    document.getElementById('serviceTwo').textContent = language[lang].serviceTwo;
    document.getElementById('serviceThree').textContent = language[lang].serviceThree;
    document.getElementById('sectionTitle').textContent = language[lang].sectionTitle;
    document.getElementById('sectionText').textContent = language[lang].sectionText;
    document.getElementById('sectionLink').textContent = language[lang].sectionLink;
    document.getElementById('oneTitle').textContent = language[lang].oneTitle;
    document.getElementById('twoTitle').textContent = language[lang].twoTitle;
    document.getElementById('threeTitle').textContent = language[lang].threeTitle;
    document.getElementById('oneLink').textContent = language[lang].oneLink;
    document.getElementById('twoLink').textContent = language[lang].twoLink;
    document.getElementById('threeLink').textContent = language[lang].threeLink;
    document.getElementById('oneText').textContent = language[lang].oneText;
    document.getElementById('twoText').textContent = language[lang].twoText;
    document.getElementById('threeText').textContent = language[lang].threeText;
    document.getElementById('fiveText').textContent = language[lang].fiveText;
    document.getElementById('avtoTitle').textContent = language[lang].avtoTitle;
    document.getElementById('avtoLink').textContent = language[lang].avtoLink;
    document.getElementById('faqOne').textContent = language[lang].faqOne;
    document.getElementById('faqTwo').textContent = language[lang].faqTwo;
    document.getElementById('faqThree').textContent = language[lang].faqThree;
    document.getElementById('faqFour').textContent = language[lang].faqFour;
    document.getElementById('faqFive').textContent = language[lang].faqFive;
    document.getElementById('faqSix').textContent = language[lang].faqSix;
    document.getElementById('contactOne').textContent = language[lang].contactOne;
    document.getElementById('contactTwo').textContent = language[lang].contactTwo;
    document.getElementById('contactThree').textContent = language[lang].contactThree;
    document.getElementById('contactFour').textContent = language[lang].contactFour;
    document.getElementById('footerOne').textContent = language[lang].footerOne;
    document.getElementById('footerTwo').textContent = language[lang].footerTwo;
    document.getElementById('footerThree').textContent = language[lang].footerThree;
    document.getElementById('footerFour').textContent = language[lang].footerFour;
}

const selectValue = localStorage.getItem('lng');
if (selectValue) {
    document.getElementById('changelang').value = selectValue;
    updateContent(selectValue);
}






function sendTelegramMessage(message) {
    const token = '7027326228:AAHE5ePNUpvgI5uSE6sL1Y4a61Xcw9GzC6Y';
    const chatId = '6771255129';
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

const contactThree = document.getElementById('contactThree');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const privacyCheckbox = document.getElementById('privacy');

contactThree.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    
    if (!privacyCheckbox.checked) {
        alert('Maxfiylik shartini qabul qiling!');
        return;
    }
    
    if (name === '' || phone === '') {
        alert('Iltimos, ismingiz va telefon raqamingizni to\'ldiring!');
        return;
    }
    
    const message = `Ism: ${name}\nTelefon: ${phone}`;
    sendTelegramMessage(message);
    alert('Xabaringiz muvaffaqiyatli yuborildi!');
});
