var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
function darkmode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
document.getElementById('button1').onclick = function(){
   alert('Hey Alerta!');
}
