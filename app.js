function updateProductNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let productNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    caseInput.value = productNumber;
    // Update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate  total
    calculateTotal();

}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // console.log(subTotal);
    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = subTotal;
    document.getElementById('total-price').innerText = totalPrice;

}
// Phone increase decrease events 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

// Handle case increase decrease events 

document.getElementById('case-plus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    updateProductNumber('case', 59, true);

});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
    // caseInput.value = parseInt(caseNumber) - 1;

});

