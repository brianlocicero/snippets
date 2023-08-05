/**
 * A function to find if a series of input values equals 100
 *
 * @param {Array, HTMLCollection} inputs - input elements
 * @return {boolean} sum of input values strictly equals 100 or not
 *
 * @example
 * 
 * const myNumberInputs = document.querySelectorAll('numberInputs');
 * const isHundred(numberInputs);
 */
const isOneHundred = (inputs) => {
    let sum = 0;
    [...inputs].forEach((element) => {
        const itemValue = element.value && Number(element.value); // value (string) to true number
        if (!isNaN(itemValue)) sum += itemValue; // make sure it's *really* a number. if so, add it to sum
    });
    if (sum === 100) return true;
    return false;
}

const isOneHundredJQuery = (inputs) => {
    let sum = 0;
    $.each(inputs, function (_i, item) {
        const itemValue = item.value && Number(item.value);
        if ($.isNumeric(itemValue)) sum += itemValue;
    });
    if (sum === 100) return true;
    return false;
}