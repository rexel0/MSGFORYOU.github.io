let buttonPressed = false;

function changeContent() {
  const buttonText = document.getElementById('buttonText');
  const buttonImage = document.getElementById('buttonImage');

  if (buttonPressed) {
    buttonText.textContent = 'Press me!';
    buttonImage.src = 'image1.jpg';
  } else {
    buttonText.textContent = 'Keep pressing...';
    buttonImage.src = 'image2.jpg';
  }

  buttonPressed = !buttonPressed;
}

function pressButton() {
  const button = document.getElementById('interactiveButton');
  button.style.backgroundColor = '#2980b9';
  button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
}

function releaseButton() {
  const button = document.getElementById('interactiveButton');
  button.style.backgroundColor = '#3498db';
  button.style.boxShadow = 'none';
  buttonPressed = false;
  changeContent();
}
