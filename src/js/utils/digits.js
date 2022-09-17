/**
 * Get digits from string
 * @param item
 * @returns {number}
 */
export function getDigFromString(item) {
    return parseInt(item.replace(/[^\d]/g, ''), 10);
}

/**
 * Add spaces for digits bits. (123456 => 123 456)
 * @param item
 * @returns {string}
 */
export function getDigFormat(item) {
    return item.toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}
