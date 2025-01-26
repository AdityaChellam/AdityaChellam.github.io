// Sample product data with static images
const products = [
  { id: 1, title: "Server Storage", price: 10.99, image: "img/product1.png" },
  { id: 2, title: "Cameras", price: 12.99, image: "img/product2.png" },
  { id: 3, title: "Touchpad", price: 8.99, image: "img/product3.png" },
  { id: 4, title: "Collaboration Suite", price: 15.99, image: "img/product4.png" },
  { id: 5, title: "Video Device", price: 11.99, image: "img/background.png" },
  { id: 6, title: "GPU", price: 9.99, image: "img/product6.png" },
  { id: 7, title: "Enduser Devices", price: 14.99, image: "img/product7.png" },
  { id: 8, title: "Watches", price: 19.99, image: "img/product8.png" }
];

const cart = [];

// Populate products
const productGrid = document.getElementById("product-grid");
products.forEach(product => {
  const productCard = document.createElement("div");
  productCard.className = "product-card";
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h3 class="product-title">${product.title}</h3>
    <p class="product-price">$${product.price.toFixed(2)}</p>
    <button class="add-to-cart" id="add-to-cart-${product.id}" data-id="${product.id}">Add to Cart</button>
  `;
  productGrid.appendChild(productCard);
});

// Add to cart functionality
productGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const productId = parseInt(e.target.getAttribute("data-id"));
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
  }
});

// Render cart
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const cartItemCard = document.createElement("div");
    cartItemCard.className = "cart-item-card";
    cartItemCard.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="cart-item-details">
        <p class="cart-item-title">${item.title}</p>
        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
      </div>
    `;
    cartItems.appendChild(cartItemCard);
  });
}