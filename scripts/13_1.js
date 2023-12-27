const ring = document.getElementById('ring');

const stopScroll = 500; // Позиция, на которой кольцо остановится
let ringPosition = null; // Переменная для сохранения позиции кольца

window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  // изменение положения кольца по вертикали
  let ringOffset = offset * 0.5; // настройте скорость движения кольца
  if (offset < stopScroll) {
    ring.style.top = 50 + ringOffset * 0.1 + '%'; // меняем положение кольца по вертикали
  } else {
    if (ringPosition === null) {
      ringPosition = parseFloat(getComputedStyle(ring).top);
    }
    ring.style.top = ringPosition + 'px'; // Фиксируем положение кольца
  }
});


// Функция для проверки, виден ли элемент на экране
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Функция для обработки события прокрутки
  function handleScroll() {
    var paragraphs = document.querySelectorAll('.par'); // Получаем все элементы с классом 'par'
    
    paragraphs.forEach(function(paragraph) {
      if (isElementInViewport(paragraph)) {
        paragraph.classList.add('visible'); // Добавляем класс 'visible', если элемент виден на экране
      }
    });
  }
  
  // Добавляем обработчик события прокрутки
  window.addEventListener('scroll', handleScroll);
  
  // Вызываем обработчик события прокрутки при загрузке страницы
  window.addEventListener('load', handleScroll);