const aceptarBtns = document.querySelectorAll('.btn-aceptar');
const rechazarBtns = document.querySelectorAll('.btn-rechazar');

aceptarBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const nombre = btn.closest('.solicitud').querySelector('.nombre').textContent;
    alert(`Has aceptado la solicitud de ${nombre}`);
  });
});

rechazarBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const nombre = btn.closest('.solicitud').querySelector('.nombre').textContent;
    alert(`Has rechazado la solicitud de ${nombre}`);
  });
});
