AOS.init({
    duration: 1000,
});

//배너
const banner_list = new Swiper(".banner_list", {
    loop: true, //반복
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar", // 버튼 종류 설정..(bullet)        
    },
});

//메뉴
const menu_list = new Swiper(".menu_list", {
    slidesPerView: 1.5,
    breakpoints: {
        750: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 4,
        },
    },
    centeredSlides: true, //기본값 false
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }

});