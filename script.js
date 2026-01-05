// Todos los botones abren en nueva pestaña
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(btn.href, '_blank');
  });
});
