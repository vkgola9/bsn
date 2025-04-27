/* theme content changed work--- Vinay Gola UI Developer 21-03-2025  vkgola9 */
$(document).ready(function () {
  $('a[href="#"]').click(function (e) {
    e.preventDefault();
  });
  //   $(".caro1").owlCarousel({
  //     loop: true,
  //     autoplay: true,
  //     autoTimeOut: 1000,
  //     items: 1,
  //     nav: false,
  //     dots: false,
  //     // lazyLoad: true,
  //     autoplayHoverPause: false,
  //     // animateOut: "slideInDown",
  //     // animateIn: "fadeOut",
  //     // onInitialize: resetProgressBar,
  //     // onInitialized: resetProgressBar,
  //     // onTranslate: resetProgressBar,
  //     // onTranslated: startProgressBar,
  //     touchDrag: true,
  //     mouseDrag: true,
  //     navText: [
  //       "<i class='fa-solid fa-chevron-left'></i>",
  //       "<i class='fa-solid fa-chevron-right'></i>",
  //     ],
  //   });
  //   function startProgressBar() {
  //     // apply keyframe animation
  //     $(".slide-progress").css({
  //       width: "100%",
  //       transition: "width 5000ms"
  //     });
  //   }
  //   function resetProgressBar() {
  //     $(".slide-progress").css({
  //       width: 0,
  //       transition: "width 0s"
  //     });
  //   }


  // swiper slider
  var thumb = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 8,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 2
      },
      340: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 6
      },
      1024: {
        slidesPerView: 7
      }
    }
  })
  var swiper2 = new Swiper('.mySwiper2', {
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2000
    },
    effect: 'fade',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + '</span>'
    //   }
    // },
    thumbs: {
      swiper: thumb
    }
  })
});
(function ($) {

  "use strict";

  var fullHeight = function () {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });

  };
  // fullHeight();  

  $(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });



})(jQuery);