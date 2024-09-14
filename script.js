
document.addEventListener('DOMContentLoaded', function() {
  const perfectMan = document.getElementById('perfectMan');
  let isMoving = false;

  // Function to start the movement
  window.startAnimation = function() {
    if (!isMoving) {
      perfectMan.classList.add('move');
      isMoving = true;
    }
  }

  // Function to stop the movement
  window.stopAnimation = function() {
    if (isMoving) {
      perfectMan.classList.remove('move');
      isMoving = false;
    }
  }
});
