var newActivityCard = document.querySelector('.new-activity-card');

var currentActivity;

newActivityCard.addEventListener('click', selectActivity);

function selectActivity(event) {
  if (event.target.closest('.study-button')) {
    event.target.closest('.study-button').classList.add('study-green');
  } else if (event.target.closest('.meditate-button')) {
  } else if (event.target.closest('.exercise-button')) {
  }
}
