import '../css/main.css';
import AsyncAlpine from 'async-alpine';
import Alpine from 'alpinejs';
Alpine.plugin(AsyncAlpine);



Alpine.asyncData('slider', () =>
    import ('./components/slider.js'))
Alpine.asyncData('filter', () =>
    import ('./components/filter.js'))
Alpine.asyncData('embla', () =>
    import ('./components/embla.js'))
Alpine.asyncData('emblaProducts', () =>
    import ('./components/products-slide.js'))
Alpine.asyncData('galleryCarousel', () =>
    import ('./components/productCarousel.js'))

// импортируем cartStore
import { cartStore } from './components/cartItem.js'

document.addEventListener('alpine:init', () => {
    Alpine.store('cart', cartStore)
})





Alpine.start();