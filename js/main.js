document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Menú móvil interactivo
  const menuBtn = document.getElementById('menu-btn');
  const navLista = document.getElementById('nav-lista');
  
  if (menuBtn && navLista) {
    menuBtn.addEventListener('click', () => {
      navLista.classList.toggle('abierto');
    });
  }

  // 2. Sistema de Pestañas (Tabs) interactivas
  const tabBotones = document.querySelectorAll('.tab-btn');
  const tabContenidos = document.querySelectorAll('.tab-contenido');

  tabBotones.forEach(boton => {
    boton.addEventListener('click', () => {
      // Quitar clase activo de todos
      tabBotones.forEach(b => b.classList.remove('activo'));
      tabContenidos.forEach(c => c.classList.remove('activo'));

      // Activar el seleccionado
      boton.classList.add('activo');
      const objetivo = document.getElementById(boton.dataset.target);
      if (objetivo) objetivo.classList.add('activo');
    });
  });

  // 3. WhatsApp Inteligente según la pestaña actual (Requisito RF-19 del plan)
  const btnWhatsapp = document.getElementById('btn-whatsapp');
  if (btnWhatsapp) {
    const telefono = "593983839908"; // Número principal de AmazonasTours
    const ruta = window.location.pathname;
    let mensaje = "Hola AmazonasTours, deseo información sobre sus servicios de transporte.";

    if (ruta.includes("contacto")) {
      mensaje = "Hola AmazonasTours, me comunico desde la sección de Contacto para solicitar una cotización.";
    } else if (ruta.includes("flota")) {
      mensaje = "Hola AmazonasTours, quisiera consultar disponibilidad de su flota (Sedán / Buseta).";
    } else if (ruta.includes("invierte")) {
      mensaje = "Hola AmazonasTours, me interesa información para afiliar mi vehículo con ustedes.";
    }

    btnWhatsapp.href = `https://wa.me{telefono}?text=${encodeURIComponent(mensaje)}`;
  }

  // 4. Interacción del Formulario de Contacto
  const formContacto = document.getElementById('form-contacto');
  const alertaExito = document.getElementById('alerta-exito');

  if (formContacto) {
    formContacto.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita recargar la página
      
      // Mostrar mensaje de éxito animado
      alertaExito.style.display = 'block';
      formContacto.reset();

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        alertaExito.style.display = 'none';
      }, 5000);
    });
  }
});
