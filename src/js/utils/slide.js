/**
 * Smooth hiding an element.
 * @param {Element} target
 * @param {number, string} duration
 * @param {number} showmore
 */
export const _slideUp = (target, duration = 500, showmore = 0) => {
    if (target.classList.contains('_slide')) {
        return;
    }

    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = `${target.offsetHeight}px`;
    Boolean(target.offsetHeight);
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}px` : '0px';
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;

    window.setTimeout(() => {
        target.hidden = !showmore;

        if (!showmore) {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
        }

        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');

        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');

        document.dispatchEvent(new CustomEvent('slideUpDone', {
            detail: {
                target: target,
            },
        }));
    }, duration);
};

/**
 * Smooth opening an element.
 * @param {Element} target
 * @param {number, string} duration
 * @param {number} showmore
 */
export const _slideDown = (target, duration = 500, showmore = 0) => {
    if (target.classList.contains('_slide')) {
        return;
    }

    target.classList.add('_slide');
    target.hidden = target.hidden ? false : null;

    if (showmore) {
        target.style.removeProperty('height');
    }

    const height = target.offsetHeight;
    target.style.overflow = 'hidden';

    target.style.height = showmore ? `${showmore}px` : '0px';

    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    Boolean(target.offsetHeight);
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';

    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');

    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');

        document.dispatchEvent(new CustomEvent('slideDownDone', {
            detail: {
                target: target,
            },
        }));
    }, duration);
};

/**
 * Toggle an element visibility.
 * @param {Element} target
 * @param {number} duration
 */
export const _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    }

    return _slideUp(target, duration);
};
