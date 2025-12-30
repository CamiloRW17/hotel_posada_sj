import './style.css'


// Esperamos a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      // Alternar la clase 'hidden' de Tailwind
      menu.classList.toggle('hidden');
    });
  } else {
    console.error("No se encontró el menú o el botón en el HTML");
  }

});
