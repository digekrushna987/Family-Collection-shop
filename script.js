let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    document.getElementById("cart-count").innerText = cart.length;
    alert(name + " added to cart!");
}

function viewCart() {
    let total = 0;
    let items = "";

    cart.forEach(item => {
        items += item.name + " - ₹" + item.price + "\n";
        total += item.price;
    });

    alert("Cart Items:\n" + items + "\nTotal: ₹" + total);
}