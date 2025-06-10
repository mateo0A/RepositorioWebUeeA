// Asegúrate de que el menú tenga position: fixed o absolute y un left inicial fuera de pantalla
let widt = window.innerWidth
let height = window.innerHeight
if (widt > 720) {
  anime({
    targets: '.nav-cont',
    translateX: '100px',
    duration: 1000, 
    easing: 'easeOutCubic'
  });
}
window.addEventListener('resize', () => {
  widt = window.innerWidth
  if (widt > 720) {
    anime({ 
      targets: '.nav-cont',
      translateX: '100px',
      duration: 1000,
      easing: 'easeOutCubic'
    });
  }
})
console.log(1);
