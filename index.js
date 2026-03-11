document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('div[id]');
    console.log(sections); 
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

