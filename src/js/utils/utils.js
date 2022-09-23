/**
 * Remove class from all array elements.
 * @param {array} array
 * @param {string} className
 */
export function removeClasses(array, className) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove(className);
    }
}

/**
 * Array only unique elements.
 * @param {array} array
 * @returns {array}
 */
export function uniqArray(array) {
    return array.filter((item, index, self) => self.indexOf(item) === index);
}

/**
 * Get index inside parent.
 * @param parent
 * @param element
 * @returns {number}
 */
export function indexInParent(parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
}
