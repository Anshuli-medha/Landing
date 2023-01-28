const mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    mousewheel: {
        invert: true
      },
    breakpoints: {
        1200:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    },
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  });