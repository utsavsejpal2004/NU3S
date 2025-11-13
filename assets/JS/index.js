window.onscroll = () => {
  document
    .querySelector(".header-b")
    .classList.toggle("scrolled", window.scrollY > 30);
};

// Get all parent menu links that have submenus
const parentMenuLinks = document.querySelectorAll(
  ".navbar ul.navbar-nav > li.menu-item-has-children > a"
);

$("button.close-btn").click(function () {
  $(".navbar-collapse").removeClass("collapsing show");
});
$(".navbar ul.navbar-nav>li.menu-item-has-children > a").on(
  "click",
  function () {
    if (!$(this).parent().hasClass("sub-open")) {
      $(".navbar ul.navbar-nav>li.menu-item-has-children > a")
        .parent()
        .removeClass("sub-open");
    }
    $(this).parent().toggleClass("sub-open");
  }
);
$(
  ".navbar ul.navbar-nav>li.menu-item-has-children > a, .navbar ul.navbar-nav>li>ul>li.menu-item-has-children > a"
).click(function (e) {
  e.stopPropagation();
});
const swiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    375: { slidesPerView: 1 },
    575: { slidesPerView: 1.5 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

const scrollTrack = document.getElementById("scrollTrack");
scrollTrack.innerHTML += scrollTrack.innerHTML;
