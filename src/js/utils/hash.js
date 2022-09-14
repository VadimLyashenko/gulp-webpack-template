/**
 * Get a hash from url.
 * @returns {string}
 */
export function getHash() {
    if (location.hash) {
        return location.hash.replace('#', '');
    }
}

/**
 * Set a hash in url.
 * @param hash
 */
export function setHash(hash) {
    hash = hash ? `#${hash}` : window.location.href.split('#')[0];
    history.pushState('', '', hash);
}
