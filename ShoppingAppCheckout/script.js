// Sample cart data for rendering the cart items
const cartItems = [
  { id: 1, title: "Product 1", price: 10.99, quantity: 1, image: "img/product1.png" },
  { id: 2, title: "Product 2", price: 12.99, quantity: 2, image: "img/product2.png" },
  { id: 3, title: "Product 3", price: 8.99, quantity: 1, image: "img/product3.png" }
];

// Function to populate cart items
function renderCartItems() {
  const cartSummary = document.getElementById("cart-summary");
  cartSummary.innerHTML = ""; // Clear previous items

  cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="cart-item-details">
        <p class="cart-item-title">${item.title}</p>
        <p class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</p>
      </div>
    `;
    cartSummary.appendChild(cartItem);
  });
}

// Function to calculate and display order summary
function renderOrderSummary() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("tax").textContent = `$${tax.toFixed(2)}`;
  document.getElementById("total").textContent = `$${total.toFixed(2)}`;
}

// Checkout button functionality
document.getElementById("checkout-btn").addEventListener("click", () => {
  alert("Thank you for your purchase!");
  // Redirect to a thank-you page or clear the cart
});

// Initialize the checkout page
document.addEventListener("DOMContentLoaded", () => {
  renderCartItems();
  renderOrderSummary();
});
