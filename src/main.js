var categoryButton = document.querySelectorAll('.category-button');
var startActivityButton = document.querySelector('.start-activity-button');
var intentionInput = document.querySelector('.intention-input');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');
var newActivityCard = document.querySelector('.new-activity-card');
var currentActivityCard = document.querySelector('.current-activity-card');
var timerTime = document.querySelector('.timer-time');
var startTimerButton = document.querySelector('.start-timer-button');

var currentActivity;

categoryButton[0].addEventListener('click', handleStudyButton);
categoryButton[1].addEventListener('click', handleMeditateButton);
categoryButton[2].addEventListener('click', handleExerciseButton);
startActivityButton.addEventListener('click', handleActivitySubmit);
startTimerButton.addEventListener('click', handleTimer)

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
  clearErrors();
  if (intentionInput.value === '') {
    showIntentionError();
  } else if (minutesInput.value === '' || secondsInput.value === '') {
    showTimeError();
  } else {
    convertCategory();
  }
}

function clearErrors() {
  for (var i = 0; i < newActivityCard.children.length; i++) {
    if (newActivityCard.children[i].className === 'error-message') {
      newActivityCard.children[i].remove();
      intentionInput.classList.remove('error-pink');
      minutesInput.classList.remove('error-pink');
      secondsInput.classList.remove('error-pink');
    }
  }
}

function showIntentionError() {
  var intentionError =
    `<div class='error-message'>
      <img src='./assets/warning.svg' class='error-icon'>
      <p>A description is required.</p>
    </div>`;
  document.querySelector('.intention-section').insertAdjacentHTML('afterend', intentionError);
  intentionInput.classList.add('error-pink');
}

function showTimeError() {
  var timeError =
    `<div class='error-message'>
      <img src='./assets/warning.svg' class='error-icon'>
      <p>A time value in both fields is required.</p>
    </div>`;
  document.querySelector('.time-section').insertAdjacentHTML('afterend', timeError);
  minutesInput.classList.add('error-pink');
  secondsInput.classList.add('error-pink');
}

function convertCategory() {
  var selectedActivity;
  var selectedColor;
  for (var i=0; i < categoryButton.length; i++) {
    if (categoryButton[i].children[0].src.includes('study-active')){
      selectedActivity = 'Study';
      selectedColor = '#B3FD78';
    } else if (categoryButton[i].children[0].src.includes('meditate-active')){
      selectedActivity = 'Meditate';
      selectedColor = '#C278FD';
    } else if (categoryButton[i].children[0].src.includes('exercise-active')){
      selectedActivity = 'Exercise';
      selectedColor = '#FD8078';
    }
  }
  createNewActivity(selectedActivity, selectedColor, intentionInput.value, minutesInput.value, secondsInput.value);
}

function createNewActivity(activity, color, intention, mins, secs) {
  currentActivity = new Activity (activity, color, intention, mins, secs);
  clearInputs();
  setTimer();
  switchView();
}

function clearInputs() {
  intentionInput.value = '';
  minutesInput.value = '';
  secondsInput.value = '';
}

function setTimer() {
  currentActivity.minutes = parseInt(currentActivity.minutes);
  currentActivity.seconds = parseInt(currentActivity.seconds);
  showAlert();
  displayTimer();
}

function displayTimer() {
  document.querySelector('.timer-description').innerText = currentActivity.description;
  startTimerButton.style.borderColor = currentActivity.categoryColor.valueOf();
  currentActivity.minutes = (currentActivity.minutes < 10) ? '0' + currentActivity.minutes : currentActivity.minutes;
  currentActivity.seconds = (currentActivity.seconds < 10) ? '0' + currentActivity.seconds : currentActivity.seconds;
  timerTime.innerText =
 `${currentActivity.minutes}:${currentActivity.seconds}`;
}

function showAlert() {
  if (currentActivity.seconds === -1) {
    alert('Stop Timer');
  }
}

function switchView() {
  newActivityCard.classList.add('hidden');
  currentActivityCard.classList.remove('hidden');
}

function handleTimer() {
  setInterval(updateTime, 1000);
}

function updateTime() {
  currentActivity.startTimer();
  setTimer();
}
