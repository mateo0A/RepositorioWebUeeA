document.querySelectorAll('.cardCnt').forEach((el, i) => {
  anime({
    targets: el,
    opacity: 1,
    top: 0,
    duration: 900,
    delay: i * 500
  });
});