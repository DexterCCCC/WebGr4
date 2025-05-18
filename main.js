// Light/Dark mode toggle
function toggleLightDark() {
    document.body.classList.toggle('light');
}

// Hamburger menu toggle
function toggleMenu() {
    var hamburger = document.querySelector('.hamburger');
    var nav = document.querySelector('.nav');
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
}

// Close nav when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.hamburger').classList.remove('active');
            document.querySelector('.nav').classList.remove('open');
        });
    });

    // Also add click event to hamburger button (if not using inline onclick)
    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
});
