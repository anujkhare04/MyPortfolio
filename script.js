// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        }
    });
});

// Navigation Link Active State on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Show More Projects Visibility
const showMoreBtn = document.getElementById('show-more-btn');
const hiddenProjects = document.querySelectorAll('.project-hidden');

if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
        const isHidden = hiddenProjects[0].style.display === 'none';

        hiddenProjects.forEach(project => {
            project.style.display = isHidden ? 'block' : 'none';
            // Trigger animation
            if (isHidden) {
                project.classList.add('fade-in');
            }
        });

        showMoreBtn.textContent = isHidden ? 'View Less Projects' : 'View More Projects';
    });
}

// Profile Dropdown Toggle
const navProfile = document.querySelector('.nav-profile');
const profileTrigger = document.querySelector('.profile-trigger');

if (navProfile && profileTrigger) {
    profileTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        navProfile.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!navProfile.contains(e.target)) {
            navProfile.classList.remove('active');
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navProfile.classList.remove('active');
        }
    });
}

// Fade-in animations on scroll (Simple Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card, .project-card, .skill-category').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});
