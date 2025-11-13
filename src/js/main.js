import '../css/main.css';
import AsyncAlpine from 'async-alpine';
import Alpine from 'alpinejs';
Alpine.plugin(AsyncAlpine);

Alpine.asyncData(
    'embla',
    () =>
    import ('./components/embla.js')
);

Alpine.asyncData(
    'slider',
    () =>
    import ('./components/slider.js')
);

Alpine.start();