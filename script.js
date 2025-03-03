document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Enable clickable project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function () {
            const link = this.getAttribute('data-link');
            if (link) {
                window.open(link, '_blank');
            }
        });
    });

    // Enable clickable timeline items (if present)
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', function () {
            const link = this.getAttribute('data-link');
            if (link) {
                window.open(link, '_blank');
            }
        });
    });

    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');

    // Show or hide button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dark mode toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggle.checked = savedTheme === 'dark-mode';
        // Add dark mode to project cards and header if needed
        document.querySelectorAll('.project-card').forEach(card => card.classList.add('dark-mode'));
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('nav').classList.add('dark-mode');
    }

    // Toggle theme on checkbox change
    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            // Add dark mode to project cards and header
            document.querySelectorAll('.project-card').forEach(card => card.classList.add('dark-mode'));
            document.querySelector('header').classList.add('dark-mode');
            document.querySelector('nav').classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', '');
            // Remove dark mode from project cards and header
            document.querySelectorAll('.project-card').forEach(card => card.classList.remove('dark-mode'));
            document.querySelector('header').classList.remove('dark-mode');
            document.querySelector('nav').classList.remove('dark-mode');
        }
    });
});
