const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const sectionText = document.getElementById("sectionText");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
});
window.addEventListener("scroll", ()=> {
    const imageTop = sectionText.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
 // Delay the appearance of the image


    if (imageTop < windowHeight - elementVisible) {
        sectionText.classList.add('animate__animated' , 'animate__shakeX')
    }
   else if (imageTop > windowHeight - elementVisible) {
       sectionText.classList.remove('animate__animated' , 'animate__shakeX')
   }
});

