import '../scss/app.scss';

import { swiper } from './swiper';
import { burgerMenu } from './burgerMenu';
import { initHeader } from './initHeader';
import { fancybox } from './fancybox';
import { initScript } from './initScript';


document.addEventListener('DOMContentLoaded', () => {
    init();
});
  
const init = () => {
    swiper();
    burgerMenu();
    initHeader();
    fancybox();
    initScript();
};
