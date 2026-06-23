window.sr = ScrollReveal();
    sr.reveal('.avatar', {
        duration: 2000,
        origin: 'right',
        distance: '500px',
        delay: 1000
    });

    sr.reveal('.hero-content', {
        duration: 2000,
        origin: 'left',
        distance: '400px'
    });

    sr.reveal('.about-avatar', {
        duration: 2000,
        rotate: { x: 0, y: 180},
        delay: 500
    });

    sr.reveal('.about', {
        duration: 2000,
        delay: 500
    });

    sr.reveal('.skill-card, .project-card', {
        delay: 300,
        distance: '400px',
        duration: 800,
        interval: 200,
        scale: 0.95
    });
