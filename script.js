
// MOBILE NAVIGATION

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

if (menuIcon && navLinks) {

    const icon = menuIcon.querySelector("i");

    function closeMenu() {
        navLinks.classList.remove("active");
        icon.classList.replace("fa-xmark", "fa-bars");
        menuIcon.setAttribute("aria-expanded", "false");
    }

    menuIcon.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        icon.classList.toggle("fa-bars", !isOpen);
        icon.classList.toggle("fa-xmark", isOpen);

        menuIcon.setAttribute("aria-expanded", isOpen);

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 850) {
            closeMenu();
        }

    });

}
