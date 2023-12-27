document.addEventListener('DOMContentLoaded', function() {
    const centeredImg = document.getElementById('centeredImg');
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box1');
    document.body.appendChild(messageBox);
  
    centeredImg.onload = function() {
      positionImage();
    };
  
    function positionImage() {
      const imgWidth = centeredImg.width;
      const imgHeight = centeredImg.height;
  
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
  
      const leftOffset = (windowWidth - imgWidth) / 2;
      const topOffset = (windowHeight - imgHeight) / 2;
  
      centeredImg.style.left = leftOffset + 'px';
      centeredImg.style.top = topOffset + 'px';
    }
  
    window.addEventListener('resize', positionImage);
  
    document.addEventListener('click', function(event) {
      const clickX = event.clientX;
      const clickY = event.clientY;
  
      messageBox.innerText = `Clicked at (${clickX}, ${clickY})`;
      messageBox.style.top = `${clickY}px`;
      messageBox.style.left = `${clickX}px`;
      messageBox.style.display = 'block';
  
      // Hide message after 2 seconds
      setTimeout(() => {
        messageBox.style.display = 'none';
      }, 6000);
    });
});