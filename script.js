let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: Number(price)
    });

    updateCart();

    alert(name + " cart में add हो गया!");
}

function updateCart() {
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>आपका cart खाली है.</p>";
        cartTotal.textContent = "₹0";
        return;
    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong>
                    <p>₹${item.price}</p>
                </div>

                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    cartTotal.textContent = "₹" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function openCart() {
    document.getElementById("cartModal").style.display = "flex";
    updateCart();
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

function placeOrder() {
    if (cart.length === 0) {
        alert("पहले cart में product add करें.");
        return;
    }

    let message = "🛍️ SHOPSY ORDER%0A%0A";
    let total = 0;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ₹${item.price}%0A`;
        total += item.price;
    });

    message += `%0A💰 Total: ₹${total}`;
    message += `%0A%0Aमैं यह order करना चाहता/चाहती हूँ।`;

    // अपना WhatsApp नंबर यहाँ डालें
    const phoneNumber = "919876543210";

    window.open(
        "https://wa.me/" + phoneNumber + "?text=" + message,
        "_blank"
    );
}


// 🔎 Product Search
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", function () {

        const searchText = this.value.toLowerCase();
        const products = document.querySelectorAll(".product-card");

        products.forEach(product => {

            const productText =
                product.textContent.toLowerCase();

            if (productText.includes(searchText)) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });
    });
}


// बाहर click करने पर cart बंद
window.addEventListener("click", function(event) {

    const modal = document.getElementById("cartModal");

    if (event.target === modal) {
        closeCart();
    }

});
