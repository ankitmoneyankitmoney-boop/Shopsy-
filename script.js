let cart = [];

function addToCart(name, price) {
  cart.push({
    name: name,
    price: price
  });

  updateCart();

  alert(name + " added to cart!");
}

function updateCart() {

  document.getElementById("cartCount").innerText = cart.length;

  let items = document.getElementById("cartItems");

  items.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    total += item.price;

    items.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>

        <span>
          ₹${item.price}

          <button onclick="removeItem(${index})">
            ❌
          </button>
        </span>
      </div>
    `;
  });

  document.getElementById("cartTotal").innerText = total;
}

function removeItem(index) {

  cart.splice(index, 1);

  updateCart();
}

function openCart() {

  document.getElementById("cartModal").style.display = "flex";
}

function closeCart() {

  document.getElementById("cartModal").style.display = "none";
}

function placeOrder() {

  if (cart.length === 0) {

    alert("Your cart is empty!");

    return;
  }

  let message =
    "Hello Shopsy,%0A%0AI want to place an order:%0A";

  let total = 0;

  cart.forEach(item => {

    message +=
      "- " + item.name +
      " - ₹" + item.price + "%0A";

    total += item.price;
  });

  message += "%0ATotal: ₹" + total;

  /* अपना WhatsApp नंबर यहाँ डालना है */
  let phone = "919876543210";

  window.open(
    "https://wa.me/" +
    phone +
    "?text=" +
    message,
    "_blank"
  );
}
