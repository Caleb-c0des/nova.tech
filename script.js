new Swiper('.image-box-flex', {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1 // Fixed typo here
    },
    768: {
      slidesPerView: 1 // Fixed typo here
    },
    1024: {
      slidesPerView: 2 // Fixed typo here
    },
  }
});
const btn = document.getElementById("down");
btn.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});

const cta = document.getElementById("cta");
const text = document.getElementById("text");

let showing = false;

cta.addEventListener("click", () => {

  if (showing === false) {
    text.innerText = "This is Nova Tech made by Code with Caleb";
    showing = true;
  } 
  
  else {
    text.innerText = "";
    showing = false;
  }

});
