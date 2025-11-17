// VoidVerse - Cart Page JavaScript

domReady(async () => {
    const comics = await loadComics();
    const cart = new Cart();

    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Function to render cart
    function renderCart() {
        const cartItems = cart.getItems();

        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            cartTotalContainer.innerHTML = '';
            checkoutBtn.style.display = 'none';
            return;
        }

        cartItemsContainer.innerHTML = cartItems.map(item => {
            const comic = comics.find(c => c.id === item.id);
            if (!comic) return '';
            return createCartItem(comic, item.quantity);
        }).join('');

        const total = cart.getTotal();
        cartTotalContainer.innerHTML = `<p>Total: ${formatPrice(total)}</p>`;
        checkoutBtn.style.display = 'block';

        // Add event listeners to cart item buttons
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const comicId = parseInt(e.target.closest('.cart-item').dataset.id);
                const action = e.target.dataset.action;

                if (action === 'increase') {
                    cart.updateQuantity(comicId, cart.getItems().find(item => item.id === comicId).quantity + 1);
                } else if (action === 'decrease') {
                    cart.updateQuantity(comicId, cart.getItems().find(item => item.id === comicId).quantity - 1);
                }

                renderCart();
            });
        });

        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const comicId = parseInt(e.target.closest('.cart-item').dataset.id);
                cart.removeItem(comicId);
                renderCart();
            });
        });
    }

    // Checkout functionality
    checkoutBtn.addEventListener('click', () => {
        alert('Thank you for your simulated order! Your comics will be delivered to your imagination.');
        cart.clear();
        renderCart();
    });

    // Initial render
    renderCart();
});
