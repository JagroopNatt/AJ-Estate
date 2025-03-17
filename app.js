document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    // Toggle the navigation menu when the hamburger button is clicked
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

