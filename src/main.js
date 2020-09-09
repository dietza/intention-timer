var newActivityCard = document.querySelector('.new-activity-card');
var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');

var currentActivity;

studyButton.addEventListener('click', handleStudyColor);
meditateButton.addEventListener('click', handleMeditateButton);
exerciseButton.addEventListener('click', handleExerciseButton);


function handleStudyColor() {
  toggleButtonColor(studyButton, 'study-green');
}

function handleMeditateButton() {
  toggleButtonColor(meditateButton, 'meditate-purple');
}

function handleExerciseButton() {
  toggleButtonColor(exerciseButton, 'exercise-red');
}

function toggleButtonColor(button, color) {
  button.classList.add(color);
}
