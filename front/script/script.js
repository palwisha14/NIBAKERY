// =====================
//  Ingredients slider
// =====================
$("#Ingredients").owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  nav: false ,
  dots: false,
  slideBy:true,
  autoplay: true,
});

// =====================
//  company slider
// =====================
$("#companylogo").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
// =====================
//  main slider
// =====================
$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  responsive: true,
  responsive: {
    0: {
      nav: false,
    },
    600: {
      nav: false,
    },
    1000: {
      nav: false,
    },
  },
});

// =====================
//  navbar
// =====================
$(".side_bar").click(function () {
  $(".nav").slideToggle();
});
