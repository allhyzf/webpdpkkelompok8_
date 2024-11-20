// script.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to change slides
function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // Wrap around
    slides[currentSlide].classList.add('active');
}

// Automatic slide change every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000);

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Optional: Add scroll reveal effect
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(section);
    });
});