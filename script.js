function calculate() {
    // Read unit price input
    var unitPriceInput = document.getElementById("unitPrice");
    var unitPrice = unitPriceInput.value.replace(/,/g, ''); // Remove commas before parsing
    var originalUnitPrice = unitPrice; // Store the original unit price
    unitPrice = parseFloat(unitPrice); // Parse unit price for calculation
    unitPriceInput.value = originalUnitPrice; // Set the original unit price back to the input field

    // Read other input values
    var downPaymentRate = parseFloat(document.getElementById("downPaymentRate").value);
    var loanTerm = parseInt(document.getElementById("loanTerm").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);

    // Calculate down payment
    var downPayment = unitPrice * downPaymentRate;
    document.getElementById("downPayment").value = "EGP " + downPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Calculate financed amount
    var financedAmount = unitPrice - downPayment;

    // Calculate full amount
    var fullAmount = unitPrice;

    // Calculate monthly installment
    var monthlyInterestRate = (interestRate / 100) / 12;
    var numberOfPayments = loanTerm * 12;
    var monthlyInstallment = (financedAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    document.getElementById("monthlyInstallment").value = "EGP " + monthlyInstallment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Calculate total amount
    var totalAmount = monthlyInstallment * numberOfPayments;
    document.getElementById("totalAmount").value = "EGP " + totalAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
