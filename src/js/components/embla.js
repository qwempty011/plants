import EmblaCarousel from "embla-carousel";

export function emblaCarousel() {
    return {
        embla: null,
        dots: [],
        selected: 0,

        init() {
            this.embla = EmblaCarousel(this.$refs.viewport, { loop: true })
            this.dots = Array.from({ length: this.embla.slideNodes().length })
            this.embla.on('select', () => this.updateDots())

            this.updateDots()
        },

        updateDots() {
            this.selected = this.embla.selectedScrollSnap()
        },

        select(i) {
            this.embla.scrollTo(i)
            this.selected = i
        }

    }

}