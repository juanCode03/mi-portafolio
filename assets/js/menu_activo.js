const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section, article, header");

function setActiveLink(hash) {
  navLinks.forEach(link => {
    if (link.hash === hash) {
      link.parentElement.classList.add("active-link");
    } else {
      link.parentElement.classList.remove("active-link");
    }
  });
}

// click sobre enlaces para scroll suave + activa la clase por hash
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.hash);
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      target?.scrollIntoView({ behavior: 'auto' });
      history.pushState(null, "", link.hash);
      setActiveLink(link.hash);
      return;
    }

    if (window.lenis && typeof window.lenis.scrollTo === 'function') {
      window.lenis.scrollTo(target);
      history.pushState(null, "", link.hash);
      setActiveLink(link.hash);
    } else {
      target?.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", link.hash);
      setActiveLink(link.hash);
    }
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveLink("#" + entry.target.id);
      }
    });
  },
  { root: null, rootMargin: "0px 0px -35% 0px", threshold: 0.35 }
);

sections.forEach(section => observer.observe(section));

// estado inicial
setActiveLink(window.location.hash || "#home");