let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;

    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.innerText = `${item.name} - ${item.price.toLocaleString()} تومان`;
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').innerText = totalPrice.toLocaleString();
}
