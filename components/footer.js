class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
          .footer-link {
            position: relative;
          }
          .footer-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            right: 0;
            width: 0;
            height: 1px;
            background-color: #ffb8c6;
            transition: width 0.3s ease;
          }
          .footer-link:hover::after {
            width: 100%;
            left: 0;
            right: auto;
          }
          .social-icon {
            transition: all 0.3s ease;
          }
          .social-icon:hover {
            transform: translateY(-3px);
          }
        </style>
        <footer class="bg-dark text-white pt-16 pb-8">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <!-- About Column -->
              <div>
                <h3 class="text-xl font-bold mb-6 flex items-center">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm mr-2">ن</div>
                  نیلا بیوتی
                </h3>
                <p class="text-gray-300 mb-4">فروشگاه تخصصی لوازم آرایشی و بهداشتی با بهترین برندهای روز دنیا و کیفیت عالی</p>
                <div class="flex space-x-4">
                  <a href="#" class="social-icon bg-white/10 hover:bg-primary text-white p-2 rounded-full">
                    <i data-feather="instagram" class="w-4 h-4"></i>
                  </a>
                  <a href="#" class="social-icon bg-white/10 hover:bg-primary text-white p-2 rounded-full">
                    <i data-feather="twitter" class="w-4 h-4"></i>
                  </a>
                </div>
              </div>
  
              <!-- Quick Links -->
              <div>
                <h3 class="text-lg font-bold mb-6">لینک‌های سریع</h3>
                <ul class="space-y-3">
                  <li><a href="index.html" class="footer-link text-gray-300 hover:text-white">خانه</a></li>
                  <li><a href="about.html" class="footer-link text-gray-300 hover:text-white">درباره ما</a></li>
                  <li><a href="services.html" class="footer-link text-gray-300 hover:text-white">خدمات ما</a></li>
                  <li><a href="shop.html" class="footer-link text-gray-300 hover:text-white">فروشگاه</a></li>
                  <li><a href="contact.html" class="footer-link text-gray-300 hover:text-white">تماس با ما</a></li>
                </ul>
              </div>
  
              <!-- Customer Service -->
              <div>
                <h3 class="text-lg font-bold mb-6">خدمات مشتریان</h3>
                <ul class="space-y-3">
                  <li><a href="#" class="footer-link text-gray-300 hover:text-white">سوالات متداول</a></li>
                  <li><a href="#" class="footer-link text-gray-300 hover:text-white">شرایط بازگشت کالا</a></li>
                  <li><a href="#" class="footer-link text-gray-300 hover:text-white">روش‌های پرداخت</a></li>
                  <li><a href="#" class="footer-link text-gray-300 hover:text-white">راهنمای اندازه‌گیری</a></li>
                  <li><a href="#" class="footer-link text-gray-300 hover:text-white">حریم خصوصی</a></li>
                </ul>
              </div>
  
              <!-- Contact Info -->
              <div>
                <h3 class="text-lg font-bold mb-6">اطلاعات تماس</h3>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <i data-feather="map-pin" class="w-4 h-4 mt-1 mr-2 text-primary"></i>
                    <span class="text-gray-300">تهران، خیابان ولیعصر، کوچه فلان، پلاک ۱۲۳</span>
                  </li>
                  <li class="flex items-center">
                    <i data-feather="phone" class="w-4 h-4 mr-2 text-primary"></i>
                    <span class="text-gray-300">۰۲۱-۱۲۳۴۵۶۷۸</span>
                  </li>
                  <li class="flex items-center">
                    <i data-feather="mail" class="w-4 h-4 mr-2 text-primary"></i>
                    <span class="text-gray-300">info@nilabeauty.ir</span>
                  </li>
                  <li class="flex items-center">
                    <i data-feather="clock" class="w-4 h-4 mr-2 text-primary"></i>
                    <span class="text-gray-300">شنبه تا چهارشنبه: ۹ صبح تا ۸ شب</span>
                  </li>
                </ul>
              </div>
            </div>
  
            <!-- Copyright -->
            <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>تمامی حقوق برای نیلا بیوتی محفوظ است © ۱۴۰۲</p>
            </div>
          </div>
        </footer>
      `;
  }
}

customElements.define("custom-footer", CustomFooter);
