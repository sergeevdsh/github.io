document.addEventListener('DOMContentLoaded', () => {
    // Плавное появление элементов на странице
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;

        sections.forEach(section => {
            if (scrollPosition > section.offsetTop) {
                section.classList.add('visible');
            }
        });
    });
});
