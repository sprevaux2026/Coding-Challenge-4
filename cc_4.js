// Task 1: If Statements - Customer Discounts
let purchaseAmount = 999; // Purchase Amount
let finalAmount = purchaseAmount;


if (purchaseAmount > 100) { // Apply a discount if purchase amount is greater than $100
    finalAmount = purchaseAmount * 0.9; // 10% discount applied
}

console.log(`Final amount after discount: $${finalAmount.toFixed(2)}`);

// Task 2: For Loop - Sales Report
let sales = [800, 905, 2000, 750, 999]; // Sales data
let totalSales = 0; 

// Using a for loop to calculate total sales
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}

console.log(`Total Sales: $${totalSales}`);

// Task 3: While Loop - Inventory Depletion
let stock = 100;

// Use a while loop to decrease stock until it reaches 0
while (stock > 0) {
    console.log(`Current stock: ${stock}`);
    stock--;
}
console.log(`Final stock: ${stock}`);
