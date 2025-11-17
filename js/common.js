// VoidVerse - Common JavaScript Functions

// Load comics data
async function loadComics() {
    // Since data is static, we'll import it directly
    // In a real scenario, this could fetch from a JSON file
    return comics;
}

// Cart management using localStorage
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('comicverse-cart')) || [];
    }

    addItem(comicId, quantity = 1) {
        const existingItem = this.items.find(item => item.id === comicId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ id: comicId, quantity });
        }
        this.save();
    }

    removeItem(comicId) {
        this.items = this.items.filter(item => item.id !== comicId);
        this.save();
    }

    updateQuantity(comicId, quantity) {
        const item = this.items.find(item => item.id === comicId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeItem(comicId);
            } else {
                this.save();
            }
        }
    }

    getItems() {
        return this.items;
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            const comic = comics.find(c => c.id === item.id);
            return total + (comic ? comic.price * item.quantity : 0);
        }, 0);
    }

    save() {
        localStorage.setItem('comicverse-cart', JSON.stringify(this.items));
    }

    clear() {
        this.items = [];
        this.save();
    }
}

// Utility functions
function formatPrice(price) {
    return `₹${price.toFixed(0)}`;
}

function getComicById(id) {
    return comics.find(comic => comic.id === parseInt(id));
}

function createComicCard(comic) {
    return `
        <div class="comic-card">
            <div class="comic-cover" style="background-image: url('${comic.cover}')"></div>
            <div class="comic-info">
                <h3 class="comic-title">${comic.title}</h3>
                <p class="comic-price">${formatPrice(comic.price)}</p>
                <a href="comic-detail.html?id=${comic.id}" class="add-to-cart-btn">View Details</a>
            </div>
        </div>
    `;
}

function createCartItem(comic, quantity) {
    return `
        <div class="cart-item" data-id="${comic.id}">
            <img src="${comic.cover}" alt="${comic.title}">
            <div class="cart-item-info">
                <h3>${comic.title}</h3>
                <p>${formatPrice(comic.price)}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" data-action="decrease">-</button>
                    <span class="quantity">${quantity}</span>
                    <button class="quantity-btn" data-action="increase">+</button>
                    <button class="remove-btn">Remove</button>
                </div>
            </div>
        </div>
    `;
}

// DOM ready function
function domReady(fn) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        fn();
    }
}

/* -----------------------------------------------
   ADDING NAVIGATION UPDATE BEFORE EXPORT SECTION
------------------------------------------------ */

// Update navigation based on login status
function updateNavigation() {
    const user = JSON.parse(localStorage.getItem('voidverse-user'));
    const navLinks = document.querySelector('.nav-links');

    if (navLinks) {
        const existingLoginLink =
            navLinks.querySelector('a[href="login.html"]') ||
            navLinks.querySelector('a[href="#"]');

        if (user && user.loggedIn) {
            // User is logged in - show Sign Out
            if (existingLoginLink) {
                existingLoginLink.textContent = 'Sign Out';
                existingLoginLink.href = '#';
                existingLoginLink.removeEventListener('click', handleLoginClick);
                existingLoginLink.addEventListener('click', handleLogoutClick);
            } else {
                const logoutLink = document.createElement('li');
                logoutLink.innerHTML = '<a href="#" id="logout-link">Sign Out</a>';
                navLinks.appendChild(logoutLink);
                document.getElementById('logout-link').addEventListener('click', handleLogoutClick);
            }
        } else {
            // User is not logged in - show Sign In
            if (existingLoginLink) {
                existingLoginLink.textContent = 'Sign In';
                existingLoginLink.href = 'login.html';
                existingLoginLink.removeEventListener('click', handleLogoutClick);
                existingLoginLink.addEventListener('click', handleLoginClick);
            } else {
                const loginLink = document.createElement('li');
                loginLink.innerHTML = '<a href="login.html">Sign In</a>';
                navLinks.appendChild(loginLink);
            }
        }
    }
}

function handleLoginClick(e) {
    // Optional: Redirect to login page or show modal
}

function handleLogoutClick(e) {
    e.preventDefault();
    localStorage.removeItem('voidverse-user');
    alert('Signed out successfully!');
    updateNavigation();
}

// Initialize navigation on page load
domReady(() => {
    updateNavigation();
});

/* -----------------------------------------------
                 EXPORT SECTION
------------------------------------------------ */

window.Cart = Cart;
window.loadComics = loadComics;
window.formatPrice = formatPrice;
window.getComicById = getComicById;
window.createComicCard = createComicCard;
window.createCartItem = createCartItem;
window.domReady = domReady;
