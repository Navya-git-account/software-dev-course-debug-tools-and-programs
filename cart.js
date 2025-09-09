const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
      debugger;  // Pause here on each iteration to inspect cartItems[i] and total
      total += cartItems[i].price;
  }
  return total;
}

function applyDiscount(total, discountRate) {
  debugger;  // Pause here to inspect total and discountRate before calculation
  if (discountRate < 0 || discountRate > 1 || isNaN(discountRate)) {
      console.warn("Invalid discount rate. No discount applied.");
      return total;
  }
  return total - total * discountRate;
}

function generateReceipt(cartItems, total) {
  debugger;  // Pause here to inspect cartItems and total before building receipt
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });

  const finalTotal = isNaN(total) ? 0 : total;
  receipt += `Total: $${finalTotal.toFixed(2)}`;
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
debugger;  // Pause here before starting calculations
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

const totalEl = document.getElementById("total");
const receiptEl = document.getElementById("receipt");

if (totalEl && receiptEl) {
  totalEl.textContent = `Total: $${discountedTotal.toFixed(2)}`;
  receiptEl.textContent = receipt;
} else {
  console.warn("Missing HTML elements with id='total' or id='receipt'");
}

/*
==============================
Debugging Summary and Fixes
==============================

1. Loop Boundary Error in calculateTotal():
------------------------------------------------
- Error: The loop was iterating with condition `i <= cartItems.length`, causing
  an "undefined" access on the last iteration and resulting in NaN for total.
- Fix: Changed loop condition to `i < cartItems.length` to correctly iterate over all items.

2. Discount Rate Validation in applyDiscount():
------------------------------------------------
- Error: No validation was done on the discountRate, which could cause incorrect
  calculations if an invalid discount (e.g., negative or >1) was passed.
- Fix: Added validation to check if discountRate is between 0 and 1 (inclusive),
  and if invalid, returned total without applying discount and logged a warning.

3. NaN Handling in generateReceipt():
------------------------------------------------
- Error: If the total was NaN (e.g., due to previous errors), the receipt showed
  "NaN" instead of a proper total.
- Fix: Added a check using `isNaN(total)` and set total to 0 if invalid before formatting.

4. Safe DOM Element Updates:
------------------------------------------------
- Error: The code assumed DOM elements with ids 'total' and 'receipt' existed.
  If missing, it caused errors when trying to update `textContent`.
- Fix: Added conditional checks to ensure elements exist before updating them;
  logged warnings if elements were missing.

5. Debugging Tools Usage:
------------------------------------------------
- Used Chrome DevTools Console to identify errors and warnings.
- Set breakpoints in Sources tab at critical functions (`calculateTotal`,
  `applyDiscount`, and `generateReceipt`) to step through execution.
- Used `debugger;` statements to pause execution inside loops and before
  calculations to inspect variable values and program flow.
- Used Call Stack panel to trace function calls leading to errors.

These fixes ensure the application calculates totals correctly, applies discounts properly,
handles edge cases (like empty cart or invalid discount), and safely updates the UI.

*/
