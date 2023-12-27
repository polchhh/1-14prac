// Функция для создания нового уведомления с кнопкой закрытия
function createNotification() {
    const notificationsElement = document.getElementById('notifications');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = 'Новое уведомление';
  
    const closeButton = document.createElement('button');
    closeButton.classList.add('closeButton');
    closeButton.textContent = '×'; // Используем символ "×" для кнопки закрытия
    closeButton.addEventListener('click', function () {
      notificationsElement.removeChild(notification);
    });
  
    notification.appendChild(closeButton);
    notificationsElement.appendChild(notification);
  }
  
  // Добавление обработчика события на иконку звонка
  document.getElementById('bellIcon').addEventListener('click', function () {
    let notificationInterval = setInterval(createNotification, 3000);
  
    function stopNotificationsForTenSeconds() {
      clearInterval(notificationInterval);
      document.getElementById('stopButton').disabled = true;
      document.getElementById('stopButton').style.color = 'red';
  
      setTimeout(() => {
        notificationInterval = setInterval(createNotification, 3000);
        document.getElementById('stopButton').disabled = false;
        document.getElementById('stopButton').style.color = 'black';
      }, 10000);
    }
  
    document.getElementById('stopButton').addEventListener('click', stopNotificationsForTenSeconds);
  });
  
  function isPageEnd() {
    const content = document.getElementById('content');
    const contentBottom = content.offsetTop + content.offsetHeight;
    return window.scrollY + window.innerHeight >= contentBottom;
  }
  
  function loadAdditionalContent() {
    const additionalContent = document.getElementById('additional-content');
    additionalContent.style.display = 'block';
  }
  
  function handleScroll() {
    if (isPageEnd()) {
      loadAdditionalContent();
      window.removeEventListener('scroll', handleScroll);
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  