class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
            .mobile-menu-overlay {
                transition: opacity 0.3s ease;
            }
            .mobile-menu-panel {
                transition: transform 0.35s ease;
            }
        </style>

        <header class="header-container sticky top-0 z-50 bg-white shadow">
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

                    <!-- Actions + Mobile Button -->
                    <div class="flex items-center space-x-4 space-x-reverse">
                        <a href="login.html" class="flex items-center text-gray-700 hover:text-primary">
                            <i data-feather="user" class="w-5 h-5"></i>
                            <span class="mr-1 hidden sm:inline">ورود / ثبت نام</span>
                        </a>

                        <button id="mobile-menu-button" class="md:hidden text-gray-700 focus:outline-none">
                            <i data-feather="menu" class="w-6 h-6"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- FULL SCREEN MOBILE MENU -->
        <div id="mobile-menu-overlay" class="fixed inset-0 bg-black/50 mobile-menu-overlay opacity-0 pointer-events-none z-40"></div>

        <div id="mobile-menu-panel"
             class="fixed top-0 right-0 h-full w-72 bg-white shadow-xl mobile-menu-panel transform translate-x-full z-50">

            <div class="flex justify-between items-center p-4 border-b">
                <span class="font-bold text-lg text-dark">منو</span>
                <button id="close-mobile-menu" class="text-gray-600 hover:text-primary">
                    <i data-feather="x" class="w-6 h-6"></i>
                </button>
            </div>

            <!-- LINKS -->
            <div class="p-4 space-y-4">
                <a href="index.html" class="block text-gray-700 hover:text-primary text-lg">خانه</a>
                <a href="about.html" class="block text-gray-700 hover:text-primary text-lg">درباره ما</a>
                <a href="services.html" class="block text-gray-700 hover:text-primary text-lg">خدمات</a>
                <a href="shop.html" class="block text-gray-700 hover:text-primary text-lg">فروشگاه</a>
                <a href="contact.html" class="block text-gray-700 hover:text-primary text-lg">تماس با ما</a>
            </div>
        </div>
        `;

    feather.replace();

    const mobileBtn = this.querySelector("#mobile-menu-button");
    const closeBtn = this.querySelector("#close-mobile-menu");
    const overlay = this.querySelector("#mobile-menu-overlay");
    const panel = this.querySelector("#mobile-menu-panel");

    const openMenu = () => {
      overlay.classList.remove("pointer-events-none");
      overlay.classList.add("opacity-100");
      panel.classList.remove("translate-x-full");
    };

    const closeMenu = () => {
      overlay.classList.add("pointer-events-none");
      overlay.classList.remove("opacity-100");
      panel.classList.add("translate-x-full");
    };

    mobileBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
  }
}

customElements.define("custom-header", CustomHeader);
