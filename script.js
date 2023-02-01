var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 50,
  // mousewheel: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },// 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // pagination:{
  //   el:".swiper-sport"
    
  // }
});



const overlay = document.querySelector(".menu");
const menu = document.querySelector(".toggle")
var line1 = document.getElementById("line1")
var line2 = document.getElementById("line2")
var line3 = document.getElementById("line3")
var flag = 0
menu.addEventListener("click",function(){
    if(flag === 0){
        overlay.style.display = "inline";
        overlay.style.transition = " all 1s";
        line2.style.opacity = 0
        line1.style.transform = 'rotate(45deg)'
        line3.style.transform = 'rotate(-45deg)'
        flag = 1
    }else{
        overlay.style.display = "none";
        overlay.style.transition = " all 1s";
        line2.style.opacity = 1
        line1.style.transform = 'rotate(0deg)'
        line3.style.transform = 'rotate(0deg)'
        flag = 0
    }
})