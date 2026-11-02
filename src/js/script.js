document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("voosSlider");
  if (!slider) return;
  
  const cards = slider.children;
  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 24; // Largura do card + espaçamento (gap)
  
  function autoSlide() {
    currentIndex++;
    // Se chegar ao fim, volta para o primeiro card
    if (currentIndex > cards.length - 2) {
      currentIndex = 0;
    }
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  // Configura o temporizador para rodar a cada 5 segundos (5000 milissegundos)
  setInterval(autoSlide, 5000);
});