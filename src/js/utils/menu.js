export let bodyLockStatus = true;

/**
 * Add class .lock to <body>.
 * @param {number} delay
 */
export const bodyLock = (delay = 500) => {
    const body = document.querySelector('body');

    if (bodyLockStatus) {
        // const lockPadding = document.querySelectorAll('[data-lp]');
        //
        // for (let index = 0; index < lockPadding.length; index++) {
        //     const el = lockPadding[index];
        //     el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        // }

        body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        document.documentElement.classList.add('lock');

        bodyLockStatus = false;

        setTimeout(function() {
            bodyLockStatus = true;
        }, delay);
    }
};

/**
 * Remove class .lock from <body>.
 * @param {number} delay
 */
export const bodyUnlock = (delay = 500) => {
    const body = document.querySelector('body');

    if (bodyLockStatus) {
        // const lockPadding = document.querySelectorAll('[data-lp]');

        setTimeout(() => {
            // for (let index = 0; index < lockPadding.length; index++) {
            //     const el = lockPadding[index];
            //     el.style.paddingRight = '0px';
            // }

            body.style.paddingRight = '0px';
            document.documentElement.classList.remove('lock');
        }, delay);

        bodyLockStatus = false;

        setTimeout(function() {
            bodyLockStatus = true;
        }, delay);
    }
};

export const bodyLockToggle = (delay = 500) => {
    if (document.documentElement.classList.contains('lock')) {
        bodyUnlock(delay);
    } else {
        bodyLock(delay);
    }
};

/**
 * The burger click handler.
 */
export function menuInit() {
    if (document.querySelector('.icon-menu')) {
        document.addEventListener('click', function(e) {
            if (bodyLockStatus && e.target.closest('.icon-menu')) {
                bodyLockToggle();
                document.documentElement.classList.toggle('menu-open');
            }
        });
    }
}

export function menuOpen() {
    bodyLock();
    document.documentElement.classList.add('menu-open');
}

export function menuClose() {
    bodyUnlock();
    document.documentElement.classList.remove('menu-open');
}
