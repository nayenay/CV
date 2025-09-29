function mostrarPestana(id) {
    const secciones = document.querySelectorAll('.pestana');
    secciones.forEach(sec => sec.classList.remove('activa'));
  
    const activa = document.getElementById(id);
    if (activa) activa.classList.add('activa');
  }
  