window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;

  if (scroll > 400) {
    let nav = document.querySelector(".header__bottom");
    nav.classList.add("fixed");
  } else {
    let nav = document.querySelector(".header__bottom");
    nav.classList.remove("fixed");
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  effect: "fade",
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



$(document).ready(function () {
  $(".all4").owlCarousel({
    loop: true,
    navigation: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    items: 6,
    mousewheel: false,
    dots: true,
    slideBy: 1,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      200: {
        items: 1,
        nav: false,
      },
      300: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      700: {
        items: 1,
        nav: false,
      },
      900: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        loop: true,
      },
    },
  });
});
$(".section4__btnright").click(function () {
  var owl = $(".all4");
  owl.trigger("next.owl.carousel");
});
$(".section4__btnleft").click(function () {
  var owl = $(".all4");
  owl.trigger("prev.owl.carousel");
});

$(document).ready(function () {
  $(".all5").owlCarousel({
    loop: true,
    navigation: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    mousewheel: false,
    dots: true,
    slideBy: 1,
    smartSpeed:900,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      200: {
        items: 1,
        nav: false,
      },
      300: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      700: {
        items: 1,
        nav: false,
      },
      900: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        loop: true,
      },
    },
  });
});
$(".section4__btnright").click(function () {
  var owl = $(".all5");
  owl.trigger("next.owl.carousel");
});
$(".section4__btnleft").click(function () {
  var owl = $(".all5");
  owl.trigger("prev.owl.carousel");
});




$(".header-links li").has("ul").addClass("header_bottom_icon");

$(".gototop").on("click", function () {
  scroll({
    top: 0,
  });
});
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll >= 1000) {
    $(".gototop").addClass("back_to_top");
  } else {
    $(".gototop").removeClass("back_to_top");
  }
});


let headTop = document.getElementById('header-top');

document.getElementById("header-button").addEventListener("click", function(event){
  event.preventDefault();
  headTop.classList.toggle("active");

});


jQuery(document).ready(function($) {
  $("#menu").mmenu({
      "extensions": ["effect-menu-zoom", "effect-panels-zoom", "pagedim-black", "theme-dark"],
      "offCanvas": {
          "position": "right"
      },
      "counters": true,
      "iconPanels": true,
      "navbars": [{
          "position": "top"
      }]
  });
});



$(document).ready(function() {
  $('.all2').owlCarousel({
      loop: false,
      navigation: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      items: 3,
      mousewheel: false,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1
          },
          400: {
              items: 1
          },

          700: {
              items: 1
          },
          900: {
              items: 2
          },
          1260: {
              items: 2

          },
          1300: {
            items: 3

        }
      }

  });

});

$(".section4__btnright").click(function () {
  var owl = $(".all2");
  owl.trigger("next.owl.carousel");
});
$(".section4__btnleft").click(function () {
  var owl = $(".all2");
  owl.trigger("prev.owl.carousel");
});



$(document).ready(function () {
  $(".all1").owlCarousel({
    loop: true,
    navigation: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    mousewheel: false,
    dots: true,
    slideBy: 1,
    smartSpeed:900,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      200: {
        items: 1,
        nav: false,
      },
      300: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      700: {
        items: 1,
        nav: false,
      },
      900: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        loop: true,
      },
    },
  });
});