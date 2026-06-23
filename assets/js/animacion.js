document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('progress');
                bars.forEach(bar => {
                    // Esto dispara la transición definida en el CSS
                    bar.value = bar.getAttribute('data-max');
                });
                // Opcional: deja de observar una vez animado
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 }); // Se activa cuando el 30% de la sección es visible

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});