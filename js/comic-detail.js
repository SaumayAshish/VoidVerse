// VoidVerse - Comic Detail Page JavaScript

domReady(async () => {
    const comics = await loadComics();
    const urlParams = new URLSearchParams(window.location.search);
    const comicId = urlParams.get('id');

    if (!comicId) {
        document.getElementById('comic-detail').innerHTML = '<p>Comic not found.</p>';
        return;
    }

    const comic = getComicById(comicId);

    if (!comic) {
        document.getElementById('comic-detail').innerHTML = '<p>Comic not found.</p>';
        return;
    }

    // ================================
    // ✅ Populate Comic Detail Elements
    // ================================
    document.getElementById('comic-image').src = comic.cover;
    document.getElementById('comic-image').alt = comic.title;

    document.getElementById('comic-title').textContent = comic.title;
    document.getElementById('comic-creators').textContent = comic.creators;
    document.getElementById('comic-publisher').textContent = comic.publisher;
    document.getElementById('comic-genre').textContent = comic.genre;
    document.getElementById('comic-year').textContent = comic.year;
    document.getElementById('comic-main-characters').textContent = comic.mainCharacters;
    document.getElementById('comic-price').textContent = formatPrice(comic.price);
    document.getElementById('comic-synopsis').textContent = comic.synopsis;

    // ================================
    // Add to cart functionality
    // ================================
    const addToCartBtn = document.getElementById('add-to-cart-btn');

    addToCartBtn.addEventListener('click', () => {
        const cart = new Cart();
        cart.addItem(comic.id);
        alert(`${comic.title} has been added to your cart!`);
    });
});
