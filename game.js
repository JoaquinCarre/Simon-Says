const buttonYellow = document.getElementById('button-yellow');
const buttonGreen = document.getElementById('button-green');
const buttonOrange = document.getElementById('button-orange');
const buttonRed = document.getElementById('button-red');
const buttonBlue = document.getElementById('button-blue');
const audioYellow = document.getElementById('audio-yellow');
const audioGreen = document.getElementById('audio-green');
const audioOrange = document.getElementById('audio-orange');
const audioRed = document.getElementById('audio-red');
const audioBlue = document.getElementById('audio-blue');
const levelDisplay = document.getElementById('level-display');
const messageDisplay = document.getElementById('message-display');

let gameSequence = [];
let playerProgress = 0;
let currentLevel = 1;

function generateSequence() {
  gameSequence = [];
  for (let i = 0; i < currentLevel; i++) {
    gameSequence.push(getRandomColor());
  }
  levelDisplay.textContent = `Level: ${currentLevel}`;
  playerProgress = 0;
  messageDisplay.textContent = '';
  showSequence();
}

function showSequence() {
  let i = 0;
  const interval = setInterval(() => {
    highlightButton(gameSequence[i]);
    i++;
    if (i >= gameSequence.length) {
      clearInterval(interval);
    }
  }, 500);
}

function highlightButton(color) {
  const button = document.getElementById(`button-${color}`);
  button.style.opacity = '0.5';
  setTimeout(() => {
    button.style.opacity = '1';
  }, 300);
  const audio = document.getElementById(`audio-${color}`)
  audio.play();
  setTimeout(() => {
    audio.pause();
  }, 300);
}

function getRandomColor() {
  const colors = ['red', 'yellow', 'green', 'blue', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function handleInput(color) {
  if (color !== gameSequence[playerProgress]) {
    alert(`¡Juego Finalizado! Llegaste hasta el nivel ${gameSequence.length}. Pulsa el botón Aceptar para volver a jugar`);
    /* alert('Game over! Press Accept button to try again.'); */
    gameSequence = [];
    currentLevel = 1;
  } else {
    playerProgress++;
    if (playerProgress >= gameSequence.length) {
      currentLevel++;
      generateSequence();
    }
  }
}
//boton amarillo
buttonYellow.addEventListener('click', () => handleInput('yellow'));
buttonYellow.addEventListener("mousedown", () => {
  buttonYellow.style.opacity = 0.7;
  audioYellow.play();
});
buttonYellow.addEventListener("mouseup", () => {
  buttonYellow.style.opacity = 1;
  setTimeout(() => {
    audioYellow.pause();
  }, 300);
});
//boton verde
buttonGreen.addEventListener('click', () => handleInput('green'));
buttonGreen.addEventListener("mousedown", () => {
  buttonGreen.style.opacity = 0.7;
  audioGreen.play();
});
buttonGreen.addEventListener("mouseup", () => {
  buttonGreen.style.opacity = 1;
  setTimeout(() => {
    audioGreen.pause();
  }, 300);
});
//boton naranja
buttonOrange.addEventListener('click', () => handleInput('orange'));
buttonOrange.addEventListener("mousedown", () => {
  buttonOrange.style.opacity = 0.7;
  audioOrange.play();
});
buttonOrange.addEventListener("mouseup", () => {
  buttonOrange.style.opacity = 1;
  setTimeout(() => {
    audioOrange.pause();
  }, 300);
});
//boton rojo
buttonRed.addEventListener('click', () => handleInput('red'));
buttonRed.addEventListener("mousedown", () => {
  buttonRed.style.opacity = 0.7;
  audioRed.play();
});
buttonRed.addEventListener("mouseup", () => {
  buttonRed.style.opacity = 1;
  setTimeout(() => {
    audioRed.pause();
  }, 300);
});
//boton azul
buttonBlue.addEventListener('click', () => handleInput('blue'));
buttonBlue.addEventListener("mousedown", () => {
  buttonBlue.style.opacity = 0.7;
  audioBlue.play();
});
buttonBlue.addEventListener("mouseup", () => {
  buttonBlue.style.opacity = 1;
  setTimeout(() => {
    audioBlue.pause();
  }, 300);
});

document.body.addEventListener('click', () => {
  if (gameSequence.length === 0) {
    generateSequence();
  }
});

generateSequence();