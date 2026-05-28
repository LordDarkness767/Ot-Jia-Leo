document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('langSelect');

    function canviarIdioma(idioma) {
        document.documentElement.lang = idioma;

        const elements = document.querySelectorAll('[i18n]');
        console.log(elements)
        elements.forEach(element => {
            const text = element.dataset[idioma];
            if (text !== undefined) {
                element.textContent = text;
            }
        });
    }

    if (selector) {
        selector.addEventListener('change', function () {
            canviarIdioma(this.value);
        });

        canviarIdioma(selector.value);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    // --- TU CÓDIGO DE IDIOMAS (Intacto) ---
    const selector = document.getElementById('langSelect');

    function canviarIdioma(idioma) {
        document.documentElement.lang = idioma;

        const elements = document.querySelectorAll('[i18n]');
        console.log(elements)
        elements.forEach(element => {
            const text = element.dataset[idioma];
            if (text !== undefined) {
                element.textContent = text;
            }
        });
    }

    if (selector) {
        selector.addEventListener('change', function () {
            canviarIdioma(this.value);
        });

        canviarIdioma(selector.value);
    }

    // --- NUEVO CÓDIGO DEL CARRUSEL ---
    const slidesContainer = document.querySelector('.carrusel-slides');
    const slides = document.querySelectorAll('.slide');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    if (slidesContainer && slides.length > 0) {
        let indiceActual = 0;
        const totalSlides = slides.length;

        function moverCarrusel() {
            slidesContainer.style.transform = `translateX(-${indiceActual * 100}%)`;
        }

        btnNext.addEventListener('click', () => {
            indiceActual = (indiceActual + 1) % totalSlides;
            moverCarrusel();
        });

        btnPrev.addEventListener('click', () => {
            indiceActual = (indiceActual - 1 + totalSlides) % totalSlides;
            moverCarrusel();
        });
    }
});