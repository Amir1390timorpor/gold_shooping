let cart = [];
let totalPrice = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        let name = button.getAttribute('data-name');
        let price = parseInt(button.getAttribute('data-price'));

        cart.push({ name, price });
        totalPrice += price;

        updateCart();
    });
});

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let total = document.getElementById('total-price');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price.toLocaleString()} تومان`;
        cartItems.appendChild(li);
    });

    total.textContent = totalPrice.toLocaleString();
}
