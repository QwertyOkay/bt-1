
    window.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector("header img");
    const mobileMenu = document.querySelector(".header__nav_mobile");
    const hiddenElement = document.querySelector(".hidden");
    const contentWrapper = document.querySelector(".content-wrapper");
    let isMenuOpen = false;

    const openMenu = () => {
        mobileMenu.classList.add("header__nav_mobile_active");
        document.body.style.overflow = 'hidden';
        hiddenElement.classList.add("hidden__active");
        contentWrapper.classList.add("blur");
        burger.setAttribute("src", "../images/close.svg");
        isMenuOpen = true;
    };

    const closeMenu = () => {
        mobileMenu.classList.remove("header__nav_mobile_active");
        document.body.style.overflow = '';
        hiddenElement.classList.remove("hidden__active");
        contentWrapper.classList.remove("blur");
        burger.setAttribute("src", "../images/menu.svg");
        isMenuOpen = false;
    };

    burger.addEventListener("click", () => {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    
    const contactForm = document.getElementById("contactForm");
    const thankYouModal = document.getElementById("thankYouModal");
    const closeModal = document.getElementById("closeModal");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        thankYouModal.classList.add("active"); 
        contactForm.reset(); 
    });

    closeModal.addEventListener("click", () => {
        thankYouModal.classList.remove("active"); 
    });

    window.addEventListener("click", (e) => {
        if (e.target === thankYouModal) {
            thankYouModal.classList.remove("active"); 
        }
    });
});