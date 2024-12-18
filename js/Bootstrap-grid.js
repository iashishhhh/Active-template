
// Function to animate the numbers
function animateCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target'); // Get the target value
        const speed = 50; // Adjust speed (higher is slower)

        const updateCount = () => {
            const current = +counter.innerText;
            const increment = target / speed;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 10); // Adjust interval
            } else {
                counter.innerText = target; // Ensure the final value matches target
            }
        };

        updateCount();
    });
}

// Detect when the section is in view
const statsSection = document.querySelector('#stats-section');
const options = {
    root: null, // Viewport
    threshold: 0.5, // Trigger when 50% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters(); // Start animation
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
}, options);

// Observe the section
observer.observe(statsSection);


// 
// Initialize the carousel with custom options
const testimonialCarousel = new bootstrap.Carousel('#testimonialCarousel', {
    interval: 2500, // Change slide every 4 seconds
    ride: 'carousel', // Automatically start cycling
    pause: 'hover',   // Pause on hover
    wrap: true        // Loop back to the first slide
});

// Example: Programmatically navigate to a specific slide
document.querySelectorAll('.carousel-indicators button').forEach((button, index) => {
    button.addEventListener('click', () => {
        testimonialCarousel.to(index); // Jump to the specific slide
    });
});

// Example: Log the active slide index when it changes
document.querySelector('#testimonialCarousel').addEventListener('slid.bs.carousel', (event) => {
    console.log(`Active slide index: ${event.to}`);
});     