import mobileMenu from './js/mobile-menu.js';
import { setupSquareAnimation } from './js/square-animation.js';
import { setupGlitchAnimation } from './js/glitch-animation.js';
import { setupAppearanceAnimation } from './js/appearance-animation.js'; 
import { setupReadMoreModals } from './js/readMore.js';

document.addEventListener('DOMContentLoaded', () => {
    mobileMenu();
    setupSquareAnimation();
    setupGlitchAnimation();
    setupAppearanceAnimation();  
    setupReadMoreModals();
});
