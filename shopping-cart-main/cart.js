function getUpDates(product, price, isIncreasing) {
    const plusClicked = document.getElementById(product + '-Number');
    let inputValue = plusClicked.value;
    if (isIncreasing == true) {
        inputValue = parseInt(inputValue) + 1;

    }
    else if (inputValue > 0) {
        inputValue = parseInt(inputValue) - 1;

    }
    plusClicked.value = inputValue;
    const caseTotal = document.getElementById(product + '-price');
    caseTotal.innerText = inputValue * price;
}
document.getElementById('phone-plus').addEventListener('click', function () {
    getUpDates('phone', '1219', true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    getUpDates('phone', '1219', false);
})



document.getElementById('case-plus').addEventListener('click', function () {
    // const plusClicked = document.getElementById('input-value');
    // const inputValue = plusClicked.value;
    // plusClicked.value = parseInt(inputValue) + 1;
    getUpDates('case', '59', true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    // const plusClicked = document.getElementById('input-value');
    // const inputValue = plusClicked.value;
    // plusClicked.value = parseInt(inputValue) - 1;
    getUpDates('case', '59', false);
})

