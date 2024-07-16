document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let slideWidth = slides[0].offsetWidth;
    const totalWidth = slideWidth * slides.length;

    let currentPosition = 0;

    function scrollSlides() {
        currentPosition -= 1;
        if (Math.abs(currentPosition) >= totalWidth / 2) {
            currentPosition = 0;
        }
        slider.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(scrollSlides);
    }

    scrollSlides();

    // Update slide width on window resize
    window.addEventListener('resize', () => {
        slideWidth = slides[0].offsetWidth;
    });
});
