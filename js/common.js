$(function () {
    //헤더 싱글드롭다운
    $('.depth-1').mouseenter(function () {
        $(this).next().stop().slideDown();
    });
    $('.gnb > li').mouseleave(function () {
        $('.depth-2').stop().slideUp();
    });


    //메인비주얼
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        centeredSlides: true,
        /* autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        }, */
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
    //Best Products 탭메뉴
    $('.tabs>.tab_item').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        let tabCon = $(this).index();
        $('.tab_content').eq(tabCon).addClass('active');
        $('.tab_content').eq(tabCon).siblings().removeClass('active');

    });//click end
    //MD's pick 그리드 스와이퍼
    var swiper = new Swiper(".grid_swiper", {
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        spaceBetween: 16,
        navigation: {
            nextEl: ".grid_swiper .swiper-button-next",
            prevEl: ".grid_swiper .swiper-button-prev",
        },
        pagination: {
            el: ".grid_swiper .swiper-pagination",
            clickable: true,
        },
        loop: true,
    });
    //top버튼
    $('.top_btn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000, 'easeInOutCubic');
    });

});