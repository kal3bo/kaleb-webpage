// Dynamic Background Color Change on Scroll
document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    // Change background color on scroll
    if (scrollPosition > 50) {
        document.body.classList.add('nav-scrolled');
        document.querySelectorAll('.dark-section').forEach(function (section) {
            section.classList.add('dark-section-scrolled');
        });
    } else {
        document.body.classList.remove('nav-scrolled');
        document.querySelectorAll('.dark-section').forEach(function (section) {
            section.classList.remove('dark-section-scrolled');
        });
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
