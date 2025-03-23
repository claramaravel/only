// Função para abrir o link de pagamento
function openPayment() {
  // Substitua o link abaixo pelo seu link real de pagamento
  window.location.href = "https://go.tribopay.com.br/9bphewugrc";
}

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) {
      currentSlide = 0;
  } else if (index < 0) {
      currentSlide = slides.length - 1;
  } else {
      currentSlide = index;
  }

  slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === currentSlide) {
          slide.classList.add('active');
      }
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Inicializa o carrossel com a primeira imagem visível
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});