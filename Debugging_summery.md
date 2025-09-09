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
