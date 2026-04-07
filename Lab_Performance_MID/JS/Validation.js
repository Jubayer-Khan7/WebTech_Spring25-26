const unitPrice = 1000;
const days = 30;

const quantityInput = document.getElementById("quantity");
const totalInput = document.getElementById("total");
const errorMsg = document.getElementById("errorMsg");

quantityInput.addEventListener("input", function () {
    let quantity = parseInt(quantityInput.value);

    
    errorMsg.innerHTML = "";

    if (quantity < 0) {
        errorMsg.innerHTML = "Quantity cannot be less than 0!";
        quantity = 0;
        quantityInput.value = 0;
    }

    if (isNaN(quantity)) {
        quantity = 0;
    }

    let total = unitPrice * quantity * days;
    totalInput.value = total;

    if (total > 1000) {
        alert("You are eligible for a gift coupon!");
    }
});