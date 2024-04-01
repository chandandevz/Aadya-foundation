/*const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  //Navigation arrows
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});  
*/

const burgerMenu = document.getElementById("mobile-menu-lines");

let menuToggle = document.querySelector(".menu-list")


burgerMenu.addEventListener("click", ()=>{
    menuToggle.classList.toggle("mobile-menu")
})

//our gallery section code
/*const galleryImages = document.querySelectorAll("imgs");

const openBtns = document.querySelectorAll("show-pic");

galleryImages.forEach((item)=>{
    item.addEventListener("click", ()=>{
        openBtns.forEach((openBtn)=>{
            openBtn.classList.toggle("open-btn")
        })
    })
})*/

