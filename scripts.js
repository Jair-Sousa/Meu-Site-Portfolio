let header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = '#191919'
        }else{
            header.style.background = 'transparent'
        }
    }
)


// menu 

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuWrapper = document.querySelector(".menuamburguer");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuWrapper.classList.toggle("active");
});
