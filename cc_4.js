// Task 1: If Statements - Customer Discounts
let purchaseAmount = 999; // Purchase Amount
let finalAmount = purchaseAmount;

// Apply a discount if purchase amount is greater than $100
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9; // 10% discount applied
}

console.log(`Final amount after discount: $${finalAmount.toFixed(2)}`);
