# Bulk Order Discount Calculator

A simple TypeScript-based discount calculator for an e-commerce platform. This system handles bulk orders, calculates the total cost of items, and applies discounts based on the quantity of each item.

---

## Problem Statement

The system must calculate the total cost of a bulk order. For each item, the system calculates the subtotal and applies a discount based on the quantity ordered.

---

## Features

- Loops through the list of items in the order
- Calculates subtotal for each item (price * quantity)
- Applies discounts based on quantity:
  - Quantity >= 10: 20% discount
  - Quantity >= 5 and < 10: 10% discount
  - Quantity < 5: No discount
- Returns total amount after discounts

---

## Business Logic

1. For each item in the `orderItems` array:
   - Calculate the subtotal: `price * quantity`
   
2. Apply discounts based on the quantity of the item:
   - **Quantity >= 10**: 20% discount  
   - **Quantity >= 5 and < 10**: 10% discount  
   - **Quantity < 5**: No discount  

3. Accumulate the discounted subtotals into a `totalAmount`.

4. Return a message:  
   `"Order processed. Total amount after discounts: ₹<amount>"`

---

## Sample Input

```js
const orderItems = [
  { name: "Laptop", quantity: 3, price: 50000 },
  { name: "Mouse", quantity: 10, price: 500 },
  { name: "Keyboard", quantity: 6, price: 1500 }
];
---
 ## Sample Output
```js
Order processed. Total amount after discounts: ₹171900

