//Common Functions for iphone
function quantityControler(itemId, isAdd) {
    const itemQty = document.getElementById(itemId);
    if(isAdd == true) {
        itemQty.value = parseInt(itemQty.value) + 1;
    }
    else if (itemQty.value > 1) { 
    itemQty.value = parseInt(itemQty.value) - 1; 
    }
}

function phonePriceUpdater(itemId, itemPriceId) {
    const phoneQty = document.getElementById(itemId);
    const itemPrice = document.getElementById(itemPriceId);
    itemPrice.innerText = parseInt(phoneQty.value) * 1219;
}

// Common functions for iphone case
function caseQtyControler(isIncreasing) {
    const caseQty = document.getElementById('case-qty');
    if(isIncreasing) {
        caseQty.value = parseInt(caseQty.value) + 1;
    }
    else if(caseQty.value > 1) {
        caseQty.value = parseInt(caseQty.value) - 1;
    }
}

function casePriceUpdate() {
    const casePrice = document.getElementById('case-price');
    const caseQty = document.getElementById('case-qty');
    casePrice.innerText = parseInt(caseQty.value) * 59;
}

// Subtotal, Tax, Total common function for both Iphone & Iphone case
function updateGrandTotal() {
    const iphonePrice = document.getElementById('iphone-price').innerText;
    const casePrice = document.getElementById('case-price').innerText;
    const subTotal = document.getElementById('subtotal');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');

    subTotal.innerText = parseFloat(iphonePrice) + parseFloat(casePrice);
    tax.innerText = (parseFloat(subTotal.innerText)*5) / 100;
    total.innerText = parseFloat(subTotal.innerText) + parseFloat(tax.innerText);
}

// iphone Qty increase
document.getElementById('phone-plus').addEventListener('click', function() {
    quantityControler('phone-qty', true);
    phonePriceUpdater('phone-qty', 'iphone-price');
    updateGrandTotal();
})

// iphone Qty decrease
document.getElementById('phone-minus').addEventListener('click', function() {
    quantityControler('phone-qty');
    phonePriceUpdater('phone-qty', 'iphone-price');
    updateGrandTotal();
})

// Case Qty increase
document.getElementById('case-plus').addEventListener('click', function() {
    caseQtyControler(true);
    casePriceUpdate();
    updateGrandTotal();
})

// Case Qty decrease
document.getElementById('case-minus').addEventListener('click', function() {
    caseQtyControler(false);
    casePriceUpdate();
    updateGrandTotal();
})