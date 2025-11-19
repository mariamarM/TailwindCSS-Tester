// Toggle de tema
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const html = document.documentElement;
      const isDark = html.classList.contains('dark');
      
      if (isDark) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        console.log('Cambiando a tema claro');
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        console.log('Cambiando a tema oscuro');
      }
    });
  }

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        console.log('Abriendo menú móvil');
      } else {
        mobileMenu.classList.add('hidden');
        console.log('Cerrando menú móvil');
      }
    });
  }

  // Cerrar menú móvil al hacer clic en un enlace
  const mobileLinks = mobileMenu?.querySelectorAll('a');
  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // Debug info
  console.log('Tema actual:', localStorage.getItem('theme'));
  console.log('Clase dark en html:', document.documentElement.classList.contains('dark'));
});