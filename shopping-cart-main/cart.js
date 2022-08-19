function getUpDates(product, price, isIncreasing) {
    const inputNumber = document.getElementById(product + '-Number');
    let inputValue = inputNumber.value;
    if (isIncreasing == true) {
        inputValue = parseInt(inputValue) + 1;

    }
    else if (inputValue > 0) {
        inputValue = parseInt(inputValue) - 1;

    }
    inputNumber.value = inputValue;
    const caseTotal = document.getElementById(product + '-price');
    caseTotal.innerText = inputValue * price;
}
document.getElementById('phone-plus').addEventListener('click', function () {
    getUpDates('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    getUpDates('phone', 1219, false);
})



document.getElementById('case-plus').addEventListener('click', function () {
    // const inputNumber = document.getElementById('input-value');
    // const inputValue = inputNumberd.value;
    // inputNumberd.value = parseInt(inputValue) + 1;
    getUpDates('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    // const inputNumberd = document.getElementById('input-value');
    // const inputValue = inputNumberd.value;
    // inputNumberd.value = parseInt(inputValue) - 1;
    getUpDates('case', 59, false);
})

