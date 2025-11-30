// --- Smooth Scrolling for Navigation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// --- 8. Scroll-Triggered Animations (Fade-in / Slide-up) ---

// Setup Intersection Observer
const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of element visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'animated' class to trigger CSS transition
            entry.target.classList.add('animated');
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Target all elements marked for animation
document.querySelectorAll('.fade-in-up, .slide-up').forEach(el => {
    observer.observe(el);
});

// Animate Hero content immediately on load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.hero-content h1').classList.add('animated');
    document.querySelector('.hero-content p').classList.add('animated');
    document.querySelector('.hero-btn').classList.add('animated');
});