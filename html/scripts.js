$(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
        $("#sidebar").toggleClass("toggled");
    });
});

const circleContainer = document.querySelector('.circle-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < circleContainer.children.length - 5) {
        currentIndex++;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = currentIndex * 100;
    circleContainer.style.transform = `translateX(-${offset}%)`;
}