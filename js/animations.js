document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.dataset.animate; // e.g., 'fade-in-up', 'scale-in'
                const delay = parseFloat(element.dataset.delay) || 0; // Get delay from data-delay attribute

                setTimeout(() => {
                    element.classList.add('animate');
                }, delay * 1000); // Convert seconds to milliseconds

                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(element => {
        observer.observe(element);
    });

    // Special handling for carousel captions
    const carouselCaptions = document.querySelectorAll('.carousel-caption');
    const customCarousel = document.getElementById('customCarousel');

    if (customCarousel && carouselCaptions.length > 0) {
        // Function to animate current caption and reset others
        const animateCurrentCaption = () => {
            carouselCaptions.forEach(caption => {
                caption.classList.remove('animate'); // Reset animation state
            });
            // Find the active carousel item and then its caption
            const activeItem = customCarousel.querySelector('.carousel-item.active');
            if (activeItem) {
                const activeCaption = activeItem.querySelector('.carousel-caption');
                if (activeCaption) {
                    activeCaption.classList.add('animate');
                }
            }
        };

        // Initial animation for the first slide
        animateCurrentCaption();

        // Re-animate captions on slide change
        customCarousel.addEventListener('slide.bs.carousel', animateCurrentCaption);
    }
});
