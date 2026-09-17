// Script principal del proyecto
console.log('Script cargado correctamente');

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Portada: Selección aleatoria de integrante (Judith)
    // ----------------------------------------------------
    const btnRandom = document.getElementById('btn-random-member');
    const displayContainer = document.getElementById('random-member-display');

    if (btnRandom && displayContainer) {
        const integrantes = [
            {
                nombre: "Judith",
                rol: "Coordinación & Portada",
                descripcion: "Estructura semántica general, integración de repositorios y flujo de navegación.",
                link: "judith.html",
                img: "img/judith.png"
            },
            {
                nombre: "Matías",
                rol: "Sistema Visual & Perfil",
                descripcion: "Arquitectura CSS con tokens, paleta de colores y componentes double-bezel.",
                link: "matias.html",
                img: "img/matias.png"
            },
            {
                nombre: "Lucas",
                rol: "Responsive & Testing",
                descripcion: "Optimización adaptable en breakpoints obligatorios de 400px, 900px y 1200px.",
                link: "lucas.html",
                img: "img/lucas.png"
            },
            {
                nombre: "Mauro",
                rol: "Bitácora & Documentación",
                descripcion: "Registro continuo del proceso colaborativo y redacción técnica del README.",
                link: "mauro.html",
                img: "img/mauro.png"
            }
        ];

        btnRandom.addEventListener('click', () => {
            const index = Math.floor(Math.random() * integrantes.length);
            const elegido = integrantes[index];

            displayContainer.innerHTML = `
                <div class="spotlight-box">
                    <img src="${elegido.img}" alt="Avatar de ${elegido.nombre}" class="spotlight-box-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'72\' height=\'72\'><rect width=\'72\' height=\'72\' fill=\'%23102A30\'/><text x=\'50%\' y=\'55%\' fill=\'%2338BDF8\' font-size=\'28\' text-anchor=\'middle\' dy=\'.3em\'>✦</text></svg>'">
                    <div>
                        <h4 style="font-size: 1.2rem; color: var(--color-coral); margin-bottom: 4px;">${elegido.nombre}</h4>
                        <p style="font-size: 0.85rem; color: var(--color-blue); margin-bottom: 8px; font-weight: 600;">${elegido.rol}</p>
                        <p style="font-size: 0.9rem; margin-bottom: 12px;">${elegido.descripcion}</p>
                        <a href="${elegido.link}" class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.8rem;">Ver perfil completo →</a>
                    </div>
                </div>
            `;
        });
    }
    // ----------------------------------------------------
    // 2. Perfil Judith: Generador de recomendaciones dinámicas
    // ----------------------------------------------------
    const btnJudith = document.getElementById('btn-judith-quote');
    const displayJudith = document.getElementById('judith-quote-display');

    if (btnJudith && displayJudith) {
        const recomendaciones = [
            "🎧 Para concentrarte al maquetar: poné 'Currents' de Tame Impala en loop.",
            "🎬 Para inspirarte un fin de semana: mirá 'The Social Network' y prestá atención al ritmo de resolución de problemas.",
            "🎧 Si tenés que debuggear lógica compleja: 'Random Access Memories' de Daft Punk mantiene el foco.",
            "💡 Consejo Front End: primero organizá la semántica HTML, el diseño con CSS después fluye solo.",
            "🎧 Clásico para codear de noche: 'Abbey Road' de The Beatles."
        ];

        btnJudith.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * recomendaciones.length);
            displayJudith.textContent = recomendaciones[randomIndex];
        });
    }
    // -----------------------------------------------------------------
    // Carrusel Multimedia (Desplazamiento horizontal con controles en cabecera)
    // -----------------------------------------------------------------
    const galleries = document.querySelectorAll('.scroll-gallery');

    galleries.forEach(gallery => {
        // Busca los controles en la seccion contenedora (.profile-section / section) o en el wrapper
        const parentSection = gallery.closest('section') || gallery.closest('.scroll-gallery-wrapper') || gallery.parentElement;
        if (!parentSection) return;

        const prevBtn = parentSection.querySelector('.prev-btn');
        const nextBtn = parentSection.querySelector('.next-btn');
        
        if (!prevBtn || !nextBtn) return;

        // Calculo exacto del desplazamiento por tarjeta para sincronizar con scroll-snap y evitar tarjetas cortadas
        const getScrollStep = () => {
            const card = gallery.querySelector('.media-card');
            if (!card) return gallery.clientWidth * 0.8;
            const style = window.getComputedStyle(gallery);
            const gap = parseFloat(style.columnGap || style.gap) || 24;
            const cardWidth = card.getBoundingClientRect().width;
            const singleCardStep = cardWidth + gap;

            // Determinar cuántas tarjetas caben en el ancho visible
            const visibleCards = Math.floor((gallery.clientWidth + gap) / singleCardStep);

            // En mobile y tablet avanzamos de a 1 tarjeta para maxima precision; en pantallas grandes avanzamos de a 2
            const cardsToMove = visibleCards >= 3 ? 2 : 1;
            return singleCardStep * cardsToMove;
        };

        const scrollNext = () => {
            gallery.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
        };

        const scrollPrev = () => {
            gallery.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
        };

        nextBtn.addEventListener('click', scrollNext);
        prevBtn.addEventListener('click', scrollPrev);
    });
});

