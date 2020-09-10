var categoryButton = document.querySelectorAll('.category-button');

var currentActivity;

categoryButton[0].addEventListener('click', handleStudyColor);
categoryButton[1].addEventListener('click', handleMeditateButton);
categoryButton[2].addEventListener('click', handleExerciseButton);

function handleStudyColor() {
  addButtonColor(categoryButton[0], 'study-green', "./assets/study-active.svg");
}

function handleMeditateButton() {
  addButtonColor(categoryButton[1], 'meditate-purple', "./assets/meditate-active.svg");
}

function handleExerciseButton() {
  addButtonColor(categoryButton[2], 'exercise-red', "./assets/exercise-active.svg");
}

function addButtonColor(button, color, icon) {
  button.classList.add(color);
  button.children[1].classList.add(color);
  button.children[0].src = icon
  removeButtonColor();
}
