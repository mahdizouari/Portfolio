// Minimal script: keep page interaction static and reduce motion
// No click handlers on the heading; navbar uses CSS only (no extra JS animation)

document.addEventListener('DOMContentLoaded', () => {
    // ensure any previously inline animation is cleared
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.style.animation = 'none';
    });
});
