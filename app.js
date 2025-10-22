document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  // Swiper initialization
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});

let elemContainer = document.querySelector("#elems-container");
let imageContainer = document.querySelector(".fixed-image");
elemContainer.addEventListener("mouseenter", function () {
  imageContainer.style.display = "block";
});
elemContainer.addEventListener("mouseleave", function () {
  imageContainer.style.display = "none";
});

let elems = document.querySelectorAll("#elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    let image = e.getAttribute("data-image");
    imageContainer.style.backgroundImage = `url(${image})`;
  });
});

// Black-box

let image = document.getElementById("black-box-img");
let menuItems = document.querySelectorAll("#text");
menuItems.forEach(function (e) {
  e.addEventListener("click", function () {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    e.classList.add("active");
    let imageLoc = e.getAttribute("data-image");
    image.src = `${imageLoc}`;
  });
});

if (menuItems.length > 0) {
  menuItems[0].classList.add("active");
}

// Loader animation
const loader = document.getElementById("loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 4000);

const menu = document.querySelector("nav h3");
const fullscr = document.querySelector("#full-scr");
const navimg = document.querySelector("nav img");
const icon = document.querySelector("nav h3 i");
let flag = 0;
menu.addEventListener("click", function () {
  if (flag === 0) {
    fullscr.style.top = 0;
    navimg.style.opacity = 0;
    icon.classList.remove("ri-menu-line");
    icon.classList.add("ri-close-line");
    flag = 1;
  } else {
    fullscr.style.top = "-100%";
    navimg.style.opacity = 1;
    icon.classList.add("ri-menu-line");
    icon.classList.remove("ri-close-line");
    flag = 0;
  }
});
