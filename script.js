 // Initial Animation using GSAP
window.addEventListener("load", () => {
    gsap.from(".text-content h1", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".text-content p", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
    gsap.from(".cta-button", { duration: 1, scale: 0.8, opacity: 0, delay: 0.8 });
    gsap.from(".hero-image", { duration: 1, opacity: 0, scale: 0.8, stagger: 0.3 });
});

// Hover Effect with Mouse Tracking
document.querySelectorAll('.hero-image').forEach(image => {
    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left - image.offsetWidth / 2;
        const y = e.clientY - rect.top - image.offsetHeight / 2;

        image.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.1)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = "translate(0, 0) scale(1)";
    });
});
