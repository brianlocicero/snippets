/**
 * A function to find if a series of input values equals 100
 *
 * @param {Array, HTMLCollection} inputs - input elements
 * @param {Number} amount (optional) the amount or percentage you want 
 * @return {boolean} sum of input values strictly equals the amount or not
 *
 * @example
 * 
 * const myNumberInputs = document.querySelectorAll('numberInputs');
 * const isHundred(numberInputs);
 */
const checkInputsSum = (inputs, amount) => {
    let sum = 0;
    const checkAmount = amount || 100;
    [...inputs].forEach((element) => {
        const itemValue = element.value && Number(element.value); // value (string) to true number
        if (itemValue && !isNaN(itemValue)) sum += itemValue; // final check, then add to sum
    });
    if (sum === checkAmount) return true;
    return false;
}

// jquery version
const checkInputsSumJQuery = (inputs, amount) => {
    let sum = 0;
    const checkAmount = amount || 100;
    $.each(inputs, function (_i, item) {
        const itemValue = item.value && Number(item.value);
        if ($.isNumeric(itemValue)) sum += itemValue;
    });
    if (sum === checkAmount) return true;
    return false;
}