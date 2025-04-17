const shopButton = document.getElementById('shopButton');

shopButton.addEventListener('click', (e) => {
  setTimeout(() => {
    window.location.href = shopButton.href;
  }, 100);
});

