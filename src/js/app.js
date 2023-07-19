import '../scss/app.scss';

import { swiper } from './swiper';
import { burgerMenu } from './burgerMenu';
import { fancybox } from './fancybox';
import { initScript } from './initScript';
import { initIMask } from './initIMask';
import { initVideo } from './initVideo';





document.addEventListener('DOMContentLoaded', () => {
    init();
});
  
const init = () => {
    swiper();
    burgerMenu();
    fancybox();
    initScript();
    initIMask();
    initVideo();
};
