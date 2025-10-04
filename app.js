document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
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
