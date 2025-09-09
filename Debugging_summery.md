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

/*
===============================================
🛠️ How Debugging Tools Helped Resolve Issues
===============================================

1. 🧪 Console Tab:
------------------
- The Console showed multiple syntax and runtime errors, such as:
  - Uncaught ReferenceError for undefined variables.
  - NaN results due to improper mathematical operations.
- These messages provided exact line numbers, making it easier to jump directly to the faulty code.

2. 🎯 Sources Tab + Breakpoints:
-------------------------------
- I set breakpoints inside the following functions:
  - calculateTotal(cart)
  - applyDiscount(total, discountRate)
  - generateReceipt(cart, discountRate)
- This allowed me to step through the code line-by-line and observe how variables changed over time.
- I discovered that the discount calculation was applying incorrectly because of a logic error in how the total was reduced.

3. ⛔ Call Stack:
----------------
- When errors occurred, I used the Call Stack panel to trace exactly which function caused the issue and how execution got there.
- This helped pinpoint indirect bugs, like incorrect values being passed between functions.

4. 🕵️‍♂️ Watch Panel and Scope Inspection:
------------------------------------------
- I added variables to the "Watch" list to monitor their values during execution.
- I used the "Scope" section to inspect local and global variables at each step.
- This made it easier to catch issues like:
  - Empty arrays not being handled.
  - Discount rate values being out of expected range.

5. 🧷 debugger; Statements:
---------------------------
- I temporarily inserted `debugger;` in loops and conditionals to pause the code at strategic places.
- This let me check the internal state and fix issues like:
  - Loop not iterating due to incorrect length checks.
  - Incorrect item prices being added to total.

6. ✅ Final Testing:
--------------------
- After fixing the bugs, I used DevTools again to:
  - Verify no new errors appeared in the console.
  - Confirm expected output for edge cases like an empty cart or a 100% discount.

Overall, Chrome Developer Tools gave me full visibility into the program's execution flow and helped isolate each bug quickly and precisely.

*/
