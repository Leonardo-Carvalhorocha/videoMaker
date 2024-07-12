export default document.addEventListener('DOMContentLoaded', () => {
  var glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.dots',
  });

  // Função para avançar automaticamente e de forma infinita
  function autoScroll() {
    if (glider.slide + 1 >= glider.slides.length) {
      glider.scrollItem(0); // Volta ao primeiro slide
    } else {
      glider.scrollItem(glider.slide + 1);
    }
  }

  // Configurar intervalo de 3 segundos (3000 milissegundos)
  setInterval(autoScroll, 10000);
});
