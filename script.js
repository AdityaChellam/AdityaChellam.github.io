document.addEventListener("DOMContentLoaded", () => {
    const slowImageContainer = document.querySelector(".slow-image");
  
    // Simulate slow image loading (5 seconds delay)
    setTimeout(() => {
      const img = document.createElement("img");
      img.src = "https://via.placeholder.com/150";
      img.alt = "Product 1";
      slowImageContainer.innerHTML = "";
      slowImageContainer.appendChild(img);
    }, 5000);
  });
  