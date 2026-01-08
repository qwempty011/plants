import EmblaCarousel from "embla-carousel";

export function emblaProducts() {
    return {
        embla: null,
        selectedIndex: 0,
        scrollSnaps: [],

        init() {
            this.embla = EmblaCarousel(this.$refs.viewport, {
                align: 'start',
                containScroll: 'trimSnaps', // Убирает пустоту в конце
                slidesToScroll: 'auto', // Группирует прокрутку
                loop: false
            });

            const updateState = () => {
                this.selectedIndex = this.embla.selectedScrollSnap();
            };

            this.embla.on('init', () => {
                this.scrollSnaps = this.embla.scrollSnapList();
                updateState();
            });

            this.embla.on('select', updateState);
            this.embla.on('reInit', updateState);
        },

        scrollTo(index) {
            this.embla.scrollTo(index);
        }
    }
}