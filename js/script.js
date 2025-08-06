console.log("Script cargado ❤️");

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('¡Click detectado!');
  });
});
