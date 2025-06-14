 // JavaScript pour le bouton de menu mobile
 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 const navbarMenu = document.querySelector('.navbar-menu');
 
 if (mobileMenuBtn) {
     mobileMenuBtn.addEventListener('click', () => {
         navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
     });
 }