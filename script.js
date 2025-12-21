// Smooth scrolling + Dark mode + Image zoom
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark mode toggle
    const toggle = document.getElementById('dark-mode-toggle');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });

    // Profile image zoom on click
    const img = document.querySelector('.profile-img');
    if (img) {
        img.addEventListener('click', () => {
            img.style.transform = img.style.transform === 'scale(1.2)' ? 'scale(1)' : 'scale(1.2)';
        });
    }
});
