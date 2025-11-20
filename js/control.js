// Typed Effect
var typed = new Typed('.element', {
    strings: ["Web Designer.", "Code Developer.", "Apps Designer."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

// Counter
$('.counter').countUp();

// Timeline toggle
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle();
});

// AOS Animation
AOS.init();


// ==================== STORY SLIDER ===================== //

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".story-slider");
    const images = document.querySelectorAll(".story-img");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    if (!slider || images.length === 0) return;

    let index = 0;

    function updateSlider() {
        const width = images[0].clientWidth;
        slider.style.transform = `translateX(${-index * width}px)`;
    }

    nextBtn.addEventListener("click", () => {
        index++;
        if (index >= images.length) index = 0;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        index--;
        if (index < 0) index = images.length - 1;
        updateSlider();
    });

    window.addEventListener("resize", updateSlider);

});
