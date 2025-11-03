import '../css/main.css';
import Alpine from 'alpinejs';
import EmblaCarousel from 'embla-carousel';

// === Alpine ===
document.addEventListener('alpine:init', () => {
    Alpine.store('price', {
        min: 39,
        max: 300,
        minValue: 39,
        maxValue: 300,
        inRange(price) {
            return price >= this.minValue && price <= this.maxValue;
        },
    });
});

Alpine.start();


document.addEventListener('DOMContentLoaded', () => {
    const emblaNode = document.querySelector('.embla');
    const viewportNode = emblaNode.querySelector('.embla__viewport');
    const embla = EmblaCarousel(viewportNode, {
        loop: true,
        align: 'start',
        skipSnaps: false,
    });




    // Точки
    const dots = emblaNode.querySelector('.embla__dots');
    const slidesCount = embla.slideNodes().length;

    for (let i = 0; i < slidesCount; i++) {
        const dot = document.createElement('button');
        dot.className = 'embla__dot w-3 h-3 rounded-full bg-gray-300';
        dot.addEventListener('click', () => embla.scrollTo(i));
        dots.appendChild(dot);
    }

    const updateDots = () => {
        const selected = embla.selectedScrollSnap();
        dots.querySelectorAll('.embla__dot').forEach((dot, index) => {
            dot.classList.toggle('bg-green-500', index === selected);
        });
    };

    embla.on('select', updateDots);
    updateDots();
});