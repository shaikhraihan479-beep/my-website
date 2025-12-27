/* ========================
   1. Initialize AOS (Animation)
   ======================== */
AOS.init({
    duration: 1000,
    offset: 100,
    once: true // Animation happens only once while scrolling down
});

/* ========================
   2. Typed.js (Typewriter)
   ======================== */
const typed = new Typed('.typing', {
    strings: ['Creative Web Developer', 'UI/UX Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/* ========================
   3. Mobile Menu Toggle
   ======================== */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const navIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon between bars and X
    if (navLinks.classList.contains('active')) {
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-times');
    } else {
        navIcon.classList.remove('fa-times');
        navIcon.classList.add('fa-bars');
    }
});

/* Close menu when clicking a link */
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navIcon.classList.remove('fa-times');
        navIcon.classList.add('fa-bars');
    });
});

/* ========================
   4. Sticky Navbar & Scroll Spy
   ======================== */
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.onscroll = () => {
    // Sticky Navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll Spy (Highlight active menu item)
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navItems.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-links a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};