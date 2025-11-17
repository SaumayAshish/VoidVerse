// VoidVerse - Login Page JavaScript

domReady(() => {
    const loginBtn = document.getElementById('login-btn');
    const signupLink = document.getElementById('signup-link');

    // Simple login simulation (in a real app, this would connect to a backend)
    loginBtn.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Password strength check
            if (password.length < 6) {
                alert('Password must be at least 6 characters long');
                return;
            }

            // Simulate successful login
            localStorage.setItem('voidverse-user', JSON.stringify({ email, loggedIn: true }));
            alert('Successfully signed in! Welcome to VoidVerse!');
            window.location.href = 'index.html';
        } else {
            alert('Please fill in all fields');
        }
    });

    // Toggle to signup mode
    signupLink.addEventListener('click', () => {
        const loginContainer = document.querySelector('.login-container');
        loginContainer.innerHTML = `
            <h1 class="section-title">Sign Up for VoidVerse</h1>
            <div class="login-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" required>
                </div>
                <button class="add-to-cart-btn" id="signup-btn">Sign Up</button>
                <p class="signup-link">Already have an account? <a href="#" id="signin-link">Sign In</a></p>
            </div>
        `;

        // Re-attach event listeners for signup
        document.getElementById('signup-btn').addEventListener('click', () => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (name && email && password) {
                // Simulate successful signup
                localStorage.setItem('voidverse-user', JSON.stringify({ name, email, loggedIn: true }));
                alert('Account created successfully!');
                window.location.href = 'index.html';
            } else {
                alert('Please fill in all fields');
            }
        });

        document.getElementById('signin-link').addEventListener('click', () => {
            location.reload(); // Reload to show login form
        });
    });

    // Check if user is already logged in
    const user = JSON.parse(localStorage.getItem('voidverse-user'));
    if (user && user.loggedIn) {
        // Show logout option
        const navLinks = document.querySelector('.nav-links');
        const loginLink = navLinks.querySelector('a[href="login.html"]');
        loginLink.textContent = 'Sign Out';
        loginLink.href = '#';
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('voidverse-user');
            alert('Signed out successfully!');
            location.reload();
        });
    }
});
