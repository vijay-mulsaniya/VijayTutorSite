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