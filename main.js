import { setupMenu } from './js/menu.js';
import { setupSquareAnimation } from './js/square-animation.js';
import { setupGlitchAnimation } from './js/glitch-animation.js';
import { setupAppearanceAnimation } from './js/appearance-animation.js'; 

document.addEventListener('DOMContentLoaded', () => {
    setupMenu();
    setupSquareAnimation();
    setupGlitchAnimation();
    setupAppearanceAnimation();  
});
