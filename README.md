# 🛠️ Debugging Practice: E-Commerce Application

## 🎯 Objective

Students will apply **debugging tools and strategies** to identify and fix errors in a pre-written JavaScript application.

This exercise emphasizes using:

- The **Console**
- The **Sources tab**
- The **`debugger` statement**
- Practical strategies like **isolating problematic code** and **testing edge cases**

---

## 🛒 Scenario

You are tasked with debugging a simple **JavaScript application** for an **e-commerce platform**.

The application is supposed to:

- Calculate the **total price** of items in a shopping cart
- Apply **discounts**
- Generate a **receipt**

Unfortunately, the application has several bugs that are causing it to malfunction.

---

## 🧩 Your Task

You will:

- 🐛 **Identify and fix errors** using browser developer tools
- 🔍 **Analyze error messages and the call stack** for clues
- 🧪 **Test edge cases** to make sure the program behaves correctly in different scenarios

---

## 🖥️ Instructions

### 1. Set Up the Debugging Environment

- Open the project’s `index.html` file in your **browser**
- Launch **Developer Tools** using:
  - `F12`, or  
  - `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
  
From there, use the **Console**, **Sources tab**, and **debugger statements** to investigate and fix issues in the JavaScript code.

---

Let me know if you'd like to add starter files, error clues, or a checklist of bugs to find!

/*
==========================
Debugging Tools Summary
==========================

1. Console:
- The console revealed warnings for invalid discount rates and helped spot missing DOM elements.
- Console logs like "Starting shopping cart calculation..." confirmed code execution flow.

2. Sources + Breakpoints:
- Set breakpoints inside calculateTotal, applyDiscount, and generateReceipt.
- Stepped through the loop in calculateTotal and saw that the loop condition was off by one (using <= instead of <).
- Verified discountRate validation in applyDiscount to catch invalid values early.

3. Variable Inspection:
- Watched variable 'total' and 'discountRate' to verify values at each stage.
- Noticed total could be NaN if input was bad, added check in generateReceipt to handle it.

4. DOM Checks:
- Console warned about missing DOM elements; added conditionals to prevent runtime errors.

Using these tools, I was able to trace errors precisely and fix them with confidence, improving stability and handling edge cases.

*/

