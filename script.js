document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if(mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            question.classList.toggle('active');
            answer.classList.toggle('show');
        });
    });

    // Login/Register Tabs
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const switchToLogin = document.getElementById('switch-to-login');

    if(loginTab && registerTab && loginForm && registerForm) {
        loginTab.addEventListener('click', (e) => {
            e.preventDefault();
            loginTab.classList.add('border-primary', 'text-dark');
            loginTab.classList.remove('border-transparent', 'text-gray-500');
            registerTab.classList.add('border-transparent', 'text-gray-500');
            registerTab.classList.remove('border-primary', 'text-dark');
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        });

        registerTab.addEventListener('click', (e) => {
            e.preventDefault();
            registerTab.classList.add('border-primary', 'text-dark');
            registerTab.classList.remove('border-transparent', 'text-gray-500');
            loginTab.classList.add('border-transparent', 'text-gray-500');
            loginTab.classList.remove('border-primary', 'text-dark');
            registerForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });

        if(switchToLogin) {
            switchToLogin.addEventListener('click', (e) => {
                e.preventDefault();
                loginTab.click();
            });
        }
    }

    // Add to cart animation
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create flying item effect
            const cartIcon = document.querySelector('.cart-icon');
            if(cartIcon) {
                const buttonRect = this.getBoundingClientRect();
                const cartRect = cartIcon.getBoundingClientRect();
                
                const flyingItem = document.createElement('div');
                flyingItem.className = 'flying-item';
                flyingItem.style.position = 'fixed';
                flyingItem.style.left = `${buttonRect.left + buttonRect.width/2}px`;
                flyingItem.style.top = `${buttonRect.top}px`;
                flyingItem.style.width = '20px';
                flyingItem.style.height = '20px';
                flyingItem.style.backgroundColor = '#ff6b8b';
                flyingItem.style.borderRadius = '50%';
                flyingItem.style.zIndex = '1000';
                flyingItem.style.transition = 'all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)';
                
                document.body.appendChild(flyingItem);
                
                setTimeout(() => {
                    flyingItem.style.left = `${cartRect.left + cartRect.width/2}px`;
                    flyingItem.style.top = `${cartRect.top + cartRect.height/2}px`;
                    flyingItem.style.transform = 'scale(0.1)';
                    flyingItem.style.opacity = '0.5';
                }, 10);
                
                setTimeout(() => {
                    flyingItem.remove();
                    // Update cart count
                    const cartCount = document.querySelector('.cart-count');
                    if(cartCount) {
                        let count = parseInt(cartCount.textContent) || 0;
                        cartCount.textContent = count + 1;
                        cartCount.classList.add('animate-bounce');
                        setTimeout(() => {
                            cartCount.classList.remove('animate-bounce');
                        }, 1000);
                    }
                }, 800);
            }
        });
    });

    // Product hover effect
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if(img) {
                img.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if(img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
});