// MOBILE NAVIGATION
const menu = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-toggle");

if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
}

// HOMEPAGE SCROLL ANIMATIONS
const animatedElements = document.querySelectorAll(
    ".home-hero + section, " +
    "main > section:not(.home-hero), " +
    ".home-hero ~ section, " +
    ".skill-card, " +
    ".project-card, " +
    ".service-card"
);

animatedElements.forEach((element) => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

animatedElements.forEach((element) => {
    observer.observe(element);
});

// FOOTER YEAR
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}