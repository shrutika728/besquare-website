// menuToggle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("show");
    });
});

// menuToggle end

document.querySelectorAll('.custom-dropdown-menu a').forEach(link => {
    link.addEventListener('click', function(event) {
        window.location.href = this.href;
    });
});

const sliderTrack = document.getElementById("sliderTrack");

// Pause animation on click
sliderTrack.addEventListener("mousedown", () => {
    sliderTrack.style.animationPlayState = "paused";
});

// Resume animation when mouse is released
sliderTrack.addEventListener("mouseup", () => {
    sliderTrack.style.animationPlayState = "running";
});

// Resume animation when mouse leaves
sliderTrack.addEventListener("mouseleave", () => {
    sliderTrack.style.animationPlayState = "running";
});