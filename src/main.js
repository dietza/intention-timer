var categoryButton = document.querySelectorAll('.category-button');
var startActivityButton = document.querySelector('.start-activity-button');
var intentionInput = document.querySelector('.intention-input');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');

var currentActivity;

categoryButton[0].addEventListener('click', handleStudyButton);
categoryButton[1].addEventListener('click', handleMeditateButton);
categoryButton[2].addEventListener('click', handleExerciseButton);
startActivityButton.addEventListener('click', handleActivitySubmit);

function handleStudyButton() {
  resetButtonColor(categoryButton[0], 'study-green', "./assets/study-active.svg");
  enableInputs();
}

function handleMeditateButton() {
  resetButtonColor(categoryButton[1], 'meditate-purple', "./assets/meditate-active.svg");
  enableInputs();
}

function handleExerciseButton() {
  resetButtonColor(categoryButton[2], 'exercise-red', "./assets/exercise-active.svg");
  enableInputs();
}

function enableInputs() {
  intentionInput.disabled = false;
  minutesInput.disabled = false;
  secondsInput.disabled = false;
}

function resetButtonColor(button, color, icon) {
  for (var i=0; i < categoryButton.length; i++) {
    var defaultImages = ['./assets/study.svg', './assets/meditate.svg', './assets/exercise.svg'];
    categoryButton[i].className = '';
    categoryButton[i].classList.add('category-button');
    categoryButton[i].children[1].className = '';
    categoryButton[i].children[0].src = defaultImages[i];
  }

  addButtonColor(button, color, icon)
}


function addButtonColor(selectedButton, selectedColor, selectedIcon) {
  selectedButton.classList.add(selectedColor);
  selectedButton.children[1].classList.add(selectedColor);
  selectedButton.children[0].src = selectedIcon;
}

function handleActivitySubmit() {
  if (intentionInput.value !== '' && (minutesInput.value !== '' && secondsInput.value !== '')){

  }
}

function removeDisabled() {
  console.log("hello");
}
