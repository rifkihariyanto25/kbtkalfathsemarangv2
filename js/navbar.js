// Navbar Component for TK-KB ISLAM AL FATH
function createNavbar() {
  const navbarHTML = `
    <header class="bg-white/80 backdrop-blur-lg sticky top-0 left-0 right-0 z-50 shadow-sm">
      <div class="container mx-auto px-6 py-3 flex justify-between items-center">
        <!-- Logo -->
        <a href="index.html" class="flex items-center space-x-3">
          <img src="assets/WhatsApp%20Image%202025-07-30%20at%2009.47.34_ce7ed10a%201.png" 
               alt="Logo Al-Fath"
               class="h-12 w-12 rounded-full transform hover:rotate-12 transition-transform duration-300">
          <span class="text-xl font-bold text-gray-800 hidden sm:block">KB TK ISLAM AL FATH</span>
          <span class="text-lg font-bold text-gray-800 sm:hidden">AL FATH</span>
        </a>

        <!-- Desktop Navigation -->
        <nav id="navbar" class="hidden md:flex space-x-8 items-center">
          <a href="index.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">Beranda</a>
          <a href="kb.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">KB</a>
          <a href="tk.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">TK</a>
          <a href="galeri.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">Galeri</a>
          <a href="berita.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">Berita</a>
          <a href="kontak.html" class="bg-orange-500 text-white px-4 py-2 rounded-[18px] hover:bg-orange-600 font-semibold transition-colors">Kontak</a>
        </nav>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-button" class="md:hidden text-orange-500 focus:outline-none">
          <svg id="menu-icon" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg id="close-icon" class="w-8 h-8 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t shadow-lg">
        <div class="container mx-auto px-6 py-4 flex flex-col space-y-3">
          <a href="index.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-orange-50">Beranda</a>
          <a href="kb.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-orange-50">KB</a>
          <a href="tk.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-orange-50">TK</a>
          <a href="galeri.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-orange-50">Galeri</a>
          <a href="berita.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-orange-50">Berita</a>
          <a href="kontak.html" class="bg-orange-500 text-white px-4 py-2 rounded-[18px] hover:bg-orange-600 font-semibold transition-colors text-center">Kontak</a>
        </div>
      </div>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);

  // Mobile menu toggle with animation
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      
      if (isHidden) {
        // Show menu
        mobileMenu.classList.remove("hidden");
        menuIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      } else {
        // Hide menu
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
          menuIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");
        }
      }
    });
  }

  // Highlight active link
  const currentPath = window.location.pathname;
  const currentFile = currentPath.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll("#navbar a, #mobile-menu a");

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");
    const linkFile = linkHref.split('/').pop();
    
    // Check if current page matches link
    if (linkFile === currentFile || 
        (currentFile === '' && linkFile === 'index.html') ||
        (currentPath.includes(linkFile.replace('.html', '')))) {
      
      // For desktop nav
      if (link.closest("#navbar")) {
        if (!link.classList.contains("bg-orange-500")) {
          link.classList.remove("text-gray-600");
          link.classList.add("text-orange-500", "font-bold");
        }
      }
      
      // For mobile nav
      if (link.closest("#mobile-menu")) {
        if (!link.classList.contains("bg-orange-500")) {
          link.classList.remove("text-gray-600");
          link.classList.add("text-orange-500", "bg-orange-50", "font-bold");
        }
      }
    }
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", createNavbar);