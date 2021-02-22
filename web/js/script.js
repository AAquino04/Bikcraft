if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote", // Nome do atributo data-slide
    time: 5000 // Tempo de transição dos slides
  });
  
  new SimpleSlide({
    slide: "portfolio", // Nome do atributo data-slide
    time: 5000, // Tempo de transição dos slides
    nav: true
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}