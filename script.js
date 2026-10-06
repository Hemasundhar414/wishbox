// ===============================
// WISHBOX SHOPPING CART
// ===============================

let cart = [];


// ===============================
// GET HTML ELEMENTS
// ===============================

const cartButtons = document.querySelectorAll(".add-cart");

const cartItems = document.getElementById("cartItems");

const cartTotal = document.getElementById("cartTotal");

const cartCount = document.getElementById("cartCount");

const cartButton = document.getElementById("cartBtn");

const checkoutButton = document.getElementById("checkoutBtn");

const wishlistButton = document.getElementById("wishlistBtn");


// ===============================
// ADD PRODUCT TO CART
// ===============================

cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const giftCard = button.closest(".gift-card");

        const name =
            giftCard.querySelector("h3").textContent.trim();

        const priceText =
            giftCard
                .querySelector(".gift-bottom span")
                .textContent
                .trim();

        const price =
            Number(
                priceText
                    .replace("₹", "")
                    .replace(",", "")
            );

        const icon =
            giftCard
                .querySelector(".gift-image")
                .textContent
                .trim();


        // Check whether product already exists

        const existingProduct =
            cart.find(function (item) {

                return item.name === name;

            });


        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({

                name: name,

                price: price,

                icon: icon,

                quantity: 1

            });

        }


        updateCart();

    });

});


// ===============================
// UPDATE CART
// ===============================

function updateCart() {

    cartItems.innerHTML = "";


    // If cart is empty

    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

        cartTotal.textContent = "₹0";

        cartCount.textContent = "0";

        return;

    }


    let total = 0;

    let itemCount = 0;


    // Display cart products

    cart.forEach(function (item, index) {

        total +=
            item.price * item.quantity;

        itemCount +=
            item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-info">

                <div class="cart-item-icon">
                    ${item.icon}
                </div>

                <div>

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ₹${item.price}
                    </p>

                </div>

            </div>


            <div class="cart-controls">

                <button
                    onclick="decreaseQuantity(${index})">
                    −
                </button>


                <span>
                    ${item.quantity}
                </span>


                <button
                    onclick="increaseQuantity(${index})">
                    +
                </button>


                <button
                    class="remove-btn"
                    onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    // Update total

    cartTotal.textContent =
        "₹" + total;


    // Update cart count

    cartCount.textContent =
        itemCount;

}


// ===============================
// INCREASE QUANTITY
// ===============================

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();

}


// ===============================
// DECREASE QUANTITY
// ===============================

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    updateCart();

}


// ===============================
// REMOVE PRODUCT
// ===============================

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


// ===============================
// CART NAVIGATION
// ===============================

cartButton.addEventListener(
    "click",
    function () {

        document
            .getElementById("cart")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


// ===============================
// WISHLIST
// ===============================

wishlistButton.addEventListener(
    "click",
    function () {

        alert(
            "❤️ Wishlist feature coming soon!"
        );

    }
);


// ===============================
// CHECKOUT
// ===============================

checkoutButton.addEventListener(
    "click",
    function () {

        if (cart.length === 0) {

            alert(
                "🛒 Please add some gifts to your cart first."
            );

        } else {

            alert(
                "🎉 Thank you for shopping with WISHBOX!\n\n" +
                "Checkout feature will be added soon."
            );

        }

    }
);


// ===============================
// CONTACT
// ===============================

const contactButton =
    document.querySelector(".contact-button");


contactButton.addEventListener(
    "click",
    function () {

        alert(
            "📧 Thank you for contacting WISHBOX!\n\n" +
            "We will get back to you soon. ❤️"
        );

    }
);


// ===============================
// START CART
// ===============================

updateCart();


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "🎁 WISHBOX website loaded successfully!"
);