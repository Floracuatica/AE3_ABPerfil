console.log("Script cargado ❤️");

document.querySelectorAll('.btn-aceptar').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Aceptaste una solicitud');
  });
});

document.querySelectorAll('.btn-rechazar').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Rechazaste una solicitud');
  });
});
