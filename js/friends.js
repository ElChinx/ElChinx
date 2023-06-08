
const scrollContainer = document.getElementById('fs');
const scrollDistance = 500; // Distancia de desplazamiento en píxeles

document.getElementById('r').addEventListener('click', function() {
  scrollContainer.scrollBy({
    top: 0,
    left: scrollDistance,
    behavior: 'smooth'
  });
});

document.getElementById('l').addEventListener('click', function() {
  scrollContainer.scrollBy({
    top: 0,
    left: -scrollDistance,
    behavior: 'smooth'
  });
});