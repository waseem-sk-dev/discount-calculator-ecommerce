interface Item {
  name: string;
  quantity: number;
  price: number;
}

function calculateTotal(orderItems: Item[]): string {
  let totalAmount = 0;

  for (let i = 0; i < orderItems.length; i++) {
    const subTotal = orderItems[i].quantity * orderItems[i].price;
    let discount = 0;

    if (orderItems[i].quantity >= 10) {
      discount = 0.2; // 20% discount
    } else if (orderItems[i].quantity >= 5) {
      discount = 0.1; // 10% discount
    }

    const discountedTotal = subTotal - subTotal * discount;
    totalAmount += discountedTotal;
  }

  return `Order processed. Total amount after discounts: ₹${totalAmount}`;
}

// Sample input
const orderItems: Item[] = [
  { name: "Laptop", quantity: 3, price: 50000 },
  { name: "Mouse", quantity: 10, price: 500 },
  { name: "Keyboard", quantity: 6, price: 1500 },
];

// Output
console.log(calculateTotal(orderItems));
