import EmblaCarousel from "embla-carousel";

export function galleryCarousel() {
    return {
        emblaApi: null,
        currentIndex: 0,
        images: [
            'assets/images/card-1.png',
            'assets/images/card-8.png',
            'assets/images/card-1.png',
            'assets/images/card-8.png'
        ],

        init() {
            // Инициализация Embla
            this.emblaApi = EmblaCarousel(this.$refs.viewport, {
                loop: false,
                align: 'start',
                startIndex: 0 // начинаем с первой картинки
            });

            // После инициализации гарантируем, что выбран первый слайд
            this.emblaApi.scrollTo(0, false); // false = без анимации

            // Обновление индекса при смене слайда
            this.emblaApi.on('select', () => this.updateIndex());
            this.updateIndex();
        },

        updateIndex() {
            // Получаем индекс выбранного слайда без учета клонов
            this.currentIndex = this.emblaApi.selectedScrollSnap();
        },

        scrollTo(index) {
            this.emblaApi.scrollTo(index);
        },
    }
}