let currentIndex = 0;
    
function moveSlide(direction) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  const offset = -currentIndex * 100;

  document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}