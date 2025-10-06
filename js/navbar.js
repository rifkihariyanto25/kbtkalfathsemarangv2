// Navbar Component for TK-KB ISLAM AL FATH
function createNavbar() {
  const isLocalhost8000 = window.location.port === '8000';
  const baseURL = isLocalhost8000 ? '/' : '/kbtkalfathsemarang/';

  const navbarHTML = `
    <header class="bg-white/80 backdrop-blur-lg sticky top-0 left-0 right-0 z-50 shadow-sm">
      <div class="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="${baseURL}" class="flex items-center space-x-3">
          <img src="${baseURL}assets/WhatsApp%20Image%202025-07-30%20at%2009.47.34_ce7ed10a%201.png" 
               alt="Logo Al-Fath"
               class="h-12 w-12 rounded-full transform hover:rotate-12 transition-transform duration-300">
          <span class="text-xl font-bold text-gray-800">KB TK ISLAM AL FATH</span>
        </a>

       <nav id="navbar" class="hidden md:flex space-x-8 items-center">
        <a href="index.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">Beranda</a>
        <a href="kb.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">KB</a>
        <a href="tk.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">TK</a>
        <a href="galeri.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">Galeri</a>
        <a href="berita.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">Berita</a>
        <a href="kontak.html" class="bg-orange-500 text-white px-4 py-2 rounded-[18px] hover:bg-orange-600 font-semibold transition-colors">Kontak</a>
      </nav>


        <button id="mobile-menu-button" class="md:hidden text-orange-500 focus:outline-none">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
        <a href="index.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">Beranda</a>
        <a href="kb.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">KB</a>
        <a href="tk.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">TK</a>
        <a href="galeri.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">Galeri</a>
        <a href="berita.html" class="text-gray-600 hover:text-orange-500 font-semibold transition-colors">Berita</a>
        <a href="kontak.html" class="bg-orange-500 text-white px-4 py-2 rounded-[18px] hover:bg-orange-600 font-semibold transition-colors">Kontak</a>
      </div>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Highlight active link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll("#navbar a");
  const mobileNavLinks = document.querySelectorAll("#mobile-menu a");

  const highlightLinks = (links) => {
    links.forEach(link => {
      const linkPath = link.getAttribute("href");
      if (currentPath.endsWith(linkPath.replace(baseURL, '')) || currentPath.endsWith(linkPath.replace(baseURL, '').replace('.php', '.html'))) {
        link.classList.remove("text-gray-600");
        link.classList.add("text-orange-500");
        if (link.closest("#mobile-menu")) link.classList.add("bg-orange-50");
      }
    });
  };

  highlightLinks(navLinks);
  highlightLinks(mobileNavLinks);
}

// Initialize
document.addEventListener("DOMContentLoaded", createNavbar);
