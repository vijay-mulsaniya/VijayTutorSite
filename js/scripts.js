var toggleMenuButton = document.getElementById("toggleMenuButton");
var menu = document.querySelectorAll(".menu, .active")[0];
toggleMenuButton.addEventListener("click", function () {
  menu.classList.toggle("activemenu");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const containerYoutube = document.querySelector(".boxwrapper");
let isActivated = false;
const speed = 200;
const counterNum = document.querySelectorAll(".youtubedatabox > h2");
window.addEventListener("scroll", () => {
  if (
    scrollY + window.innerHeight - 200 >
      containerYoutube.offsetTop - containerYoutube.offsetHeight &&
    isActivated === false
  ) {
    counterNum.forEach((curentElem) => {
      const upateNumber = () => {
        const initialNumber = parseInt(curentElem.innerText);
        const trargetNumber = parseInt(curentElem.dataset.number);
        const incrementNubmer = Math.ceil(trargetNumber / speed);
        if (initialNumber < trargetNumber) {
          curentElem.innerText = `${initialNumber + incrementNubmer}+`;
          setTimeout(upateNumber, 10);
        }
      };
      upateNumber();
    });
    isActivated = true;
  } else if (
    scrollY + window.innerHeight - 1000 <
      containerYoutube.offsetTop - containerYoutube.offsetHeight &&
    isActivated === true
  ) {
    counterNum.forEach((counter) => {
      counter.innerText = 0;
    });
    isActivated = false;
  }
});
