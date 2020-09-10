var categoryButton = document.querySelectorAll('.category-button');

var currentActivity;

categoryButton[0].addEventListener('click', handleStudyColor);
categoryButton[1].addEventListener('click', handleMeditateButton);
categoryButton[2].addEventListener('click', handleExerciseButton);

function handleStudyColor() {
  resetButtonColor(categoryButton[0], 'study-green', "./assets/study-active.svg");
}

function handleMeditateButton() {
  resetButtonColor(categoryButton[1], 'meditate-purple', "./assets/meditate-active.svg");
}

function handleExerciseButton() {
  resetButtonColor(categoryButton[2], 'exercise-red', "./assets/exercise-active.svg");
}

function resetButtonColor(button, color, icon) {
  categoryButton[0].classList.remove('study-green');
  categoryButton[0].children[1].classList.remove('study-green');
  categoryButton[0].children[0].src = './assets/study.svg';
  categoryButton[1].classList.remove('meditate-purple');
  categoryButton[1].children[1].classList.remove('meditate-purple');
  categoryButton[1].children[0].src = './assets/meditate.svg';
  categoryButton[2].classList.remove('exercise-red');
  categoryButton[2].children[1].classList.remove('exercise-red');
  categoryButton[2].children[0].src = './assets/exercise.svg';
  addButtonColor(button, color, icon)
}


function addButtonColor(selectedButton, selectedColor, selectedIcon) {
  selectedButton.classList.add(selectedColor);
  selectedButton.children[1].classList.add(selectedColor);
  selectedButton.children[0].src = selectedIcon;
}
