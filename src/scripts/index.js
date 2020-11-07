/* MIS SCRIPT */

// Notificaciones
export function index() {
  // Notificaciones
  $(document).ready(function () {
    $(".show-toast").click(function () {
      $("#myToast").toast('show');
    });
  });

  // Transiciones al desplazarse
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}
