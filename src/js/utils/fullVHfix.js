import {isMobile} from './addClass.js';

/**
 * Floating panel handling on mobile devices at 100vh.
 */
export function fullVHfix() {
    const fullScreens = document.querySelectorAll('[data-fullscreen]');

    if (fullScreens.length && isMobile.any()) {
        window.addEventListener('resize', fixHeight);
        fixHeight();
    }
}

function fixHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
