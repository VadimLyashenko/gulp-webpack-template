/**
 * Remove class from all array elements
 * @param {array} array
 * @param {string} className
 */
export function removeClasses(array, className) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove(className);
    }
}
