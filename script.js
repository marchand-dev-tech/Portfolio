const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
const btn = document.getElementById("alertBtn");

btn.addEventListener("click", () => {
    alert("Danke, dass du mein Portfolio anschaust!");
});
const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            card.classList.add("show");
        }
    });
});