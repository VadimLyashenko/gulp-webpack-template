/**
 * Add class .webp or .no-webp for <html>.
 */
export function addWebp() {
    function testWebP(callback) {
        const webP = new Image();

        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

        webP.onload = webP.onerror = function() {
            callback(webP.height === 2);
        };
    }

    testWebP(function(support) {
        const className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

/**
 * Determines whether the browser is mobile.
 */
export const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    },
};

/**
 * Add class .touch for <html> if the browser is mobile.
 */
export function addTouch() {
    if (isMobile.any()) {
        document.documentElement.classList.add('touch');
    }
}

/**
 * Adding class .loaded for HTML after the page has fully loaded.
 */
export function addLoaded() {
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.documentElement.classList.add('loaded');
        }, 0);
    });
}
