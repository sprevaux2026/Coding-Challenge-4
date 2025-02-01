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
let stock = 10;

// Use a while loop to decrease stock until it reaches 0
while (stock > 0) {
    console.log(`Current stock: ${stock}`);
    stock--;
}
console.log(`Final stock: ${stock}`);

// Task 4: Do...While Loop - Customer Survey
let responses = 0;

// Simulate collecting responses until responses reach 3
do {
    responses++;
    console.log(`Response count: ${responses}`);
} while (responses < 3);

// Task 5: For...In Loop - Employee Information
let employee = {
    name: "Peter Parker",
    position: "Hero",
    salary: 750000
};

// Iterate over the employee object properties
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

// Task 6: For...Of Loop - Product Listings
let products = ["Reactor", "Tank", "Aircraft"];

// Iterate over each product using for...of loop
for (let product of products) {
    console.log(`Product: ${product}`);
}

// Task 7: forEach() Method - Order Processing
let orderIDs = [101, 102, 103];

// Using forEach to go over order IDs
orderIDs.forEach(orderID => {
    console.log(`Order ID: ${orderID}`);
});

// Task 8: Function Declaration - Tax Calculation
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

let tax = calculateTax(2000, 0.07); //$2000 with a 7% tax rate
console.log(`Calculated Tax: $${tax.toFixed(2)}`);
