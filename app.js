/**
 * Gradina 11 Iunie - Main JavaScript file
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if(navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close menu when clicking on a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if(hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Add scrolled class initially if page is reloaded and not at top
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }

});
