
/* =========================================
   MISHI — Animaciones e interacciones
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Elementos que aparecerán al entrar en pantalla
  const revealElements = document.querySelectorAll(".reveal");

  // Comprobar si el navegador admite IntersectionObserver
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Dejar de observar el elemento cuando ya apareció
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    // Observar todos los elementos animados
    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    // Alternativa para navegadores antiguos
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }
});
