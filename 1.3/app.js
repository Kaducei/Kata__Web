let phrasWrapper = document.querySelector(".section-main__wrapper");
let buttonPhrasSize = document.querySelector(".section-main__button");
let buttonPhrasOff = document.querySelector(".section-main__wrapper-active");
let buttonFull = document.querySelector(".section-main__button");
let buttonImage = document.querySelector(".section-main__button_image");

buttonPhrasSize.addEventListener("click", function () {
  phrasWrapper.classList.toggle("section-main__wrapper-active");
});

buttonFull.addEventListener("click", function () {
  buttonImage.classList.toggle("section-main__button_image-active");
});
