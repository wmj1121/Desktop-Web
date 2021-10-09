$(function(){

    // 서브메뉴 스크립트 영역
    $('.gnb > li').hover(function() {
        $('.sub-bg, .sub-menu-title').stop().slideDown();
        $(this).find('.sub-menu').stop().slideDown();
      }, function(){
        $('.sub-bg, .sub-menu-title').stop().slideUp();
        $(this).find('.sub-menu').stop().slideUp();
    });

    $('.gnb>li:nth-child(4)').hover(function(){
        $('.sub-bg').hide();
    });

    // 메인 슬라이드 스크립트 영역
    var Mainswiper = new Swiper(".main-slider", {
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".m-pager",
          clickable: true,
        },

        loop:true,
      });

      // 베스트 슬라이드 스크립트 영역
      var Bestswiper = new Swiper(".best-slider", {
        navigation: {
          nextEl: ".b-next",
          prevEl: ".b-prev",
        },

        loop:true,
      });

      // 리뷰 슬라이드 스크립트 영역
      var Reviewswiper = new Swiper(".review-slider", {
        slidesPerView: 4,
        spaceBetween: 24,
        pagination: {
          el: ".r-pager",
          clickable: true,
        },
        navigation: {
          nextEl: ".r-next",
          prevEl: ".r-prev",
        },

        loop:true,
      });
    
});