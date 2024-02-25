window.addEventListener("scroll", function () {
  const navLinks = this.document.getElementsByClassName("nav-link");
  const nav = this.document.getElementById("nav");
  let scrollPosition = window.scrollY;

  // Verifica si la posición de desplazamiento es igual o superior a 100vh
  if (scrollPosition >= 0.9 * window.innerHeight) {
    nav.classList.add("nav-background");
    // Itera sobre la colección de elementos y agrega la clase a cada uno
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.add("nav-link-after");
    }
  } else {
    nav.classList.remove("nav-background");
    // Itera sobre la colección de elementos y quita la clase de cada uno
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("nav-link-after");
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[type="radio"]');

  let currentIndex = 0;
  let intervalId;

  function changeSlide(index) {
    radios[index].checked = true;
  }

  function getNextSlideIndex() {
    // Calcula el siguiente índice
    const nextIndex = (currentIndex + 1) % radios.length;

    // Si el cambio fue forzado por el usuario, usa el índice actual
    return radios[nextIndex].checked ? currentIndex : nextIndex;
  }

  function nextSlide() {
    currentIndex = getNextSlideIndex();
    changeSlide(currentIndex);
  }

  function startInterval() {
    intervalId = setInterval(nextSlide, 5000);
  }

  function resetInterval() {
    clearInterval(intervalId);
    startInterval();
  }

  // Inicia el temporizador al cargar la página
  startInterval();

  // Agrega un manejador de clic para cada radio
  radios.forEach((radio, index) => {
    radio.addEventListener("click", function () {
      currentIndex = index;
      resetInterval();
    });
  });
});
// // JavaScript para clonar las imágenes y lograr el efecto de carrusel
// document.addEventListener("DOMContentLoaded", function () {
//   const track = document.getElementById("carouselLogos");
//   const images = track.getElementsByClassName("work-with-logo");

//   // Clonar las imágenes para crear un bucle infinito
//   for (let i = 0; i < images.length; i++) {
//     track.appendChild(images[i].cloneNode(true));
//   }
// });
