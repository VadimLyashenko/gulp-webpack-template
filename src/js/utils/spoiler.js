import {_slideToggle, _slideUp} from './slide.js';
import {dataMediaQueries} from '../files/functions.js';

/**
 * Spoilers handling.
 */
export function spoilersInit() {
    const spoilers = document.querySelectorAll('[data-spoilers]');

    if (spoilers.length === 0) {
        return;
    }

    regularSpoilersInit(spoilers);

    mediaSpoilersInit(spoilers);

    externallyClose();
}

/**
 * Init spoilers without media queries.
 * @param {NodeList} spoilers
 */
function regularSpoilersInit(spoilers) {
    const regularSpoilers = Array.from(spoilers)
        .filter(item => !item.dataset.spoilers.split(',')[0]);

    if (regularSpoilers.length) {
        initSpoilers(regularSpoilers);
    }
}

/**
 * Init spoilers with media queries. Init when media value changed.
 * @param {NodeList} spoilers
 */
function mediaSpoilersInit(spoilers) {
    const mdQueries = dataMediaQueries(spoilers, 'spoilers');

    if (!mdQueries && !mdQueries.length) {
        return;
    }

    mdQueries.forEach(mdItem => {
        mdItem.matchMedia.addEventListener('change', function() {
            initSpoilers(mdItem.itemsArray, mdItem.matchMedia);
        });

        initSpoilers(mdItem.itemsArray, mdItem.matchMedia);
    });
}

/**
 * Toggle classes ._spoiler-init, call initSpoilerBody and toggle click event.
 * @param {array} spoilers
 * @param {boolean, MediaQueryList} matchMedia
 */
function initSpoilers(spoilers, matchMedia = false) {
    spoilers.forEach(spoilersBlock => {
        spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;

        if (matchMedia.matches || !matchMedia) {
            spoilersBlock.classList.add('_spoiler-init');
            initSpoilerBody(spoilersBlock);

            spoilersBlock.addEventListener('click', setSpoilerAction);
        } else {
            spoilersBlock.classList.remove('_spoiler-init');
            initSpoilerBody(spoilersBlock, false);

            spoilersBlock.removeEventListener('click', setSpoilerAction);
        }
    });
}

/**
 * Handling spoiler body. Toggle hidden, add tabindex.
 * @param {object} spoilersBlock
 * @param {boolean} hideSpoilerBody
 */
function initSpoilerBody(spoilersBlock, hideSpoilerBody = true) {
    let spoilerTitles = spoilersBlock.querySelectorAll('[data-spoiler]');

    if (!spoilerTitles.length) {
        return;
    }

    spoilerTitles = Array.from(spoilerTitles)
        .filter(item => item.closest('[data-spoilers]') === spoilersBlock);

    spoilerTitles.forEach(spoilerTitle => {
        if (hideSpoilerBody) {
            spoilerTitle.removeAttribute('tabindex');

            if (!spoilerTitle.classList.contains('_spoiler-active')) {
                spoilerTitle.nextElementSibling.hidden = true;
            }
        } else {
            spoilerTitle.setAttribute('tabindex', '-1');
            spoilerTitle.nextElementSibling.hidden = false;
        }
    });
}

/**
 * Toggle spoiler body.
 * @param {event} e
 */
function setSpoilerAction(e) {
    const el = e.target;

    if (!el.closest('[data-spoiler]')) {
        return;
    }

    const spoilerTitle = el.closest('[data-spoiler]');
    const spoilersBlock = spoilerTitle.closest('[data-spoilers]');
    const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler');
    const spoilerSpeed = spoilersBlock.dataset.spoilersSpeed ? parseInt(spoilersBlock.dataset.spoilersSpeed, 10) : 400;

    if (!spoilersBlock.querySelectorAll('._slide').length) {
        if (oneSpoiler && !spoilerTitle.classList.contains('_spoiler-active')) {
            hideSpoilersBody(spoilersBlock);
        }

        spoilerTitle.classList.toggle('_spoiler-active');
        _slideToggle(spoilerTitle.nextElementSibling, spoilerSpeed);
    }

    e.preventDefault();
}

function hideSpoilersBody(spoilersBlock) {
    const spoilerActiveTitle = spoilersBlock.querySelector('[data-spoiler]._spoiler-active');

    const spoilerSpeed = spoilersBlock.dataset.spoilersSpeed ? parseInt(spoilersBlock.dataset.spoilersSpeed, 10) : 500;

    if (spoilerActiveTitle && !spoilersBlock.querySelectorAll('._slide').length) {
        spoilerActiveTitle.classList.remove('_spoiler-active');
        _slideUp(spoilerActiveTitle.nextElementSibling, spoilerSpeed);
    }
}

/**
 * Close on click outside a spoiler.
 */
function externallyClose() {
    const spoilersClose = document.querySelectorAll('[data-spoiler-close]');

    if (!spoilersClose.length) {
        return;
    }

    document.addEventListener('click', function(e) {
        const el = e.target;

        if (!el.closest('[data-spoilers]')) {
            spoilersClose.forEach(spoilerClose => {
                const spoilersBlock = spoilerClose.closest('[data-spoilers]');
                const spoilerSpeed = spoilersBlock.dataset.spoilersSpeed ? parseInt(spoilersBlock.dataset.spoilersSpeed, 10) : 400;

                spoilerClose.classList.remove('_spoiler-active');
                _slideUp(spoilerClose.nextElementSibling, spoilerSpeed);
            });
        }
    });
}
