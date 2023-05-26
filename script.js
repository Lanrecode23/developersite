const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const sectionText = document.getElementById("featureText");
const awesomeText = document.getElementById("awesomeText");
const responseElements = document.getElementsByClassName("response");
const screenElements = document.getElementsByClassName("screen");
const blogText = document.getElementsByClassName("blogText");
const blogImage = document.getElementsByClassName("blogImage");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
});
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    const imageTop = sectionText.getBoundingClientRect().top;
    const awesomeTop = awesomeText.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    const elemVisible = 50;
    const elemeVisible = 250;
    
    if (imageTop < windowHeight - elementVisible) {
        sectionText.classList.add('animate__animated', 'animate__shakeX');
    } else {
        sectionText.classList.remove('animate__animated', 'animate__shakeX');
    }
    
    if (awesomeTop < windowHeight - elemVisible) {
        awesomeText.classList.add('animate__animated', 'animate__shakeX');
    } else {
        awesomeText.classList.remove('animate__animated', 'animate__shakeX');
    } 

    for (const responseElement of responseElements) {
        const responseTop = responseElement.getBoundingClientRect().top;
        if (responseTop < windowHeight - elemVisible) {
            responseElement.classList.add('animate__animated', 'animate__slideInLeft');
        } else {
            responseElement.classList.remove('animate__animated', 'animate__slideInLeft');
        }
    }

    for (const screenElement of screenElements) {
        const screenTop = screenElement.getBoundingClientRect().top;
        if (screenTop < windowHeight - elemVisible) {
            screenElement.classList.add('animate__animated', 'animate__slideInRight');
        } else {
            screenElement.classList.remove('animate__animated', 'animate__slideInRight');
        }
    }
    for (const blogTexts of blogText) {
        const screenTop = blogTexts.getBoundingClientRect().top;
        if (screenTop < windowHeight - elemeVisible) {
            blogTexts.classList.add('animate__animated', 'animate__zoomIn');
        } else {
            blogTexts.classList.remove('animate__animated', 'animate__zoomIn');
        }
    }
    for (const blogImages of blogImage) {
        const screenTop = blogImages.getBoundingClientRect().top;
        if (screenTop < windowHeight - elemeVisible) {
            blogImages.classList.add('animate__animated', 'animate__zoomInRight');
        } else {
            blogImages.classList.remove('animate__animated', 'animate__zoomInRight');
        }
    }
});


