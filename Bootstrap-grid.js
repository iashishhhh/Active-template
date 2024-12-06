
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