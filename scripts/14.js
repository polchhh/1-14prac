const hero = document.querySelector('.hero');
function activate(e) {
  if (e.target.matches('.hero') || !e.target.matches('img')) return;
  [hero.src, e.target.src] = [e.target.src, hero.src];
}

window.addEventListener('click',activate,false);


document.getElementById('contents').addEventListener('click', function(event) {
    var target = event.target;
    // Проверяем, является ли элемент, по которому произошло событие, ссылкой или находится ли он внутри ссылки
    while (target && target !== this) {
      if (target.tagName === 'A') {
        // При клике на ссылку задаем вопрос пользователю
        var confirmation = confirm('Вы уверены, что хотите покинуть страницу?');
        // Если пользователь нажал "Отмена", отменяем переход по ссылке
        if (!confirmation) {
          event.preventDefault();
        }
        return;
      }
      target = target.parentNode;
    }
  });




// Получаем список элементов
const list = document.getElementById('myList');
const items = list.getElementsByTagName('li');

// Добавляем обработчики событий для каждого элемента
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function(event) {
    if (!event.ctrlKey && !event.metaKey) {
      // Отменяем выделение для всех элементов
      for (let j = 0; j < items.length; j++) {
        items[j].classList.remove('selected');
      }
    }
    // Выделяем только текущий элемент
    this.classList.toggle('selected');
  });
}
// Предотвращаем стандартное выделение текста при клике
list.addEventListener('mousedown', function(event) {
  event.preventDefault();
});




let thumb = slider.querySelector('.thumb');
thumb.onmousedown = function(event) {
  event.preventDefault(); // предотвратить запуск выделения (действие браузера)

  let shiftX = event.clientX - thumb.getBoundingClientRect().left;
  // shiftY здесь не нужен, слайдер двигается только по горизонтали

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
};

thumb.ondragstart = function() {
  return false;
};







document.getElementById('load').onclick = function() {
  animate({
    duration: 600,
    timing: function(timeFraction) {
      return timeFraction;
    },
    draw: function(progress) {
      elem.style.width = progress * 100 + '%';
    }
  });
};

function animate({duration, draw, timing}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction)

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}








const text = "Text example for animation.";
const textContainer = document.getElementById('text-container');
let index = 0;

function animateText() {
    textContainer.textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0;
    }

    setTimeout(animateText, 100); // скорость анимации (в миллисекундах)
}

animateText(); // запуск анимации