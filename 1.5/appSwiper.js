window.onload = () => {
  if (window.matchMedia("(max-width: 767px)").matches) {
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
};

let dropDown = document.querySelector(".dropdown");
let dropdownIcon = document.querySelector(".dropdown__icon");
let dropdownText = document.querySelector(".dropdown__text");
let swiperWrapper = document.querySelector(".swiper-wrapper");
dropDown.addEventListener("click", function () {
  dropdownIcon.classList.toggle("dropwdown__icon-active");
  swiperWrapper.classList.toggle("swiper-wrapper-active");

  if (dropdownText.innerHTML == "Показать все") {
    dropdownText.innerHTML = "Скрыть";
  } else {
    dropdownText.innerHTML = "Показать все";
  }
});
