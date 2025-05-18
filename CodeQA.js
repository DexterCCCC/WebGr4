document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector("header ul");

    hamburgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
