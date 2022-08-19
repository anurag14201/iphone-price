document.getElementById('cart-but').addEventListener('click', function () {
    const plusClicked = document.getElementById('input-value');
    // const inputValue = parseInt(plusClicked).value + 1;
    const inputValue = parseInt(plusClicked.value) + 1;
    console.log(inputValue);
})