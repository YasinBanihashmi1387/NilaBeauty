class CustomHeader extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          .header-container {
            background-color: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          }
          .nav-link {
            position: relative;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            right: 0;
            width: 0;
            height: 2px;
            background-color: #ff6b8b;
            transition: width 0.3s ease;
          }
          .nav-link:hover::after {
            width: 100%;
            left: 0;
            right: auto;
          }
          .cart-count {
            top: -8px;
            left: -8px;
          }
          @media (max-width: 768px) {
            .mobile-menu {
              transition: all 0.3s ease;
              max-height: 0;
              overflow: hidden;
            }
            .mobile-menu.show {
              max-height: 500px;
            }
          }
        </style>
        <header class="header-container sticky top-0 z-50">
          <div class="container mx-auto px-4">
            <div class="flex justify-between items-center py-4">
              <!-- Logo -->
              <a href="index.html" class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">ن</div>
                <span class="mr-3 text-xl font-bold text-dark">نیلا بیوتی</span>
              </a>
  
              <!-- Desktop Navigation -->
              <nav class="hidden md:flex items-center space-x-1 space-x-reverse">
                <a href="index.html" class="nav-link px-4 py-2 text-gray-700 hover:text-primary">خانه</a>
                <a href="about.html" class="nav-link px-4 py-2 text-gray-700 hover:text-primary">درباره ما</a>
                <a href="services.html" class="nav-link px-4 py-2 text-gray-700 hover:text-primary">خدمات</a>
                <a href="shop.html" class="nav-link px-4 py-2 text-gray-700 hover:text-primary">فروشگاه</a>
                <a href="contact.html" class="nav-link px-4 py-2 text-gray-700 hover:text-primary">تماس با ما</a>
              </nav>
  
              <!-- User Actions -->
              <div class="flex items-center space-x-4 space-x-reverse">
                <a href="login.html" class="flex items-center text-gray-700 hover:text-primary">
                  <i data-feather="user" class="w-5 h-5"></i>
                  <span class="mr-1 hidden sm:inline">ورود / ثبت نام</span>
                </a>
                <a href="#" class="relative flex items-center text-gray-700 hover:text-primary">
                  <i data-feather="shopping-cart" class="w-5 h-5 cart-icon"></i>
                  <span class="cart-count absolute bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
                </a>
  
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-button" class="md:hidden text-gray-700 focus:outline-none">
                  <i data-feather="menu" class="w-6 h-6"></i>
                </button>
              </div>
            </div>
  
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="mobile-menu md:hidden hidden">
              <div class="px-2 pt-2 pb-4 space-y-1">
                <a href="index.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-pink-50">خانه</a>
                <a href="about.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-pink-50">درباره ما</a>
                <a href="services.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-pink-50">خدمات</a>
                <a href="shop.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-pink-50">فروشگاه</a>
                <a href="contact.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-pink-50">تماس با ما</a>
              </div>
            </div>
          </div>
        </header>
      `;
    }
  }
  
  customElements.define('custom-header', CustomHeader);