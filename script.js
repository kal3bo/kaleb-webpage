// Dynamic Background Color Change on Scroll
document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    // Change background color on scroll
    if (scrollPosition > 50) {
        document.body.classList.add('nav-scrolled');
        document.querySelectorAll('.section').forEach(function (section) {
            section.classList.add('section-scrolled');
        });
    } else {
        document.body.classList.remove('nav-scrolled');
        document.querySelectorAll('.section').forEach(function (section) {
            section.classList.remove('section-scrolled');
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
